import { Button, Container } from "@mui/material";
import { ContainerContent } from "./Components/ContainerContent";
import logo from './assets/fifa.svg'
import { players } from "./db/players";
import { AvatarImg } from "./Components/AvatarImg";
import { times } from "./db/times";
import { useState } from "react";

// Tipos
type Player = {
    Id: number;
    Name: string;
    img: string;
    // Adicione outros campos conforme necessário
};

type Club = {
    id: number;
    time_pais: string;
    urlImg: string;
    // Adicione outros campos conforme necessário
};

const shuffleArray = (array: []) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Trocar os elementos array[i] e array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const getRandomElements = (array: [], count: number) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
};

export default function App() {
    const [clubes, setClubes] = useState(times)
    const [gamers, setGamers] = useState(players)
    const [sorteou, setSorteou] = useState(false)

    const sorteia = () => {
        const shuffledPlayers = shuffleArray([...players]);
        const randomGetPlayers = getRandomElements(shuffledPlayers, 4);
        setGamers(randomGetPlayers)

        const shuffledClubs = shuffleArray([...times]);
        const randomGetTimes = getRandomElements(shuffledClubs, 4);
        setClubes(randomGetTimes)

        setSorteou(true)
    }
    

  return (
    <Container sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
    }}>

        <Container sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "5rem"
        }}>
            <img src={logo} style={{
                width: "8rem",
                height: "3rem",
                marginBottom: "2rem"
            }}/>


            <Container sx={{
                display: "flex",
                gap: 2
            }}>

                <ContainerContent>
                    
                    {
                        gamers.map((player) => (
                            <AvatarImg name={player.Name} urlImg={player.img} key={player.Id}/>
                        ))
                    }
                    
                </ContainerContent>
                <ContainerContent>
                    {clubes.map((time) => (
                        // <AvatarImg name={time.time_pais} urlImg={time.urlImg} key={time.id} />
                        <img src={time.urlImg} alt={time.time_pais} title={time.time_pais} key={time.id} style={{
                            width: "6rem",
                            height: "6rem",
                            margin: "auto"
                        }} />
                    ))}
                </ContainerContent>

            </Container>

            <Button disabled={sorteou} onClick={() => sorteia()} variant="contained" sx={{
                marginTop: "3rem"
            }}>Sortear</Button>


        </Container>




    </Container>
  );
}
