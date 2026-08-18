function autoportBtn(parent, child) {
  // Проверка на корректность переданных элементов
  if (!parent || !child) {
    return;
  }

  parent.addEventListener('click', function (event) {
    // Если клик уже произошёл по потомку или внутри него,
    // ничего не делаем, чтобы избежать бесконечной рекурсии
    if (child.contains(event.target)) {
      return;
    }

    // Иначе эмулируем клик по потомку
    child.click();
  });
}

const parentEl = document.querySelector('.autoport');
const childEl = document.querySelector('.autoport-link');

autoportBtn(parentEl, childEl);