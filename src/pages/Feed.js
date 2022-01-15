import "../Assets/Styles/styles.css";
import "../Assets/Styles/Feed.css";
import Copyright from "../Components/Copyright";
import HeaderDevs from "../Components/HeaderDevs";
import Avatar from "../Assets/img/image 2.png";

function Feed() {
  return (
    <section id="feed ">
      <div className="containerFeed">
        <HeaderDevs />

        <div className="containerPost">
          <div className="ContainerImgPost">
            <img className="imgAvatarPost" src={Avatar} alt="avatar" />

            <textarea
              className="textPost"
              maxlength="200"
              placeholder="What´s happening?"
            />
          </div>

          <div className="ContainerContadorPost">
            <p>17</p>
            <p className="textMax">200 max. </p>
          </div>

          <div className="ContainerBtnPost">
            <button>POST</button>
          </div>
        </div>
        <Copyright />
      </div>
    </section>
  );
}

export default Feed;
