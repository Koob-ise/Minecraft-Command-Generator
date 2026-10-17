# Minecraft Command Generator

> 🔗 **Live Website:** [https://mcg.koob.me](https://mcg.koob.me)

A tool for **Minecraft Java Edition** that combines multiple in-game commands into a single `summon` command block command using a `falling_block` tower and `command_block_minecart` entities.

[English](#english) | [Русский](#русский)

---

## English

### 🌟 Features

- **🌐 100% Client-Side Web Application:**
  - All computations, escaping, and SNBT generation run entirely in the browser (zero server requests, completely private, offline-capable).
  - Open and run directly by opening `index.html` or through Docker.
- **⚡ Advanced Command Management:**
  - Fast single command entry with <kbd>Enter</kbd> support.
  - **Batch Import:** Paste tens or hundreds of commands at once (from notes or `.mcfunction`). Blank lines and comments starting with `#` are automatically filtered.
  - **Drag & Drop** reordering + Up / Down move buttons.
  - Inline editing without re-typing.
  - Built-in presets (Warrior Starter Kit, Battle Arena Setup, Builder Mode).
- **⚙️ Configurable Options:**
  - Custom spawn coordinates (default `~ ~1 ~`).
  - Auto-cleanup minecart execution (`kill @e[type=minecraft:command_block_minecart,distance=..3]`).
  - Leading `/` prefix normalization.
  - Live real-time update mode.
- **📊 Character Counter & Limits:**
  - Displays total character count and minecart count.
  - Safety warnings for Chat limit (256 chars) and Command Block limit (up to 32,500 chars).
- **📋 Export:**
  - One-click copy to clipboard with toast notifications.
  - Direct download as `.txt` or `.mcfunction`.
  - State persistence in `localStorage`.
  - English & Russian UI language switcher.

---

### 🚀 Getting Started

#### Option 1: Live Web App
Visit [https://mcg.koob.me](https://mcg.koob.me) directly in any browser.

#### Option 2: Run Locally (Zero Install)
Just clone the repository and open `index.html` in your web browser:
```bash
git clone https://github.com/Koob-ise/Minecraft-Command-Generator.git
cd Minecraft-Command-Generator
# Windows:
start index.html
# Linux:
xdg-open index.html
# macOS:
open index.html
```

#### Option 3: Docker & Docker Compose
```bash
docker compose up -d
```
Access the application at `http://localhost:8009` (or configure reverse proxy to port 80).

---

### 🎮 In-Game Instructions

1. Give yourself a command block in Minecraft:
   ```mcfunction
   /give @p command_block
   ```
2. Place it on the ground and right-click to open its interface.
3. Paste the generated command (<kbd>Ctrl</kbd> + <kbd>V</kbd>) and click **Done**.
4. Power the block with redstone (a button, lever, or redstone torch).
5. A falling block tower will spawn an activator rail powered by a redstone block, instantly executing all commands sequentially and removing the minecarts cleanly!

---

## Русский

### 🌟 Особенности

- **🌐 100% Client-Side веб-приложение:**
  - Все вычисления, экранирование строк и сборка SNBT происходят исключительно в браузере (без запросов к бэкенду, конфиденциально, работает оффлайн).
  - Работает из коробки простым открытием `index.html` или через Docker.
- **⚡ Удобное управление командами:**
  - Быстрое добавление команд по клавише <kbd>Enter</kbd>.
  - **Пакетный ввод (Batch Import):** вставка десятков и сотен команд за раз из буфера обмена или файлов `.mcfunction`. Пустые строки и комментарии с символом `#` автоматически отсекаются.
  - **Drag & Drop** сортировка и кнопки перемещения Вверх / Вниз.
  - Редактирование команд на месте без необходимости повторного ввода.
  - Встроенные шаблоны (Стартовый набор воина, Подготовка арены, Режим строителя).
- **⚙️ Настройки генерации:**
  - Настраиваемые координаты спавна (по умолчанию `~ ~1 ~`).
  - Автоматическое удаление вагонеток после срабатывания (`kill @e[type=minecraft:command_block_minecart,distance=..3]`).
  - Опция нормализации начального слэша `/`.
  - Режим живого обновления (Live Update) на лету.
- **📊 Анализ и счетчики:**
  - Подсчет общего количества символов и количества создаваемых вагонеток.
  - Индикация лимитов длины (лимит чата — 256 символов, лимит Командного блока — до 32 500 символов).
- **📋 Экспорт:**
  - Копирование в буфер обмена в один клик с визуальными уведомлениями.
  - Скачивание файла команды (`.txt` / `.mcfunction`).
  - Автосохранение списка в `localStorage`.
  - Переключатель языка интерфейса (Русский / English).

---

### 🚀 Запуск и использование

#### Вариант 1: Онлайн-версия
Откройте [https://mcg.koob.me](https://mcg.koob.me) в любом браузере.

#### Вариант 2: Локальный запуск (без установки зависимостей)
Склонируйте репозиторий и откройте `index.html` двойным кликом:
```bash
git clone https://github.com/Koob-ise/Minecraft-Command-Generator.git
cd Minecraft-Command-Generator
# Windows:
start index.html
# Linux:
xdg-open index.html
# macOS:
open index.html
```

#### Вариант 3: Запуск в Docker
```bash
docker compose up -d
```
Приложение станет доступно по адресу `http://localhost:8009`.

---

### 🎮 Инструкция по использованию в Minecraft

1. Выдайте себе командный блок:
   ```mcfunction
   /give @p command_block
   ```
2. Установите его на землю и откройте правым кликом мыши.
3. Вставьте скопированную команду с помощью <kbd>Ctrl</kbd> + <kbd>V</kbd> и нажмите **Готово**.
4. Активируйте блок сигналом редстоуна (кнопка, рычаг или факел).
5. Появится башня из падающих блоков (активирующий рельс на блоке редстоуна), которая поочередно выполнит все команды и автоматически удалит вагонетки.
