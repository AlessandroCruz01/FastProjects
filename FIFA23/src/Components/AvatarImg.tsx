import Avatar from '@mui/material/Avatar';
interface AvatarProps {
    urlImg: string
    name: string
}

export function AvatarImg( props: AvatarProps){
    return(
        <Avatar alt={props.name} src={props.urlImg} title={props.name} sx={{
            width: "6rem",
            height: "6rem",
            margin: "auto",
            border: "1px solid black",
            borderRadius: "50%",
        }}


        />
    )
}