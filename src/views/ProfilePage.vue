<template>
  <div class="profile-page">
    <!-- Background video element -->
    <video autoplay loop muted class="background-video">
      <source src="@/assets/wallpaperprofile1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="profile-card">
      <div class="profile-picture-container">
        <!-- Replace video with an img tag for profile picture -->
        <img src="@/assets/profilepicture.jpg" alt="Profile Picture" class="profile-picture" />
      </div>
      <h1>Randy Macapagal</h1>
      <p>CPE 400-CPE41S1</p>
       <h2>Birthdate:</h2>
         <p>June 18,1999</p>
        <h2>Education:</h2>
      <p>Political Science Graduate at University of Caloocan City 2021</p>
      <p>4th year BSCPE student at Technological Institute of the Philippines</p>
      <h2>Skills: </h2>
      <p>Drawing, Coding, and Building Computer Systems</p>
      <h2>On the Job Trainings:</h2>
      <p>UNIVERSITY OF CALOOCAN CITY Staff Trainee (300 hrs)</p>
      <p>LAWANG BATO NATIONAL HIGH SCHOOL Guidance Office/ Student Action Center Councilor Trainee (300 hrs)</p>
      <h4>Social Media:</h4>

      <div class="social-links">
        <a href="https://www.facebook.com/chocchocobu/" target="_blank">Facebook</a>
        <a href="https://www.linkedin.com/in/randy-macapagal-a366a5294/" target="_blank">LinkedIn</a>
        <a href="https://github.com/chocchocobu" target="_blank">GitHub</a>
      </div>
      <div class="nav-links">
        <router-link to="/portfolio/showcase" class="nav-button">Portfolio</router-link>
        <router-link to="/portfolio/contact" class="nav-button">Contact Me</router-link>
        <router-link to="/portfolio/creative" class="nav-button">Creative Page</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage"
};
</script>

<style scoped>
/* Import the Minecraft-like font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body, html {
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove any default padding */
  height: 100%; /* Ensure the body takes up full height */
  width: 100%; /* Ensure the body takes up full width */
  overflow: hidden; /* Prevent scrolling */
  background: transparent; /* Remove any default background */
}

.profile-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* Take up full viewport height */
  width: 100vw;  /* Take up full viewport width */
  position: absolute;  /* Absolute positioning for centering */
  top: 0;
  left: 0;
  font-family: 'Press Start 2P', cursive;
  background: transparent; /* No background for profile page */
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Make sure the video covers the entire container */
  z-index: -1;  /* Place the video behind the content */
}

.profile-card {
  background: rgba(255, 255, 255, 0.1);  /* More translucent white background */
  padding: 40px;
  border-radius: 15px;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);  /* Stronger shadow for emphasis */
  width: 80%;  /* Use a percentage width to take up more of the screen */
  max-width: 1000px;
  min-height: 900px;
  z-index: 1; /* Ensure the profile card is above the background video */
}

.profile-picture-container {
  display: flex;
  justify-content: center; /* Center the profile picture */
  margin-bottom: 20px;
}

.profile-card img.profile-picture {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-card h1 {
  margin: 15px 0;
  color: Cyan; /* Change the name color to white */
}

.profile-card h2 {
  margin: 15px 0;
  color: Yellow; /* Change the name color to white */
}

.profile-card h4 {
  margin: 15px 0;
  color: Orange; /* Change the name color to white */
}

.profile-card p {
  color: #777;
  margin-bottom: 20px;
}

.profile-card .social-links a {
  margin: 0 100px;
  color: #6e8efb;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.profile-card .social-links a:hover {
  color: #4a66d6;
}

.nav-links {
  margin-top: 30px;
  display: flex;
  flex-direction: column;  /* Stack the navigation links vertically */
  align-items: center;     /* Center the links horizontally */
}

.nav-button {
  display: inline-block;
  background: #6e8efb;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin: 8px 0;  /* Space between buttons */
  transition: background 0.3s;
}

.nav-button:hover {
  background: #5a78e1;
}
</style>
