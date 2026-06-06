export interface PortfolioItem {
    id: string;
    title: {
        en: string;
        ru: string;
    };
    shortDescription: {
        en: string;
        ru: string;
    };
    imageUrl: string;
    link: string;
    tags: string[];
    sourceLink?: string;
    noInfo?: boolean; // For projects without detailed info, to hide "View Project" link
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: '13',
        title: {
            en: 'Agentic Control – AI Agent Control Plane & Cloud Dev Platform',
            ru: 'Agentic Control – Контрол-плейн для AI-агентов и облачная dev-платформа',
        },
        shortDescription: {
            en: 'AI agent platform with mobile-friendly UX, a TypeScript framework, and persistent cloud workspaces (Docker containers, browser IDE, coding agent), plus observability and employee monitoring with usage caps',
            ru: 'Платформа AI-агентов с mobile-friendly UX, TypeScript-фреймворком и постоянными облачными workspace (Docker-контейнеры, IDE в браузере, кодинг-агент), а также observability и мониторинг сотрудников с лимитами (caps)',
        },
        imageUrl: '/agentic-control.png',
        link: '#',
        tags: ['TypeScript', 'NestJS', 'React', 'Docker', 'Supabase', 'WebSocket', 'AI Agents', 'Multi-Agent', 'LLM', 'ACP', 'HITL', 'Anthropic'],
    },
    {
        id: '14',
        title: {
            en: 'LLM Agent Harness – Full-Stack Agent Runtime with MCP Tools',
            ru: 'LLM Agent Harness – Full-stack рантайм для AI-агентов с MCP-инструментами',
        },
        shortDescription: {
            en: 'A production full-stack harness for running LLM agents: a Node.js + React monorepo where agents act through an MCP (Model Context Protocol) tool server, with a real-time WebSocket layer driving the UI. Shipped and deployed; implementation details are under NDA.',
            ru: 'Продакшен full-stack харнесс для запуска LLM-агентов: монорепо Node.js + React, где агенты действуют через MCP-сервер инструментов (Model Context Protocol), с real-time WebSocket-слоем для UI. Задеплоен в прод; детали реализации под NDA.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=LLM+Agent+Harness',
        link: '#',
        tags: ['TypeScript', 'Node.js', 'React', 'WebSocket', 'MCP', 'LLM', 'AI Agents', 'Monorepo'],
    },
    {
        id: '15',
        title: {
            en: 'SeriesStat – Content-Platform Analytics',
            ru: 'SeriesStat – Аналитика контент-платформы',
        },
        shortDescription: {
            en: 'Analytics service for a content platform: high-volume event analytics on ClickHouse alongside MongoDB for operational data, surfaced through an interactive dashboard. A matured v2.0 with thorough documentation. Shown under a changed name; implementation under NDA.',
            ru: 'Аналитический сервис для контент-платформы: высоконагруженная событийная аналитика на ClickHouse и MongoDB для операционных данных, с интерактивным дашбордом. Зрелая версия v2.0 с подробной документацией. Показан под изменённым названием; реализация под NDA.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=SeriesStat',
        link: '#',
        tags: ['Node.js', 'TypeScript', 'React', 'ClickHouse', 'MongoDB', 'Analytics', 'Dashboard'],
    },
    {
        id: '16',
        title: {
            en: 'Password Manager – Native C++ Desktop App',
            ru: 'Password Manager – Нативный десктопный менеджер паролей',
        },
        shortDescription: {
            en: 'A lightweight, offline-first desktop password manager written in modern C++17 with a Dear ImGui interface and SQLite storage. Full CRUD over encrypted entries, cross-platform (Windows/Linux/macOS), built with CMake + vcpkg.',
            ru: 'Лёгкий офлайн-менеджер паролей на современном C++17 с интерфейсом на Dear ImGui и хранилищем SQLite. Полный CRUD по зашифрованным записям, кросс-платформенность (Windows/Linux/macOS), сборка через CMake + vcpkg.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Password+Manager',
        link: '#',
        tags: ['C++17', 'Dear ImGui', 'SQLite', 'CMake', 'OpenGL', 'Desktop'],
    },
    {
        id: '17',
        title: {
            en: 'Claude Cost Tracker – VSCode Extension',
            ru: 'Claude Cost Tracker – Расширение для VSCode',
        },
        shortDescription: {
            en: 'A zero-config VSCode extension that shows live Claude API spend in the status bar. It watches Claude Code transcripts on disk, parses each assistant message, and computes cost by model and token type (input / output / cache) in real time — no Python hook, no Claude Code config.',
            ru: 'VSCode-расширение без конфигурации, показывающее расход Claude API в статус-баре в реальном времени. Следит за транскриптами Claude Code на диске, парсит каждое сообщение ассистента и считает стоимость по модели и типу токенов (input / output / cache) — без Python-хука и без настройки Claude Code.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Claude+Cost+Tracker',
        link: '#',
        tags: ['TypeScript', 'JavaScript', 'VSCode Extension', 'Claude API', 'Anthropic', 'Developer Tools'],
    },
    {
        id: '18',
        title: {
            en: 'devlog-agent – Commits-to-Standup LLM Agent',
            ru: 'devlog-agent – LLM-агент: коммиты в стендап',
        },
        shortDescription: {
            en: 'A daemon that watches your git repos and turns commit history into a polished daily standup. It generates a per-commit devlog from diffs and aggregates commits for a given day across all repos into a ready-to-paste standup block — provider-agnostic (Anthropic / Ollama / OpenAI / OpenRouter) with built-in token-cost accounting.',
            ru: 'Демон, который следит за git-репозиториями и превращает историю коммитов в готовый дейли-стендап. Генерирует пер-коммит девлог из диффов и агрегирует коммиты за день по всем репозиториям в готовый к вставке блок стендапа — провайдер-агностичный (Anthropic / Ollama / OpenAI / OpenRouter) с учётом стоимости токенов.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=devlog-agent',
        link: '#',
        tags: ['Python', 'FastAPI', 'LangChain', 'LLM', 'SQLModel', 'AI Agents', 'Anthropic', 'Ollama'],
    },
    {
        id: '19',
        title: {
            en: 'PttAgent – Android Push-to-Talk Voice Agent',
            ru: 'PttAgent – Android голосовой push-to-talk агент',
        },
        shortDescription: {
            en: 'An Android voice client for a server-side AI agent: hold to talk, the app records, runs on-device speech-to-text, sends the turn to the agent backend, and speaks the reply via TTS. Built around a clean state machine and a swappable input layer (UI button / timer / future gamepad).',
            ru: 'Android-клиент для серверного AI-агента: зажми кнопку и говори — приложение записывает, делает on-device распознавание речи, отправляет ход на бэкенд агента и озвучивает ответ через TTS. Построен вокруг чистой стейт-машины и сменяемого input-слоя (кнопка / таймер / будущий геймпад).',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=PttAgent',
        link: '#',
        tags: ['Kotlin', 'Android', 'Voice', 'State Machine', 'STT', 'TTS', 'OkHttp', 'Mobile'],
    },
    {
        id: '20',
        title: {
            en: 'particle-heaven – GPU Voxel Physics Engine',
            ru: 'particle-heaven – Воксельный физический движок на GPU',
        },
        shortDescription: {
            en: 'A from-scratch C++17 voxel physics sandbox: a mass-spring solver with rigid-body clustering and fracture, paired with a hand-rolled GPU-instanced OpenGL 3.3 renderer (no glad/glew). Phase 1 of a voxel-based RL physics environment.',
            ru: 'Воксельная физическая песочница на C++17 с нуля: mass-spring солвер с кластеризацией в твёрдые тела и разрушением + собственный GPU-инстансированный рендерер на OpenGL 3.3 (без glad/glew). Фаза 1 воксельной RL physics-среды.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=particle-heaven',
        link: '#',
        tags: ['C++17', 'OpenGL', 'Physics Simulation', 'GPU', 'Real-Time', 'Simulation'],
    },
    {
        id: '4',
        title: {
            en: 'Autodoc – AI-Powered Repository Documentation Generator',
            ru: 'Autodoc – ИИ генератор документации',
        },
        shortDescription: {
            en: 'A daemon that watches source code repositories and automatically generates/updates documentation using local LLM (Ollama). Detects commits and generates docs from code diffs.',
            ru: 'Фоновый процесс, который следит за репозиториями с кодом и автоматически генерирует/обновляет документацию. Обнаруживает коммиты и создает документацию из изменений кода.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Autodoc',
        link: '#',
        sourceLink: 'https://github.com/A-lex-Ra/autodoc',
        tags: ['Python', 'Ollama', 'OpenAI API', 'FastAPI', 'LLM', 'Git', 'AI Agents', 'SQLite', 'LangChain'],
    },
    {
        id: '5',
        title: {
            en: 'LLM Orchestrator – Multi-LLM Workflow Service',
            ru: 'LLM Orchestrator – Сервис для оркестрации LLM',
        },
        shortDescription: {
            en: 'Inference orchestrator for routing requests across heterogeneous backends (local GPU, cloud APIs) with explicit latency, cost, and failure-isolation trade-offs.',
            ru: 'Сервис для исполнения рабочих процессов, включающих несколько LLM. Направляет запросы к разным LLM-моделям (локальным и по API), с учётом политик (например стоимости и задержки).',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=LLM+Orchestrator',
        link: '#',
        sourceLink: 'https://github.com/A-lex-Ra/LLM-orchestrator',
        tags: ['Python', 'FastAPI', 'LLM', 'Workflow', 'AI', 'Redis', 'Docker', 'Prometheus', 'OTEL', 'Grafana', 'Huggingface Transformers'],
    },
    {
        id: '1',
        title: {
            en: 'Neurophoto – AI Image Editor',
            ru: 'Neurophoto – ИИ редактор изображений',
        },
        shortDescription: {
            en: 'Production-ready AI image editing tool using a scalable worker system with Redis + Docker + BullMQ. Handles batch image processing, background jobs, and streaming.',
            ru: 'Готовый к продакшену инструмент для редактирования изображений с использованием масштабируемой системы воркеров на Redis + Docker + BullMQ. Обрабатывает пакетную обработку изображений, фоновые задачи и стримит результаты.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=AI+Image+Editor',
        link: '#',
        tags: ['TypeScript', 'Nest.js', 'Redis', 'Docker', 'AI', 'Computer Vision'],
    },
    {
        id: '2',
        title: {
            en: 'AuditPage – Automated PDF SEO Audit Generator',
            ru: 'AuditPage – Автоматический генератор SEO-аудитов в PDF',
        },
        shortDescription: {
            en: 'An app that analyzes websites and generates a structured PDF SEO/UX audit.',
            ru: 'Приложение, которое анализирует веб-сайты и генерирует структурированный SEO/UX-аудит в формате PDF.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=AuditPage',
        link: '#',
        tags: ['Python', 'FastAPI', "TypeScript", "LLM", "VLM", 'PDF', 'Docker', 'AI Reports', 'Computer Vision'],
    },
    {
        id: '6',
        title: {
            en: 'HandPose Events – Real-Time Hand & Gesture Recognition',
            ru: 'HandPose Events – Распознавание жестов и поз рук в реальном времени',
        },
        shortDescription: {
            en: 'Production-ready real-time hand pose detection and gesture event framework. Detects 21 hand landmarks, recognizes gestures (fist, palm, peace), with event binding system for hands-free UI control.',
            ru: 'Готовый к продакшену фреймворк для обнаружения поз рук и распознавания жестов в реальном времени. Обнаруживает 21 ориентир рук, распознает жесты, с системой привязки событий для управления без рук.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=HandPose+Events',
        link: '#',
        tags: ['Python', 'MediaPipe', 'Computer Vision', 'Gesture Recognition', 'HCI'],
    },
    {
        id: '7',
        title: {
            en: 'Accent Detector – Speech Accent Recognition System',
            ru: 'Accent Detector – Система распознавания акцента в речи',
        },
        shortDescription: {
            en: 'Deep learning-based accent detection system using SpeechBrain and Transformers. Analyzes audio input to identify speaker accent with high accuracy using state-of-the-art speech models.',
            ru: 'Система распознавания акцента на основе глубокого обучения с использованием SpeechBrain и Transformers. Анализирует audio-вход для определения акцента говорящего с высокой точностью.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Accent+Detector',
        link: '#',
        sourceLink: 'https://github.com/A-lex-Ra/accent-detector',
        tags: ['Python', 'SpeechBrain', 'Transformers', 'PyTorch', 'Audio ML'],
    },
    {
        id: '3',
        title: {
            en: 'Chrome Extension – In-Place LLM Translator',
            ru: 'Chrome Extension – LLM Переводчик на странице',
        },
        shortDescription: {
            en: 'Chrome extension that translates any selected text using an LLM, without leaving the page.',
            ru: 'Расширение для Chrome, которое переводит любой выделенный текст с помощью LLM, не покидая страницы.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Chrome+Extension',
        link: '#',
        tags: ['JavaScript', 'Chrome API', 'OpenAI API', 'Python'],
        noInfo: true,
    },
    {
        id: '12',
        title: {
            en: 'LLM bots',
            ru: 'LLM-боты',
        },
        shortDescription: {
            en: 'LLM-powered bots for various tasks.',
            ru: 'LLM-боты для различных задач, включая Telegram-ботов для техподдержки, генерации контента и взаимодействия с пользователями.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=XTTS+Interface',
        link: '#',
        tags: ['Python', 'LangChain', 'RAG', 'LLM', 'FastAPI', 'aiogram'],
        noInfo: true,
    },
    {
        id: '8',
        title: {
            en: 'RL Physics-based Environment (WIP)',
            ru: 'RL Physics-based Environment (В разработке)',
        },
        shortDescription: {
            en: 'A custom reinforcement learning environment with realistic physics simulation.',
            ru: 'Пользовательская среда обучения с подкреплением с реалистичной физической симуляцией.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=RL+Physics',
        link: '#',
        tags: ['Python', 'PyTorch', 'RL'],
        noInfo: true,
    },
    {
        id: '9',
        title: {
            en: 'Python MusicGen Interface',
            ru: 'Python MusicGen Interface',
        },
        shortDescription: {
            en: 'A Python interface for generating short audio clips using MusicGen models. Includes CLI + backend integration.',
            ru: 'Python-интерфейс для генерации коротких аудиоклипов с использованием моделей MusicGen. Включает CLI и интеграцию с бэкендом.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=MusicGen',
        link: '#',
        tags: ['Python', 'HuggingFace', 'Audio libraries'],
        noInfo: true,
    },
    {
        id: '10',
        title: {
            en: 'XTTS Interface with “Voice Profiles”',
            ru: 'Интерфейс XTTS с «Голосовыми профилями»',
        },
        shortDescription: {
            en: 'A simple service that lets users create reusable voice profiles and generate speech with them.',
            ru: 'Простой сервис, позволяющий пользователям создавать многоразовые голосовые профили и генерировать речь с их помощью.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=XTTS+Interface',
        link: '#',
        tags: ['Python', 'XTTS', 'FastAPI', 'Docker'],
        noInfo: true,
    },
    {
        id: '11',
        title: {
            en: 'Clickable Word Pronunciation Trainer',
            ru: 'Тренажер произношения слов по клику',
        },
        shortDescription: {
            en: 'A lightweight web app that helps users practice English pronunciation by clicking any word in a sentence and hearing an AI-generated reference pronunciation.',
            ru: 'Легкое веб-приложение, помогающее пользователям практиковать английское произношение, кликая по любому слову в предложении и прослушивая эталонное произношение, сгенерированное ИИ.',
        },
        imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Pronunciation+Trainer',
        link: '#',
        tags: ['Python', 'FastAPI', 'JavaScript', 'Electron', 'TTS API', 'Docker'],
        noInfo: true,
    },
];
