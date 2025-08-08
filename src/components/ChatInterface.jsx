import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, Smile, Paperclip } from "lucide-react";
import * as mock from "@/mock"

const ChatInterface = ({ heroine, onBack }) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [showChoices, setShowChoices] = useState(false);
  const [currentChoices, setCurrentChoices] = useState([]);
  const messagesEndRef = useRef(null);

  const { dialogues } = mock;
  const heroineDialogues = dialogues[heroine.id] || [];

  useEffect(() => {
    if (heroineDialogues.length > 0) {
      const firstMessage = heroineDialogues[0];
      if (firstMessage.type === "incoming") {
        setMessages([firstMessage]);
        setCurrentDialogueIndex(1);

        setTimeout(() => {
          const nextDialogue = heroineDialogues[1];
          if (nextDialogue && nextDialogue.type === "choice") {
            setCurrentChoices(nextDialogue.options);
            setShowChoices(true);
          }
        }, 1500);
      }
    }
  }, [heroine.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChoiceSelect = (choice) => {
    const userMessage = {
      id: Date.now(),
      type: "outgoing",
      text: choice.text,
      timestamp: new Date().toLocaleTimeString("ru", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowChoices(false);

    setTimeout(() => {
      const responseMessage = heroineDialogues.find(
        (d) => d.id === choice.next
      );
      if (responseMessage) {
        setMessages((prev) => [...prev, responseMessage]);

        setTimeout(() => {
          const nextChoices = {
            id: Date.now(),
            type: "choice",
            options: [
              { id: "a", text: "Это было интересно!", next: null },
              { id: "b", text: "Расскажи больше о себе", next: null },
              { id: "c", text: "Можем встретимся?", next: null },
            ],
          };
          setCurrentChoices(nextChoices.options);
          setShowChoices(true);
        }, 2000);
      }
    }, 1000);
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="flex items-center p-4 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200">
        <button
          onClick={onBack}
          className="mr-3 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <div className="flex items-center flex-1">
          <img
            src={heroine.avatar}
            alt={heroine.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-purple-200"
          />
          <div className="ml-3">
            <h3 className="font-semibold text-gray-800">{heroine.name}</h3>
            <p className="text-sm text-green-600">{heroine.status}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={message.id || index}
            className={`flex ${
              message.type === "outgoing" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="flex items-end space-x-2 max-w-xs">
              {message.type === "incoming" && (
                <img
                  src={heroine.avatar}
                  alt={heroine.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs break-words ${
                  message.type === "outgoing"
                    ? "bg-purple-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}

        {showChoices && currentChoices.length > 0 && (
          <div className="space-y-2 py-4">
            <p className="text-sm text-gray-600 text-center">Выберите ответ:</p>
            {currentChoices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleChoiceSelect(choice)}
                className="w-full p-3 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 border border-purple-200 rounded-xl text-left text-sm text-gray-700 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white bg-opacity-90 backdrop-blur-md border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
            <Paperclip size={20} className="text-gray-500" />
          </button>
          <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-2 flex items-center">
            <input
              type="text"
              placeholder="Сообщение..."
              className="flex-1 bg-transparent outline-none text-sm"
              disabled={showChoices}
            />
            <button className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200">
              <Smile size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
        {showChoices && (
          <p className="text-xs text-purple-600 text-center mt-2">
            Выберите один из вариантов выше
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
