const textInput = document.querySelector('#name-input');
let changeName = document.querySelector('#name-output');

textInput.addEventListener('blur', event => {
  changeName.inputValue = event.currentTarget.value.trim();

  if (inputValue === '') {
    changeName.textContent = 'Anonymous';
  } else {
    changeName.textContent.replace(/\s/g, "") = inputValue;
  }
});

console.log([1, 2, 3, 4]);
console.dir([1,2,3,4])


// Аналіз критичного питання:

// Використання незадекларованої змінної inputValue і неправильний обробник події 'blur'
// замість 'input' суттєво впливає на виконання скрипту вимогам завдання.Для вирішення
// критичної проблеми переконайтеся, що ви задекларували inputValue, присвоївши обрізане
// значення event.currentTarget.value, і використовуйте його у блоку if-else.Також змініть
// обробник події з 'blur' на 'input', щоб коректно оновлювати span в реальному часі, коли
// користувач вводить текст.
// Також це завдання не завантажується в браузері
// Завдання не прийнято.
