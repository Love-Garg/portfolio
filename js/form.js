document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("HI");
  
    var formData = {
      contactName: document.getElementById('contactName').value,
      contactEmail: document.getElementById('contactEmail').value,
      contactSubject: document.getElementById('contactSubject').value,
      contactMessage: document.getElementById('contactMessage').value
    };
  
    fetch('https://script.google.com/macros/s/AKfycbwo05e3yevT8JV2_lkZMKRZY7b8JSuDqLMODEoNUVDnXa9rWn6eL7Mw1CM4GR6_wCqn1w/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data);
      // Reset form and show thank you message
      document.getElementById('contactForm').reset();
      alert('Thank you for your response!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  });
  