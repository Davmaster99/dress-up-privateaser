/* global PRIVATEASER*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor">
         <ul class="list-group">
           <li class="list-group-item d-flex justify-content-between align-items-center text-white bg-info">
    ${actor.who} : ${actor.type}
              <span class="badge badge-light badge-pill">${actor.amount}</span>
           </li>
        </ul>
      </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const bar = PRIVATEASER.getBar();
    const time = document.querySelector('.js-time').value;
    const persons = document.querySelector('.js-persons').value;
    const option = document.querySelector('.js-option').checked;
    const actors = PRIVATEASER.payActors(bar, time, persons, option);

    render(actors);

    return;
  });
})();
