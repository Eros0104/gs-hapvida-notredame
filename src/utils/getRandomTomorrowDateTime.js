const getRandomTomorrowDateTime = () => {
  const currentDate = new Date();
  
  // Generate a random number of milliseconds between 0 and 86,400,000 (milliseconds in a day)
  const randomMilliseconds = Math.floor(Math.random() * 86400000);

  // Set the date to tomorrow
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  // Set the time to a random time within the next day
  tomorrowDate.setMilliseconds(randomMilliseconds);

  return tomorrowDate;
}

export default getRandomTomorrowDateTime;