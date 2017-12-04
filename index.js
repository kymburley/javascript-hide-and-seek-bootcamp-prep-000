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
   var current = document.querySelector('div#grand-node');
   var next = current.children[0];

   while (next) {
     current = next;
     next = current.children[0];
   }

   return current;
 }
