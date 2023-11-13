// Para fechar a navbar

function fecharTopBar() {
    var topbar = document.getElementById("topbar");
    topbar.style.display = "none";
}


// numeros randomicos inicialização da pagina
document.addEventListener('DOMContentLoaded', function () {
  const dynamicTextElement = document.getElementById('dynamicText');
  const words = ['sucesso', 'destaque', 'impacto'];
  let currentIndex = 0;

  function changeWord() {
      const originalText = 'negócio é o';
      dynamicTextElement.innerHTML = `${originalText} ${words[currentIndex]}!`;
      currentIndex = (currentIndex + 1) % words.length;
  }

  setInterval(changeWord, 1300);
});

//animação dos numeros feedback

document.addEventListener("DOMContentLoaded", function () {
    const counters = {
      count1: 120,
      count2: 12,
      count3: 325,
    };

    const duration = 2000; // Duração da animação em milissegundos
    const interval = 20; // Intervalo entre as atualizações em milissegundos

    function startCounting(target, elementId) {
      const element = document.getElementById(elementId);
      const step = Math.ceil((target * interval) / duration);
      let current = 0;

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const counterInterval = setInterval(() => {
                current += step;
                element.textContent = current;

                if (current >= target) {
                  clearInterval(counterInterval);
                  element.textContent = target;

                  // Adiciona 'm' ao final para count3
                  if (elementId === "count3") {
                    element.textContent += "m";
                  }
                }
              }, interval);

              observer.disconnect(); // Interrompe a observação após iniciar a contagem
            }
          });
        },
        { threshold: 1.0 } // Define o threshold conforme necessário
      );

      observer.observe(element);
    }

    // Iniciar a observação quando a página carrega
    startCounting(counters.count1, "count1");
    startCounting(counters.count2, "count2");
    startCounting(counters.count3, "count3");
  });



  // Coloração das cores do patrocinio

  const patrocinadores = document.querySelectorAll('.patrocinador');

  patrocinadores.forEach(patrocinador => {
    patrocinador.addEventListener('mouseover', () => {
      const img = patrocinador.querySelector('img');
      img.style.filter = 'grayscale(0%)';
    });

    patrocinador.addEventListener('mouseout', () => {
      const img = patrocinador.querySelector('img');
      img.style.filter = 'grayscale(100%)';
    });
  });