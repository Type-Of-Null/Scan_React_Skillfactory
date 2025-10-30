Scan_React_Skillfactory
Проект представляет собой веб-приложение на React, реализованное в рамках обучения в SkillFactory. Приложение демонстрирует функциональность поиска публикаций о компаниях по ИНН, а также предлагает пользовательские тарифы и систему авторизации.

🚀 Основные Функции

1. Главная страница
   Промо-секция.
   Слайдер с преимуществами сервиса.
   Карточки тарифов с описанием и ценой.
2. Авторизация и Аутентификация
   Система входа/регистрации через /auth.
   Хранение токена и данных пользователя в сторе (authStore).
   Защита маршрутов с проверкой авторизации.
3. Тарифы
   Три уровня тарифов: Beginner, Pro, Business.
   Отображение "Текущий тариф" для активного плана.
   Адаптивная верстка под мобильные устройства.
4. Адаптивный дизайн
   Бургер-меню для мобильных устройств.
   Резиновая верстка с использованием Tailwind CSS.

🧰 Технологии
React v.19: Для создания компонентной структуры.
MobX: Управление состоянием (stores: authStore, companyStore).
React Router v6: Навигация между страницами.
Tailwind CSS: Стилизация с адаптивным дизайном.
Axios: HTTP-запросы к API.
Responsive Design: Поддержка мобильных и десктопных устройств.

📁 Структура Проекта
src/
├── components/ # Общие компоненты (Header, Footer, Loader)
├── mainPage/ # Главная страница (Promo, Slider, OurTarrifs)
├── stores/ # MobX сторы (authStore, companyStore)
├── config/ # Конфигурационные файлы (tarrifs.js)
├── api/ # Настройки Axios
├── assets/ # Изображения и SVG
└── App.jsx # Корневой компонент

🛠️ Установка и Запуск
Клонирование репозитория:

bash
git clone https://github.com/SDVNull/Scan_React_Skillfactory.git
cd Scan_React_Skillfactory

Установка зависимостей:
bash
npm install

Запуск:
bash
npm run dev

📝 Важные Конфигурации
Tariffs Configuration:
Файл config/tarrifs.js определяет текущий активный тариф:

js
export const tarrifs = {
"begginer": true,
"pro": false,
"business": false
};

MobX Stores:
authStore: Управление авторизацией, токеном и данными пользователя.
companyStore: Хранение информации о компаниях и лимитах.
searchStore: Хранение информации о поисковых запросах

📞 Контакты
Если у вас есть вопросы или предложения, напишите мне:
📧 Email: dimasafronov55@mail.ru
🔗 GitHub: @SDVNull
