import { useState } from 'react';
export default function IfStatementExample() {

  const [content, setContent] = useState('Click the button');
  const [showContent, setShowContent] = useState(false);
  const changeContent = () => {
    if (showContent) {
      setContent('Click the button');
      setShowContent(false);
    }
    else {

      setContent('Congrats you found the hidden content!');
      setShowContent(true);
    }
  };
  return (
    <div>
      <button onClick={changeContent}>Click IF Example </button>{' '}
      <div>{content}</div>
    </div>
  );
}

const [animalImageURL, setAnimalImageURL] = useState('');
// const handleShowCat = () => setAnimalImageURL("https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"); 
// const handleShowDog = () => setAnimalImageURL("https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900");  
const showAnimal = (animal) => {
  if (animal === 'cat') {
    setAnimalImageURL(
      'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
    );
  }
  else if (animal === 'dog') {
    setAnimalImageURL('https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900');
  }
};
return (

  <div>
    <button onClick={() => showAnimal('cat')}>Show me the Cat</button>
    <br />
    <button onClick={() => showAnimal('dog')}>Show me the Dog</button>
    <br />
    <img src={animalImageURL} width="50%" />
  </div>
);

export default App;
