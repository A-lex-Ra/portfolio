/**
 * Project details with markdown content for full project overview
 * Structure: id -> { en: markdown, ru: markdown }
 */

export const projectDetails: Record<string, { en: string; ru: string }> = {
'5': {
  en: `
## Overview
LLM Orchestrator is a backend service for orchestrating complex workflows across multiple large language models. It routes inference requests between heterogeneous backends (local GPU inference and cloud APIs) based on explicit policies such as latency, cost, and reliability.

## Features
- **Multi-LLM Routing**: Dynamically routes requests to different LLM providers
- **Policy-Based Decisions**: Chooses models based on cost, latency, or fallback rules
- **Failure Isolation**: Graceful degradation when one backend is unavailable
- **Workflow Composition**: Supports chained and conditional LLM calls
- **Production-Ready**: Designed for real-world AI systems with monitoring in mind

## Tech Stack
- **Backend**: Python, FastAPI
- **AI Models**: Local LLMs, OpenAI-compatible APIs
- **Infrastructure**: Docker, Redis, Prometheus, OTEL, Grafana
- **Architecture**: Modular services, async execution

## How It Works
1. Client sends an inference or workflow request
2. Orchestrator evaluates routing policies
3. Request is dispatched to the optimal LLM backend
4. Results are aggregated and returned to the client
`,
  ru: `
## Обзор
LLM Orchestrator — это бэкенд-сервис для оркестрирования сложных рабочих процессов с использованием нескольких LLM. Он направляет запросы между разнородными бэкендами (локальные GPU-модели и облачные API) на основе заданных политик: задержка, стоимость, надёжность.

## Возможности
- **Маршрутизация между LLM**: Динамический выбор моделей
- **Политики исполнения**: Учёт стоимости, latency и fallback-сценариев
- **Изоляция сбоев**: Устойчивость при отказе отдельных провайдеров
- **Композиция workflow**: Поддержка цепочек и условных вызовов LLM
- **Готовность к продакшену**: Архитектура для реальных AI-систем

## Технологический стек
- **Бэкенд**: Python, FastAPI
- **AI-модели**: Локальные LLM, OpenAI-совместимые API
- **Инфраструктура и наблюдаемость**: Docker, Redis, Prometheus, OTEL, Grafana
- **Архитектура**: Модульные сервисы, асинхронное исполнение

## Как это работает
1. Клиент отправляет запрос на инференс или workflow
2. Сервис выбирает стратегию маршрутизации
3. Запрос отправляется в оптимальный LLM-бэкенд
4. Результат агрегируется и возвращается клиенту
`,
},

'1': {
  en: `
## Overview
Neurophoto is a production-ready AI image editing platform built around a scalable worker architecture. It supports asynchronous and batch image processing with real-time result streaming.

## Features
- **AI Image Editing**: Background removal, enhancement, transformations
- **Scalable Workers**: Horizontal scaling via Redis-backed queues
- **Batch Processing**: Efficient handling of large image sets
- **Async Jobs**: Non-blocking background execution
- **Streaming Results**: Progressive delivery of processed images

## Tech Stack
- **Backend**: Node.js, NestJS
- **Workers & Queues**: Redis, BullMQ
- **Infrastructure**: Docker
- **AI**: Computer Vision models

## How It Works
1. User submits image processing request
2. Job is placed into Redis-backed queue
3. Worker picks up task and runs AI inference
4. Results are streamed back to the client
`,
  ru: `
## Обзор
Neurophoto — это готовая к продакшену платформа для AI-редактирования изображений, построенная на масштабируемой системе воркеров. Поддерживает асинхронную и пакетную обработку изображений со стримингом результатов.

## Возможности
- **ИИ-редактирование изображений**: Улучшение, трансформации, удаление фона
- **Масштабируемые воркеры**: Горизонтальное масштабирование через очереди
- **Пакетная обработка**: Эффективная работа с большими наборами данных
- **Фоновые задачи**: Неблокирующее выполнение
- **Стриминг результатов**: Постепенная отдача обработанных изображений

## Технологический стек
- **Бэкенд**: Node.js, NestJS
- **Очереди и воркеры**: Redis, BullMQ
- **Инфраструктура**: Docker
- **AI**: Computer Vision модели

## Как это работает
1. Пользователь отправляет запрос на обработку изображения
2. Задача помещается в очередь Redis
3. Воркер выполняет AI-инференс
4. Результаты стримятся клиенту
`,
},

'2': {
  en: `
## Overview
AuditPage is an automated system that analyzes websites and generates structured SEO and UX audit reports in PDF format using AI.

## Features
- **Website Analysis**: SEO, UX, and visual structure evaluation
- **AI-Powered Reports**: Uses LLMs and vision models
- **PDF Generation**: Clean, shareable audit documents
- **Automation**: Minimal manual input required
- **Extensible Pipeline**: Easy to add new checks and metrics

## Tech Stack
- **Backend**: Python, FastAPI
- **AI**: LLMs, Vision-Language Models (VLM)
- **Output**: PDF generation
- **Infrastructure**: Docker

## How It Works
1. User submits website URL
2. System crawls and analyzes content and visuals
3. AI models generate structured insights
4. Final audit is rendered as a PDF
`,
  ru: `
## Обзор
AuditPage — это система автоматического анализа веб-сайтов с генерацией структурированных SEO и UX-аудитов в формате PDF с использованием AI.

## Возможности
- **Анализ сайтов**: SEO, UX и визуальной структуры
- **AI-отчёты**: Использование LLM и vision-моделей
- **Генерация PDF**: Удобные отчёты для клиентов
- **Автоматизация**: Минимум ручной работы
- **Расширяемость**: Лёгкое добавление новых проверок

## Технологический стек
- **Бэкенд**: Python, FastAPI
- **AI**: LLM, Vision-Language Models
- **Вывод**: PDF
- **Инфраструктура**: Docker

## Как это работает
1. Пользователь указывает URL сайта
2. Система анализирует контент и визуал
3. AI формирует структурированные выводы
4. Отчёт собирается в PDF
`,
},

'7': {
  en: `
## Overview
Accent Detector is a deep learning system for automatic speech accent recognition using modern speech models.

## Features
- **Accent Classification**: Detects speaker accent from audio
- **Deep Learning**: Transformer-based speech models
- **High Accuracy**: Trained on diverse speech datasets
- **Batch & API Ready**: Suitable for backend integration
- **Research-Inspired**: Built on SpeechBrain framework

## Tech Stack
- **Language**: Python
- **ML Framework**: PyTorch
- **Speech**: SpeechBrain, Transformers

## How It Works
1. Audio is preprocessed and normalized
2. Features are extracted from waveform
3. Model predicts accent probabilities
4. Final accent label is returned
`,
  ru: `
## Обзор
Accent Detector — это система автоматического распознавания акцента в речи на основе глубокого обучения и современных speech-моделей.

## Возможности
- **Классификация акцента**: Определение акцента говорящего
- **Глубинное обучение**: Transformer-модели для речи
- **Высокая точность**: Обучение на разнообразных датасетах
- **Готовность к API**: Подходит для бэкенд-интеграций
- **Исследовательская база**: Использует SpeechBrain

## Технологический стек
- **Язык**: Python
- **ML-фреймворк**: PyTorch
- **Речь**: SpeechBrain, Transformers

## Как это работает
1. Аудио нормализуется и подготавливается
2. Извлекаются признаки
3. Модель предсказывает вероятности акцентов
4. Возвращается финальный класс
`,
},

  '4': {
    en: `
## Overview
Autodoc is a daemon service that watches your source code repositories and automatically generates or updates documentation using local LLM (Ollama). It monitors git commits and generates documentation updates from code diffs.

## Key Features
- **Automatic Documentation Updates**: Monitors repositories and generates docs from commits
- **Local LLM Integration**: Uses Ollama for offline, private documentation generation
- **Git Integration**: Detects changes via git diffs and commits
- **Web Interface**: FastAPI server for managing repositories and viewing docs
- **Database Storage**: Tracks repository configurations and documentation state

## Tech Stack
- **Language**: Python
- **Framework**: FastAPI, LangChain (Ollama/OpenAI API)
- **Version Control**: Git monitoring
- **Database**: SQLite/PostgreSQL
- **Server**: Uvicorn

## Workflow
1. Register source and documentation folders
2. Daemon watches for git commits
3. On commit, sends code diff to Ollama
4. LLM generates documentation updates
5. Autodoc applies changes to docs folder

## Key Benefits
- Keeps documentation in sync with code automatically
- No external API dependencies (Local Ollama)
- Reduces manual documentation maintenance
- Works with any Ollama-compatible model
`,
    ru: `
## Обзор
Autodoc — это демон-сервис, который следит за вашими репозиториями исходного кода и автоматически генерирует или обновляет документацию с использованием локальной LLM (Ollama). Он отслеживает коммиты git и создает обновления документации из изменений кода.

## Ключевые особенности
- **Автоматическое обновление документации**: Отслеживает репозитории и создает документацию из коммитов
- **Интеграция локальной LLM**: Использует Ollama для автономной, приватной генерации документации
- **Интеграция Git**: Обнаруживает изменения через git diffs и коммиты
- **Веб-интерфейс**: FastAPI сервер для управления репозиториями и просмотра документации
- **Хранилище БД**: Отслеживает конфигурации репозиториев и состояние документации

## Технологический стек
- **Язык**: Python
- **Фреймворк**: FastAPI, LangChain (Ollama/OpenAI API)
- **Контроль версий**: Git мониторинг
- **База данных**: SQLite/PostgreSQL
- **Сервер**: Uvicorn

## Рабочий процесс
1. Зарегистрируйте папки с исходным кодом и документацией
2. Демон отслеживает коммиты git
3. При коммите отправляет diff кода в Ollama
4. LLM генерирует обновления документации
5. Autodoc применяет изменения к папке с документацией

## Ключевые преимущества
- Автоматическое синхронизирование документации с кодом
- Без зависимости от внешних API (локальный Ollama)
- Снижает ручное ведение документации
- Работает с любой совместимой с Ollama моделью
`,
  },
  
  '6': {
    en: `
## Overview
A production-ready real-time hand pose detection and gesture event framework for Python. Think of it like the keyboard/mouse libraries, but driven by hands and fingers. Built on MediaPipe with deterministic geometry-based gesture recognition.

## Key Features
- **Hand Pose Detection**: Detects 21 hand landmarks per hand in real-time
- **Handedness Detection**: Distinguishes between left and right hands
- **Gesture Recognition**: Built-in gestures (fist, open palm, peace sign)
- **Event Binding System**: Keyboard-like event API for gesture triggers
- **Landmark Rendering**: Visualize hand skeleton and landmarks
- **Production-Ready**: Optimized for CPU real-time operation

## Built-in Gestures
- ✊ Fist
- ✋ Open Palm
- ✌️ Peace Sign
- Extensible: Easy to add custom gestures

## Tech Stack
- **Language**: Python 3.10+
- **CV Model**: MediaPipe
- **Vision Library**: OpenCV
- **Event System**: Custom event binding framework

## Use Cases
- Gesture-controlled interfaces
- Assistive technology for accessibility
- XR and simulation control
- HCI research and experimentation
- Assistive input systems

## Key Advantages
- **Deterministic**: No ML retraining for custom gestures
- **Fast**: CPU-based real-time processing
- **Modular**: Swappable hand detection models
- **Clean API**: Familiar event binding pattern
`,
    ru: `
## Обзор
Готовый к продакшену фреймворк для обнаружения поз рук и распознавания жестов в реальном времени на Python. Думайте об этом как о библиотеках keyboard/mouse, но управляемых руками и пальцами. Построен на MediaPipe с детерминированным распознаванием жестов на основе геометрии.

## Ключевые особенности
- **Обнаружение позы рук**: Обнаруживает 21 ориентир рук на каждую руку в реальном времени
- **Определение ориентации**: Различает левые и правые руки
- **Распознавание жестов**: Встроенные жесты (кулак, открытая ладонь, мир)
- **Система привязки событий**: API в стиле клавиатуры для триггеров жестов
- **Отрисовка ориентиров**: Визуализируйте скелет и ориентиры рук
- **Готово к продакшену**: Оптимизировано для ЦП в реальном времени

## Встроенные жесты
- ✊ Кулак
- ✋ Открытая ладонь
- ✌️ Знак победы
- Расширяемо: легко добавить собственные жесты

## Технологический стек
- **Язык**: Python 3.10+
- **Модель CV**: MediaPipe
- **Библиотека визуализации**: OpenCV
- **Система событий**: пользовательский фреймворк привязки событий

## Варианты использования
- Интерфейсы, управляемые жестами
- Вспомогательные технологии для доступности
- Контроль XR и имитации
- Исследования HCI и экспериментирование
- Вспомогательные системы ввода

## Ключевые преимущества
- **Детерминированный**: Нет переподготовки ML для пользовательских жестов
- **Быстро**: Обработка в реальном времени на CPU
- **Модульный**: Заменяемые модели обнаружения руки
- **Чистый API**: Знакомый паттерн привязки событий
`,
  },
};
