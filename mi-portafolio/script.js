// Menú móvil
const menuBtn = document.getElementById("menuBtn"); 
const menu = document.getElementById("menu");

 menuBtn.addEventListener("click", () => { 
    menu.classList.toggle("active"); 

 });

 // Botón de bienvenida 
 const welcomeBtn = document.getElementById("welcomeBtn"); 

 welcomeBtn.addEventListener("click", () => { 
    alert("¡Bienvenido a mi página web! 🚀"); 
});

// Formulario 
const form = document.getElementById("contactForm"); 
const formMessage = document.getElementById("formMessage"); 

form.addEventListener("submit", (event) => { 
    event.preventDefault(); 
    
    const name = document.getElementById("name").value; 

    formMessage.textContent = 
         `¡Gracias, ${name}! Tu mensaje ha sido enviado.`; 

         formMessage.style.color = "#16a34a"; 

         form.reset();
          
});