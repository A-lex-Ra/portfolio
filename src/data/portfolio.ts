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
