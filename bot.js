const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "/";
client.on("message", message => {

            if (message.content.startsWith(prefix + "op")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Over Power`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.login(NjgyNzAzODcyNzQxMjEyMTk3.XlhJDQ.Wo7s9KLpXiNqbk3hEy02hpAqnyk);
