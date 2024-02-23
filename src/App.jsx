import './App.css';
import illustration from './images/illustration-article.svg';

import gregImage from './images/image-avatar.webp'

import Footer from './components/footer';

function App() {
  return (
    <div>
      <div className="App p-5 bg-white rounded-xl w-custom min-[370px]:w-custom2 md:w-96 md:h-custom shadow-custom border border-black text-left ">
        <img className=" rounded-xl" src={illustration} alt="" />
      
        <p className='w-24 mt-5 p-2 rounded-md font-bold bg-yellow-300 text-center' >Learning</p>
        <p className='text-left pt-4 font-figtree-italy'>Published 21 Dec 2023</p>
        <h1 className='text-left font-bold text-2xl pt-4 hover:text-yellow-300 cursor-pointer'>HTML & CSS foundations</h1>
        <p className='text-left text-gray-400 pt-5 font-figtree-italy'>
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
      
        <div className='py-9 flex h-8 w-40  flex-row items-center space-x-7 font-bold'>
          <img className='w-8' src={gregImage} alt="greg-avatar" />
          <p>Greg Hooper</p>
        </div>
      </div>

      <Footer />  
    </div>
  );
}

export default App;
