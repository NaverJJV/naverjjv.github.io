# Jacob Vaccaro | Interactive Portfolio

**Live Site:** [https://naverjjv.github.io/](https://naverjjv.github.io/)

This repository contains the source code for my professional portfolio and interactive resume. It serves as a centralized hub for my work experience, technical projects, and academic background in software engineering.

## Technical Architecture

The site is built as a Single Page Application (SPA) with a focus on fast load times, responsive design, and smooth user interactions.

### Frontend Stack
* **Framework:** React (Bootstrapped with Vite 8)
* **Styling:** Tailwind CSS (v4)
* **Animations:** Framer Motion (utilized for scroll-reveals and complex orbital layout animations)
* **Components:** `react-vertical-timeline-component` for chronological experience mapping
* **Assets:** `react-icons` leveraging stable subsets (FontAwesome, SimpleIcons, Devicons) to ensure reliable build processes

### CI/CD & Deployment
The application is hosted on GitHub Pages. Deployment is fully automated using a custom **GitHub Actions** workflow (`deploy.yml`).

Any code pushed to the `main` branch triggers an isolated Ubuntu runner to:
1. Provision a Node environment
2. Install dependencies
3. Execute the Vite production build
4. Upload the compiled static assets as an artifact
5. Deploy directly to the root user page domain

## Contact

* **Linkedin** - https://www.linkedin.com/in/jacobjvaccaro/
* **Email** - jacobjvaccaro@gmail.com