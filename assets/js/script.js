// Para fechar a navbar

function fecharTopBar() {
  var topbar = document.getElementById("topbar");
  topbar.classList.add('hidden');
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



  // SCRIPT PARA O ACORDION FUNCIONAR
  document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function () {
            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');
            content.style.display = item.classList.contains('active') ? 'block' : 'none';
        });
    });
});


// para remover o placeholder quando eu digitar

document.addEventListener('DOMContentLoaded', function () {
  var emailInput = document.getElementById('email-input');
  var placeholderLabel = document.querySelector('.placeholder-label');

  emailInput.addEventListener('input', function () {
    placeholderLabel.style.opacity = emailInput.value.trim() ? 0 : 1;
  });

  emailInput.addEventListener('focus', function () {
    placeholderLabel.classList.add('focused');
  });

  emailInput.addEventListener('blur', function () {
    placeholderLabel.classList.remove('focused');
  });
});




//MODAL

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var closeBtn = document.getElementsByClassName("close")[0];
  var esqueciSenhaBtn = document.getElementById("esqueciSenha");

  esqueciSenhaBtn.addEventListener("click", function (event) {
      event.preventDefault();
      abrirModal();
  });

  closeBtn.addEventListener("click", function () {
      fecharModal();
  });

  window.addEventListener("click", function (event) {
      if (event.target === modal) {
          fecharModal();
      }
  });

  function abrirModal() {
      modal.style.display = "block";
  }

  function fecharModal() {
      modal.style.display = "none";
  }
});