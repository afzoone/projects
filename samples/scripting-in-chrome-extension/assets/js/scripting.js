changeDomBackground();

function changeDomBackground() {
  const { body } = document,
    colors = ["#00d084", "#222222", "#ffc107", "#770c67"],
    color = colors[~~(Math.random() * 3)];

  body.style.background = color;
}
