let handler = async (m, { conn, args, usedPrefix }) => {
  let res = await conn.revokeInvite(m.chat)
  m.reply('𝗟𝗶𝗻𝗸 𝗚𝗿𝗼𝘂𝗽 𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗗𝗶𝗿𝗲𝘀𝗲𝘁!\n\nLink Baru:\nhttps://chat.whatsapp.com/' + res.code)
}
handler.help = ['revoke']
handler.tags = ['group']
handler.command = /^re(voke|new)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
