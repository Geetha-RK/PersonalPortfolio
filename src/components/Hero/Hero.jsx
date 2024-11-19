import React, { useEffect } from 'react'; 
import { handleScroll } from '../utils/scroll';
import { assets } from '../utils/assets';
import './Hero.scss'

const Hero = () => {
    useEffect(() => {
        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
    <section className="Home">

      <img src={assets.stars} className="stars" alt="Stars" />
      <div className="clouds"></div>
      <img src={assets.moon} className="moon" alt="Moon" />

      <img src={assets.mountain1} className="mountain" alt="Mountain 1" />
      <img src={assets.mountain} className="mountain" alt="Mountain" />

      <img src={assets.trees} className="trees" alt="Trees" />

      <img src={assets.layer} className="layer" alt="Layer" />
    </section>

    <section className="About">
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quam architecto sit explicabo aliquam labore velit, culpa quod quo sunt esse qui reiciendis exercitationem vitae doloribus inventore veniam necessitatibus temporibus impedit iste! Officiis possimus hic, magni atque tenetur sapiente nisi rem modi. Ex numquam dolore tempore, amet pariatur atque voluptatum! Rem suscipit, esse aliquid, pariatur id labore itaque aspernatur corporis voluptatibus tempore aperiam quis iure blanditiis ipsa vitae at sapiente nesciunt! Repellat, voluptatibus. Consectetur, ipsa sequi tenetur unde, dignissimos autem ullam quidem sint dolorem vitae consequatur rem exercitationem excepturi! Laboriosam aperiam ex voluptates vitae beatae molestiae, vero vel sit nesciunt.</p>
   
    </section>
  </>
  )
}

export default Hero