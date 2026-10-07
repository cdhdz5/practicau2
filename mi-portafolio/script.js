document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENU MOVIL
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if (menuBtn && menu) {

        menuBtn.addEventListener("click", function () {

            menu.classList.toggle("active");

            const abierto = menu.classList.contains("active");

            menuBtn.setAttribute("aria-expanded", abierto);

        });

        const enlaces = menu.querySelectorAll("a");

        enlaces.forEach(function (enlace) {

            enlace.addEventListener("click", function () {

                menu.classList.remove("active");

                menuBtn.setAttribute("aria-expanded", "false");

            });

        });
    }


    /* =========================
       AÑO DEL FOOTER
    ========================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       FORMULARIO DE CONTACTO
    ========================= */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {

                formMessage.textContent =
                    "Por favor, completa todos los campos.";

                formMessage.style.color = "#f87171";

                return;
            }

            formMessage.textContent =
                "¡Gracias! Tu mensaje fue recibido correctamente.";

            formMessage.style.color = "#4ade80";

            contactForm.reset();

        });
    }


    /* =========================
       ANIMACIONES AL HACER SCROLL
    ========================= */

    const elementos = document.querySelectorAll(
        ".section-heading, .about-text, .about-card, .card, .process-item, .contact-info, .contact-form"
    );

    elementos.forEach(function (elemento) {
        elemento.classList.add("reveal");
    });


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        elementos.forEach(function (elemento) {
            observer.observe(elemento);
        });

    } else {

        elementos.forEach(function (elemento) {
            elemento.classList.add("visible");
        });

    }


    /* =========================
       DESPLAZAMIENTO SUAVE
    ========================= */

    const enlacesInternos = document.querySelectorAll(
        'a[href^="#"]'
    );

    enlacesInternos.forEach(function (enlace) {

        enlace.addEventListener("click", function (event) {

            const id = enlace.getAttribute("href");

            if (!id || id === "#") {
                return;
            }

            const destino = document.querySelector(id);

            if (destino) {

                event.preventDefault();

                const alturaHeader = 75;

                const posicion =
                    destino.getBoundingClientRect().top +
                    window.pageYOffset -
                    alturaHeader;

                window.scrollTo({
                    top: posicion,
                    behavior: "smooth"
                });

            }

        });

    });

});