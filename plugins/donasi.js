let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ *• Dana :* _081515696780_
│ *• Gopay :* _081515696780_
│ *• Indosat :* _081515696780_
│ *• Tri :* _089606790112_
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
