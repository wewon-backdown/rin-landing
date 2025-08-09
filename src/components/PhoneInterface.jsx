import React, { useState } from "react";
import { MessageCircle, Heart, Home, User } from "lucide-react";
import ChatInterface from "./ChatInterface";
import * as mock from "@/mock";

const PhoneInterface = ({ isVisible, onClose }) => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [isImageBg, setIsImageBg] = useState(true);
  const [selectedHeroine, setSelectedHeroine] = useState(null);

  const handleChatSelect = (heroine) => {
    setSelectedHeroine(heroine);
    setCurrentScreen("chat");
  };

  const onClosePhone = () => {
    setIsImageBg(false);
    onClose && onClose();
  };

  const goBack = () => {
    if (currentScreen === "chat") {
      setCurrentScreen("home");
      setSelectedHeroine(null);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${
        isVisible && !isImageBg
          ? "bg-opacity-50 backdrop-blur-sm"
          : "bg-opacity-0 backdrop-blur-none"
      }`}
    >
      <div
        className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${
          isImageBg ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/intro.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        aria-hidden="true"
      />
      <div
        className={`relative z-10 transform transition-all duration-700 ease-in-out ${
          isVisible
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-75 translate-y-8 opacity-0"
        }`}
      >
        <div className="w-80 h-[680px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
          <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-[2.5rem] overflow-hidden relative">
            <div className="h-8 pointer-events-none select-none bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-between px-6 text-white text-sm font-medium">
              <span>
                {new Date().toLocaleTimeString("ru", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span>📶 🔋 100%</span>
            </div>

            <div className="flex-1 h-[calc(100%-8rem)]">
              {currentScreen === "home" && (
                <HomeScreen onChatSelect={handleChatSelect} />
              )}
              {currentScreen === "chat" && selectedHeroine && (
                <ChatInterface heroine={selectedHeroine} onBack={goBack} />
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-white bg-opacity-95 backdrop-blur-md border-t border-gray-200">
              <div className="flex items-center justify-around h-full px-4">
                <button
                  className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 ${
                    currentScreen === "home" || currentScreen === "init"
                      ? "text-purple-600 bg-purple-100"
                      : "text-gray-600 hover:text-purple-500"
                  }`}
                  onClick={() => setCurrentScreen("home")}
                >
                  <Home size={24} />
                  <span className="text-xs mt-1">Главная</span>
                </button>
                <button className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-600 hover:text-purple-500 transition-all duration-200">
                  <MessageCircle size={24} />
                  <span className="text-xs mt-1">Чаты</span>
                </button>
                <button className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-600 hover:text-purple-500 transition-all duration-200">
                  <Heart size={24} />
                  <span className="text-xs mt-1">Избранное</span>
                </button>
                <button className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-600 hover:text-purple-500 transition-all duration-200">
                  <User size={24} />
                  <span className="text-xs mt-1">Профиль</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onClosePhone}
          className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const HomeScreen = ({ onChatSelect }) => {
  const { heroines } = mock;

  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 overflow-y-auto">
      <div className="p-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Milky Dreams</h1>
        <p className="text-gray-600">Выберите персонажа для общения</p>
      </div>

      <div className="px-4">
        {heroines.map((heroine) => (
          <button
            key={heroine.id}
            onClick={() => onChatSelect(heroine)}
            className="w-full mb-3 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-gray-100"
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={heroine.avatar}
                  alt={heroine.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                    heroine.status === "онлайн" ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></div>
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">
                    {heroine.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {heroine.lastSeen}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {heroine.personality}
                </p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      heroine.status === "онлайн"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {heroine.status}
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhoneInterface;
