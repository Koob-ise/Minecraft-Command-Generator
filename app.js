/**
 * Minecraft Command Generator - Client-Side Engine
 * 100% Frontend execution. No server requests or dependencies.
 */

// --- Translations ---
const I18N = {
  ru: {
    subtitle: "Объединение множества команд Minecraft Java в одну (1-Command Block)",
    client_only: "100% Client-Side",
    input_title: "Список команд",
    batch_import: "Пакетный ввод",
    presets: "Примеры",
    clear: "Очистить",
    input_placeholder: "Введите команду (например: give @p diamond 64)",
    add: "Добавить",
    empty_title: "Команды пока не добавлены",
    empty_desc: "Введите команду выше, вставьте список пачкой или загрузите готовый шаблон.",
    quick_starter: "⚡ Набор выживания",
    quick_arena: "⚔️ Арена эффектов",
    result_title: "Результат генерации",
    generate: "Сгенерировать",
    label_coords: "Координаты:",
    label_autokill: "Авто-удаление вагонеток",
    label_live: "Живое обновление",
    label_strip_slash: "Нормализовать '/'",
    chars_label: "Символов:",
    minecarts_label: "Вагонеток:",
    wrap_text: "Перенос строк",
    output_placeholder: "Здесь появится итоговая команда для вставки в Командный блок...",
    copy: "Скопировать команду",
    copied: "Скопировано в буфер!",
    download: "Скачать файл",
    guide_title: "Как использовать в игре?",
    guide_step1: "Выдайте себе командный блок в Minecraft: <code>/give @p command_block</code>",
    guide_step2: "Установите его на землю и откройте правой кнопкой мыши.",
    guide_step3: "Вставьте скопированную команду с помощью <kbd>Ctrl</kbd> + <kbd>V</kbd>.",
    guide_step4: "Активируйте блок сигналом редстоуна (кнопка, рычаг или факел).",
    guide_step5: "Спавнится башня из активирующего рельса и блока редстоуна, которая последовательно выполнит все команды и автоматически удалит вагонетки!",
    guide_note: "💡 <strong>Подсказка:</strong> Командный блок поддерживает команды длиной до 32 500 символов, что позволяет упаковывать сотни команд в один клик.",
    standalone_note: "Работает полностью оффлайн прямо в вашем браузере",
    modal_batch_title: "Пакетный импорт команд",
    modal_batch_desc: "Вставьте несколько команд (по одной на каждой строке). Пустые строки и комментарии с # будут пропущены.",
    modal_batch_replace: "Заменить текущий список (иначе добавить к существующим)",
    modal_batch_submit: "Импортировать",
    cancel: "Отмена",
    close: "Закрыть",
    modal_presets_title: "Готовые шаблоны команд",
    preset_starter_name: "Стартовый набор воина",
    preset_starter_desc: "Незеритовый меч, кирка, комплект брони, золотые яблоки и факелы.",
    preset_arena_name: "Подготовка арены",
    preset_arena_desc: "Смена дня, ясная погода, включение эффектов ночного зрения и скорости.",
    preset_creative_name: "Режим строителя",
    preset_creative_desc: "Творческий режим, эффект левитации, набор структурных и барьерных блоков.",
    limit_chat_ok: "Чат OK (≤256)",
    limit_block_ok: "Командный блок OK",
    limit_exceeded: "Превышен лимит (32500)!",
    toast_cmd_added: "Команда добавлена",
    toast_batch_imported: "Импортировано команд: {n}",
    toast_cleared: "Все команды очищены",
    toast_preset_loaded: "Шаблон загружен: {name}",
    toast_empty_cmd: "Введите текст команды",
    toast_nothing_to_copy: "Нечего копировать",
    toast_copied: "Команда скопирована в буфер обмена!",
    toast_downloaded: "Файл скачан",
    toast_deleted: "Команда удалена"
  },
  en: {
    subtitle: "Combine multiple Minecraft Java commands into a single 1-Command Block",
    client_only: "100% Client-Side",
    input_title: "Command List",
    batch_import: "Batch Import",
    presets: "Presets",
    clear: "Clear All",
    input_placeholder: "Enter command (e.g. give @p diamond 64)",
    add: "Add",
    empty_title: "No commands added yet",
    empty_desc: "Enter a command above, paste a list in batch, or load a preset template.",
    quick_starter: "⚡ Survival Kit",
    quick_arena: "⚔️ Battle Arena",
    result_title: "Generation Result",
    generate: "Generate",
    label_coords: "Coordinates:",
    label_autokill: "Auto-kill minecarts",
    label_live: "Live update",
    label_strip_slash: "Normalize '/'",
    chars_label: "Characters:",
    minecarts_label: "Minecarts:",
    wrap_text: "Toggle Wrap",
    output_placeholder: "Generated single command will appear here for pasting into a Command Block...",
    copy: "Copy Command",
    copied: "Copied to clipboard!",
    download: "Download File",
    guide_title: "How to use in game?",
    guide_step1: "Give yourself a command block in Minecraft: <code>/give @p command_block</code>",
    guide_step2: "Place it on the ground and open it with Right-Click.",
    guide_step3: "Paste the generated command with <kbd>Ctrl</kbd> + <kbd>V</kbd>.",
    guide_step4: "Power the block with a redstone signal (button, lever, or torch).",
    guide_step5: "A falling block tower spawns an activator rail and redstone block, executing all commands in sequence and automatically cleaning up minecarts!",
    guide_note: "💡 <strong>Tip:</strong> Command blocks support commands up to 32,500 characters, enabling you to bundle hundreds of commands together.",
    standalone_note: "Runs entirely offline inside your browser",
    modal_batch_title: "Batch Import Commands",
    modal_batch_desc: "Paste multiple commands (one per line). Empty lines and comments with # are ignored.",
    modal_batch_replace: "Replace current list (otherwise append to existing)",
    modal_batch_submit: "Import",
    cancel: "Cancel",
    close: "Close",
    modal_presets_title: "Pre-made Command Presets",
    preset_starter_name: "Warrior Starter Kit",
    preset_starter_desc: "Netherite sword, pickaxe, full armor set, golden apples, and torches.",
    preset_arena_name: "Arena Setup",
    preset_arena_desc: "Set noon, clear weather, apply night vision and speed effects.",
    preset_creative_name: "Builder Mode",
    preset_creative_desc: "Creative mode, levitation effect, structural and barrier blocks.",
    limit_chat_ok: "Chat OK (≤256)",
    limit_block_ok: "Command Block OK",
    limit_exceeded: "Limit Exceeded (32500)!",
    toast_cmd_added: "Command added",
    toast_batch_imported: "Imported {n} commands",
    toast_cleared: "All commands cleared",
    toast_preset_loaded: "Loaded preset: {name}",
    toast_empty_cmd: "Please enter a command",
    toast_nothing_to_copy: "Nothing to copy",
    toast_copied: "Command copied to clipboard!",
    toast_downloaded: "File downloaded",
    toast_deleted: "Command deleted"
  }
};

// --- Presets Data ---
const PRESETS = {
  starter: {
    nameRu: "Стартовый набор воина",
    nameEn: "Warrior Starter Kit",
    commands: [
      "give @p netherite_sword[custom_name='{\"text\":\"Excalibur\",\"color\":\"gold\",\"bold\":true}'] 1",
      "give @p netherite_pickaxe 1",
      "give @p netherite_helmet 1",
      "give @p netherite_chestplate 1",
      "give @p netherite_leggings 1",
      "give @p netherite_boots 1",
      "give @p golden_apple 16",
      "give @p torch 64",
      "tellraw @p {\"text\":\"[✔] Стартовый набор успешно выдан!\",\"color\":\"green\",\"bold\":true}"
    ]
  },
  arena: {
    nameRu: "Подготовка арены",
    nameEn: "Arena Setup",
    commands: [
      "time set day",
      "weather clear 1000000",
      "difficulty hard",
      "effect give @a night_vision 99999 0 true",
      "effect give @a speed 99999 1 true",
      "effect give @a saturation 10 255 true",
      "title @a times 10 40 10",
      "title @a title {\"text\":\"АРЕНА ГОТОВА!\",\"color\":\"red\",\"bold\":true}",
      "title @a subtitle {\"text\":\"Да начнется битва!\",\"color\":\"yellow\"}"
    ]
  },
  creative: {
    nameRu: "Режим строителя",
    nameEn: "Builder Mode",
    commands: [
      "gamemode creative @p",
      "give @p structure_block 1",
      "give @p barrier 64",
      "give @p light[block_state={level:\"15\"}] 64",
      "effect give @p night_vision infinite 0 true",
      "tellraw @p {\"text\":\"[🏗] Режим строителя активирован!\",\"color\":\"aqua\"}"
    ]
  }
};

// --- Application State ---
const state = {
  commands: [],
  coords: "~ ~1 ~",
  autoKill: true,
  liveUpdate: true,
  stripSlash: true,
  currentLang: localStorage.getItem("mc_cmd_lang") || "ru",
  wrapText: true
};

// --- DOM Elements ---
const elements = {
  commandInput: document.getElementById("command-input"),
  addForm: document.getElementById("add-command-form"),
  commandList: document.getElementById("command-list"),
  emptyState: document.getElementById("empty-state"),
  commandCountBadge: document.getElementById("command-count-badge"),
  outputText: document.getElementById("output-text"),
  charCount: document.getElementById("char-count"),
  minecartCount: document.getElementById("minecart-count"),
  limitTag: document.getElementById("char-limit-indicator"),
  generateBtn: document.getElementById("generate-btn"),
  copyBtn: document.getElementById("copy-btn"),
  copyBtnText: document.getElementById("copy-btn-text"),
  copyIcon: document.getElementById("copy-icon"),
  checkIcon: document.getElementById("check-icon"),
  downloadBtn: document.getElementById("download-btn"),
  clearAllBtn: document.getElementById("clear-all-btn"),
  batchModalBtn: document.getElementById("batch-modal-btn"),
  presetsBtn: document.getElementById("presets-btn"),
  optCoords: document.getElementById("opt-coords"),
  optAutokill: document.getElementById("opt-autokill"),
  optLive: document.getElementById("opt-live"),
  optStripSlash: document.getElementById("opt-strip-slash"),
  wrapToggleBtn: document.getElementById("wrap-toggle-btn"),
  langBtn: document.getElementById("lang-btn"),
  langText: document.getElementById("lang-text"),
  toast: document.getElementById("toast"),
  
  // Modals
  batchModal: document.getElementById("batch-modal"),
  batchCloseBtn: document.getElementById("batch-close-btn"),
  batchCancelBtn: document.getElementById("batch-cancel-btn"),
  batchSubmitBtn: document.getElementById("batch-submit-btn"),
  batchInput: document.getElementById("batch-input"),
  batchReplaceCheck: document.getElementById("batch-replace-check"),
  
  presetsModal: document.getElementById("presets-modal"),
  presetsCloseBtn: document.getElementById("presets-close-btn"),
  presetsCancelBtn: document.getElementById("presets-cancel-btn")
};

// --- Initialization ---
function init() {
  loadSavedState();
  applyLanguage(state.currentLang);
  setupEventListeners();
  renderList();
  recalculate();
}

// --- Persistence ---
function saveState() {
  try {
    localStorage.setItem("mc_cmd_list", JSON.stringify(state.commands));
    localStorage.setItem("mc_cmd_coords", state.coords);
    localStorage.setItem("mc_cmd_autokill", state.autoKill ? "1" : "0");
    localStorage.setItem("mc_cmd_live", state.liveUpdate ? "1" : "0");
    localStorage.setItem("mc_cmd_strip", state.stripSlash ? "1" : "0");
  } catch (e) {
    console.warn("LocalStorage save error:", e);
  }
}

function loadSavedState() {
  try {
    const savedList = localStorage.getItem("mc_cmd_list");
    if (savedList) {
      state.commands = JSON.parse(savedList);
    }
    const savedCoords = localStorage.getItem("mc_cmd_coords");
    if (savedCoords) {
      state.coords = savedCoords;
      elements.optCoords.value = savedCoords;
    }
    const savedAutokill = localStorage.getItem("mc_cmd_autokill");
    if (savedAutokill !== null) {
      state.autoKill = savedAutokill === "1";
      elements.optAutokill.checked = state.autoKill;
    }
    const savedLive = localStorage.getItem("mc_cmd_live");
    if (savedLive !== null) {
      state.liveUpdate = savedLive === "1";
      elements.optLive.checked = state.liveUpdate;
    }
    const savedStrip = localStorage.getItem("mc_cmd_strip");
    if (savedStrip !== null) {
      state.stripSlash = savedStrip === "1";
      elements.optStripSlash.checked = state.stripSlash;
    }
  } catch (e) {
    console.warn("LocalStorage load error:", e);
  }
}

// --- Localization ---
function applyLanguage(lang) {
  state.currentLang = lang;
  localStorage.setItem("mc_cmd_lang", lang);
  elements.langText.textContent = lang === "ru" ? "EN" : "RU";

  const dict = I18N[lang] || I18N.ru;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  updateLimitTag(elements.outputText.value.length);
}

function t(key, params = {}) {
  const dict = I18N[state.currentLang] || I18N.ru;
  let text = dict[key] || key;
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(new RegExp(`\\{${k}\\}`, "g"), v);
  }
  return text;
}

// --- Core Generator Algorithm (100% Frontend) ---
/**
 * Creates single-command falling block tower for Minecraft Java Edition.
 * All SNBT serialization runs purely in JavaScript in the browser.
 */
function createMinecraftCommand(commandList, options = {}) {
  const coords = options.coords || "~ ~1 ~";
  const autoKill = options.autoKill !== false;
  const stripSlash = options.stripSlash !== false;

  const validCommands = commandList
    .map(cmd => cmd.trim())
    .filter(cmd => cmd.length > 0 && !cmd.startsWith("#"));

  if (validCommands.length === 0) {
    return "";
  }

  const passengers = [];

  for (const rawCmd of validCommands) {
    let cmd = rawCmd;
    if (stripSlash && cmd.startsWith("/")) {
      cmd = cmd.substring(1);
    }
    // Escape backslashes and double quotes for Minecraft SNBT string
    const escaped = cmd.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    passengers.push(`{id:"command_block_minecart",Command:"${escaped}"}`);
  }

  // Auto-kill minecarts passenger
  if (autoKill) {
    passengers.push('{id:"command_block_minecart",Command:"kill @e[type=minecraft:command_block_minecart,distance=..3]"}');
  }

  // Activator rail falling block
  const passengersString = passengers.join(",");
  const middlePassenger = `{id:"falling_block",BlockState:{Name:"activator_rail"},Health:0,Passengers:[${passengersString}]}`;

  // Redstone block base falling block
  const nbt = `{id:"falling_block",BlockState:{Name:"redstone_block"},Passengers:[${middlePassenger}]}`;

  return `summon falling_block ${coords} ${nbt}`;
}

// --- UI Rendering ---
function renderList() {
  elements.commandList.innerHTML = "";
  const count = state.commands.length;
  elements.commandCountBadge.textContent = count;

  if (count === 0) {
    elements.emptyState.classList.remove("hidden");
  } else {
    elements.emptyState.classList.add("hidden");

    state.commands.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "command-item";
      li.draggable = true;
      li.dataset.id = item.id;
      li.dataset.index = index;

      li.innerHTML = `
        <span class="command-index">#${index + 1}</span>
        <span class="command-text">${escapeHtml(item.text)}</span>
        <div class="command-actions">
          <button class="btn-icon btn-action-up" title="Переместить вверх" aria-label="Вверх" ${index === 0 ? "disabled" : ""}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </button>
          <button class="btn-icon btn-action-down" title="Переместить вниз" aria-label="Вниз" ${index === count - 1 ? "disabled" : ""}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <button class="btn-icon btn-action-edit" title="Редактировать" aria-label="Редактировать">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          </button>
          <button class="btn-icon btn-action-del" title="Удалить" aria-label="Удалить">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      `;

      // Drag & Drop
      setupDragEvents(li);
      elements.commandList.appendChild(li);
    });
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function recalculate() {
  const commandTexts = state.commands.map(c => c.text);
  const result = createMinecraftCommand(commandTexts, {
    coords: state.coords,
    autoKill: state.autoKill,
    stripSlash: state.stripSlash
  });

  elements.outputText.value = result;
  const charLength = result.length;
  elements.charCount.textContent = charLength.toLocaleString();
  
  const minecarts = state.commands.length > 0 ? (state.commands.length + (state.autoKill ? 1 : 0)) : 0;
  elements.minecartCount.textContent = minecarts;

  updateLimitTag(charLength);

  const hasOutput = result.length > 0;
  elements.copyBtn.disabled = !hasOutput;
  elements.downloadBtn.disabled = !hasOutput;
}

function updateLimitTag(len) {
  const tag = elements.limitTag;
  if (len === 0) {
    tag.className = "limit-tag";
    tag.textContent = t("limit_chat_ok");
  } else if (len <= 256) {
    tag.className = "limit-tag";
    tag.textContent = t("limit_chat_ok");
  } else if (len <= 32500) {
    tag.className = "limit-tag warning";
    tag.textContent = t("limit_block_ok");
  } else {
    tag.className = "limit-tag danger";
    tag.textContent = t("limit_exceeded");
  }
}

// --- User Actions ---
function addSingleCommand(text) {
  const clean = text.trim();
  if (!clean) {
    showToast(t("toast_empty_cmd"), "error");
    return;
  }
  state.commands.push({
    id: "cmd_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    text: clean
  });
  saveState();
  renderList();
  if (state.liveUpdate) recalculate();
  showToast(t("toast_cmd_added"), "success");
}

function deleteCommand(index) {
  state.commands.splice(index, 1);
  saveState();
  renderList();
  if (state.liveUpdate) recalculate();
  showToast(t("toast_deleted"));
}

function moveCommand(fromIndex, toIndex) {
  if (toIndex < 0 || toIndex >= state.commands.length) return;
  const item = state.commands.splice(fromIndex, 1)[0];
  state.commands.splice(toIndex, 0, item);
  saveState();
  renderList();
  if (state.liveUpdate) recalculate();
}

function enterEditMode(itemEl, index) {
  const current = state.commands[index];
  itemEl.innerHTML = `
    <span class="command-index">#${index + 1}</span>
    <div class="command-edit-wrapper">
      <input type="text" class="command-edit-input" value="${escapeHtml(current.text)}" spellcheck="false" />
      <button class="btn btn-emerald btn-xs save-edit-btn">${t("add")}</button>
      <button class="btn btn-outline btn-xs cancel-edit-btn">${t("cancel")}</button>
    </div>
  `;

  const input = itemEl.querySelector(".command-edit-input");
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);

  const save = () => {
    const val = input.value.trim();
    if (val) {
      state.commands[index].text = val;
      saveState();
    }
    renderList();
    if (state.liveUpdate) recalculate();
  };

  const cancel = () => {
    renderList();
  };

  itemEl.querySelector(".save-edit-btn").addEventListener("click", save);
  itemEl.querySelector(".cancel-edit-btn").addEventListener("click", cancel);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      save();
    } else if (e.key === "Escape") {
      e.preventDefault();
      cancel();
    }
  });
}

function clearAll() {
  if (state.commands.length === 0) return;
  state.commands = [];
  saveState();
  renderList();
  recalculate();
  showToast(t("toast_cleared"));
}

function loadPreset(key) {
  const preset = PRESETS[key];
  if (!preset) return;
  state.commands = preset.commands.map(cmd => ({
    id: "cmd_" + Math.random().toString(36).substr(2, 9),
    text: cmd
  }));
  saveState();
  renderList();
  recalculate();
  const name = state.currentLang === "ru" ? preset.nameRu : preset.nameEn;
  showToast(t("toast_preset_loaded", { name }), "success");
}

function batchImport(text, replaceExisting) {
  const lines = text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0 && !line.startsWith("#"));

  if (lines.length === 0) {
    showToast(t("toast_empty_cmd"), "error");
    return;
  }

  const newItems = lines.map(line => ({
    id: "cmd_" + Math.random().toString(36).substr(2, 9),
    text: line
  }));

  if (replaceExisting) {
    state.commands = newItems;
  } else {
    state.commands.push(...newItems);
  }

  saveState();
  renderList();
  recalculate();
  showToast(t("toast_batch_imported", { n: lines.length }), "success");
}

async function copyOutput() {
  const text = elements.outputText.value;
  if (!text) {
    showToast(t("toast_nothing_to_copy"), "error");
    return;
  }

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      elements.outputText.select();
      document.execCommand("copy");
    }

    elements.copyIcon.classList.add("hidden");
    elements.checkIcon.classList.remove("hidden");
    elements.copyBtnText.textContent = t("copied");
    elements.copyBtn.classList.add("btn-emerald");
    elements.copyBtn.classList.remove("btn-primary");

    showToast(t("toast_copied"), "success");

    setTimeout(() => {
      elements.copyIcon.classList.remove("hidden");
      elements.checkIcon.classList.add("hidden");
      elements.copyBtnText.textContent = t("copy");
      elements.copyBtn.classList.remove("btn-emerald");
      elements.copyBtn.classList.add("btn-primary");
    }, 2200);
  } catch (err) {
    console.error("Copy failed:", err);
    elements.outputText.select();
    showToast(t("toast_copied"), "success");
  }
}

function downloadOutput() {
  const text = elements.outputText.value;
  if (!text) return;

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "minecraft_command.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t("toast_downloaded"), "success");
}

// --- Drag & Drop ---
let draggedItem = null;

function setupDragEvents(li) {
  li.addEventListener("dragstart", (e) => {
    draggedItem = li;
    li.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
  });

  li.addEventListener("dragend", () => {
    if (draggedItem) {
      draggedItem.classList.remove("dragging");
      draggedItem = null;
    }
    document.querySelectorAll(".command-item").forEach(item => item.classList.remove("drag-over"));
  });

  li.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (draggedItem && draggedItem !== li) {
      li.classList.add("drag-over");
    }
  });

  li.addEventListener("dragleave", () => {
    li.classList.remove("drag-over");
  });

  li.addEventListener("drop", (e) => {
    e.preventDefault();
    li.classList.remove("drag-over");
    if (draggedItem && draggedItem !== li) {
      const fromIndex = parseInt(draggedItem.dataset.index, 10);
      const toIndex = parseInt(li.dataset.index, 10);
      moveCommand(fromIndex, toIndex);
    }
  });
}

// --- Toast ---
let toastTimeout = null;
function showToast(message, type = "normal") {
  const toast = elements.toast;
  clearTimeout(toastTimeout);

  toast.textContent = message;
  toast.className = "toast";
  if (type === "success") toast.classList.add("toast-success");
  if (type === "error") toast.classList.add("toast-error");

  toast.classList.remove("hidden");
  toastTimeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2600);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Add Command Form
  elements.addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = elements.commandInput.value;
    if (val.trim()) {
      addSingleCommand(val);
      elements.commandInput.value = "";
    }
  });

  // Delegated events for command list items
  elements.commandList.addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target) return;
    const itemEl = target.closest(".command-item");
    if (!itemEl) return;
    const index = parseInt(itemEl.dataset.index, 10);

    if (target.classList.contains("btn-action-del")) {
      deleteCommand(index);
    } else if (target.classList.contains("btn-action-up")) {
      moveCommand(index, index - 1);
    } else if (target.classList.contains("btn-action-down")) {
      moveCommand(index, index + 1);
    } else if (target.classList.contains("btn-action-edit")) {
      enterEditMode(itemEl, index);
    }
  });

  // Action Buttons
  elements.clearAllBtn.addEventListener("click", clearAll);
  elements.generateBtn.addEventListener("click", recalculate);
  elements.copyBtn.addEventListener("click", copyOutput);
  elements.downloadBtn.addEventListener("click", downloadOutput);

  // Settings
  elements.optCoords.addEventListener("input", (e) => {
    state.coords = e.target.value.trim() || "~ ~1 ~";
    saveState();
    if (state.liveUpdate) recalculate();
  });

  elements.optAutokill.addEventListener("change", (e) => {
    state.autoKill = e.target.checked;
    saveState();
    if (state.liveUpdate) recalculate();
  });

  elements.optLive.addEventListener("change", (e) => {
    state.liveUpdate = e.target.checked;
    saveState();
    if (state.liveUpdate) recalculate();
  });

  elements.optStripSlash.addEventListener("change", (e) => {
    state.stripSlash = e.target.checked;
    saveState();
    if (state.liveUpdate) recalculate();
  });

  elements.wrapToggleBtn.addEventListener("click", () => {
    state.wrapText = !state.wrapText;
    elements.outputText.classList.toggle("no-wrap", !state.wrapText);
  });

  // Language Button
  elements.langBtn.addEventListener("click", () => {
    const nextLang = state.currentLang === "ru" ? "en" : "ru";
    applyLanguage(nextLang);
  });

  // Batch Import Modal
  elements.batchModalBtn.addEventListener("click", () => {
    elements.batchInput.value = "";
    elements.batchModal.classList.remove("hidden");
    elements.batchInput.focus();
  });

  const closeBatch = () => elements.batchModal.classList.add("hidden");
  elements.batchCloseBtn.addEventListener("click", closeBatch);
  elements.batchCancelBtn.addEventListener("click", closeBatch);
  elements.batchModal.addEventListener("click", (e) => {
    if (e.target === elements.batchModal) closeBatch();
  });

  elements.batchSubmitBtn.addEventListener("click", () => {
    const text = elements.batchInput.value;
    const replace = elements.batchReplaceCheck.checked;
    batchImport(text, replace);
    closeBatch();
  });

  // Presets Modal
  elements.presetsBtn.addEventListener("click", () => {
    elements.presetsModal.classList.remove("hidden");
  });

  const closePresets = () => elements.presetsModal.classList.add("hidden");
  elements.presetsCloseBtn.addEventListener("click", closePresets);
  elements.presetsCancelBtn.addEventListener("click", closePresets);
  elements.presetsModal.addEventListener("click", (e) => {
    if (e.target === elements.presetsModal) closePresets();
  });

  document.querySelectorAll(".preset-card").forEach(card => {
    card.addEventListener("click", () => {
      const presetKey = card.dataset.preset;
      loadPreset(presetKey);
      closePresets();
    });
  });

  // Quick preset buttons on empty state
  document.querySelectorAll(".preset-quick-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      loadPreset(btn.dataset.preset);
    });
  });

  // Global Escape key to close modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBatch();
      closePresets();
    }
  });
}

// Start application
document.addEventListener("DOMContentLoaded", init);
