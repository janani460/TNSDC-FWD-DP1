//Toggle mobile menu
const menuToggle=document.getElementByld("menu-toggle");
const navLinks=document.getElementByld("nav-links");
menuToggle.addEvent
listener("click",()=> 
{
  navLinks,classList,toggle("show");
  });
//simple contact form validation
const contactForm=document.getElementByld("contact-form");
const formStatus=docment.getElementByld("form-status");
contactForm.addEventListener("submit",(e)=>
 {
  e.preventDefault();
  const name=document.getElementByld("name").value.trim();
  const email=document.getElementByld("email").value.trim();
  const message=document.getElemntByld("message").value.trim();
  if(name && email && message){
    formStatus.textcontent="✅ message sent successfully!";
    formStatus.style.color="green";
    contactForm.reset();
    }
  else{
      formStatus.textcontent="❌ please fill in all fields.";
      formStatus.style.color="red";
      }
  });
    
                             

