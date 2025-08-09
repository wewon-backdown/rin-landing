import React, { useState } from "react";
import "./App.css";
import VideoIntro from "./components/VideoIntro";
import PhoneInterface from "./components/PhoneInterface";
import { ctaButtons } from "./mock";
import { Heart, Download, Play, Star } from "lucide-react";

function App() {
  const [showPhone, setShowPhone] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);

  const handleVideoPause = () => {
    setShowPhone(true);
    setTimeout(() => {
      setVideoFinished(true);
    }, 500);
  };

  const handlePhoneClose = () => {
    setShowPhone(false);
    setShowMainPage(true);
  };

  const handleCTAClick = (action) => {
    switch (action) {
      case "play":
        alert("Перенаправление в игру...");
        break;
      case "download":
        alert("Скачивание демо версии...");
        break;
      case "wishlist":
        alert("Добавлено в вишлист!");
        break;
      default:
        break;
    }
  };

  const getButtonIcon = (type) => {
    switch (type) {
      case "primary":
        return <Play size={20} />;
      case "secondary":
        return <Download size={20} />;
      case "outline":
        return <Heart size={20} />;
      default:
        return null;
    }
  };

  const getButtonStyles = (type) => {
    switch (type) {
      case "primary":
        return "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105";
      case "secondary":
        return "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105";
      case "outline":
        return "border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white bg-white";
      default:
        return "";
    }
  };

  return (
    <div className="App min-h-screen">
      {!videoFinished && <VideoIntro onVideoPause={handleVideoPause} />}

      {showMainPage && (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative">
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
            <div className="absolute top-20 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
              <div className="mb-8">
                <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  Добро пожаловать в
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Milky Dreams
                  </span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Погрузитесь в мир интерактивных историй и романтических
                  приключений. Общайтесь с персонажами, принимайте решения и
                  создавайте уникальные истории любви.
                </p>
              </div>

              <div className="mb-12">
                <button
                  onClick={() => setShowPhone(true)}
                  className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>📱</span>
                    <span>Открыть чат снова</span>
                  </span>
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {ctaButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => handleCTAClick(button.action)}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${getButtonStyles(
                      button.type
                    )}`}
                  >
                    {getButtonIcon(button.type)}
                    <span>{button.text}</span>
                  </button>
                ))}
              </div>

              <div className="mt-16 mb-16 grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Интерактивные диалоги
                  </h3>
                  <p className="text-gray-600">
                    Выбирайте реплики и влияйте на развитие истории
                  </p>
                </div>
                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Уникальные персонажи
                  </h3>
                  <p className="text-gray-600">
                    10 героинь с разными характерами и историями
                  </p>
                </div>
                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">📖</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Разветвленный сюжет
                  </h3>
                  <p className="text-gray-600">
                    Множество концовок в зависимости от ваших выборов
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className="relative z-10 bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="text-yellow-400" size={24} />
                <h3 className="text-2xl font-bold">Milky Dreams</h3>
                <Star className="text-yellow-400" size={24} />
              </div>
              <p className="text-purple-200 mb-4">
                Создавайте незабываемые истории любви
              </p>
              <div className="flex justify-center space-x-6 text-sm text-purple-200">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  О проекте
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Поддержка
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Контакты
                </a>
              </div>
              <p className="text-xs text-purple-300 mt-4">
                © 2025 Milky Dreams. Все права защищены.
              </p>
            </div>
          </footer>
        </div>
      )}

      <PhoneInterface isVisible={showPhone} onClose={handlePhoneClose} />
    </div>
  );
}

export default App;
