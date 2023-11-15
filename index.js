document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".swiper-container", {
        // Optional: Add pagination if needed
        preloadImages: true,
        lazy: {
            loadOnTransitionStart: true,
            loadPrevNext: true,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
        // Optional: Add navigation buttons
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        // Optional: Auto play and other configurations
        autoplay: {
            delay: 30000, // milliseconds between slides
        },
        speed: 800, // transition speed in milliseconds
        loop: true, // loop through the slides
    });
});

function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}