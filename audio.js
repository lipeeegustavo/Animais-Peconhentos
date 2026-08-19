(() => {
  const script = document.currentScript;
  const src = script?.dataset?.audioSrc;
  if (!src) return;

  const audio = new Audio(src);
  audio.preload = 'auto';

  async function playAnimalSound() {
    try {
      audio.pause();
      audio.currentTime = 0;
      await audio.play();
    } catch (error) {
      console.error('Falha ao reproduzir o som do animal:', src, error);
    }
  }

  window.TocarMusica = playAnimalSound;

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.imagem_animal img').forEach((img) => {
      img.setAttribute('role', 'button');
      img.setAttribute('tabindex', '0');
      img.setAttribute('aria-label', 'Reproduzir som do animal');
      img.addEventListener('click', playAnimalSound);
      img.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          playAnimalSound();
        }
      });
    });
  });
})();