import React from 'react';
import'./List.css';

const HorizontalList = () => {
  const items = [
    {
      id: 1,
      name: "Spider-Man"
    },
    {
      id: 2,
      name: "Capitão America"
    },
    {
      id: 3,
      name: "Bob Esponja"
    },
    {
      id: 4,
      name: "Simpsons"
    },
    {
      id: 5,
      name: "Homem de Ferro 2"
    },
    {
      id: 6,
      name: "Carros"
    },
    {
      id: 7,
      name: "Carros 2"
    },
  ]
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className='container'>
        <button className='button' onClick={slideLeft}>BUTAO</button>
        <div id='slider' className='list'>
          {items.map((item) => (
            <ul key={item.id} >
            <li className='movies'>{item.name}</li>
          </ul>
          ))}
        </div>
        <button className='button2' onClick={slideRight}>BUTAO</button>
      </div>
    </>
  );
};

export default HorizontalList;