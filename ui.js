class UI {
  constructor() {
    this.title = document.getElementById('title');
    this.text = document.getElementById('text');
  }

  paint(res) {
    this.title.textContent = `Advice #${res.slip.id}`;
    this.text.textContent = `"${res.slip.advice}"`;
  }
}