class Form{
    constructor(){

    }
    display() {

        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(600,100);


        var input=createInput("Name");
        var button=createButton("Play");
        input.position(500,200);
        button.position(700,250);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            
            var name=input.value();

    
            var greeting=createElement('h3');
            greeting.html("Hello "+name);
            greeting.position(700,200);
            

        })
    }

    }
