import alessandro from '../assets/players/alessandro.jpg'
import marcelo from '../assets/players/marcelo.jpg'
import alex from '../assets/players/alex.jpg'
import cairo from '../assets/players/cairo.jpg'

export interface playersProps {
    Id: number,
    Name: string,
    img: string
}

export const players:playersProps[] = [
    {Id: 0, Name: "Alessandro", img:alessandro},
    {Id: 1, Name: "Marcelo", img: marcelo},
    {Id: 2, Name: "Alex", img: alex},
    {Id: 3, Name: "Cairo", img: cairo},
]