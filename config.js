/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2347057440801'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Ripper Bot'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Ripper Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU246jOBT8F78mmgABQiK1tBBIoHPp3ANZzYMBAw5gwJgEGOXfV6SnZ/phd9T75pvq1Kmq4x+AZLhEC9SAyQ+QU3yDDHVL1uQITIBWBQGioA98yCCYAOv1fuCLV9u7ecXS0fULSdR0Js/ERId8QHXhVm+Y68mzc/wCHn2QV26CvT8ABl75lpwMfTO/nESpVQYbrYoaAbncckzym35jlQZNu4inzgt4dIgQU0xCI49QiihMFqjZQEy/Rj9c5JVLbAeh4ahoA8OWmGompqQptpjW7cX3eGdvpq5AlC/SjwajuywrqnAdndEmGZnL2rWCyIrJrrie+Wp8IaI7x9H0+E6/xCFBvuUjwjBrvqw7UhXOoHpIBk2CbZhfqnou8txpJSKkZOF5sLu8ivHl1eLVrxHXlW1cJSf5sjNJ7inRHXK27p+14FwvQ3kjZq2ZapH8dsXhZ+Ib+pGV+P/o3piJXfcwqTl3tOJGZD+U7GZ0DpNZHBtlNku8Y1LueG4ar75Gf+vvq/qQugY7UoMY4ZqkyRm+cqoo2XuSt9K4dxGHEnK2n3SHrKJ/Yrlc8KeekUbucEbHuby8CfYWOwwaQupnVWDvVm0d38a+EotuoVIpOl8x36pLwbsN7GFxlum02kVNnSw2KT+PGsKM9Lp9eXYUo8bywYR/9AFFIS4ZhQxnpDsTxHEfQP+2Rx5F7CkvYBtoDAyGr3s3bdCBcTubXePL7oCWnDA4axqTp5ob9UL5+AL6IKeZh8oS+SYuWUabFSpLGKISTP7+3gcE1ezduK7ckO+DANOSHUmVJxn0P1z9uISel1WE7RviTbsFomDC/T5GjGESlp2OFYHUi/ANTSPISjAJYFKiXx0iinwwYbRCv6Z2mvmd8CfbUZTl7gz6IH0agn0wAcJQHHHSSBQ5heMngvxX+e3e4cI8/0YQA32QPN/xkjwSx6PxSBKH46HSvewuHr8odog+YhAnJZiA6RodW6Toxsr25LU1n6tOqE5DFfxu6SMb79rn29WgDkey24b7cnnZCpaGWwHb/pZmVSz6YRvXa3vGuOP25V9AwAQ4HKLaIWZIOw1X/kHdMmw5tO3tqGVJCzpQ0ytZubsZPDBoij6/lud78nqipolm7eb1du8FWzNs4vyGN0WgbC+6ZmnqS1fNRzfsoc/FWtiIrbKaYc85v4lC5he1vMsCbiy0J92U2CBQij3fcr63CSstOhZBg7XUXOjTa1Fclm9H/R6vj8JGCqpAKgp+aV9TfH9P7XNqkp+/FX7mqTOr2wYYPYefwM7CL5j3zrwLGffofwL5+Z/8x0xq8KhvFOetlyqiQafCcY1VpxxnyfC4kJf5m+mspNXhVLv+zACPx/c+yBPIgoymYAIg8WmGfdAHNKu61FokyP5QbKoeLSMM113rCSyZ+nsSDjhFJYNpDib8SBGFsThWxo9/AEjkh4s/BwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Ripper Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  