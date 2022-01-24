import './post.css';
import festival from '../../addOns/images/festival.jpg';

export default function Post() {
    return (
        <div className="post">
            <img src={festival} alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    We are hosting summer music festival
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi
                consectetur quam totam, dicta autem cumque aperiam corporis. Sint
                iusto soluta ut nihil provident cumque incidunt natus, architecto
                delectus mollitia.
            </p>
        </div>
    );
}
