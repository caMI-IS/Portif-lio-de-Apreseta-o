const container = document.querySelector(".particulas");

const quantidadeParticulas = 60;

for (let i = 0; i < quantidadeParticulas; i++) {


// Cria uma nova bolinha
const particula = document.createElement("span");

// Adiciona a classe CSS
particula.classList.add("particula");


// ==============================
// POSIÇÃO ALEATÓRIA
// ==============================

particula.style.left = Math.random() * 100 + "%";

particula.style.top = Math.random() * 100 + "%";


// ==============================
// TAMANHO ALEATÓRIO
// ==============================

const tamanho = Math.random() * 5 + 3;

particula.style.width = tamanho + "px";

particula.style.height = tamanho + "px";


// ==============================
// VELOCIDADE ALEATÓRIA
// ==============================

const velocidade = Math.random() * 4 + 2;

particula.style.animationDuration = velocidade + "s";


// ==============================
// ATRASO ALEATÓRIO
// ==============================

const atraso = Math.random() * 5;

particula.style.animationDelay = atraso + "s";


// ==============================
// ADICIONA NA TELA
// ==============================

container.appendChild(particula);


}
