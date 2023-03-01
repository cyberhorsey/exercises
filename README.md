# Exercises

Let's combine everything we know.

Please complete all of these in one repository. Create a new local folder, and a new git repository, `exercises`. Remember to run `npm init` to register it as a Javascript package, so you can use `npm commands.` Remembe to run the `git` commands from the Github repo after you create a new repo. You will not need to do the SSH key creation stuff again - that is set to your account. Just the new git repo instructions are fine!

Do each numbered exercise in a different folder.
For instance, if you make a folder called `exercises`, do the first homework in `exercises/1`, then the next in `exercises/2`.

You can use whatever folder structure you like other than that. For instance, `exercises/3/game/game.js`, `exercises/3/user/user.js`, etc.

On to the exercises!

1. Using the `prompt-promise` npm library, ask the user a math question, ie: "What is 5 + 7?". Verify the user has provided answer, and if not, tell the user it is incorrect. The user can have a maximum amount of guesses of 3 - after that, they can no longer guess and the program should exit. If the user is correct, let them know, and the program should exist.

2. Write a function that takes a minimum number and a maximum number, and using a for loop, log out all odd numbers between the min and the max, NOT including the min or max themselves.

3. Mock out some functionality of Steam.
   a) Declare a class `Game` that takes two arguments in it's constructor, `name` and `price`.
   b) Create 5 games with different names and prices.
   c) Declare a class: `SteamUser`, that takes one argument in it's constructor ,`balance` and sets this property on the user, as well as an empty array `games`.

   c) Write a function on that SteamUser class that lets a user purchase a game, if they have enough `balance` to afford the `price` of the game. If they can not afford it, throw an error.
   d) Write a function on that SteamUser class that lets a user wishlist a game. If they already own it, throw an error.
   e) Write a function on that SteamUser that logs out a SteamUser's games alphabetically.
   f) Change the function you wrote in `e)` to take a single argument, `sortType`, to let the user decide to sort them alphabetically or by price. Change the function to use that sortType and sort appropriately based on it.

4. Let's monitor Ethereum activity in real time!
   a) Sign up for a free Infura account.
   b) Using the `ethers` npm library, display the following information:

   - Current block number
   - Current gas price
   - Current chain id

   c) Using the `prompt-promise` npm library, prompt a user to provide an ethereum address, and then: - Display the Ethereum balance of that account to the user in the terminal. If it is not a valid ethereum address, display an error. The balance should be converted from `wei` to `ether`. - Display the transaction count of that account to the user in the terminal.
