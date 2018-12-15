const Discord = require('Discord.js');

const client = new Discord.Client();

var prefix = "&";

client.login("NTIyNjkzMDA5MTUwODM2NzM5.DvcDPA.xTb5EbBJa-sNvsMvvDxCyXoUT2U")

client.on("ready", () => {
    console.log("Je suis pret")
    client.user.setGame("ce faire développer");
});

if(message.content === prefix + "aide"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#CC0000")
    .setTitle("Commande disponible")
    .setDescription("Commande disponible du bot")
    .addField("&aide", "Affiche les commande du bot")
    .setFooter("Menu d'aide")
    message.Chanel.sendMessage(help_embed);
    console.log("Un utilisateur a effectué la commande d'aide !")
}    
