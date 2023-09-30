// Define the allowed password codes
const allowedPasswords = [
  "NDSL-84627", "NDSL-51293", "NDSL-39274", "NDSL-72964", "NDSL-61738",
  "NDSL-93827", "NDSL-17346", "NDSL-62415", "NDSL-94573", "NDSL-36254",
  "NDSL-48126", "NDSL-53978", "NDSL-82647", "NDSL-27915", "NDSL-75312",
  "NDSL-31468", "NDSL-64729", "NDSL-98514", "NDSL-16293", "NDSL-82936",
  "NDSL-37469", "NDSL-52637", "NDSL-69482", "NDSL-28364", "NDSL-71948",
  "NDSL-63124", "NDSL-48592", "NDSL-96714", "NDSL-31285", "NDSL-59873",
  "NDSL-75349", "NDSL-42681", "NDSL-14827", "NDSL-82754", "NDSL-59376",
  "NDSL-36491", "NDSL-94128", "NDSL-68125", "NDSL-53947", "NDSL-47635",
  "NDSL-19384", "NDSL-87426", "NDSL-25678", "NDSL-68273", "NDSL-39467",
  "NDSL-84219", "NDSL-71954", "NDSL-52748", "NDSL-36594", "NDSL-94627",
  "NDSL-28761", "NDSL-45136", "NDSL-79423", "NDSL-63857", "NDSL-57249",
  "NDSL-31964", "NDSL-76342", "NDSL-61879", "NDSL-84172", "NDSL-94638",
  "NDSL-36518", "NDSL-82394", "NDSL-48756", "NDSL-62973", "NDSL-15384",
  "NDSL-96475", "NDSL-42867", "NDSL-75931", "NDSL-29486", "NDSL-18732",
  "NDSL-67492", "NDSL-36158", "NDSL-59427", "NDSL-84679", "NDSL-93514",
  "NDSL-27864", "NDSL-54712", "NDSL-81629", "NDSL-42376", "NDSL-75894",
  "NDSL-69247", "NDSL-28461", "NDSL-91853", "NDSL-74612", "NDSL-36429",
  "NDSL-58291", "NDSL-12984", "NDSL-47568", "NDSL-63972", "NDSL-72134",
  "NDSL-31946", "NDSL-87416", "NDSL-57123", "NDSL-49618", "NDSL-63429",
  "NDSL-84175", "NDSL-78312", "NDSL-65284", "NDSL-41879", "NDSL-72651"
];

// Function to validate the password
function validatePassword(password) {
  return allowedPasswords.includes(password);
}

// Function to handle form submission
const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Get form input values
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Validate the password
  if (validatePassword(password)) {
    // Redirect to the main website after successful login
    const redirectURL = 'https://nilam-direct-services-info.framer.ai/';
    window.location.href = redirectURL;
  } else {
    // Display an error message or take other actions for invalid password
    alert('Invalid password. Please enter a valid password code.');
  }
});

// Password toggle function
let passwordVisible = false;

function togglePasswordVisibility() {
  const passwordField = document.getElementById('passwordField');
  const eyeIcon = document.getElementById('eyeIcon');

  if (passwordVisible) {
    passwordField.type = 'password';
    eyeIcon.style.backgroundImage = 'url("eye.png")'; // Replace 'eye.png' with your eye icon image path
  } else {
    passwordField.type = 'text';
    eyeIcon.style.backgroundImage = 'url("eye-slash.png")'; // Replace 'eye-slash.png' with your crossed-eye icon image path
  }

  passwordVisible = !passwordVisible;
}
