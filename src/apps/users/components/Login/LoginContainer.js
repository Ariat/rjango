import Relay from "react-relay";
import Landing from "./LoginComponent";

export default Relay.createContainer(Landing, {
    fragments: {
        viewer: () => Relay.QL`
            fragment on UserNode {
                id
                username
                email
                dateJoined
            }`
    }
});