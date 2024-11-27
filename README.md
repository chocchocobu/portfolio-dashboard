
# Portfolio Dashboard

This is a personal portfolio website built with **Vue.js**, showcasing a login page, user profile, portfolio showcase, contact form, and creative page. The project features basic form validation for the login process, smooth page navigation using **Vue Router**, and customizable design.

## Features

- **Login Page**: A simple login page with hardcoded username and password. On successful login, users are redirected to the dashboard.
- **Portfolio Dashboard**:
  - **Profile Page**: Displays personal details (photo, bio, social media links).
  - **Portfolio Showcase**: Displays projects or work in a gallery or card layout.
  - **Contact Page**: A contact form for visitors to send messages (name, email, and message).
  - **Creative Page**: Add your own page (blog, resume, mini-app, etc.).
- **Customization**: Change color themes and apply animations/effects.
- **Routing & Navigation**: Smooth page transitions using Vue Router with the following routes:
  - `/login` - Login page
  - `/portfolio/profile` - Profile page
  - `/portfolio/showcase` - Portfolio showcase
  - `/portfolio/contact` - Contact form
  - `/portfolio/creative` - Creative or custom page

## Technologies Used

- **Vue.js**: JavaScript framework for building the UI.
- **Vue Router**: For routing and page navigation.
- **CSS Animations**: For adding visual effects and transitions.
- **JavaScript**: For form validation and interactivity.

## Installation

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/chocchocobu/portfolio-dashboard.git
   ```

2. Navigate into the project directory:

   ```bash
   cd portfolio-dashboard
   ```

3. Install the required dependencies using npm:

   ```bash
   npm install
   ```

4. Run the app locally:

   ```bash
   npm run serve
   ```

5. Open your browser and visit `http://localhost:8080` to see the app in action.

## Usage

1. **Login**:
   - Enter the hardcoded username (`user`) and password (`password`) to log in.
   - Upon successful login, you will be redirected to the portfolio dashboard.

2. **Portfolio Dashboard**:
   - You can navigate through different pages of the portfolio dashboard:
     - **Profile Page**: View personal details at `/portfolio/profile`.
     - **Portfolio Showcase**: Explore projects or work at `/portfolio/showcase`.
     - **Contact Form**: Leave a message at `/portfolio/contact`.
     - **Creative Page**: Add or view creative content at `/portfolio/creative`.

3. **Running the App Locally**:
   - To start the application locally, ensure that you have installed the necessary dependencies (step 3 above).
   - Use the command `npm run serve` to launch the development server.
   - Once the server is running, you can open the app in your browser at `http://localhost:8080`.
   - The app will automatically reload if you make changes to any files.

## Customization

To add more functionality:
- Add new components or pages in the `src/components` directory.
- Modify or add new routes in `src/router/index.js` for more pages.

## Contributing

Feel free to fork the repository and contribute by submitting pull requests. Here are some ideas for contributions:
- Improve UI/UX design.
- Add more interactivity or animations.
- Implement additional pages or features.

## Acknowledgments

- Inspired by various portfolio websites.
- Vue.js and Vue Router for making the development process easy and fun.
