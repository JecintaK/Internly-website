 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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