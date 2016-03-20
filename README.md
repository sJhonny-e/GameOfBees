# Game Of Bees - where you can kill bees safely, without the danger of getting stung!

Just a small little game where you can see different kind of bees, and hit one of them in each round.  
Each type of bee has different hitpoints and takes different damage when hit.  
The game is over when the queen bee dies.  

## Getting Started

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```
### Run the Application
We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:
```
npm start
```
Now browse to the app at `http://localhost:8000/app/index.html`.

## Testing

Unfortunately, I couldn't get karma to run on my local machine, so I wasn't able to write & verify tests.  
I only created tests placeholders, where the actual tests would go...  

##About this app
This app was set up using [angular-seed](https://github.com/angular/angular-seed), and generally tries to follow the [angularJS coding style](https://github.com/johnpapa/angular-styleguide).  
Angular is used because this is the framework I'm most familiar with, and I wanted to try out the `component` feature in version 1.5.  
Bootstrap is also used to make it more pretty(ish).  
  
Generally, it consists of a couple of components - `bee`, which shows a single bee, and `main`, which shows the main screen (all the bees etc..), and controls the flow of the game.  

###What could have been done better
* Actual tests, obviously  
* More modularization - split `main` into `bees-container` and `game-controller` (which would include the hit and reset buttons)  
* use a build tool (gulp / webpack), which would allow us to:  
** use a transpiler to allow us to use ES6 features
** use a linter to enforce a rigid coding style  
** use SASS / LESS for better CSS
* add a 'new game' button, and give the user the option to input the number of bees they want  

