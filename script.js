let enviar = document.getElementById('enviar').addEventListener('click', mostrar)

function mostrar() {
  const novoElemento = document.createElement('div');
  novoElemento.innerHTML = 'Raama Batista';
  document.body.appendChild(novoElemento);
}

const form = document.getElementById('myForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmaSenha = document.getElementById('confirmaSenha').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  
  if (nome === '' || email === '' || senha === '' || confirmaSenha === '') {
    errorMessage.textContent = 'Por favor, preencha todos os campos.';
  } else if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Por favor, insira um email válido.';
  } else if (senha !== confirmaSenha) {
    errorMessage.textContent = 'As senhas não coincidem.';
  } else if (!isValidPassword(senha)) { 
    errorMessage.textContent = 'A senha deve conter pelo menos uma letra maiúscula, um numeral e um caractere especial.';
  } else {
    console.log('Formulário enviado com sucesso!');

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('confirmaSenha').value = '';
 
    errorMessage.textContent = ''; 
  }
  });

function isValidPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

const inputText = document.getElementById('inputText');
const addButton = document.getElementById('addButton');
const output = document.getElementById('output');

addButton.addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = inputText.value;
  output.appendChild(newElement);
});

