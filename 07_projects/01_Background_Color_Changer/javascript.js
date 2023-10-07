const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener('click', (event) => {
    // console.log(e);
    // console.log(e.target)
    if (event.target.id === 'red') {
        body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'orange') {
        body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
        body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'green') {
        body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
        body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'indigo') {
        body.style.backgroundColor = event.target.id;
    }    
    if (event.target.id === 'violet') {
        body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
        body.style.backgroundColor = event.target.id;
    }

  });
});
