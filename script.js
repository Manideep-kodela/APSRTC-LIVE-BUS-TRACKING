// Valid Feedback checking (Main page)
document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const feedbackForm = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('nameInput');
    const feedbackTypeRadios = document.getElementsByName('feedbackType');
    const feedbackTextGroup = document.getElementById('feedbackTextGroup');
    const feedbackText = document.getElementById('feedbackText');
    const fileInputGroup = document.getElementById('fileInputGroup');
    const feedbackFile = document.getElementById('feedbackFile');
    const submitButton = document.getElementById('submitButton');

    // Name Validation Regex
    const namePattern = /^[a-zA-Z\s]{6,16}$/;

    // Feedback Text Validation
    const feedbackTextMinLength = 10;

    // Function to validate name input
    function validateName() {
        const nameValue = nameInput.value.trim();
        if (namePattern.test(nameValue)) {
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
            return true;
        } else {
            nameInput.classList.remove('is-valid');
            nameInput.classList.add('is-invalid');
            return false;
        }
    }

    // Function to validate feedback text
    function validateFeedbackText() {
        const feedbackValue = feedbackText.value.trim();
        if (feedbackValue.length >= feedbackTextMinLength) {
            feedbackText.classList.remove('is-invalid');
            feedbackText.classList.add('is-valid');
            return true;
        } else {
            feedbackText.classList.remove('is-valid');
            feedbackText.classList.add('is-invalid');
            return false;
        }
    }

    // Function to validate file input
    function validateFileInput() {
        if (feedbackFile.files.length > 0) {
            feedbackFile.classList.remove('is-invalid');
            feedbackFile.classList.add('is-valid');
            return true;
        } else {
            feedbackFile.classList.remove('is-valid');
            feedbackFile.classList.add('is-invalid');
            return false;
        }
    }

    // Function to check if all required fields are valid
    function checkFormValidity() {
        const isNameValid = validateName();
        const isFeedbackTypeSelected = Array.from(feedbackTypeRadios).some(radio => radio.checked);
        const isFeedbackTextValid = !feedbackTextGroup.classList.contains('hidden') ? validateFeedbackText() : true;
        const isFileValid = !fileInputGroup.classList.contains('hidden') ? validateFileInput() : true;

        if (isNameValid && isFeedbackTypeSelected && isFeedbackTextValid && isFileValid) {
            submitButton.classList.remove('hidden');
            submitButton.disabled = false;
        } else {
            submitButton.classList.add('hidden');
            submitButton.disabled = true;
        }
    }

    // Event listeners
    nameInput.addEventListener('input', function() {
        validateName();
        checkFormValidity();
    });

    feedbackTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'text') {
                feedbackTextGroup.classList.remove('hidden');
                fileInputGroup.classList.add('hidden');
                feedbackFile.value = '';
                feedbackFile.classList.remove('is-valid', 'is-invalid');
            } else if (this.value === 'textImage') {
                feedbackTextGroup.classList.remove('hidden');
                fileInputGroup.classList.remove('hidden');
            }
            validateFeedbackText();
            validateFileInput();
            checkFormValidity();
        });
    });

    feedbackText.addEventListener('input', function() {
        validateFeedbackText();
        checkFormValidity();
    });

    feedbackFile.addEventListener('change', function() {
        validateFileInput();
        checkFormValidity();
    });

    // Form submit event
    feedbackForm.addEventListener('submit', function(event) {
        if (!checkFormValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            alert('Feedback submitted successfully!');
            // You can add your form submission logic here
        }
    });
});
function toggleFeedback(type) {
    document.getElementById('feedbackTextArea').style.display = (type === 'text' || type === 'image') ? 'block' : 'none';
    document.getElementById('fileInput').style.display = (type === 'image') ? 'block' : 'none';
    checkFeedback(); // Check feedback to update submit button state
}

// Function to check if feedback is filled
function checkFeedback() {
    const feedbackText = document.getElementById('feedbackText').value.trim();
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = feedbackText === '';
}

// Form submission event
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Feedback has been submitted');
    this.reset(); // Reset the form
    document.querySelector('button[type="submit"]').disabled = true; // Disable the submit button after submission
});
 // Selecting the necessary elements
 const radioTextFeedback = document.getElementById('validationFormCheck2');
 const radioTextWithImages = document.getElementById('validationFormCheck3');
 const feedbackTextArea = document.getElementById('feedbackTextArea');
 const fileInput = document.getElementById('fileInput');

 // Function to handle the change in radio button selection
 function handleRadioChange() {
   if (radioTextFeedback.checked) {
     feedbackTextArea.style.display = 'block'; // Show text area
     fileInput.style.display = 'none'; // Hide file input
   } else if (radioTextWithImages.checked) {
     feedbackTextArea.style.display = 'block'; // Show text area
     fileInput.style.display = 'block'; // Show file input
   }
 }

 // Add event listeners to both radio buttons
 radioTextFeedback.addEventListener('change', handleRadioChange);
 radioTextWithImages.addEventListener('change', handleRadioChange);

 // Initial call to set the correct display on page load
 handleRadioChange();

 document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const icon = this.querySelector('i');
    // Toggle the type attribute
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the icon
    icon.classList.toggle('bi-eye');
    icon.classList.toggle('bi-eye-slash');
  });
  // user feature selection event
  document.addEventListener('DOMContentLoaded', function() {
    const adminLogin = document.getElementById('adminLogin');
    const conductorLogin = document.getElementById('conductorLogin');
    const trackBus = document.getElementById('trackBus');
    const registrationSection = document.getElementById('registrationSection');
    const cardsSection = document.getElementById('cardsSection');

    function updateVisibility(selectedOption) {
        if (selectedOption === 'admin' || selectedOption === 'conductor') {
            registrationSection.style.display = 'block';
            cardsSection.style.display = 'none';
        } else if (selectedOption === 'track') {
            registrationSection.style.display = 'none';
            cardsSection.style.display = 'block';
        } else {
            registrationSection.style.display = 'none';
            cardsSection.style.display = 'none';
        }
    }

    adminLogin.addEventListener('click', function() {
        updateVisibility('admin');
    });

    conductorLogin.addEventListener('click', function() {
        updateVisibility('conductor');
    });

    trackBus.addEventListener('click', function() {
        updateVisibility('track');
    });
});


  