const formatDate = date => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth();
  return `${newDate.getDate()}.${month}.${newDate.getFullYear()} r.`;
};

export default formatDate;
