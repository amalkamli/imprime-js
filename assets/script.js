let slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}]
    function showSlide(index) {
        let bannerImg = document.querySelector("#banner .banner-img");
        let bannerText = document.querySelector("#banner p");
        let dotsContainer = document.querySelector("#banner .dots");
      
        bannerImg.src = slides[index].image;
        bannerText.innerHTML = slides[index].tagLine;
      
        // Code pour mettre à jour les dots
        updateDots(index, dotsContainer);
      }
      function updateDots(index, dotsContainer) {
        // Supprimer les dots existants
        dotsContainer.innerHTML = "";
      
        // Ajouter les nouveaux dots
        for (let i = 0; i < slides.length; i++) {
          let dot = document.createElement("div");
          dot.classList.add("dot");
          if (i === index) {
            dot.classList.add("dot_selected");
          }
      
          // Ajouter un gestionnaire d'événements pour les dots
          dot.addEventListener("click", function () {
            showSlide(i);
          });
      
          dotsContainer.appendChild(dot);
        }
      }
      function updateDots(index, dotsContainer) {
        // Supprimer les dots existants
        dotsContainer.innerHTML = "";
      
        // Ajouter les nouveaux dots
        for (let i = 0; i < slides.length; i++) {
          let dot = document.createElement("div");
          dot.classList.add("dot");
          if (i === index) {
            dot.classList.add("dot_selected");
          }
      
          // Ajouter un gestionnaire d'événements pour les dots
          dot.addEventListener("click", function () {
            showSlide(i);
          });
      
          dotsContainer.appendChild(dot);
        }
      }
      function updateDots(index, dotsContainer) {
        // Supprimer les dots existants
        dotsContainer.innerHTML = "";
      
        // Ajouter les nouveaux dots
        for (let i = 0; i < slides.length; i++) {
          let dot = document.createElement("div");
          dot.classList.add("dot");
          if (i === index) {
            dot.classList.add("dot_selected");
          }
      
          // Ajouter un gestionnaire d'événements pour les dots
          dot.addEventListener("click", function () {
            showSlide(i);
          });
      
          dotsContainer.appendChild(dot);
        }
      }
      document.querySelector("#banner .arrow_left").addEventListener("click", function () {
        // Code pour afficher le slide précédent
        showPreviousSlide();
      });
      
      document.querySelector("#banner .arrow_right").addEventListener("click", function () {
        // Code pour afficher le slide suivant
        showNextSlide();
      });
      
      function showPreviousSlide() {
        // Code pour afficher le slide précédent
      }
      
      function showNextSlide() {
        // Code pour afficher le slide suivant
      }
      let currentSlideIndex = 0;

      function showPreviousSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
      }
      
      function showNextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
      }
                                    