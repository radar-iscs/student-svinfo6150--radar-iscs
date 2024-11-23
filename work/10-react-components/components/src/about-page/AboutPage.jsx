import React, { useRef } from 'react';

import RegisterDialog from '../register-dialog';
import Button from '../button';

import './AboutPage.css';

export function AboutPage() {
  const PREFIX = 'about-page';
  const dialogRef = useRef();

  const onClickModalBtn = () => {
    dialogRef.current.showModal();
  };

  return (
    <>
      <div className={PREFIX}>
        <h2>About Us</h2>
        <p>Welcome to our cat-centric paradise! Cats are fascinating creatures, known for their independence, agility, and playful behavior. These domesticated felines have accompanied humans for thousands of years, charming us with their quirky personalities and captivating antics. Here at CatWorld, we celebrate everything that makes cats unique and beloved family members.</p>
        <p>Join us on this purrfect journey as we explore the incredible world of cats. Our team is dedicated to delivering a mix of educational content and entertaining anecdotes that will keep you coming back for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Grab a cup of tea, snuggle with your feline friend, and dive into the charmingly whimsical world of cats!</p>
        <Button
          content='Join Us Now!'
          onClick={onClickModalBtn}
        />
      </div>
      <RegisterDialog dialogRef={dialogRef} />
    </>
  );
}
