import ParstagramFeed from '../assets/Portfolio/Parstagram_Feed.gif';
import ParstagramAccount from '../assets/Portfolio/Parstagram_Account.gif';
import SimpleTweetFeed from '../assets/Portfolio/SimpleTweet_Feed.gif';
import SimpleTweetPost from '../assets/Portfolio/SimpleTweet_Post.gif';

const androidData = [
  {
    overviewImg: ParstagramFeed,
    funcImg: ParstagramAccount,
    overviewAlt: "Parstagram Feed",
    funcAlt: "Parstagram Account Creation",
    title: "Personal Instagram App",
    appName: "Parstagram",
    text: "In a project called Parstagram lead by CodePath, which is similar to Instagram, users can post an image and a message beneath it. The application features user stories that include the ability for users to sign up and create a new account using Parse authentication. The Parse SDK is set up to connect to the server, allowing users to log in and log out of their accounts, with the current signed-in user persisted across app restarts. Users can take a photo, add a caption, and post it to Parstagram while resizing images before upload. Additionally, users can view the last 20 posts submitted to Parstagram and refresh this feed by pulling down to refresh. The app allows navigation between different tabs to access all posts, compose new posts, and view user profiles using a navigation bar at the bottom.",
    repoLink: "https://github.com/kevku/Parstagram"
  },
  {
    overviewImg: SimpleTweetFeed,
    funcImg: SimpleTweetPost,
    overviewAlt: "SimpleTweet Login & Feed",
    funcAlt: "Posting on SimpleTweet",
    title: "Custom Twitter App",
    appName: "SimpleTweet",
    text: "I developed a project called SimpleTweet lead by CodePath, a Twitter app built using the Twitter API. The app allows users to authenticate via OAuth login, enabling secure sign-in. Once logged in, users can view their home timeline, which displays tweets along with relevant details such as the tweet body, the author's username, and their name. The app features a relative timestamp for each tweet, indicating how long ago it was posted, such as 8m or 7h. Users can refresh their timeline with a pull-to-refresh gesture. Additionally, they can compose new tweets by clicking a Compose icon, leading to a screen where they can enter their message and post it to Twitter. The newly created tweet is then inserted into the timeline without needing a full refresh, enhancing the user experience.",
    repoLink: "https://github.com/kevku/Unit-3-SimpleTweet"
  }
]

export default androidData;