document.addEventListener('DOMContentLoaded', () => {
  const changeButtons = document.querySelectorAll('.form-control a');
  changeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault();
          alert('Change');
      });
  });

  const checkoutForm = document.querySelector('form');
  checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Proceed');
  });
});