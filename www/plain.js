var target;

function start() {
  document.getElementById('start').style.display = 'none';
  toggle('playground', 'block');
  target = Math.floor(Math.random()*200);
  response('');
  return false;
}

function toggle(class_name, value) {
  var play = document.getElementsByClassName(class_name);
  for (var i=0; i<play.length; i++) {
    play[i].style.display = value;
  }
}

function response(text) {
  var text = document.createTextNode(text);
  document.getElementById('response').innerHTML = '';
  document.getElementById('response').appendChild(text);
  return false;
}

function quit() {
  toggle('playground', 'none');
  document.getElementById('start').style.display = 'block';
  return false;
}

function check_guess() {
  var guess = document.getElementById('guess').value;

  console.log('Target: ' + target + '  Guess: ' + guess);

  if (guess == '') {
    response('Invalid guess');
  } else if (guess < target) {
    response('Your guess ' + guess + ', was too low');
  } else if (guess > target) {
    response('Your guess ' + guess + ', was too high');
  } else {
    response('Correct: ' + guess);
    quit();
  }

  return false;
}

function loaded() {
  document.getElementById('start').addEventListener('click', start);
  document.getElementById('quit').addEventListener('click', quit);
  document.getElementById('check-guess').addEventListener('click', check_guess);
}

loaded();
