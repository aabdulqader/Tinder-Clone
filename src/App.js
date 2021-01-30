import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./Components/TinderCards/TinderCards";
import Footer from "./Components/Footer/Footer";
import Chats from "./Components/Chats/Chats";
import ChatScreen from "./Components/ChatScreen/ChatScreen";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <Footer />
          </Route>
          <Route path="/chat/:person">
            <Header backToChat="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Footer/> */
}
{
  /* <ChatScreen /> */
}
{
  /* <IndividualChatScreen /> */
}
