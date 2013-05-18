var target;
var count;

function start() {
  document.getElementById('start').style.display = 'none';
  toggle('playground', 'block');
  target = Math.floor(Math.random()*200);
  count = 0;
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
    return false;
  }

  count++;
  if (guess < target) {
    response('Your guess ' + guess + ', was too low');
  } else if (guess > target) {
    response('Your guess ' + guess + ', was too high');
  } else {
    var text = 'Correct: ' + guess + ' Number of guesses: ' + count;
    var best = localStorage.getItem('plain_guess_best');
    if (best != null) {
       if (best > count) {
          best = count;
          text += ' New high score!!!';
       }
    } else {
      best = count;
      text += ' This is the first (high)score we saw.'
    }
    localStorage.setItem('plain_guess_best', best);
    response(text);
    //save high score
    quit();
  }

  return false;
}
function clear_best() {
    localStorage.removeItem('plain_guess_best');
    return false;
}
function show_best() {
    var best = localStorage.getItem('plain_guess_best');
    if (best == null) {
      response('There is no high-score');
    } else {
      response('The best score is ' + best);
    }
    return false;
}

function loaded() {
  document.getElementById('start').addEventListener('click', start);
  document.getElementById('quit').addEventListener('click', quit);
  document.getElementById('check-guess').addEventListener('click', check_guess);
  document.getElementById('clear_best').addEventListener('click', clear_best);
  document.getElementById('show_best').addEventListener('click', show_best);
}

loaded();
