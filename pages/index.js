import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

// pages/ClientImpressPage.js

import React from 'react';
import Head from 'next/head'; // Import for setting page metadata
import styles from '../styles/ClientImpressPage.module.css'; // Import your custom CSS for styling

const ClientImpressPage = () => {
  return (
    <div className={styles.clientImpressPage}>
      <Head>
        <title>Impress Your Clients | Your Company</title>
      </Head>

      <header className={styles.pageHeader}>
        <h1>Welcome to Our World-Class Services</h1>
        <p>Your Success is Our Priority</p>
      </header>

      <section className={styles.mainContent}>
        <div className={styles.contentLeft}>
          <h2>Our Mission</h2>
          <p>
            We are dedicated to providing top-notch solutions tailored to your needs. Our mission is to help you achieve your goals with efficiency, creativity, and innovation.
          </p>
        </div>

        <div className={styles.contentRight}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Years of Expertise</li>
            <li>Client-Centric Approach</li>
            <li>Customized Solutions</li>
            <li>Innovative Technology</li>
            <li>Proven Track Record</li>
          </ul>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonial}>
          <div className={styles.testimonialText}>
            <p>
              "Working with [Your Company] has been a game-changer for our business. Their dedication and expertise have helped us achieve remarkable success."
            </p>
          </div>
          <div className={styles.testimonialAuthor}>
            <p>- John Doe, CEO of XYZ Corp</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to discuss your project and let us help you reach new heights.</p>
        <button className={styles.ctaButton}>Contact Us</button>
      </section>
    <Footer />
    </div>
  );
};

export default ClientImpressPage;
