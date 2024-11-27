<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Welcome Back!</h1>
      <p>Please log in to continue</p>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      if (this.username === 'user' && this.password === 'password') {
        this.$router.push('/portfolio/profile');
      } else {
        this.error = 'Invalid username or password';
      }
    },
  },
};
</script>

<style scoped>
/* Apply the imported Google Font */
body {
  font-family: 'Roboto', sans-serif;
}

/* Outer container for full-page centering */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('@/assets/background.jpg') no-repeat center center;
  background-size: cover;
}

/* Card styling */
.login-card {
  background: rgba(255, 255, 255, 0.9); /* Slight transparency */
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

/* Header styling */
.login-card h1 {
  margin-bottom: 10px;
  color: #333;
  font-size: 24px;
}

/* Subtitle */
.login-card p {
  color: #666;
  margin-bottom: 20px;
}

/* Form styling */
form {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Adds spacing between elements */
}

/* Input fields */
form input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
}

/* Input focus effect */
form input:focus {
  border-color: #6e8efb;
  box-shadow: 0 0 5px rgba(110, 142, 251, 0.5);
}

/* Login button */
form button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background: #6e8efb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

/* Hover effect for the button */
form button:hover {
  background: #5a78e1;
}

/* Error message styling */
.error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>
