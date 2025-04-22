const ulHeadings = document.querySelectorAll('ul#categories > li.item > h2');
const liItems = document.querySelectorAll('ul#categories > li.item > ul > li')




console.log(`NUmber of categories: ${ulHeadings.length}`)




for (let i = 0; i < ulHeadings.length; i++){

    const headings = ulHeadings[i];
    const category = headings.textContent;

    const itemCount = headings.nextElementSibling.querySelectorAll('li').length;


    console.log(`Category: ${category}`);
    console.log(`Elements ${itemCount}`);

}