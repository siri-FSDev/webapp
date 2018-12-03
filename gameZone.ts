
/** Hierarchical inheritance  real time example related to Games. ***/

class Games {
 
 public totalplayers:number;
 private gametype1:string='IndoorGame';
 private gametype2:string='OutdoorGame';
 
   setTotalplayers(totalplayers:number){
      if(totalplayers <4){
          console.log("It's an " +this.gametype1);
       }
       else if(totalplayers >2){
          console.log("It's an " + this.gametype2);
       }
       this.totalplayers=totalplayers;
   }
   getTotalplayers():number{
      if(this.totalplayers <4){
         console.log("Numbers of players " + this.totalplayers);
         return this.totalplayers;
   
      }
     else if(this.totalplayers >2){
        console.log("Numbers of players " + this.totalplayers);
         return this.totalplayers;
      }
   
   }

}
class Cricket extends Games{
 
    private teamname:string ="India";
    private toss:boolean;
    private selection:string ="Bating";
    
    setgameDescription(toss:boolean){
        if(toss==false){
        if(this.totalplayers>4){
            console.log("Cricket team  detail");
         }
         if(this.totalplayers<4){
             console.log("Its not a cricket team")
         }
        }
    }
    getgameDescription():boolean{
        if(this.toss==false){
        if(this.totalplayers>4){
            console.log("Team Name " + this.teamname +  "Won toss "+ this.toss + "selected " +this.selection);
            return this.toss;
    
         }
         if(this.totalplayers<4){
            console.log("Team Name " + this.teamname +  "Won toss "+this.toss + "selected " +this.selection);
            return this.toss;
    
         }
        }
    }
    
    }
    class Tennis extends Games{
     
        private maxplayers:number;
         setGameplayed(maxplayers:number):void{
             if(maxplayers == 2){
                 console.log("Its Tennis")
             }


         }
        
         getGamePlayed():number{
             return;
         }
    
    }
    class VideoGames extends Games{
        private country:string;

        setgameLovers(country:string):void{

            if(this.totalplayers>2){
                console.log("Most of the countries like Video Games")
            }
            if(this.totalplayers==0){
                console.log("None of the country like video games");
                return;
            }
            country=this.country;
        }

        getgameLovers():any{
            if(this.totalplayers>2){
                console.log("Adult  And Children love this game")
            }
            if(this.totalplayers==0){
                console.log("Every one Hate this game");
            }
        }
    
    }


 var gameday = new Cricket();
 gameday.setTotalplayers(222);
 gameday.getTotalplayers();
 gameday.setgameDescription(false);
 gameday.getgameDescription();
 

 var GameLovers = new VideoGames();
 GameLovers.setgameLovers("INDIA : USA");


 





