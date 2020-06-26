class Pontuacao {
  constructor () {
    this.pontos = 0;
  }
  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50)
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.3;
    if (parseInt(this.pontos) % 100 == 0) {
        vida.ganhaVida();  
        this.pontos += 0.6;
        }
    
  }
  
}