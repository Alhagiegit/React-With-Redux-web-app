import { Container, Grid } from "@material-ui/core";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CharacterCard from "../../components/characterCard/characterCard";
import { Character, RootObject } from "../../Models";
import Signin from "../login/login";
import { selectUser } from "../user/store/user.selector";
import "./characters.css"



export const Characters= memo(()=>{

    const [characters, setCharacter]= useState<Character[]>([]);
    const user=useSelector(selectUser);

    const getData=  (async() =>{
        const responceFetch= await  fetch('https://rickandmortyapi.com/api/character');
          const {results}=  await responceFetch.json() as RootObject;
          setCharacter(results)
        })
    

      useEffect( ()=>{
        getData()
      }, [])

        return(
            <>
            <div className="character-login" >
              { user.isLogged ? 
                  <Container>
                      <h1 style={{textAlign:'center'}}>ALL CHARACTERS</h1>
                      <Grid container >
                          {
                          characters && characters.map((item)=>{
                          return( 
                          <Grid key={item.id} item xs={12} sm={6} md={3}>
                                  <CharacterCard character={item}/>
                              </Grid>
                          )
                          })
                          }
                  </Grid>
                  </Container>
                  :
                  <Signin/>
                }
              </div>
            </>
        )
  })