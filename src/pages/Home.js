import BackgroundImage from "../components/UI/Image.js";

import classes from "../styles/Home.module.sass";


export default function Home() {
  
  return (
    <div className={classes.container}>
      

      <BackgroundImage
        style={{zIndex: -1}}
        className={classes.landingImage}
        src="/images/Home-01-scaled.jpg"
        alt="Image description"
        layout="fill"
        quality={100}
      />
      
    </div>
  );
}
