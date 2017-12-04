function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for ( let i in lis ) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {

  let current = document.getElementById('grand-node').querySelectorAll('div').innerHTML;
  let next = [];

  while (current) {
    if (document.querySelector('div').innerHTML === null) {
      return current;
    }

   	if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }

    current = next.shift();
  }

  return current;
}
