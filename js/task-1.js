// 1. Знаходимо всі елементи з класом "item" всередині ul#categories
const categories = document.querySelectorAll('#categories .item');

// 2. Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// 3. Для кожної категорії:
categories.forEach(category => {
  // Знаходимо заголовок (h2)
  const titleOfCategory = category.querySelector('h2').textContent;

  // Знаходимо всі <li> всередині вкладеного <ul>
  const numberOfElements = category.querySelectorAll('ul > li').length;

  // Виводимо в консоль назву і кількість
  console.log(`Category: ${titleOfCategory}`);
  console.log(`Elements: ${numberOfElements}`);
});