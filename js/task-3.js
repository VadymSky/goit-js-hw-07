// Знаходимо елементи
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// Слухаємо подію input (коли користувач вводить текст)
input.addEventListener('input', () => {
  // Беремо значення і прибираємо пробіли по краях
  const userName = input.value.trim();

  // Якщо після очищення рядок пустий, ставимо "Anonymous"
  if (userName === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = userName;
  }
  console.log(userName);
});
