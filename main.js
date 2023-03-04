const startButton = document.getElementById('start-button');
const goldImg = document.querySelector('.output-section img');

startButton.addEventListener('click', () => {
  const inputImg = document.createElement('img');
  inputImg.src = 'potato.jpg';
  inputImg.classList.add('input-img');
  document.querySelector('.input-section').appendChild(inputImg);

  const outputAnim = document.querySelector('.output-section img').animate(
    [
      { transform: 'translateY(0)', opacity: 0 },
      { transform: 'translateY(-150px)', opacity: 1 },
      { transform: 'translateY(0)', opacity: 0 }
    ],
    {
      duration: 2000,
      easing: 'ease-in-out'
    }
  );
});
