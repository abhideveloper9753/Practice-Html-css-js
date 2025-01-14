// const h1 = document.querySelector('h1')
// const card = document.querySelector('.card')
// const container = document.querySelector('.container')

// function sayHi() {
//     console.log('Hiiiii');
// }

// function secondSayHi() {
//     console.log('Second Hi');
// }

// h1.onclick = sayHi
// h1.onclick = secondSayHi


// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', secondSayHi)

// let count = 1

// card.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     // const newCard = card.cloneNode()
//     // newCard.classList.remove('add-card')
//     console.log(newCard)
//     newCard.innerText = count++
//     container.append(newCard)
// })




/* <!-- w3resouce question nuber 4 --> */

const form = document.getElementById('myForm');
    const errorMessagesDiv = document.getElementById('errorMessages');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      errorMessagesDiv.innerHTML = '';
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach((field) => {
        if (field.value.trim() === '') {
          const fieldName = field.getAttribute('name');
          const errorMessage = document.createElement('p');
          errorMessage.textContent = `${fieldName} is required.`;
          errorMessagesDiv.appendChild(errorMessage);
        }
      });
    });