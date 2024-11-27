<template>
  <div class="contact-page">
    <!-- Background video element -->
    <video autoplay loop muted class="background-video">
      <source src="@/assets/wallpaperprofile1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="contact-content">
      <!-- Back to Profile Button -->
      <div class="back-to-profile">
        <router-link to="/portfolio/profile" class="back-button">Back to Profile</router-link>
      </div>

      <h1>Contact Me</h1>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Your Name" required />
        <input type="email" v-model="email" placeholder="Your Email" required />
        <textarea v-model="message" placeholder="Your Message" required @input="autoResize" ref="messageBox"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      alert('Thank you for your message!');
    },
    autoResize(event) {
      const textarea = event.target;
      textarea.style.height = 'auto';  // Reset height to auto to calculate the new height
      textarea.style.height = `${textarea.scrollHeight}px`;  // Set the height to scrollHeight (content height)
    }
  },
  mounted() {
    // Ensure the textarea is resized when the page loads if there's initial content
    this.$nextTick(() => {
      this.autoResize({ target: this.$refs.messageBox });
    });
  }
};
</script>
<style scoped>
/* Import the Minecraft-like font */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); /* Added Roboto font */

/* Contact page container */
.contact-page {
  position: relative; /* Allow content to layer on top of the video */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
}

/* Styling for the background video */
.background-video {
  position: fixed;  /* Fixed positioning ensures the video stays in the background */
  top: 0;
  left: 0;
  width: 100vw;  /* Full viewport width */
  height: 100vh;  /* Full viewport height */
  object-fit: cover;  /* Ensures the video fills the screen without distortion */
  z-index: -1;  /* Keeps the video behind the content */
}

/* Content container to keep the form in front of the video */
.contact-content {
  position: relative; /* Ensure the form content stays above the video */
  z-index: 1; /* Layer the content above the video */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

/* Apply Minecraft-like font only to h1 */
.contact-page h1 {
  margin-bottom: 20px;
  font-family: 'Press Start 2P', cursive; /* Minecraft-like font for heading */
  color: white;
}

/* Styling for the form container */
form {
  background: rgba(255, 255, 255, 0.8); /* Slight transparency on the background */
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Increased gap for better spacing between elements */
}

/* Set box-sizing to border-box for all input, textarea, and button elements */
form input, form textarea, form button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* Ensure padding and border are included in the width */
}

/* Disable the ability to resize the textarea */
form textarea {
  resize: none; /* Disable manual resizing */
  overflow: hidden; /* Prevent scrollbars */
}

/* Styling for the submit button */
form button {
  background: #28cffc;
  color: white;
  border: none;
  cursor: pointer;
}

form button:hover {
  background: #f55549;
}

/* Styling for the back-to-profile button */
.back-to-profile {
  position: absolute;
  top: 20px;
  left: 20px;
}

.back-button {
  padding: 10px 20px;
  background-color: #28abfc;
  color: white;
  font-family: 'Press Start 2P', cursive; /* Apply Minecraft-like font */
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.back-button:hover {
  background-color: #1a8aeb;
}
</style>
