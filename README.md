# Simple PC Builder Website

The PC Builder website is a platform for users to select and build their own PC by choosing various PC components and parts. The website is built using Next.js and incorporates both Static Site Generation (SSG) and Server-Side Rendering (SSR) to provide a seamless user experience.

### Live site and Server URL:

- Website URL: [https://pc-builder-website-habidhossen.vercel.app/](https://pc-builder-website-habidhossen.vercel.app/)
- Server URL: [https://pc-builder-server-mtgs.onrender.com/api/v1/product](https://pc-builder-server-mtgs.onrender.com/api/v1/product)

## Features

### Navbar

- PC Builder Button: Clicking on the "PC Builder" button in the navbar redirects users to the PC Builder page where they can start building their PC.
- Categories Dropdown: The navbar includes a Categories dropdown.

### Home Page (SSG Implementation)

- Featured Products: The home page displays at least 6 random PC components as Featured Products.
- Clickable Featured Products: Users can click on any Featured Product to view its details.
- Featured Categories: There are 6 Featured Categories under the Featured Product section, including "Others" for miscellaneous components.

### Featured Category Sections (SSG Implementation)

- Clickable Featured Categories: Clicking on any Featured Category redirects the user to a page displaying at least 3 products of that category. Each product card shows the same properties as Featured Products.
- Clickable Products: Users can click on any product card to view its details.

### Product Detail Page (SSG Implementation)

- Product Details: Each PC component has the following properties displayed on its detail page:
  - Image
  - Product Name
  - Category
  - Status (In Stock | Out of Stock)
  - Price
  - Description
  - Key Features
  - Individual Rating (Out of 5 Stars)
  - Average Rating (Out of 5 Stars)
  - Reviews

### PC Builder Page (SSR Implementation)

- Category Sections: The PC Builder page features category sections for:

  - CPU / Processor
  - Motherboard
  - RAM
  - Power Supply Unit
  - Storage Device
  - Monitor
  - GPU
  - Mouse
  - Keyboard

- Choose Button: Each category section includes a Choose Button that redirects users to a page displaying at least 3 components of that category, each with its properties.

- Add To Builder Button: On the component page, users can add a component to their PC builder by clicking the "Add To Builder" button. The selected component is updated in the PC Builder page.

- Complete Build Button: Users can click the "Complete Build" button after adding at least 5 components. The button is disabled until the user meets this requirement.

### Bonus Features

- Authentication: The PC Builder Page is a protected/private route, accessible only to logged-in users. Authentication is implemented using NextAuth with at least one social login provider (e.g, Google ).

- Success Alert: Clicking the "Complete Build" button on the PC Builder page displays a success alert and also added success alert in others features like Add to Builder, Remove from Builder Button.

- Hero Section and Footer: The Home page includes a hero section/banner section and a footer to enhance user experience.

- Responsive Design: The entire application is responsive, ensuring a seamless user experience on both mobile and desktop devices.

### Technologies Used

- Next.js: The core framework for building the web application.
- NextAuth.js: For user authentication and social login integration.
- Redux: For managing state, especially in the PC Builder section.
- Tailwind CSS: Used for responsive styling and design of the web pages.
- React Hot Toast: For displaying toast notifications to enhance user experience.
- Node.js: The runtime environment for server-side code.
- Express.js: A Node.js web application framework used for handling server-side logic.
- MongoDB: A NoSQL database used for storing and managing data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB used for simplifying interactions with the database.
