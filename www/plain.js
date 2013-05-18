function show() {
  document.getElementById('start').style.visibility = 'hidden';
  document.getElementById('game').style.visibility = 'visible';
  return false;
}

function loaded() {
  document.getElementById('game').style.visibility = 'hidden'; //visible
  document.getElementById('start').addEventListener('click', show);
}

loaded();
