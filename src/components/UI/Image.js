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
          height: '100%'}}
        quality={props.quality}
        
      />
    </div>
  );
};

export default BackgroundImage;
