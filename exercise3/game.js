//3. Mock out some functionality of Steam.
//a) Declare a class `Game` that takes two arguments in it's constructor, `name` and `price`.
//b) Create 5 games with different names and prices.
//c) Declare a class: `SteamUser`, that takes one argument in it's constructor ,`balance` and sets this property on the user, as well as an empty array `games`.
//c) Write a function on that SteamUser class that lets a user purchase a game, if they have enough `balance` to afford the `price` of the game. If they can not afford it, throw an error.
//d) Write a function on that SteamUser class that lets a user wishlist a game. If they already own it, throw an error.
//e) Write a function on that SteamUser that logs out a SteamUser's games alphabetically.
//f) Change the function you wrote in `e)` to take a single argument, `sortType`, to let the user decide to sort them alphabetically or by price. Change the function to use that sortType and sort appropriately based on it.

class Game {
    constructor (name,price){
        this.name = name;
        this.price = price;
    }
}

class SteamUser{
    constructor (name,balance){
        this.name = name;
        this.balance = balance;
        this.games = [];
        this.wishlist = [];
    }
    purchase(game){
        if (game.price > this.balance){
            throw new Error('You do not have enough funds in your account. You need ' + (game.price - this.balance) + ' more dollas');
        } else {
            this.balance = this.balance - game.price;
            this.games.push(game);
            console.log('You have successfully purchased ' + game.name);
        }
    }
    addWishlist(game){
        let wishlistTrack = false;
        for (let i = 0; i<this.games.length;i++){
            if (game.name == this.games[i].name){
                console.log('This game is already in your library');
                wishlistTrack = true;
            }
        }
        for (let i = 0; i<this.wishlist.length;i++){
            if (game.name == this.wishlist[i].name){
                console.log('This game is already on your Wishlist');
                wishlistTrack = true;
            }
        }
        if (wishlistTrack == false){
            this.wishlist.push(game);
        }
    }
    listGames(sorttype){
        console.log(sorttype.toLowerCase());
        if (sorttype.toLowerCase() == 'alphabetically'){
            console.log(this.games.sort((a,b) => a.name.localeCompare(b.name)));
        } else if (sorttype.toLowerCase() == 'price'){
            console.log(this.games.sort((a,b) => a.price - b.price));
        } else {
            console.log('Make sure you request either alphabetically or price')
        }
    }
}

const pacman = new Game('pacman',5);
const runescape = new Game('runescape',10);
const overwatch = new Game('overwatch',50);
const nba2k = new Game('nba2k',60);
const hogwarts = new Game('hogwarts',80);

const Cas = new SteamUser('Cas',180);
Cas.purchase(nba2k);
Cas.purchase(overwatch);
Cas.purchase(pacman);
Cas.addWishlist(runescape);
Cas.addWishlist(nba2k);


console.log(Cas.games);
console.log(Cas.wishlist)

console.log(Cas.listGames('price'));
console.log(Cas.listGames('alphabetically'));
