import {FC, memo, useState} from "react";
import { Character } from "../../Models";
import { makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { remove } from "../../pages/favourites/store/favorites.actions";


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
 type favoriteParamers={favorite: Character}

  const FavoriteCard: FC<favoriteParamers>= memo((({favorite})=>{
    const dispatch=useDispatch()
    let [color, setColor]=useState<'red'|'blue'>('blue')
    const classes = useStyles();

        return(
            <>
                    <Card  className="singleImg">
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            image={favorite.image}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {favorite.name}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <AiFillDelete size={40} onMouseOver={()=>setColor('red')} onMouseLeave={()=>setColor('blue')} color={color}  onClick={()=>dispatch(remove(favorite.id))} />
                        </CardActions>
                    </Card>
            </>
        )
  }))
  export default FavoriteCard;