import { Container, Grid } from "@material-ui/core";
import React,{FC} from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "../../components/favoriteCard/favoriteCard";
import { selectUser } from "../user/store/user.selector";
import { selectFavorite } from "./store/favorites.selector";


const Favorites:FC=(()=>{
  const favorites = useSelector(selectFavorite)
  const user=useSelector(selectUser);

    return(
      <>
        { user.isLogged ?
              
          <div>
              {favorites.length>0 ?
                  <Container>
                    <h1 style={{textAlign:'center'}}>ALL FAVORITES</h1>
                    <Grid container >
                        {
                        favorites && favorites.map((item)=>{
                          return( 
                          <Grid key={item.id} item xs={12} sm={6} md={4}>
                                <FavoriteCard favorite={item}/>
                            </Grid>
                          )
                        })
                        }
                    </Grid>
                </Container>
                :
                <h3>you have not added any favorite yet</h3>
              }
          </div>
            :
          <h3 style={{textAlign:'center'}}>Please login to see Your favorites</h3>
        }
     </>
    )
})

export default Favorites;