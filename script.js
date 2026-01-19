const engrenagem = document.querySelector('.engrenagem');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  engrenagem.style.transform =
    `translateY(-50%) rotate(${-scroll * 0.3}deg)`;
});

