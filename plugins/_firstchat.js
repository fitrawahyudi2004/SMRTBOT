let handler = m => m

export async function all (m) {

    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.reply(m.chat, `
Hai, ${this.ucapan()}

${user.banned ? 'kamu dibanned' : `Ada yang bisa ${this.user.name} bantu?`}
`.trim(), m)
    user.pc = new Date * 1
}

export default handler