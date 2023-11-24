const getRandomDateInFuture = (maxMonths) => {
  const currentDate = new Date();
  const maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + maxMonths, currentDate.getDate());

  const randomFutureTimestamp = Math.random() * (maxDate.getTime() - currentDate.getTime()) + currentDate.getTime();
  const randomFutureDate = new Date(randomFutureTimestamp);
  return randomFutureDate;
};

export default getRandomDateInFuture;