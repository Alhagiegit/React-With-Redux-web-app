import React, {FC, memo, useCallback, useState} from "react";
import { Character, RootObject } from "../../Models";
import { makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AiFillHeart} from 'react-icons/ai';
import "./characterCard.css"
import { useDispatch, useSelector } from "react-redux";
import { add, remove, color } from "../../pages/favourites/store/favorites.actions";
//import { selectFavoriteColor } from "../../pages/favourites/store/favorites.selector";


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
 type CharacterParamers={character: Character}

  const CharacterCard: FC<CharacterParamers>= memo((({character})=>{
    const dispatch=useDispatch()
   //let selectColor =useSelector(selectFavoriteColor)
   let [color, setColor]=useState<'lightgray' | 'red'>('lightgray')
    const classes = useStyles();


    const checkClick=(id:number)=>{
        if(color=='lightgray'){
            setColor('red')
           //dispatch(color('red'));
           dispatch(add(character))
        }else{
            setColor('lightgray')
          //dispatch(color('white'));
          dispatch(remove(id))
        }
    }

        return(
            <>
                    <Card  className="singleImg">
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            image={character.image}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {character.name}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            < AiFillHeart onClick={()=>{ checkClick(character.id)}} size={40} fill={color} />
                        </CardActions>
                    </Card>
            </>
        )
  }))
  export default CharacterCard;