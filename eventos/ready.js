module.exports = (client) => {
    client.user.setPresence(
        {
            status: "ONLINE",
            activity: {
                name: "En WolfLand",
                type: "PLAYING"
            }
        }
    );
}