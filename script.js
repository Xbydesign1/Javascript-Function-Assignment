let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
	constructor(title, rating, haveWatched){
		this.title = title;
		this.rating = rating;
		this.haveWatched = haveWatched;
	} 

}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
	var array = 0
	for (array = 0; array < allMovies.length; array++) {}
	allMovies[array] = movie;
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
	console.log("Printing all movies...")
	var num = 0;
	var array;
	for(array =0; array< allMovies.length; array++){
		console.log(allMovies[array].title + ", rating of " + allMovies[array].rating + ", haveWatched: " + allMovies[array].haveWatched); num++; 
	}
	console.log("\nYou have " + num + " movies in total");
}



//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
	console.log("printing movie that has a rating higher than " + rating);
	var rate = 0;
	var array;
	for(array = 0; array < allMovies.length; array++){
		if(allMovies[array].rating > rating){
			console.log(allMovies[array].title + " has a rating of " + allMovies[array].rating);
			rate += 1;
		}
	}
	console.log("\nIn total, there are " + rate + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
	var array = 0;
	for (array = 0; array < allMovies.length; array++){
		if (allMovies[array].title == title){
			allMovies[array].haveWatched != allMovies[array].haveWatched;
		}
	}
	console.log("changing the status of the movie...")
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);