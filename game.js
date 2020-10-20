class Game {
    constructor(){

    }
    getGameState(){
        var ref = database.ref('gameState');
        ref.on('value', function(data){
            gameState = data.val();
        } );
    }
    setGameState(state){
        var ref = database.ref('/');
        ref.update({
            gameState: state
        });
    }
    createForm(){
        if(gameState == 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
    }
}