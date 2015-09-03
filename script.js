//Logic
//Conditions
//Loops
//arrays
//constructors
//callbacks

//Constants
var startingHealth= 100;
var startingHits= 0;
var playerName= prompt("Please enter the name of the person you'd like to Slap, Punch and Kick:", "");

// Item Constructor HERE

var Item = function(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){
     //...
    }
}

//global items placeholder HERE
var items = {
    shield:new Item("Shield",0.3,"This is an awesome shield!"),
    helmet:new Item("Helmet",0.2,"Strong helmet!"),
    gloves:new Item("Gloves",0.1,"Chain Mail Gloves rock!")
}

var player = {
  name: playerName,
  health: startingHealth,
  hits: startingHits,
  items:[items.shield],//addMods() is only using shield and not the others -Spencer
  addMods: function() {
    var runningTotal = 0;
    for (var i = 0; i < this.items.length; i++) {
        runningTotal += this.items[i].modifier;
    }
    return runningTotal;
  },
  slap: function() {
    this.hit(1);
  },
  punch: function() {
    this.hit(5);
  },
  kick: function() {
    this.hit(10);
  },
  hit: function(damage) {
    this.health -= (damage - (damage * this.addMods()));
    this.hits++;
    if (this.health <= 0) {
      this.health = 0;
    }
    update();
    if (this.health <= 0) {
      alert("You're sick... hitting a man when he's down and out?...");
    }
  },
  reset: function() {
      this.health = startingHealth,
      this.hits = startingHits,
    update();
  },
}

function update() {
  document.getElementById("health").innerText = player.health;
  document.getElementById("name").innerText = player.name;
  document.getElementById("hits").innerText = player.hits;
  
  if(player.health <= 0){
         document.getElementById("player-panel").classList.add("panel-danger")
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger")
    }
  //IF HEALTH STATEMENT

  
}

update();

