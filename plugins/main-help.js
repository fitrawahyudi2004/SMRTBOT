let handler = async (m, { conn }) => {
   let text = `
   *Fitur botz:* 
 - *Pembuat stiker*: ketik *'.stiker'* untuk membuat stiker. 
 - *Facebook Downloader* : ketik *'.facebook' * untuk mengunduh video dari Facebook. 
 - *Tiktok Downloader*  : ketik *'.tiktok' * untuk mengunduh video dari Tiktok. 
 - *Semua perintah*  : ketik *'.all' * untuk melihat semua perintah Botz. 
 - *Pemilik*  : Ketik *'.owner'* Jika Anda memiliki kebutuhan/dan tidak mengerti cara menggunakan Botz. 

 CARA PENGGUNAAN: 
 Ketik perintah yang sesuai di obrolan dengan botz. 

 Catatan: 
 - Pastikan untuk mengirim pesan ke Botz dalam bentuk teks atau keterangan. 
 - Beberapa fitur memerlukan tautan untuk diunduh, jadi pastikan Anda mengirim tautan dengan benar. 

 Jangan ragu untuk bertanya kepada pemilik Botz apakah Anda mengalami kesulitan atau memiliki pertanyaan lebih lanjut. 

 Terima kasih telah menggunakan Botz!`
  
  return conn.reply(m.chat, text, m)
}

handler.help = ['help']
handler.tags = ['main']
handler.command = /^help$/i

export default handler
