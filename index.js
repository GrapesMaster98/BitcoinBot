const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('¡Estoy encendido!');


    client.user.setPresence({
      activity: {
        name: 'OwO No me leas culero.',
        type: 'PLAYING'
      },
      status: 'dnd'
    });
});

let prefix = process.env.PREFIX;

client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return; 
    if (message.author.bot) return;;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'sugerencia') {
      let text = args.join(' ');
      let canal = client.channels.cache.get('555558322175082536');
      let cComand = client.channels.cache.get('544191484270739466');

      if(!text) return message.reply('¡No sugeriste nada! | `b!sugerir {sugerencia}`');

      if(message.channel !== cComand) return message.reply('¡No puedes usar esto aquí! Usa el canal <#544191484270739466>')

      let embed = new Discord.MessageEmbed()
      .setTitle(`Nueva sugerencia de ${message.author.username}`)
      .setDescription(`${text}`)      
      .setColor([255, 149, 0])
      .setThumbnail(message.author.displayAvatarURL());

      message.channel.send('🕞 Enviando sugerencia...').then(async m => await m.edit('✅ ¡Enviada!'));

      canal.send(embed).then(async message => {
        await message.react('👍');
        await message.react('👎');
      });
    }
    
    if(command === 'clear') {
      let msgToReact = args.join(' ');

      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('No puedes usar esto.');

      if(msgToReact === 0) return message.reply('No puedo borrar el aire.');
      if(msgToReact > 100) return message.reply('No puedo hacer eso.')

      if(msgToReact => 1 < 100) {
        message.channel.send('Borrando...').then(async message => {
          await message.channel.bulkDelete(msgToReact);
          message.channel.send(`He borrado ${msgToReact} mensajes.`);
        });
      }
    }

    if(command === 'redes') {
      const embed = new Discord.MessageEmbed()
      .setTitle('Redes oficiales de **BitcoinMC**')
      .setDescription('Estás son nuestras redes sociales. ¡Siguenos en todas!')
      .setThumbnail(client.user.displayAvatarURL())
      .addField('🐦 **__Twitter:__**', 'Da click [aqui](https://twitter.com/BitcoinMcN)', true)
      .addField('💬 **__Foro:__**', 'Da click [aqui](https://foro.bitcoinmc.net)', true)
      .addField('💰 **__Tienda:__**', 'Da click [aqui](https://store.bitcoinmc.net)', true)
      .addField('📹 **__YouTube:__**', 'Da click [aqui](https://www.youtube.com/channel/UC_E2Nj1yvadcqh125H9B2oQ)', true)
      .setColor('RANDOM');
      
      message.channel.send(embed);
    }
});

client.login(process.env.TOKEN);