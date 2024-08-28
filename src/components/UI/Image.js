import classes from "./Image.module.sass";


const BackgroundImage = (props) => {
  return (
    <div className={classes.backgroundImg}>
      <img
        className={props.className}
        src={props.src}
        alt={props.alt}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: "absolute",  // Posiziona l'immagine in modo assoluto
          top: 0,
          left: 0,
          zIndex: -1}}
          
        quality={props.quality}
        
      />
    </div>
  );
};

export default BackgroundImage;
