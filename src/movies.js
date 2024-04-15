import { movies } from './data.js';

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const allDirectors = movies.map((movie) => movie.director);
  const uniqueDirectors = new Set(allDirectors);
  return Array.from(uniqueDirectors);
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let scoreSum = 0;
  for (let i = 0; i < movies.length; i++) {
    scoreSum += movies[i].score;
  }
  return scoreSum / movies.length;
}

function shortenScoreSum(number) {
  return parseFloat(number.toFixed(2));
}
const avgScore = scoresAverage(movies);
console.log(shortenScoreSum(avgScore));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) {
    return 'There are no drama movies in the dataset.';
  }
  const totalScore = dramaMovies
    .map((movie) => movie.score)
    .reduce((acc, score) => acc + score, 0);
  return parseFloat((totalScore / dramaMovies.length).toFixed(2));
}
const avgScoreDrama = dramaMoviesScore(movies);
console.log(avgScoreDrama);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return movies.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

const yearOrderedMovies = orderByYear(movies);
console.log(yearOrderedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20);
}

const ordered20movies = orderAlphabetically(movies);
console.log(ordered20movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const convertedMovies = movies.map((movie) => {
    const duration = movie.duration;
    const hoursMatch = duration.match(/(\d+)h/);
    const minutesMatch = duration.match(/(\d+)min/);

    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

    const totalMinutes = hours * 60 + minutes;
    return {
      ...movie,
      duration: totalMinutes
    };
  });
  return convertedMovies;
}

const convertedMovies = turnHoursToMinutes(movies);
console.log(convertedMovies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  const yearScores = movies.reduce((acc, movie) => {
    const year = movie.year;
    const score = movie.score;
    acc[year] = acc[year] || { totalScore: 0, movieCount: 0 };
    acc[year].totalScore += score;
    acc[year].movieCount++;
    return acc;
  });

  let bestYear;
  let bestAverage = 0;

  for (const year in yearScores) {
    const averageScore =
      yearScores[year].totalScore / yearScores[year].movieCount;
    if (averageScore > bestAverage) {
      bestYear = year;
      bestAverage = averageScore;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAverage}.`;
}
const result = bestYearAvg(movies);
console.log(result);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
