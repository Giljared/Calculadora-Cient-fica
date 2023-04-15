let display = document.getElementById('display');

function appendCharacter(character) {
  display.value += character;
}

function clearDisplay() {
  display.value = '';
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  let result;
  try {
    result = eval(display.value);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Resultado inválido');
    }
  } catch (error) {
    result = 'Erro';
  }
  display.value = result;
}
