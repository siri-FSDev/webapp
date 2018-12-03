/** Hierarchical inheritance  real time example related to Games. ***/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Games = /** @class */ (function () {
    function Games() {
        this.gametype1 = 'IndoorGame';
        this.gametype2 = 'OutdoorGame';
    }
    Games.prototype.setTotalplayers = function (totalplayers) {
        if (totalplayers < 4) {
            console.log("It's an " + this.gametype1);
        }
        else if (totalplayers > 2) {
            console.log("It's an " + this.gametype2);
        }
        this.totalplayers = totalplayers;
    };
    Games.prototype.getTotalplayers = function () {
        if (this.totalplayers < 4) {
            console.log("Numbers of players " + this.totalplayers);
            return this.totalplayers;
        }
        else if (this.totalplayers > 2) {
            console.log("Numbers of players " + this.totalplayers);
            return this.totalplayers;
        }
    };
    return Games;
}());
var Cricket = /** @class */ (function (_super) {
    __extends(Cricket, _super);
    function Cricket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.teamname = "India";
        _this.selection = "Bating";
        return _this;
    }
    Cricket.prototype.setgameDescription = function (toss) {
        if (toss == false) {
            if (this.totalplayers > 4) {
                console.log("Cricket team  detail");
            }
            if (this.totalplayers < 4) {
                console.log("Its not a cricket team");
            }
        }
    };
    Cricket.prototype.getgameDescription = function () {
        if (this.toss == false) {
            if (this.totalplayers > 4) {
                console.log("Team Name " + this.teamname + "Won toss " + this.toss + "selected " + this.selection);
                return this.toss;
            }
            if (this.totalplayers < 4) {
                console.log("Team Name " + this.teamname + "Won toss " + this.toss + "selected " + this.selection);
                return this.toss;
            }
        }
    };
    return Cricket;
}(Games));
var Tennis = /** @class */ (function (_super) {
    __extends(Tennis, _super);
    function Tennis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tennis.prototype.setGameplayed = function (maxplayers) {
        if (maxplayers == 2) {
            console.log("Its Tennis");
        }
    };
    Tennis.prototype.getGamePlayed = function () {
        return;
    };
    return Tennis;
}(Games));
var VideoGames = /** @class */ (function (_super) {
    __extends(VideoGames, _super);
    function VideoGames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoGames.prototype.setgameLovers = function (country) {
        if (this.totalplayers > 2) {
            console.log("Most of the countries like Video Games");
        }
        if (this.totalplayers == 0) {
            console.log("None of the country like video games");
            return;
        }
        country = this.country;
    };
    VideoGames.prototype.getgameLovers = function () {
        if (this.totalplayers > 2) {
            console.log("Adult  And Children love this game");
        }
        if (this.totalplayers == 0) {
            console.log("Every one Hate this game");
        }
    };
    return VideoGames;
}(Games));
var gameday = new Cricket();
gameday.setTotalplayers(222);
gameday.getTotalplayers();
gameday.setgameDescription(false);
gameday.getgameDescription();
var GameLovers = new VideoGames();
GameLovers.setgameLovers("INDIA : USA");
