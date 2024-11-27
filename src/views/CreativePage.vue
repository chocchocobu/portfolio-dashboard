<template>
  <div class="creative-page">
    <!-- Background video element -->
    <video autoplay loop muted class="background-video">
      <source src="@/assets/wallpaperprofile1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="creative-content">
      <h1>My Creative Works</h1>
      <p class="intro-text">Welcome to my creative space! Bunch of different stuff in this page, mostly random.</p>

      <!-- Gallery Section -->
      <div class="gallery">
        <div class="gallery-item" v-for="(project, index) in creativeProjects" :key="index" @click="openModal(index)">
          <img :src="project.images[0]" :alt="project.title" />
          <h3>{{ project.title }}</h3>
        </div>
      </div>

      <!-- Star Map Section -->
      <div class="star-map-section">
        <h2>Shall we explore the stars</h2>
        <!-- Embedding Stellarium Web for dynamic star map -->
        <div id="star-map-container">
          <iframe
            :src="starMapUrl"
            width="100%"
            height="400"
            frameborder="0"
            allowfullscreen>
          </iframe>
        </div>
      </div>

      <!-- Interactive Drawing App -->
      <div class="drawing-app-section">
        <h2>Sketch something here!</h2>
        <canvas id="drawingCanvas" width="600" height="400"></canvas>
        <div class="drawing-controls">
          <button @click="clearCanvas">Clear</button>
          <label for="colorPicker">Choose Color:</label>
          <input type="color" v-model="penColor" id="colorPicker" />
        </div>
      </div>

      <!-- Modal for full image and details -->
      <div v-if="isModalOpen" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <!-- Image carousel in the modal -->
          <div class="carousel-container">
            <button class="carousel-arrow left" @click="prevImage">←</button>
            <img :src="creativeProjects[selectedProject].images[currentImageIndex]" :alt="creativeProjects[selectedProject].title" />
            <button class="carousel-arrow right" @click="nextImage">→</button>
          </div>

          <h3>{{ creativeProjects[selectedProject].title }}</h3>
          <p>{{ creativeProjects[selectedProject].description }}</p>
          <button @click="closeModal">Close</button>
        </div>
      </div>

      <!-- Back to Profile Button -->
      <div class="back-to-profile">
        <router-link to="/portfolio/profile" class="back-button">Back to Profile</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      selectedProject: null, // Store the index of the selected project for modal
      currentImageIndex: 0, // Track the current image in the carousel
      starMapUrl: '', // Store the URL for the star map based on location and time
      penColor: '#000000', // Default pen color for drawing
      creativeProjects: [
        {
          title: 'Cats',
          images: [
            require('@/assets/digital-art1-1.jpg'),
            require('@/assets/digital-art1-2.jpg'),
            require('@/assets/digital-art1-3.jpg'),
            require('@/assets/digital-art1-4.jpg'),
            require('@/assets/digital-art1-5.jpg'),
          ],
        },
        // Add more projects here when needed
      ],
    };
  },
  mounted() {
    // Get the user's location and generate the star map URL
    this.getLocationAndGenerateStarMap();
    this.setupCanvas();
  },
  methods: {
    // Function to get the user's location and generate the star map URL
    getLocationAndGenerateStarMap() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setStarMapUrl, this.handleLocationError);
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    },

    // Function to set the star map URL based on location and time
    setStarMapUrl(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const date = new Date().toISOString().split('T')[0]; // Get today's date in ISO format (YYYY-MM-DD)

      // Construct the Stellarium Web URL with dynamic location and time
      this.starMapUrl = `https://stellarium-web.org/?lat=${lat}&lng=${lon}&time=${date}T00:00:00Z`;
    },

    handleLocationError() {
      alert('Unable to retrieve your location. Displaying a default location instead.');
      // Default location (for example: Manila, Philippines)
      this.starMapUrl = 'https://stellarium-web.org/?lat=14.5995&lng=120.9842&time=2024-11-24T00:00:00Z'; // Manila, Philippines
    },

    openModal(index) {
      this.selectedProject = index;
      this.currentImageIndex = 0; // Start at the first image of the selected project
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedProject = null;
    },
    nextImage() {
      if (this.currentImageIndex < this.creativeProjects[this.selectedProject].images.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0; // Loop back to the first image
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.creativeProjects[this.selectedProject].images.length - 1; // Loop back to the last image
      }
    },

    // Setup canvas for drawing
    setupCanvas() {
      const canvas = document.getElementById('drawingCanvas');
      const ctx = canvas.getContext('2d');
      let isDrawing = false;

      // Start drawing
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
      });

      // Draw on canvas
      canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
          ctx.strokeStyle = this.penColor;
          ctx.lineWidth = 5;
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.stroke();
        }
      });

      // Stop drawing
      canvas.addEventListener('mouseup', () => {
        isDrawing = false;
      });

      // Touch events for mobile devices
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDrawing = true;
        const touch = e.touches[0];
        ctx.beginPath();
        ctx.moveTo(touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop);
      });

      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (isDrawing) {
          const touch = e.touches[0];
          ctx.lineTo(touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop);
          ctx.stroke();
        }
      });

      canvas.addEventListener('touchend', () => {
        isDrawing = false;
      });
    },

    // Clear the drawing canvas
    clearCanvas() {
      const canvas = document.getElementById('drawingCanvas');
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    },
  },
};
</script>

<style scoped>
/* Styling for Creative Page */
.creative-page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
}

/* Background video styling */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

/* Main content styling */
.creative-content {
  z-index: 1;
  text-align: center;
  color: white;
  font-family: 'Press Start 2P', cursive; /* Minecraft-like font */
  padding: 20px;
}

.creative-content h1 {
  margin-bottom: 20px;
}

.creative-content .intro-text {
  font-size: 18px;
  margin-bottom: 40px;
}

/* Gallery Section */
.gallery {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.gallery-item {
  background: rgba(255, 255, 255, 0.1); /* Make the background more transparent */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Soft shadow for separation */
  max-width: 250px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.3); /* Slightly less transparent on hover */
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.gallery-item h3 {
  margin: 10px 0;
}

/* Star Map Section */
.star-map-section {
  margin-top: 40px;
  text-align: center;
}

.star-map-section iframe {
  max-width: 100%;
  border: none;
}

/* Drawing App Section */
.drawing-app-section {
  margin-top: 40px;
  text-align: center;
}

.drawing-controls {
  margin-top: 10px;
}

.drawing-controls button {
  padding: 10px 20px;
  background-color: #28cffc;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.drawing-controls input[type="color"] {
  margin-top: 10px;
}

/* Modal Styling */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.1); /* Make the background more transparent */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.modal-content {
  background: rgba(0, 0,0, 0.1); /* Make the background more transparent */
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 600px;
  width: 80%;
}

.modal-content img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
}

.carousel-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.carousel-arrow {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2rem;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.carousel-arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content button {
  background-color: #28cffc;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}

.modal-content button:hover {
  background-color: #1c728a;
}

/* Back Button */
.back-to-profile {
  position: absolute;
  top: 20px;
  left: 20px;
}

.back-button {
  padding: 10px 20px;
  background-color: #28abfc;
  color: white;
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.back-button:hover {
  background-color: #1a8aeb;
}
</style>
