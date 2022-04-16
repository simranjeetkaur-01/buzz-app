import RecentGroupSubs from "../recentGroupSubs/RecentGroupSubs";
import AboutUser from "../aboutUser/AboutUser";
import './leftSideBar.css'
const LeftSideBar =() =>{
    const style={
        "width":'300px',
    }
    return(
        <div style={style}>
            <AboutUser></AboutUser>
            <RecentGroupSubs></RecentGroupSubs>
        </div>
    )
}

export default LeftSideBar;