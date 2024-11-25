// Get the form element
const form = document.querySelector('.order-form');

// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Hide the form
  form.style.display = 'none';
});

  // thak you image for cod
const submitButton = document.querySelector('input[type="submit"]');
submitButton.value = `Pay - ₹${productPrice}`;
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const paymentMode = document.getElementById('payment_mode').value;
  if (paymentMode === 'cod') {
    const thanksImage = document.getElementById('thanks-image');
    thanksImage.style.display = 'block';
    thanksImage.style.position = 'fixed';
    thanksImage.style.top = '60%';
    thanksImage.style.left = '50%';
    thanksImage.style.transform = 'translate(-50%, -50%)';
    const thanksMessage = document.getElementById('thanks-message');
    thanksMessage.style.display = 'block';
    thanksMessage.style.textAlign = 'bottom';
    form.style.display = 'none';
    document.querySelector('form').style.display = 'none';
    document.addEventListener('keydown', (event) => {
      window.location.href = 'index.';
    });
} else if (paymentMode === 'online') {
    const qrCodeImage = document.getElementById('qr-code');
    qrCodeImage.style.display = 'block';
    qrCodeImage.style.position = 'fixed';
    qrCodeImage.style.top = '60%';
    qrCodeImage.style.left = '50%';
    qrCodeImage.style.transform = 'translate(-50%, -50%)';
    const thanksMessage = document.getElementById('thanks-message');
    thanksMessage.style.display = 'block';
    thanksMessage.style.textAlign = 'bottom';
    form.style.display = 'none';
    document.querySelector('form').style.display = 'none';
    const homeButton = document.getElementById('home-button');
    document.addEventListener('keydown', (event) => {
        window.location.href = 'index.html';
      });
  } else {
    document.querySelector('form').submit();
  }
});