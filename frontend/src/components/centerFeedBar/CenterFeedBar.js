import CreatePost from "../createPost/CreatePost"
import {Posts} from '../../dummydata';
import Post from "../post/Post"
import SortByButton from '../sortByButton/SortByButton'
const CenterFeedBar = () =>{
    const style={
        "width":'calc(100% - 600px)',
    }
    return(
        <div style={style}>
             <CreatePost></CreatePost>
             <SortByButton></SortByButton>
             {Posts.map((p) =>(
                 <Post key={p.id} post={p}></Post>
             ))}
        </div>
       
    )
}

export default CenterFeedBar;