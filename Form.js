class Form{
    constructor(){
      this.input=createInput("Enter Your Name")
      this.button=createButton("Play")
      this.greeting=createElement("h2")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
       var title=createElement('h1')
       title.html("MultiPlayer car racing game")
       title.position(420,0)
       this.input.position(580,200)
       this.button.position(620,300)

       this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value() 
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("Hi "+player.name)
        this.greeting.position(600,300)
       })
    }
}