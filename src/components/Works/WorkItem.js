import { useNavigate } from "react-router-dom";  // Sostituisce useRouter di Next.js
import { useState } from 'react';

import Card from "../UI/Card";
import classes from "./WorkItem.module.sass";

function WorkItem(props) {
  const navigate = useNavigate();  // Sostituisce useRouter
  const showDetailsHandler = () => {
    navigate("/works/" + props.id);  // Sostituisce router.push
  };

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleImageLoad = (event) => {
    const { width, height } = event.target;
    setDimensions({ width, height });
  };

  return (
    <li className={classes.item} onClick={showDetailsHandler}>
      <Card>
        <div className={classes["item--positions"]}>
          <div className={classes.caption}>
            <div className={classes["title--style"]}>{props.title}</div>
            <p className={classes["shortDescription--style"]}>
              {props.shortDescription}
            </p>
          </div>
          <img  // Sostituisce Image di Next.js
            src={props.image}  // Assicurati che `props.image` non contenga un "/" iniziale se si trova nella cartella pubblica
            className={classes.img}
            alt={props.title}
            width={dimensions.width || "auto"}
            height={dimensions.height || "auto"}
            onLoad={handleImageLoad}
          />
        </div>
      </Card>
    </li>
  );
}

export default WorkItem;
