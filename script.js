// Onboarding screen logic
function showNextScreen(screenNumber) {
  document.querySelectorAll('.onboard-screen').forEach(screen => {
    screen.style.display = 'none';
  });
  document.getElementById('screen' + screenNumber).style.display = 'block';
}

function hideOnboarding() {
  document.getElementById('onboarding').style.display = 'none';
  document.getElementById('login').style.display = 'block';
}

// Login form logic
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let phone = document.getElementById('phone').value;
  if (phone) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
  } else {
    alert('Please enter a valid phone number.');
  }
});

// Ad Upload form logic
document.getElementById('adUploadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let adTitle = document.getElementById('adTitle').value;
  let adFile = document.getElementById('adFile').files[0];
  
  if (adTitle && adFile) {
    alert('Ad successfully uploaded: ' + adTitle);
    // Logic to handle file upload would go here.
  } else {
    alert('Please complete all fields before submitting.');
  }
});

// Payment processing logic
function processPayment() {
  alert('Payment processing...'); 
  // Payment gateway integration logic goes here
}
