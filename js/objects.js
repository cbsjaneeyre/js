const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

const getWorthyWorkers = function(workers2) {
  const worthyWorkers = [];

  for (i = 0; i < workers2.length; i++) {
    const currentWorkers = workers2[i];

    if (currentWorkers.salary > 1000) {
      worthyWorkers.push(currentWorkers.name);
    }
  }

  return worthyWorkers;
};

console.log(getWorthyWorkers(workers));