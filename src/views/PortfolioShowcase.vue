<template>
   <div class="portfolio-page">
     <!-- Background video element -->
     <video autoplay loop muted class="background-video">
       <source src="@/assets/wallpaperprofile1.mp4" type="video/mp4" />
       Your browser does not support the video tag.
     </video>

     <div class="portfolio-content">
       <h1>My Portfolio</h1>

       <!-- Back Button -->
       <div class="back-to-profile">
         <router-link to="/portfolio/profile" class="back-button">Back to Profile</router-link>
       </div>

       <div class="portfolio-container">
         <div
           v-for="(project, index) in projects"
           :key="index"
           class="portfolio-card"
           @click="toggleDescription(index)"
         >
           <img :src="project.image" :alt="project.title" />
           <h3>{{ project.title }}</h3>
           <p>{{ project.description }}</p>
         </div>
       </div>

       <!-- Display new container below for detailed description of the clicked project -->
       <div v-if="selectedProjectIndex !== null" class="project-detail-container">
         <div class="project-detail-card">
           <h3>{{ projects[selectedProjectIndex].title }}</h3>
           <!-- Use v-html to render HTML content (including images) -->
           <div v-html="projects[selectedProjectIndex].moreDescription"></div>
         </div>
       </div>
     </div>
   </div>
 </template>


<script>
export default {
  data() {
    return {
      selectedProjectIndex: null, // Track which project is selected
      projects: [
        {
          title: 'Petbook',
          description: 'Our Software Design Project.',
          image: require('@/assets/petbooklogo.jpg'),
          moreDescription: `
            <p>This is our software design project, Petbook. It's a social media platform designed specifically for pets. The purpose of this initiative was to provide a platform for pets to express themselves, helping stray animals to find homes and offering every pet parent the flexibility to share information about their pets and recommendations on how to care for them.</p>
            <img src="${require('@/assets/petbook.jpg')}" alt="Petbook Screenshot" style="width: 100%; max-width: 600px; margin-top: 10px;" />
            <p>
              <a href="https://github.com/chocchocobu/petbooktest222" target="_blank" style="color: #46cdfa; text-decoration: none; font-weight: bold;">Visit the Petbook Website</a>
            </p>
          `
        },
        {
          title: 'Venus : Automated Fruit Fly Trap',
          description: 'A system for catching fruit fly in the grape vineyards.',
          image: require('@/assets/grapes.jpg'),
          moreDescription: `
            <p>This project involves the development of a smart fruit fly trap. The goal of this project is to create an intelligent fruit fly trap. Without using pesticides, the idea is to develop a tool that will draw fruit flies into the trap and kill them. More crops can develop more healthily thanks to this fruit fly trap, which is a far more effective solution to fly issues in grape vineyards.</p>
            <img src="${require('@/assets/fruitfly.jpg')}" alt="Venus Screenshot" style="width: 100%; max-width: 600px; margin-top: 10px;" />
            <p>
              <a href="https://docs.google.com/document/d/1Y0obOF1puiEFNH4AXYsCKJO7Z9Z7H1J9kjJpyH-5VsM/edit?tab=t.0" target="_blank" style="color: #46cdfa; text-decoration: none; font-weight: bold;">Visit the Venus Documentation</a>
            </p>
          `
        },
        {
          title: 'Automated Watering System',
          description: 'A tool to help individuals manage watering their plants automatically.',
          image: require('@/assets/plant.jpg'),
          moreDescription: `
            <p>This project involves the creation of a a device that will water their plants automatically. Because of the lifestyle of different individuals, they have hard time watering their own plants. With this device they will be able to water their plants automatically.</p>
          `
        }
      ]
    };
  },
  methods: {
    toggleDescription(index) {
      // If the clicked project is already opened, close it by setting the index to null
      if (this.selectedProjectIndex === index) {
        this.selectedProjectIndex = null;
      } else {
        this.selectedProjectIndex = index; // Set the index of the clicked project to show the details
      }
    }
  }
};
</script>

<style scoped>
/* Import the Minecraft-like font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); /* Added Roboto font */

/* Reset the margin and padding for body and html to ensure no border */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;  /* Prevent scrolling */
}

/* Styling for the background video */
.background-video {
  position: fixed;  /* Use fixed positioning to ensure the video stays fixed in the background */
  top: 0;
  left: 0;
  width: 100vw;  /* Make sure the video takes the entire viewport width */
  height: 100vh;  /* Make sure the video takes the entire viewport height */
  object-fit: cover;  /* Make sure the video fills the screen without distortion */
  z-index: -1;  /* Ensure the video stays behind the content */
}

.portfolio-page {
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
  height: 100vh;  /* Full viewport height */
  width: 100vw;  /* Full viewport width */
  text-align: center;
  background: transparent;
  font-family: 'Press Start 2P', cursive; /* Apply Minecraft-like font for the main section */
  position: relative;  /* To layer the content above the video */
}

.portfolio-page h1 {
  margin-bottom: 20px;
  color: white;
}

.portfolio-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;  /* Ensure container uses full width */
  padding: 20px;
}

.portfolio-card {
  background: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 250px;  /* Set a reasonable card width */
  text-align: center;
  font-family: 'Press Start 2P', cursive; /* Apply Minecraft-like font */
  cursor: pointer;
  transition: transform 0.3s ease;
}

.portfolio-card:hover {
  transform: scale(1.05);  /* Add a hover effect */
}

.portfolio-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.portfolio-card h3 {
  margin: 10px 0;
  color: #333;
}

.portfolio-card p {
  color: #666;
}

.project-detail-container {
  margin-top: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif; /* Changed to Roboto font for better readability */
}

.project-detail-card {
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
}

.project-detail-card h3 {
  color: #333;
}

.project-detail-card p {
  color: #666;
  font-size: 16px;
}
/* Back Button Styling */
.back-to-profile {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1; /* Ensure it's above the other content */
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
