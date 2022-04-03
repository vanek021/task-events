/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', (event) => {
        event.target.parentNode.removeChild(event.target);
    });

    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let list = document.createElement('ul');

    for (let e of arr) {
        let element = document.createElement('li');
        element.textContent = e;
        list.append(element);
    }

    list.addEventListener(
        'mouseover',
        (event) => {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.setAttribute('title', event.target.textContent);
            }
        },
        true,
    );

    document.body.append(list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.textContent = 'tensor';
    link.setAttribute('href', 'https://tensor.ru/');
    document.body.append(link);

    link.addEventListener(
        'click',
        (event) => {
            event.target.textContent += ' ' + event.target.href;
            event.preventDefault();
        },
        { once: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
function getNewListElement() {
    let result = document.createElement('li');
    result.textContent = 'Пункт';
    return result;
}

export function createList() {
    let list = document.createElement('ul');
    list.append(getNewListElement());
    document.body.append(list);

    let button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document.body.append(button);

    list.addEventListener(
        'click',
        (event) => {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.textContent += '!';
            }
        },
        true,
    );

    button.addEventListener('click', (event) => {
        list.append(getNewListElement());
    });
}
