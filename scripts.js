// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
                  const navLinks = document.querySelectorAll("nav ul li a");
                
                  for (const link of navLinks) {
                    link.addEventListener("click", function (event) {
                      event.preventDefault();
                
                      const targetSection = document.querySelector(link.getAttribute("href"));
                      targetSection.scrollIntoView({ behavior: "smooth" });
                    });
                  }
                });
                
                // Form submission handling
                document.addEventListener("DOMContentLoaded", function () {
                  const contactForm = document.getElementById("contact-form");
                
                  contactForm.addEventListener("submit", function (event) {
                    event.preventDefault();
                
                    const formData = new FormData(contactForm);
                    const formObject = {};
                
                    formData.forEach((value, key) => {
                      formObject[key] = value;
                    });
                
                    // Displaying the submitted data
                    alert(
                      `Submitted Data:\n\nName: ${formObject.name}\nEmail: ${formObject.email}\nMessage: ${formObject.message}`
                    );
                
                    // Clearing the form after submission
                    contactForm.reset();
                  });
                });
                