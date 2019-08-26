export default howMany => {
  const numbers = [];
  /* istanbul ignore next */
  if (howMany > 0 && howMany < 10001) {
    /* istanbul ignore next */
    for (let i = 0; i < howMany; i++) {
      const rand = Math.ceil(Math.random() * 100000000) + "";
      /* istanbul ignore next */
      if (rand.length < 8) {
        /* istanbul ignore next */
        numbers.push("07" + rand + Math.floor(Math.random() * 10));
      } else if (rand.length > 8) {
        /* istanbul ignore next */
        numbers.push("07" + rand.slice(0, -1));
      } else {
        /* istanbul ignore next */
        numbers.push("07" + rand);
      }
    }
    return numbers;
  }
};
