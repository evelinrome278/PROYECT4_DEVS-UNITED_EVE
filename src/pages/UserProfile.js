import "../Styles/styles.css";
import Copyright from "./Copyright";
import HeaderProfile from "./HeaderProfile";
import MyPosts from "./MyPosts";
import ShowTweet from "./ShowTweet";
// import Favorites from "./Favorites";
import Avatar from "../../public/img/image 2.png";
import Rectangle from "../../public/img/Rectangle.svg";

function UserProfile() {
  return (
    <section className="containerPost">
      <HeaderProfile />

      <div className="containerCreatePost">
        <div className="ContainerImgPost">
          <img className="imgUserProfile" src={Avatar} alt="avatar" />
        </div>

        <div className="ContainerContadorPost">
          <p className="rectUser">UserName</p>
        </div>

        <div className="ContainerTab">
          <span className="tabPost">POSTS</span>
          <span className="tabFavorites">FAVORITES</span>
        </div>
      </div>
      <ShowTweet />
      <hr />
      <Copyright />
    </section>
  );
}

export default UserProfile;