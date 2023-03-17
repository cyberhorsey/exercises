//3. Mock out some functionality of Steam.
//a) Declare a class `Game` that takes two arguments in it's constructor, `name` and `price`.
//b) Create 5 games with different names and prices.
//c) Declare a class: `SteamUser`, that takes one argument in it's constructor ,`balance` and sets this property on the user, as well as an empty array `games`.
//c) Write a function on that SteamUser class that lets a user purchase a game, if they have enough `balance` to afford the `price` of the game. If they can not afford it, throw an error.
//d) Write a function on that SteamUser class that lets a user wishlist a game. If they already own it, throw an error.
//e) Write a function on that SteamUser that logs out a SteamUser's games alphabetically.
//f) Change the function you wrote in `e)` to take a single argument, `sortType`, to let the user decide to sort them alphabetically or by price. Change the function to use that sortType and sort appropriately based on it.