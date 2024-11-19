import React, { useRef } from 'react';
import RegisterDialog from '../register-dialog';
import Button from '../button'
import './AboutPage.css';

export function AboutPage() {
  const PREFIX = "about-page";
  const dialogRef = useRef();

  const onClickModalBtn = () => {
    dialogRef.current.showModal();
  };

  return (
    <div className={PREFIX}>
      <h2 className="center">About Us</h2>
      <Button content='Join Us' onClick={onClickModalBtn} />
      <RegisterDialog dialogRef={dialogRef}/>
      <p className="main-content">Welcome to our cat-centric paradise! Cats are fascinating creatures, known for their independence, agility, and playful behavior. These domesticated felines have accompanied humans for thousands of years, charming us with their quirky personalities and captivating antics. Here at CatWorld, we celebrate everything that makes cats unique and beloved family members.</p>
      <p className="main-content">Our mission is to create a community where cat lovers can come together to share their experiences, insights, and tips about these amazing animals. Whether you are a proud cat owner or simply an admirer of these graceful beings, our website is designed to provide you with valuable information, heartwarming stories, and a wealth of resources. From the latest in cat care to fun facts and adoption tales, CatWorld is your go-to hub for all things feline.</p>
      <p className="main-content">Join us on this purrfect journey as we explore the incredible world of cats. Our team is dedicated to delivering a mix of educational content and entertaining anecdotes that will keep you coming back for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Grab a cup of tea, snuggle with your feline friend, and dive into the charmingly whimsical world of cats!</p>
    </div>
  );
}
