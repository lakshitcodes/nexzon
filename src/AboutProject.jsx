import React from "react";
import "./AboutProject.css";
import HelloGIF from "./assets/Hello.gif";

function AboutProject() {
  return (
    <div className="body">
      <div className="box">
        <div class="innerbox">
          <div class="content">
            <h1>Hi!</h1>
            <h5>Welcome to Nexzon - An Amazon lookalike.</h5>
            <p>
              Nexzon is a functional e-commerce website built with React,
              designed to mimic the core functionalities of Amazon. This project
              showcases my ability to create a user-centric shopping experience.
              Customers can browse a wide variety of products, securely complete
              purchases using integrated payment gateways, and manage their
              shopping carts. The chosen dependencies, like Material UI and
              Stripe, demonstrate my commitment to building a user-friendly and
              secure platform, replicating the essential features of a modern
              e-commerce website.
            </p>
            <p>Developed by Lakshit Jain</p>
          </div>
          <div class="img">
            <img class="hello-img" src={HelloGIF} alt="" />
          </div>
        </div>
      </div>
      <div class="box">
        <div class="innerbox2">
          <h2>Key Features: -</h2>
          <ul className="outerlist">
            <li>
              <h5>Product Listing</h5>
              <ul>
                <li>
                  The platform displays a wide range of products for customers
                  to explore.
                </li>
                <li>
                  Products are categorized and organized for easy navigation and
                  search.
                </li>
              </ul>
            </li>
            <li>
              <h5>Product Details</h5>
              <ul>
                <li>
                  Customers can view detailed information about each product,
                  including images, descriptions, and prices.
                </li>
                <li>
                  Product details are presented in an intuitive and engaging
                  layout.
                </li>
              </ul>
            </li>
            <li>
              <h5>Shopping Cart</h5>
              <ul>
                <li>
                  Users can add products to their shopping cart for purchase.
                </li>
                <li>
                  The shopping cart displays the selected products, quantities,
                  and total prices.
                </li>
              </ul>
            </li>
            <li>
              <h5>Checkout Process</h5>
              <ul>
                <li>
                  Customers can securely complete purchases using integrated
                  payment gateways.
                </li>
                <li>
                  The checkout process includes entering shipping information
                  and payment details.
                </li>
              </ul>
            </li>
            <li>
              <h5>Order History</h5>
              <ul>
                <li>
                  Users can view their order history and track the status of
                  their purchases.
                </li>
                <li>
                  Order details include product information, prices, and
                  delivery status.
                </li>
              </ul>
            </li>
            <li>
              <h5>User Authentication</h5>
              <ul>
                <li>
                  The platform supports user authentication and authorization.
                </li>
                <li>
                  Users can create accounts, log in, and securely access their
                  profiles.
                </li>
              </ul>
            </li>
            <li>
              <h5>Responsive Design</h5>
              <ul>
                <li>
                  The website is designed to be responsive and accessible on
                  various devices.
                </li>
                <li>
                  The layout adjusts to different screen sizes for optimal
                  viewing experience.
                </li>
              </ul>
            </li>
            <li>
              <h5>Search Functionality</h5>
              <ul>
                <li>
                  Customers can search for products using keywords and filters.
                </li>
                <li>
                  The search functionality provides relevant results and
                  suggestions.
                </li>
              </ul>
            </li>
            <li>
              <h5>Payment Gateway</h5>
              <ul>
                <li>
                  Integrated Stripe payment gateway for secure and seamless
                  transactions.
                </li>
                <li>
                  Customers can pay using credit cards or other payment methods.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="box">
        <div class="innerbox2">
          <h2>Technologies Used: -</h2>
          <ul className="technologyused">
            <li>Frontend: React</li>
            <li>Backend: Node.js,firebase</li>
            <li>Database: Firestore</li>
            <li>Payment Gateway: Stripe</li>
            <li>UI Framework: Material UI</li>
            <li>Deployment: Firebase Hosting</li>
          </ul>
        </div>
      </div>
      <div class="box">
        <div class="innerbox2">
          <h2>Technical Implementation:</h2>
          <ul class="outerlist">
            <li>
              <h5>React Components:</h5>
              <ul>
                <li>
                  The project is structured using React components to create a
                  modular and reusable design.
                </li>
                <li>
                  Components are organized into a logical hierarchy for
                  maintainability and scalability.
                </li>
              </ul>
            </li>
            <li>
              <h5>State Management:</h5>
              <ul>
                <li>
                  The application state is managed using React hooks and context
                  API.
                </li>
                <li>
                  State variables are updated and shared across components to
                  maintain consistency.
                </li>
              </ul>
            </li>
            <li>
              <h5>Routing:</h5>
              <ul>
                <li>
                  React Router is used for client-side routing to navigate
                  between pages.
                </li>
                <li>
                  Routes are defined to handle different URLs and render
                  corresponding components.
                </li>
              </ul>
            </li>
            <li>
              <h5>Authentication:</h5>
              <ul>
                <li>
                  Firebase Authentication is implemented for user sign-up and
                  login.
                </li>
                <li>
                  Users can create accounts, log in, and access personalized
                  features.
                </li>
              </ul>
            </li>
            <li>
              <h5>Database:</h5>
              <ul>
                <li>
                  Firestore is used as a NoSQL database to store product and
                  user information.
                </li>
                <li>
                  Data is organized into collections and documents for efficient
                  querying and retrieval.
                </li>
              </ul>
            </li>
            <li>
              <h5>Payment Processing:</h5>
              <ul>
                <li>
                  Stripe is integrated for secure payment processing and
                  transactions.
                </li>
                <li>
                  Customers can enter payment details and complete purchases
                  with confidence.
                </li>
              </ul>
            </li>
            <li>
              <h5>Responsive Design:</h5>
              <ul>
                <li>
                  The website layout is designed to be responsive and
                  mobile-friendly.
                </li>
                <li>
                  CSS media queries are used to adjust styles based on screen
                  sizes.
                </li>
              </ul>
            </li>
            <li>
              <h5>Deployment:</h5>
              <ul>
                <li>
                  The application is deployed on Firebase Hosting for public
                  access.
                </li>
                <li>
                  Hosting configurations are managed through the Firebase
                  console.
                </li>
              </ul>
            </li>
            <li>
              <h5>Material UI:</h5>
              <ul>
                <li>
                  Material UI components are used for styling and theming the
                  application.
                </li>
                <li>
                  Pre-built components and styles are leveraged for consistent
                  design.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="box">
        <div class="innerbox2">
          <h2>Dependencies and Integrations:</h2>
          <ul class="outerlist">
            <li>
              <h5>Material UI:</h5>
              <ul>
                <li>
                  Material UI is used for styling and theming the application.
                </li>
                <li>
                  Pre-built components and styles are leveraged for consistent
                  design.
                </li>
              </ul>
            </li>
            <li>
              <h5>React Router:</h5>
              <ul>
                <li>
                  React Router is used for client-side routing to navigate
                  between pages.
                </li>
                <li>
                  Routes are defined to handle different URLs and render
                  corresponding components.
                </li>
              </ul>
            </li>
            <li>
              <h5>Firebase:</h5>
              <ul>
                <li>
                  Firebase is used for user authentication and database
                  management.
                </li>
                <li>
                  Firestore is used as a NoSQL database to store product and
                  user information.
                </li>
                <li>
                  Firebase Authentication is implemented for user sign-up and
                  login.
                </li>
                <li>
                  Firebase Hosting is used to deploy the application for public
                  access.
                </li>
              </ul>
            </li>
            <li>
              <h5>Stripe:</h5>
              <ul>
                <li>
                  Stripe is integrated for secure payment processing and
                  transactions.
                </li>
                <li>
                  Customers can enter payment details and complete purchases
                  with confidence.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="explorebox">
        <div class="exploreinnerbox2">
          <h4>Explore the Code:</h4>
          <p>
            <a href="https://github.com/lakshitcodes/nexzon" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                width="24"
                height="24"
              />
              GitHub Repository
            </a>
            - View the complete source code for this project on my GitHub.
          </p>
          <p>
            <a href="https://www.linkedin.com/in/jainlakshit/" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                width="24"
                height="24"
              />
              LinkedIn Profile
            </a>
            - Connect with me on LinkedIn for professional updates and
            networking.
          </p>
          <p>
            Thank you for visiting my Amazon clone project. I hope you find the
            functionalities and implementation impressive. Feel free to explore
            the platform and reach out if you have any questions or feedback.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
