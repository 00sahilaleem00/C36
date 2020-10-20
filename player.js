class Player {
    constructor(){
        this.name = null;
        this.index = null;
        this.distace = 0;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });       
    }

    static getInformation(){
        var playersRef = database.ref('players');
        playersRef.on("value",data => allPlayersInformation = data.val());
    }
}