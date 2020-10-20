class Form {
    constructor(){
        this.input = createInput('PLEASE ENTER NAME');
        this.button = createButton('ENTER');
        this.greeting = createElement('h3');
    }

    display(){
        var title = createElement('h2');
        title.html('CAR RACE!');
        title.position(100,400);

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount+=1;
            player.update();
            player.updateCount(playerCount);

            player.index = playerCount;

            this.greeting.html("Hello "+name);
            this.greeting.position(130,160);
        });
    }
}