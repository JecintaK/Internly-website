 document.querySelectorAll('a[href="#mission-section"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});




 // Get the existing count from local storage
    let visitCount = localStorage.getItem('visitCount');

    // If not found, initialize to 1, otherwise increment
    if (visitCount === null) {
      visitCount = 1;
    } else {
      visitCount = parseInt(visitCount) + 1;
    }

    // Save updated count back to local storage
    localStorage.setItem('visitCount', visitCount);

    // Display the message
    const message = `You've visited <span class="count">${visitCount}</span> time${visitCount > 1 ? 's' : ''}.`;
    document.getElementById('visit-message').innerHTML = message;


    // Handle button click to display message
    document.getElementById('f-button').addEventListener('click', function () {
    document.getElementById('output-message').textContent = 'Thank you for joining us!';
    });

    document.getElementById('button1').addEventListener('click', function () {
    document.getElementById('message1').textContent = 'Welcome! Thank you for joining Interly';
    });

    document.getElementById('button2').addEventListener('click', function () {
    document.getElementById('message2').textContent = 'Thank you for signing up.';
    });

    document.getElementById('button3').addEventListener('click', function () {
    document.getElementById('message3').textContent = 'Your profile has been created.';
    });

    document.getElementById('button4').addEventListener('click', function () {
    document.getElementById('message4').textContent = 'Thank you for partnering with us.';
    });

    document.getElementById('button5').addEventListener('click', function () {
    document.getElementById('message5').textContent = 'Your message has been submitted.';
    });

document.getElementById("chatbot-icon").addEventListener("click", function () {
  alert("Hi! How can I help you?");
  // You can replace this with code to open a chatbot UI or iframe.
});
