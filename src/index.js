const first = (q) => {
    if (q === '0') return 'zero';else
    if (q === '1') return 'one';else
    if (q === '2') return 'two';else
    if (q === '3') return 'three';else
    if (q === '4') return 'four';else
    if (q === '5') return 'five';else
    if (q === '6') return 'six';else
    if (q === '7') return 'seven';else
    if (q === '8') return 'eight';else
    if (q === '9') return 'nine';
  };
  
  const second = (q) => {
    if (q === '0') return 'zero';else
    if (q === '1') return 'ten';else
    if (q === '2') return 'twenty';else
    if (q === '3') return 'thirty';else
    if (q === '4') return 'forty';else
    if (q === '5') return 'fifty';else
    if (q === '8') return 'eighty';
    return `${first(q)}ty`
  };

  const zero = (elem) => elem !== 'zero';
  
  const teen = (array) => {
    if (array.length < 2) return array;
    if (array[1] === 'ten') {
      if (array[0] === 'one') array[1] = 'eleven';else
      if (array[0] === 'two') array[1] = 'twelve';else
      if (array[0] === 'three') array[1] = 'thirteen';else
      if (array[0] === 'four') array[1] = 'fourteen';else
      if (array[0] === 'five') array[1] = 'fifteen';else
      if (array[0] === 'six') array[1] = 'sixteen';else
      if (array[0] === 'seven') array[1] = 'seventeen';else
      if (array[0] === 'eight') array[1] = 'eighteen';else
      if (array[0] === 'nine') array[1] = 'nineteen';
      array[0] = 'zero';
    }
    return array;
  }

  const getNum = (array, elem, i) => {
    if (i === 0) return [...array, first(elem)];
    if (i === 1) return [...array, second(elem)];
    if (i === 2) return [...array, `${first(elem)} hundred`];
  };
  
  module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    let read = String(number).split('').reverse();
    read = read.reduce(getNum, []);
    read = teen(read).filter(zero);
    return read.reverse().join(' ');
  }
