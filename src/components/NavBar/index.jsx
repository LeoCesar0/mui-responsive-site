import { makeStyles, AppBar, Toolbar, Typography, InputBase, Badge, Avatar } from "@material-ui/core";
import { Mail, Notifications, Search } from "@material-ui/icons";
import {alpha} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    toolbar:{
        display: "flex",
        justifyContent: 'space-between'
    },
    badgeContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& > *':{
            marginRight: theme.spacing(2)
        }
    },
    search:{
        display: 'flex',
        alignItems: 'center',
        background: alpha(theme.palette.secondary.main, 0.60),
        borderRadius: theme.shape.borderRadius,
        transition: '300ms',
        width: '50%',
        '&:hover':{
            background: alpha(theme.palette.secondary.main, 0.85),
        }
    },
    logoSm:{
        display: 'none'
    },
    searchIcon:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },



    [theme.breakpoints.down("sm")]:{
        logoSm:{
            display: 'block',
        },
        logoLg:{
            display: 'none'
        }
    }
}))  


const Navbar = () => {
    const classes = useStyles()


    return(
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                Responsive App
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                Rep. App
            </Typography>
            <div className={classes.search}>
                <Search  className={classes.searchIcon}  />
                <InputBase placeholder="Search..."/>
            </div>
            <div className={classes.badgeContainer}>
                <Badge badgeContent={4} color="secondary">
                    <Mail />
                </Badge>
                <Badge badgeContent={4} color="secondary">
                    <Notifications />
                </Badge>
                <Avatar alt="Avatar" src="https://github.com/LeoCesar0.png" ></Avatar>
            </div>
          </Toolbar>
        </AppBar>
    )
}


export default Navbar