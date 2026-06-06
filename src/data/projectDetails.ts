/**
 * Project details with markdown content for full project overview
 * Structure: id -> { en: markdown, ru: markdown }
 */

export const projectDetails: Record<string, { en: string; ru: string }> = {
'13': {
  en: `
## Overview
Agentic Control is an end-to-end platform for building, running, and supervising AI agents — plus a cloud development product built on top of it. A single, mobile-first control plane lets you register any number of agents, trigger them (manually, on a schedule, or via webhook), watch every run in real time, and step in with human approval when it matters. On top of the core sits a SaaS dev environment: every user gets a persistent Docker workspace, a browser IDE, and a coding agent they can chat with from any device.

## Highlights
- **Domain-agnostic control plane**: the core knows nothing about coding — it tracks agents, runs, traces, logs, HITL, and triggers for any kind of agent
- **Build agents your way**: a TypeScript framework with four execution patterns — pipeline (DAG), chat (conversational loop), hybrid, and simple — all with tracing, HITL, and LLM connectors out of the box
- **Any LLM**: a pluggable connector layer (Anthropic, OpenAI, Ollama/local) — swap models without touching agent code
- **Human-in-the-loop**: agents pause for approval before risky actions; review and tap approve/reject from desktop or phone
- **One container per user**: isolated, persistent Docker workspaces with lazy start/stop; projects are just directories inside
- **Browser IDE + SSH**: code-server proxied in the browser, or native VS Code over SSH — no vendor lock-in
- **Usage metering & spend caps**: per-turn token accounting, model pricing, and per-user/global budgets

## Tech Stack
- **Control plane**: NestJS 11, TypeScript, WebSocket gateway
- **Frontend**: React 19, Vite, React Router, Tailwind, shadcn/Radix, Monaco
- **Data & auth**: Supabase (Postgres + Auth), JWT for users + API keys for agents
- **Agent framework**: TypeScript, Anthropic SDK, p-queue, ACP (Agent Client Protocol)
- **Infrastructure**: Docker (dockerode), code-server, nginx, SSH, systemd deploy daemon

## How It Works
1. Build or install an agent — use the framework, or register any ACP/HTTP agent (or a marketplace Docker image)
2. Open a project — the platform spins up your persistent container and scopes the agent to it
3. Chat or trigger — talk to the agent over a live WebSocket, or fire it on a schedule/webhook
4. Observe — every run streams traces and logs to the dashboard in real time
5. Approve — HITL checkpoints pause the agent until you decide
6. Review & ship — inspect file diffs, then commit and push

## Engineering Highlights
- **ACP bridge**: one agent process multiplexes many fully-isolated sessions; the server spawns it as a child process and speaks the Agent Client Protocol over stdio
- **Resilient WebSocket layer**: heartbeats, replay buffers with monotonic sequence numbers, and session resume survive flaky mobile connections and reconnects
- **Persistent chat**: full message history is stored per session for prompt-cache-friendly resume at any point
- **Sandboxed tools**: every file and shell action runs via docker exec inside the calling user's own container, never on the host
`,
  ru: `
## Обзор
Agentic Control — это сквозная платформа для создания, запуска и контроля AI-агентов, и построенный на ней облачный продукт для разработки. Единый mobile-first контрол-плейн позволяет регистрировать любое число агентов, запускать их (вручную, по расписанию или через вебхук), в реальном времени следить за каждым запуском и вмешиваться с ручным согласованием там, где это важно. Поверх ядра — SaaS dev-окружение: у каждого пользователя есть постоянный Docker-workspace, IDE в браузере и кодинг-агент, с которым можно общаться с любого устройства.

## Ключевое
- **Доменно-агностичное ядро**: контрол-плейн ничего не знает о коде — он отслеживает агентов, запуски, трейсы, логи, HITL и триггеры для любых агентов
- **Агенты под любой паттерн**: TypeScript-фреймворк с четырьмя моделями исполнения — pipeline (DAG), chat (диалоговый цикл), hybrid и simple — все с трейсингом, HITL и LLM-коннекторами из коробки
- **Любая LLM**: слой подключаемых коннекторов (Anthropic, OpenAI, Ollama/локальные) — меняйте модель без изменения кода агента
- **Human-in-the-loop**: агент ставится на паузу перед рискованным действием; согласуйте и нажмите «принять/отклонить» с десктопа или телефона
- **Один контейнер на пользователя**: изолированные постоянные Docker-workspace с ленивым стартом и остановкой; проекты — просто директории внутри
- **IDE в браузере + SSH**: code-server через прокси в браузере или нативный VS Code по SSH — без вендор-лока
- **Учёт расхода и лимиты**: построчный учёт токенов, прайсинг моделей и бюджеты на пользователя или глобально

## Технологический стек
- **Контрол-плейн**: NestJS 11, TypeScript, WebSocket-gateway
- **Фронтенд**: React 19, Vite, React Router, Tailwind, shadcn/Radix, Monaco
- **Данные и авторизация**: Supabase (Postgres + Auth), JWT для пользователей + API-ключи для агентов
- **Фреймворк агентов**: TypeScript, Anthropic SDK, p-queue, ACP (Agent Client Protocol)
- **Инфраструктура**: Docker (dockerode), code-server, nginx, SSH, systemd-демон деплоя

## Как это работает
1. Соберите или установите агента — через фреймворк или зарегистрируйте любой ACP/HTTP-агент (или Docker-образ из маркетплейса)
2. Откройте проект — платформа поднимает ваш постоянный контейнер и привязывает к нему агента
3. Чат или триггер — общайтесь с агентом по живому WebSocket или запускайте по расписанию/вебхуку
4. Наблюдайте — каждый запуск стримит трейсы и логи в дашборд в реальном времени
5. Согласовывайте — HITL-чекпойнты ставят агента на паузу до вашего решения
6. Ревью и деплой — смотрите диффы файлов, затем коммит и пуш

## Инженерные детали
- **ACP-мост**: один процесс агента мультиплексирует множество полностью изолированных сессий; сервер спавнит его как дочерний процесс и общается по Agent Client Protocol через stdio
- **Устойчивый WebSocket-слой**: heartbeat, replay-буферы с монотонными seq и возобновление сессии переживают нестабильный мобильный коннект и реконнекты
- **Постоянный чат**: полная история сообщений хранится по каждой сессии для возобновления с prompt-cache в любой момент
- **Песочница для инструментов**: каждое файловое и shell-действие выполняется через docker exec внутри собственного контейнера вызвавшего пользователя, не на хосте
`,
},

'14': {
  en: `
## Overview
An LLM agent harness — a production full-stack system that gives LLM agents a runtime, a toolset, and a human-facing UI. Shown here under a generic name; the real product and its implementation are under NDA. Agents act through a structured tool layer (MCP), while a real-time web app keeps humans in the loop.

## Highlights
- **Agent runtime + tooling**: LLM agents operate through an MCP (Model Context Protocol) tool server, not ad-hoc prompting
- **Real-time UI**: a persistent WebSocket layer streams agent activity to the front-end
- **Monorepo**: backend and frontend in one npm-workspaces repo, with shared types end to end
- **Shipped to production**: a real deployment pipeline, not a prototype

## Tech Stack
- **Backend**: Node.js, TypeScript, WebSocket
- **Frontend**: React, TypeScript
- **Agent layer**: MCP (Model Context Protocol) SDK
- **Tooling**: npm workspaces monorepo, production deployment

## Note
Product domain, business logic, and screenshots are intentionally omitted under NDA.
`,
  ru: `
## Обзор
LLM agent harness — продакшен full-stack система, дающая LLM-агентам рантайм, набор инструментов и человеко-ориентированный UI. Показан под обобщённым названием; реальный продукт и его реализация под NDA. Агенты действуют через структурированный слой инструментов (MCP), а real-time веб-приложение держит человека в контуре.

## Ключевое
- **Рантайм + инструменты для агентов**: LLM-агенты работают через MCP-сервер инструментов (Model Context Protocol), а не через ad-hoc промптинг
- **Real-time UI**: постоянный WebSocket-слой стримит активность агентов во фронтенд
- **Монорепо**: бэкенд и фронтенд в одном репозитории на npm-workspaces, со сквозными общими типами
- **В проде**: реальный пайплайн деплоя, не прототип

## Технологический стек
- **Бэкенд**: Node.js, TypeScript, WebSocket
- **Фронтенд**: React, TypeScript
- **Слой агентов**: MCP (Model Context Protocol) SDK
- **Инструментарий**: монорепо на npm workspaces, продакшен-деплой

## Примечание
Доменная область, бизнес-логика и скриншоты намеренно опущены под NDA.
`,
},

'15': {
  en: `
## Overview
SeriesStat is an analytics service for a content platform (shown under a changed name; implementation under NDA). It pairs a column-store for analytical queries with a document database for operational data, and presents the results through an interactive dashboard. Now at v2.0.

## Highlights
- **ClickHouse**: fast aggregation over large event volumes
- **MongoDB**: operational and document data
- **Interactive dashboard**: a front-end for exploring metrics
- **v2.0**: a matured second iteration
- **Thoroughly documented**: schema, query API, and integration guides

## Tech Stack
- **Backend**: Node.js, TypeScript
- **Analytics store**: ClickHouse
- **Operational store**: MongoDB
- **Frontend**: React dashboard

## Note
Product domain, business logic, and screenshots are intentionally omitted under NDA.
`,
  ru: `
## Обзор
SeriesStat — аналитический сервис для контент-платформы (показан под изменённым названием; реализация под NDA). Сочетает колоночное хранилище для аналитических запросов с документной БД для операционных данных и показывает результаты через интерактивный дашборд. Сейчас на версии v2.0.

## Ключевое
- **ClickHouse**: быстрая агрегация по большим объёмам событий
- **MongoDB**: операционные и документные данные
- **Интерактивный дашборд**: фронтенд для исследования метрик
- **v2.0**: зрелая вторая итерация
- **Подробная документация**: схема, query API и гайды по интеграции

## Технологический стек
- **Бэкенд**: Node.js, TypeScript
- **Аналитическое хранилище**: ClickHouse
- **Операционное хранилище**: MongoDB
- **Фронтенд**: React-дашборд

## Примечание
Доменная область, бизнес-логика и скриншоты намеренно опущены под NDA.
`,
},

'16': {
  en: `
## Overview
A standalone desktop password manager built in modern C++. It stores credentials locally in SQLite and presents them through an immediate-mode Dear ImGui interface — no cloud, no network calls, offline-first.

## Features
- **Full CRUD**: add, search, edit, and delete password entries
- **Local encrypted storage**: credentials obfuscated with a machine-derived key, stored Base64 in SQLite
- **Offline-first**: zero external APIs or cloud services
- **Cross-platform**: Windows, Linux, and macOS from one CMake build
- **Clean UI**: immediate-mode Dear ImGui on a GLFW + OpenGL3 backend

## Tech Stack
- **Language**: C++17
- **UI**: Dear ImGui (GLFW + OpenGL3)
- **Storage**: SQLite3 (SQLiteCpp wrapper)
- **Build**: CMake 3.20+, vcpkg

## Architecture
- **Database layer**: SQLite with automatic encrypt-on-write / decrypt-on-read
- **Crypto layer**: machine-derived key, XOR cipher with rotation, designed with a libsodium upgrade path
- **UI layer**: main window (list + search), entry dialog, view dialog
- **App layer**: coordinates database, crypto, and the GLFW/OpenGL/ImGui loop

## Why It's Interesting
It shows depth across the native stack: manual build and dependency management (CMake + vcpkg), a GPU-backed immediate-mode GUI, an embedded database, and a pluggable crypto layer — all in one self-contained C++17 binary.
`,
  ru: `
## Обзор
Автономный десктопный менеджер паролей на современном C++. Хранит учётные данные локально в SQLite и показывает их через immediate-mode интерфейс на Dear ImGui — без облака, без сетевых вызовов, offline-first.

## Возможности
- **Полный CRUD**: добавление, поиск, редактирование и удаление записей
- **Локальное шифрованное хранилище**: данные обфусцируются ключом, производным от машины, и хранятся в Base64 в SQLite
- **Offline-first**: никаких внешних API и облачных сервисов
- **Кросс-платформенность**: Windows, Linux и macOS из одной CMake-сборки
- **Чистый UI**: immediate-mode Dear ImGui на бэкенде GLFW + OpenGL3

## Технологический стек
- **Язык**: C++17
- **UI**: Dear ImGui (GLFW + OpenGL3)
- **Хранилище**: SQLite3 (обёртка SQLiteCpp)
- **Сборка**: CMake 3.20+, vcpkg

## Архитектура
- **Слой БД**: SQLite с автоматическим шифрованием при записи и расшифровкой при чтении
- **Крипто-слой**: ключ, производный от машины, XOR-шифр с ротацией, заложен путь апгрейда на libsodium
- **Слой UI**: главное окно (список + поиск), диалог записи, диалог просмотра
- **Слой приложения**: координирует БД, крипто и цикл GLFW/OpenGL/ImGui

## Чем интересен
Показывает глубину нативного стека: ручное управление сборкой и зависимостями (CMake + vcpkg), immediate-mode GUI поверх GPU, встроенная БД и сменяемый крипто-слой — всё в одном самодостаточном бинарнике на C++17.
`,
},

'17': {
  en: `
## Overview
Claude Cost Tracker is a VSCode extension that surfaces your Claude API spending directly in the editor's status bar, updating automatically after every response. It reads Claude Code transcripts straight from disk, so it needs no Python hook and no Claude Code configuration — and behaves identically in VSCode and VSCode Insiders.

## How It Works
1. Claude Code writes transcripts to ~/.claude/projects as JSONL files
2. The extension watches those files for new assistant messages
3. It computes cost by model and token type (input, output, cache read/write)
4. It updates a local stats file and the status bar in real time

## Features
- **Live cost in the status bar**, updated per response
- **Breakdown by day**: click the status bar item to see daily spend
- **Accurate per-model pricing**: Opus / Sonnet / Haiku families, including cache tiers
- **Auto-detected model**: read from the transcript — no configuration
- **One-command installer**: for VSCode and Insiders, with idempotent re-runs

## Tech Stack
- **Language**: TypeScript / JavaScript
- **Platform**: VSCode Extension API
- **Domain**: Claude / Anthropic API token pricing

## Why It's Interesting
A small but sharp piece of IDE instrumentation: it tail-watches a live JSONL transcript, reconstructs token-level cost from the same dimensions the API bills on (input, output, and cache read/write), and presents it ambiently — without touching the user's Claude Code setup.
`,
  ru: `
## Обзор
Claude Cost Tracker — расширение для VSCode, показывающее расход Claude API прямо в статус-баре редактора и обновляющееся автоматически после каждого ответа. Оно читает транскрипты Claude Code напрямую с диска, поэтому не требует Python-хука и настройки Claude Code — и работает одинаково в VSCode и VSCode Insiders.

## Как это работает
1. Claude Code пишет транскрипты в ~/.claude/projects в виде JSONL-файлов
2. Расширение следит за этими файлами на предмет новых сообщений ассистента
3. Считает стоимость по модели и типу токенов (input, output, cache read/write)
4. Обновляет локальный файл статистики и статус-бар в реальном времени

## Возможности
- **Стоимость в статус-баре** в реальном времени, по каждому ответу
- **Разбивка по дням**: клик по элементу статус-бара показывает расход за день
- **Точный прайсинг по моделям**: семейства Opus / Sonnet / Haiku, включая кэш-тарифы
- **Авто-определение модели**: берётся из транскрипта — без конфигурации
- **Установка одной командой**: для VSCode и Insiders, идемпотентный повторный запуск

## Технологический стек
- **Язык**: TypeScript / JavaScript
- **Платформа**: VSCode Extension API
- **Домен**: токены и прайсинг Claude / Anthropic API

## Чем интересен
Небольшой, но точный пример инструментирования IDE: расширение в реальном времени отслеживает живой JSONL-транскрипт, восстанавливает стоимость на уровне токенов по тем же осям, по которым биллит API (input, output и cache read/write), и показывает её ненавязчиво — не трогая настройку Claude Code пользователя.
`,
},

'18': {
  en: `
## Overview
devlog-agent is a background daemon that watches your registered git repositories and turns raw commit history into developer-friendly summaries. It writes a markdown devlog entry per commit, and exposes a /daily endpoint (and CLI) that aggregates a given day's commits across all repos into a polished standup block.

## Features
- **Per-commit devlogs**: generated from diffs, one markdown file per commit
- **/daily standup**: aggregates all repos for a date, groups by project, and collapses small fixes into single bullets
- **Works without the daemon**: /daily reads git log directly — using stored summaries when available, falling back to commit subjects otherwise
- **Provider-agnostic LLM layer**: Anthropic, Ollama (local), OpenAI, OpenRouter — switched via env
- **Built-in cost accounting**: every LLM call is logged with tokens and cost against a model-pricing table

## Tech Stack
- **Language**: Python 3.10+
- **Framework**: FastAPI, SQLModel (SQLite)
- **LLM**: LangChain provider factory (Anthropic / Ollama / OpenAI / OpenRouter)

## How It Works
1. Register source repos (with an optional author filter)
2. A background watcher polls for new commits (every 5 minutes by default)
3. Each commit's metadata and a capped diff go to the LLM, returning a summary and body
4. /daily joins git log with stored summaries into a project-grouped standup text
`,
  ru: `
## Обзор
devlog-agent — фоновый демон, который следит за зарегистрированными git-репозиториями и превращает сырую историю коммитов в понятные сводки. Он пишет markdown-девлог на каждый коммит и предоставляет эндпойнт /daily (и CLI), который агрегирует коммиты за указанный день по всем репозиториям в готовый блок стендапа.

## Возможности
- **Пер-коммит девлоги**: генерируются из диффов, по одному markdown-файлу на коммит
- **Стендап /daily**: агрегирует все репозитории за дату, группирует по проектам и склеивает мелкие правки в один буллет
- **Работает без демона**: /daily читает git log напрямую — используя сохранённые сводки, если они есть, иначе откатываясь к subject коммита
- **Провайдер-агностичный LLM-слой**: Anthropic, Ollama (локально), OpenAI, OpenRouter — переключение через env
- **Встроенный учёт стоимости**: каждый вызов LLM логируется с токенами и стоимостью по таблице прайсинга моделей

## Технологический стек
- **Язык**: Python 3.10+
- **Фреймворк**: FastAPI, SQLModel (SQLite)
- **LLM**: фабрика провайдеров на LangChain (Anthropic / Ollama / OpenAI / OpenRouter)

## Как это работает
1. Регистрируем репозитории (с опциональным фильтром по автору)
2. Фоновый watcher опрашивает на предмет новых коммитов (по умолчанию каждые 5 минут)
3. Метаданные коммита и ограниченный дифф уходят в LLM, возвращаются summary и body
4. /daily джойнит git log с сохранёнными сводками в сгруппированный по проектам текст стендапа

## Чем интересен
Делит архитектуру (FastAPI + SQLModel + LangChain) с проектом autodoc, но ориентирован на стендап-сводки, а не на документацию — естественный спутник работы над Agentic Control, с тем же провайдер-агностичным LLM-слоем и учётом стоимости токенов.
`,
},

'19': {
  en: `
## Overview
PttAgent is the Android front-end for a server-side voice agent (part of the Agentic Control line). The goal is hands-free, push-to-talk interaction — eventually via a gamepad button; the current beta drives input from a UI button or a record/wait timer.

## Architecture
A single foreground VoiceService wires everything together around a strict state machine: IDLE → RECORDING → PROCESSING → PLAYING → IDLE, with an ERROR → IDLE recovery path. The input source is abstracted behind an InputLayer, so swapping the UI button for a hardware gamepad later is essentially one constructor call.

## Features
- **Push-to-talk voice loop**: record → speech-to-text → agent → text-to-speech
- **On-device STT**: via Android SpeechRecognizer
- **TTS playback** of the agent's reply
- **Swappable input layer**: button, timer, or future gamepad
- **Foreground service + wake-lock**: for screen-off operation
- **Encrypted settings**: backend URL and token in EncryptedSharedPreferences

## Tech Stack
- **Language**: Kotlin
- **Platform**: Android (AGP 8.1+, JDK 21)
- **Networking**: OkHttp
- **Speech**: Android SpeechRecognizer (STT) + TextToSpeech (TTS)

## Why It's Interesting
A clean mobile take on the agent client: a well-isolated state machine, a pluggable input abstraction designed for hardware controls, and the real-world Android plumbing — foreground service, wake-locks, Doze exclusion, encrypted preferences — needed for an always-listening voice runtime.
`,
  ru: `
## Обзор
PttAgent — Android-фронтенд для серверного голосового агента (часть линейки Agentic Control). Цель — hands-free взаимодействие в режиме push-to-talk, в перспективе через кнопку геймпада; текущая бета управляет вводом с UI-кнопки или таймера запись/ожидание.

## Архитектура
Единый foreground-сервис VoiceService связывает всё вокруг строгой стейт-машины: IDLE → RECORDING → PROCESSING → PLAYING → IDLE, с путём восстановления ERROR → IDLE. Источник ввода абстрагирован за InputLayer, поэтому заменить UI-кнопку на аппаратный геймпад позже — по сути один вызов конструктора.

## Возможности
- **Голосовой цикл push-to-talk**: запись → распознавание речи → агент → синтез речи
- **On-device STT**: через Android SpeechRecognizer
- **Озвучка ответа** агента через TTS
- **Сменяемый input-слой**: кнопка, таймер или будущий геймпад
- **Foreground-сервис + wake-lock**: для работы при выключенном экране
- **Шифрованные настройки**: URL бэкенда и токен в EncryptedSharedPreferences

## Технологический стек
- **Язык**: Kotlin
- **Платформа**: Android (AGP 8.1+, JDK 21)
- **Сеть**: OkHttp
- **Речь**: Android SpeechRecognizer (STT) + TextToSpeech (TTS)

## Чем интересен
Аккуратная мобильная реализация клиента агента: хорошо изолированная стейт-машина, сменяемая абстракция ввода под аппаратные контролы и реальная Android-инженерия — foreground-сервис, wake-lock, исключение из Doze, шифрованные настройки — нужная для постоянно слушающего голосового рантайма.
`,
},

'20': {
  en: `
## Overview
particle-heaven is a from-scratch voxel physics engine in modern C++ — Phase 1 of a voxel-based reinforcement-learning physics environment. It simulates deformable and breakable structures with a mass-spring system and rigid clustering, and renders them through a hand-written GPU-instanced OpenGL pipeline.

## Features
- **Mass-spring physics**: per-bond Hookean springs, damping, and fracture past a tensile threshold
- **Rigid clustering**: bodies promote particle→rigid (and back) at runtime for stability and speed
- **Broad-phase collisions**: spatial-hash + penalty contact solver with friction
- **Strategy-pattern solvers**: collision and stress solvers are swappable interfaces
- **Hand-rolled OpenGL 3.3 renderer**: ~30 GL entry points loaded manually, one instanced draw call per frame, no glad/glew
- **Headless mode**: deterministic fixed-length runs for diagnostics

## Tech Stack
- **Language**: C++17
- **Graphics**: OpenGL 3.3, GLFW (via CMake FetchContent)
- **Build**: CMake 3.16+

## Why It's Interesting
Low-level systems work end to end: a custom semi-implicit integrator kept inside the explicit-Euler stability bound, runtime topology splitting and fracture, a spatial-hash broad phase, and a dependency-free GPU renderer wired straight to opengl32 — all structured behind clean Strategy interfaces.
`,
  ru: `
## Обзор
particle-heaven — воксельный физический движок на современном C++ с нуля, Фаза 1 воксельной physics-среды для обучения с подкреплением. Симулирует деформируемые и разрушаемые структуры через mass-spring систему с кластеризацией в твёрдые тела и рендерит их собственным GPU-инстансированным OpenGL-пайплайном.

## Возможности
- **Mass-spring физика**: пер-связевые Hookean-пружины, демпфирование и разрушение при превышении порога натяжения
- **Кластеризация в твёрдые тела**: тела на лету повышаются particle→rigid (и обратно) ради стабильности и скорости
- **Broad-phase коллизии**: spatial-hash + penalty-солвер контактов с трением
- **Солверы по паттерну Strategy**: солверы коллизий и напряжений — сменяемые интерфейсы
- **Собственный рендерер OpenGL 3.3**: ~30 GL-функций загружаются вручную, один инстансированный draw call на кадр, без glad/glew
- **Headless-режим**: детерминированные прогоны фиксированной длины для диагностики

## Технологический стек
- **Язык**: C++17
- **Графика**: OpenGL 3.3, GLFW (через CMake FetchContent)
- **Сборка**: CMake 3.16+

## Чем интересен
Low-level системная работа от и до: собственный полу-неявный интегратор в пределах устойчивости явного Эйлера, разбиение топологии и разрушение на лету, spatial-hash broad phase и рендерер без зависимостей, подключённый напрямую к opengl32 — всё за чистыми Strategy-интерфейсами.
`,
},

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
