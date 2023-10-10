// console.log('connect');

const h1collection = document.getElementsByTagName('h1')
for(const h1 of h1collection){
   console.log(h1);
   h1.style.color = 'red'
   h1.style.fontweight = 'bold'
   h1.style.textDecoration = 'underline'
   h1.style.textShadow = '2px 2px 2px black'
h1.innerText = 'he go to school'
}
// console.log(h1collection);

// first you have to get the parent field

  const container = document.getElementById('container')

    const ulcontainer = document.createElement('ul')
    const Li1 = document.createElement('li')
    const Li2 = document.createElement('li')
    const Li3 = document.createElement('li')
    Li1.innerText = 'saint martin';
    Li2.innerText = 'dakha';
    Li3.innerText = 'san francisco';

    ulcontainer.appendChild(Li1);
    ulcontainer.appendChild(Li2);
    ulcontainer.appendChild(Li3);
    container.appendChild(ulcontainer)

   //  shortcut
   const sectionContainer = document.getElementById('container2')
   
   const ul = document.createElement('ul')
   ul.innerHTML =`
         <li>sajek</li>
         <li>bandarbon</li>
         <li>shundarban</li>

   `
   console.log(ul);
   sectionContainer.appendChild(ul)