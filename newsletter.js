// Funcionalidad de suscripción simulada
document.getElementById('subscribeBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('newsletterMsg');

  if (!name || !email) {
    msg.textContent = "Por favor completa todos los campos.";
    msg.style.color = "red";
    return;
  }

  // Mensaje de confirmación
  msg.textContent = "¡Gracias por suscribirte, " + name + "!";
  msg.style.color = "green";

  // Limpiar campos
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
});
