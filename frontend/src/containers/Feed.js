import Navbar from '../components/navbar/Navbar'
import LeftSideBar from '../components/leftSideBar/LeftSideBar';
import CenterFeedBar from '../components/centerFeedBar/CenterFeedBar';
import RightSideBar from '../components/rightSideBar/RightSidebar';
import './feed.css'
import Demo from '../components/demo/Demo';
const Feed = () =>{
    return( 
        <div className="main-container" >
            <Navbar></Navbar>
            <div className='feed-container'>
            <LeftSideBar></LeftSideBar>
            <CenterFeedBar></CenterFeedBar>
            <RightSideBar></RightSideBar>
            </div>
        </div>
        
    )
}

export default Feed;