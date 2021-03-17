module.exports = {
    config:function(){
        return (
            {
                adminUsers:[process.env.adminid], //admin users' telegram id, should be numbers
                botToken: process.env.bot, // bot token

            }
        );
    }
};
