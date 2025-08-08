export const heroines = [
  {
    id: 1,
    name: "Itsuru",
    avatar: "Itsuru.png",
    personality: "Застенчивая и милая",
    status: "онлайн",
    lastSeen: "сейчас"
  },
  {
    id: 2,
    name: "Yukie",
    avatar: "Yukie.png",
    personality: "Дерзкая и независимая",
    status: "онлайн",
    lastSeen: "2 мин назад"
  },
  {
    id: 3,
    name: "Hibiki",
    avatar: "Hibiki.png",
    personality: "Элегантная и загадочная",
    status: "не в сети",
    lastSeen: "15 мин назад"
  },
  {
    id: 4,
    name: "Teneta",
    avatar: "Teneta.png",
    personality: "Энергичная и веселая",
    status: "онлайн",
    lastSeen: "сейчас"
  },
  {
    id: 5,
    name: "Rin",
    avatar: "Rin.png",
    personality: "Умная и спокойная",
    status: "онлайн",
    lastSeen: "5 мин назад"
  }
];

export const dialogues = {
  1: [
    {
      id: 1,
      type: "incoming",
      text: "П-привет... Как дела?",
      timestamp: "14:30"
    },
    {
      id: 2,
      type: "choice",
      options: [
        { id: "a", text: "Привет! Отлично, как у тебя?", next: 3 },
        { id: "b", text: "Хорошо, скучаю по тебе", next: 4 },
        { id: "c", text: "Нормально, что делаешь?", next: 5 }
      ]
    },
    {
      id: 3,
      type: "incoming", 
      text: "У меня хорошо! *краснеет* Сегодня такая красивая погода...",
      timestamp: "14:32"
    },
    {
      id: 4,
      type: "incoming",
      text: "Я... я тоже по тебе скучаю... *прячет лицо*",
      timestamp: "14:32"
    },
    {
      id: 5,
      type: "incoming",
      text: "Читаю книгу в парке... Хочешь присоединиться?",
      timestamp: "14:32"
    }
  ],
  2: [
    {
      id: 1,
      type: "incoming",
      text: "Эй! Наконец-то написал 😏",
      timestamp: "14:28"
    },
    {
      id: 2,
      type: "choice",
      options: [
        { id: "a", text: "Соскучился по твоим сообщениям", next: 3 },
        { id: "b", text: "Был занят, прости!", next: 4 },
        { id: "c", text: "А ты что, ждала меня? 😉", next: 5 }
      ]
    },
    {
      id: 3,
      type: "incoming",
      text: "Хах, конечно скучал! Я же неотразима 💅",
      timestamp: "14:30"
    },
    {
      id: 4,
      type: "incoming", 
      text: "Ну ладно, прощаю... НА ЭТОТ РАЗ! 😤",
      timestamp: "14:30"
    },
    {
      id: 5,
      type: "incoming",
      text: "Может быть... А может и нет 🤭 Угадай!",
      timestamp: "14:30"
    }
  ],
  3: [
    {
      id: 1,
      type: "incoming",
      text: "Добрый день. Как прошёл твой день?",
      timestamp: "14:15"
    },
    {
      id: 2,
      type: "choice",
      options: [
        { id: "a", text: "Хорошо, думал о тебе", next: 3 },
        { id: "b", text: "Обычно, работал", next: 4 },
        { id: "c", text: "Отлично! А твой?", next: 5 }
      ]
    },
    {
      id: 3,
      type: "incoming",
      text: "Это... очень мило с твоей стороны. *улыбается*",
      timestamp: "14:17"
    },
    {
      id: 4,
      type: "incoming",
      text: "Понимаю. Важно быть ответственным.",
      timestamp: "14:17"
    },
    {
      id: 5,
      type: "incoming", 
      text: "Провела время в саду. Цветы сегодня особенно красивые.",
      timestamp: "14:17"
    }
  ],
  4: [ 
    {
      id: 1,
      type: "incoming",
      text: "ПРИВЕЕЕТ! 🎉 Как дела, солнышко?",
      timestamp: "14:32"
    },
    {
      id: 2,
      type: "choice",
      options: [
        { id: "a", text: "Привет! Дела супер! 😄", next: 3 },
        { id: "b", text: "Хорошо, ты такая энергичная!", next: 4 },
        { id: "c", text: "Нормально, что нового?", next: 5 }
      ]
    },
    {
      id: 3,
      type: "incoming",
      text: "УРА! Я так рада! Давай что-нибудь веселое придумаем! ✨",
      timestamp: "14:33"
    },
    {
      id: 4,
      type: "incoming",
      text: "Хехе, это моя суперсила! ⚡ Заряжаю всех позитивом!",
      timestamp: "14:33"
    },
    {
      id: 5,
      type: "incoming",
      text: "Ой, столько всего! Расскажу при встрече! 🌸",
      timestamp: "14:33"
    }
  ],
  5: [ 
    {
      id: 1,
      type: "incoming",
      text: "Привет. Читал что-нибудь интересное в последнее время?",
      timestamp: "14:25"
    },
    {
      id: 2,
      type: "choice",
      options: [
        { id: "a", text: "Да, научную фантастику", next: 3 },
        { id: "b", text: "Нет, посоветуешь что-то?", next: 4 },
        { id: "c", text: "А ты что читаешь?", next: 5 }
      ]
    },
    {
      id: 3,
      type: "incoming",
      text: "Отличный выбор. Научная фантастика расширяет границы воображения.",
      timestamp: "14:27"
    },
    {
      id: 4,
      type: "incoming",
      text: "Конечно. Рекомендую 'Джокер покупает 1050ti'. Философски глубокое произведение.",
      timestamp: "14:27"
    },
    {
      id: 5,
      type: "incoming",
      text: "Сейчас изучаю труды по квантовой физике. Довольно увлекательно.",
      timestamp: "14:27"
    }
  ]
};

export const ctaButtons = [
  {
    type: "primary",
    text: "Играть сейчас",
    action: "play"
  },
  {
    type: "secondary", 
    text: "Скачать демо",
    action: "download"
  },
  {
    type: "outline",
    text: "В вишлист",
    action: "wishlist"
  }
];