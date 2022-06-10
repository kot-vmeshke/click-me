function clickGame() {
  const start = document.querySelector('.start');
  const click = document.querySelector('.click-me');
  const best = document.querySelector('.best-result');
  const bestAllTimes = document.querySelector('.best-all-time');
  const clear = document.querySelector('.clear-best');
  const clearAll = document.querySelector('.clear-all-time');


  best.addEventListener('click', () => {
    alert(`Best result is: ${sessionStorage.getItem('best')}`);
  })
  bestAllTimes.addEventListener('click', () => {
    alert(`Best result for the whole time is:
    ${localStorage.getItem('bestAll')} by ${localStorage.getItem('nick')}`);
  })
  clear.addEventListener('click', () => {
    sessionStorage.setItem('best', 0);
    alert(`Best result is: ${sessionStorage.getItem('best')}`);
  })
  clearAll.addEventListener('click', () => {
    localStorage.setItem('bestAll', 0);
    localStorage.setItem('nick', '');
    alert(`Best result for the whole time is:
    ${localStorage.getItem('bestAll')}`);
  })

  start.addEventListener('click', () => {
    const nick = document.querySelector('.nickname').value;
    try {
      if (nick.length === 0) {
        throw 'Enter your nickname';
      } else {
        let count = 0;
        let timeGame = 5000;
        sessionStorage.setItem('best', 0);
        sessionStorage.setItem('nick', nick);
        click.addEventListener('click', () => {
          count++;
        });
        setTimeout(() => {
          let bestResult = 0;
          click.removeEventListener('click', () => {
            count++;
          })
          alert(`You clicked ${count} times`);
          bestResult = count;
          if (bestResult > sessionStorage.getItem('best')) {
            sessionStorage.setItem('best', bestResult);
          }
          if (bestResult > localStorage.getItem('bestAll')) {
            localStorage.setItem('bestAll', bestResult);
            localStorage.setItem('nick', nick);
          }
        }, timeGame)
      }
    } catch (error) {
      alert(error)
    }
  })
}
clickGame();