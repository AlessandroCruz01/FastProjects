import { Container } from "@mui/material";
import {ReactNode} from 'react'

interface ContainerContentProps {
    children: ReactNode
}
export function ContainerContent({children} : ContainerContentProps){
    return(
        <Container sx={{
            width: "95vw",
            height: "70vh",
            display: "flex",
            justifyContent: 'center',
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
            
        }}>

            {children}

        </Container>
    )
}