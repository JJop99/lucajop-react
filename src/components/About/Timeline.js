import classes from "./Timeline.module.sass";


const Timeline = () => {
  return (
    <ol className={classes.ol}>
      <li className={classes.li}>
        <div className={classes.div}></div>
        <time className={classes.time}>
          1997
        </time>
        <h3 className={classes.h3}>
          Laurea in Architettura
        </h3>
        <p className={classes.p}>
          Presso la Facoltà di Architettura di Firenze
        </p>
      </li>
      <li className={classes.li}>
        <div className={classes.div}></div>
        <time className={classes.time}>
          1998
        </time>
        <h3 className={classes.h3}>
          Prima esperienza lavorativa
        </h3>
        <p className={classes.p}>
          presso lo studio Sbrozzi Ingegneri Associati di Modena
        </p>
      </li>
      <li className={classes.li}>
        <div className={classes.div}></div>
        <time className={classes.time}>
          2001
        </time>
        <h3 className={classes.h3}>
          Beastudio Architetti Associati
        </h3>
        <p className={classes.p}>
          Si sposta a Bologna per fondare il nuovo studio di architettura
          Beastudio
        </p>
      </li>
      <li className={classes.li}>
        <div className={classes.div}></div>
        <time className={classes.time}>
          2005
        </time>
        <h3 className={classes.h3}>
          Studio TECO+
        </h3>
        <p className={classes.p}>
          Dalla fusione tra Beastudio e Studio Teco nasce Studio TECO+ Partners
        </p>
      </li>
      <li className={classes.li}>
        <div className={classes.div}></div>
        <time className={classes.time}>
          2012
        </time>
        <h3 className={classes.h3}>
          Architetto Luca Jop
        </h3>
        <p className={classes.p}>
          Lascia lo studio associato per intraprendere la professione come
          libero professionista
        </p>
      </li>
    </ol>
  );
};

export default Timeline;
