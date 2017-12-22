import React from 'react';

export default function Pet(props) {
  console.log(props);
  const { name, imageURL, imageDescription, breed, sex, age, story } = props;
  return (
    <section className="dogToAdopt-section">
      <header>
        <h2>{name}</h2>
        <img src={imageURL} alt={imageDescription} height="500" width="800" />
      </header>
      <main>
        <h3>More about {name}</h3>
        <h5>Breed: {breed}</h5>
        <h5>Sex: {sex}</h5>
        <h5>Age: {age}</h5>
        <h5>Story: {story}</h5>
        <div />
        <button type="button" className="button" onClick={props.onAdoptPet}>
          Adopt
        </button>
      </main>
    </section>
  );
}
