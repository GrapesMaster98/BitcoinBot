module.exports = {
    noInv: function (s) {
        return / (https?:\/\/)?(www.\)?(discord.\ (gg | io | me | li | xyz | ga) | discordapp\.com\/invite)\/.+[a-z]/g.test(s);
    }
}