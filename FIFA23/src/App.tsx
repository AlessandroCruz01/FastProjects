import { Button, Container } from "@mui/material";
import { ContainerContent } from "./Components/ContainerContent";
import logo from './assets/fifa.svg'
import { players, playersProps } from "./db/players";
import { times, timesProps } from "./db/times";
import { AvatarImg } from "./Components/AvatarImg";
import { useState } from "react";

const shuffleArray = (array: (playersProps[] | timesProps[])) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRandomElements = (array: any[], count: number) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
};

export default function App() {
    const [clubes, setClubes] = useState<timesProps[]>(times)
    const [gamers, setGamers] = useState<playersProps[]>(players)
    const [sorteou, setSorteou] = useState(false)

    const sorteia = () => {
        const shuffledPlayers = shuffleArray([...players]);
        console.log('Players ' + shuffledPlayers)
        const randomGetPlayers = getRandomElements(shuffledPlayers, 4);
        setGamers(randomGetPlayers)

        const shuffledClubs = shuffleArray([...times]);
        console.log('Times ' + shuffledClubs)
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
