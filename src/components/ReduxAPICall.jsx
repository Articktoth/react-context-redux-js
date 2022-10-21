import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../store/thunks';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const ReduxAPICall = () => {
    const {loading, characters} =  useSelector(state => state.charactersData);
    const dispatch = useDispatch();

    console.log(loading)
    console.log(characters)

    const onClickGetCharacter = () => {
        dispatch(getCharacter());
    }

    return (
        <div>
            <Button onClick={onClickGetCharacter}>Get character</Button>
            {
                loading && <div>CARGANDO....</div>  
            }
            {
                characters.length > 0 && (
                    <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                        {
                            characters.map((c, i) => (
                                <Card key={i} sx={{ maxWidth: 100 }}>
                                    <CardMedia component="img" image={c.image}/>
                                    <CardContent>{c.name}</CardContent>
                                </Card>
                            ))
                        }
                    </div>
                ) 
            }
        </div>
    );
};

export default ReduxAPICall;