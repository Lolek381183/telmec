import React from "react";
import Video from "twilio-video";
import "./styles/Room.css";
import Axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Bottombar from "../components/Bottombar.jsx";

import ConsultaForm from "../components/ConsultaFrom.jsx";

class RoomPrivate extends React.Component {
  constructor(props) {
    super(props);
    const { parameter1 } = this.props.match.params;
    this.state = {
      identity: null,
      roomName: parameter1,
      roomNameErr: false,
      previewTracks: null,
      localMediaAvailable: true,
      hasJoinedRoom: false,
      activeRoom: null,
      backend: "https://backend.telemec.health",
    };
    this.fersd = React.createRef();
    this.joinRoom = this.joinRoom.bind(this);
    this.roomJoined = this.roomJoined.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
    this.detachTracks = this.detachTracks.bind(this);
    this.detachParticipantTracks = this.detachParticipantTracks.bind(this);
    this.attachTrack = this.attachTrack.bind(this);
    this.participantConnected = this.participantConnected.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.onParticipantUnpublishedTrack = this.onParticipantUnpublishedTrack.bind(
      this
    );
  }
  componentDidMount() {
    Axios.get(this.state.backend + "/profile", {
      withCredentials: true,
    })
      .then((response) => {
        if (response) {
        }
      })
      .catch((error) => {
        this.props.history.push("/login");
      });

    Axios.get(this.state.backend + "/token").then((results) => {
      const { identity, token } = results.data;
      console.log(results.data);
      this.setState({ identity, token });
    });
  }

  joinRoom() {
    if (!this.state.roomName.trim()) {
      this.setState({ roomNameErr: true });
      return;
    }

    console.log("Joining room '" + this.state.roomName + "'...");
    let connectOptions = {
      name: this.state.roomName,
    };

    if (this.state.previewTracks) {
      connectOptions.tracks = this.state.previewTracks;
    }

    Video.connect(this.state.token, connectOptions).then(
      this.roomJoined,
      (error) => {
        alert("Could not connect to Twilio: " + error.message);
      }
    );
  }

  attachTracks(tracks, container) {
    tracks.forEach((track) => {
      console.log(track.isSubscribed);

      container.appendChild(track.track.attach());
    });
  }

  attachParticipantTracks(participant, container) {
    var tracks = Array.from(participant.tracks.values());
    this.attachTracks(tracks, container);
  }

  attachTrack(track, container) {
    container.appendChild(track.attach());
  }

  participantConnected(participant) {
    var previewContainer = this.refs.remoteMedia;
    participant.tracks.forEach((publication) => {
      if (publication.isSubscribed) {
        this.attachTrack(publication.track, previewContainer);
      }
    });
    participant.on("trackSubscribed", (track) => {
      this.attachTrack(track, previewContainer);
    });
  }

  roomJoined(room) {
    console.log("Joined as '" + this.state.identity + "'");
    this.setState({
      activeRoom: room,
      localMediaAvailable: true,
      hasJoinedRoom: true,
    });

    var previewContainer = this.refs.localMedia;
    if (!previewContainer.querySelector("video")) {
      this.attachParticipantTracks(room.localParticipant, previewContainer);
    }
    // Attach the Tracks of the room's participants.
    room.participants.forEach((participant) => {
      console.log("Already in Room: '" + participant.identity + "'");
      this.participantConnected(participant);
    });

    // Participant joining room
    room.on("participantConnected", (participant) => {
      console.log("Joining: '" + participant.identity + "'");
      this.participantConnected(participant);
    });

    // Attach participant’s tracks to DOM when they add a track
    room.on("trackAdded", (track, participant) => {
      console.log(participant.identity + " added track: " + track.kind);
      var previewContainer = this.refs.remoteMedia;
      this.attachTracks([track], previewContainer);
    });

    // Detach participant’s track from DOM when they remove a track.
    room.on("trackRemoved", (track, participant) => {
      this.log(participant.identity + " removed track: " + track.kind);
      this.detachTracks([track]);
    });

    // Detach all participant’s track when they leave a room.
    room.on("participantDisconnected", (participant) => {
      console.log("Participant '" + participant.identity + "' left the room");
      this.detachParticipantTracks(participant);
    });

    room.on("trackUnsubscribed", this.onParticipantUnpublishedTrack);
    // Once the local participant leaves the room, detach the Tracks
    // of all other participants, including that of the LocalParticipant.
    room.on("disconnected", () => {
      if (this.state.previewTracks) {
        this.state.previewTracks.forEach((track) => {
          track.stop();
        });
      }
      this.detachParticipantTracks(room.localParticipant);
      room.participants.forEach(this.detachParticipantTracks);
      this.setState({
        hasJoinedRoom: false,
        localMediaAvailable: false,
        activeRoom: null,
      });
    });
  }

  detachTracks(tracks) {
    tracks.forEach((track) => {
      console.log(track);
      track.detach().forEach((detachedElement) => {
        detachedElement.remove();
      });
    });
  }

  getTracks(participant) {
    return Array.from(participant.tracks.values())
      .filter(function (publication) {
        return publication.track;
      })
      .map(function (publication) {
        return publication.track;
      });
  }

  detachParticipantTracks(participant) {
    var tracks = this.getTracks(participant);
    this.detachTracks(tracks);
  }

  onParticipantUnpublishedTrack(track, trackPublication) {
    this.detachTracks([track]);
  }

  leaveRoom() {
    this.state.activeRoom.disconnect();
    this.setState({ hasJoinedRoom: false, localMediaAvailable: false });
  }

  render() {
    let showLocalTrack = this.state.localMediaAvailable ? (
      <div className="flex-item">
        <div ref="localMedia" />{" "}
      </div>
    ) : (
      ""
    );

    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div>
          <div className="Big__container">
            <div className="flex-container">
              {showLocalTrack}

              <div className="flex-item" ref="remoteMedia" id="remote-media" />

              <div className="flex-item">
                <button
                  className="button34 button2"
                  label="Leave Room"
                  onClick={this.joinRoom}
                >
                  <span>Entrar</span>
                </button>
                <button
                  className="button34 button2"
                  label="Leave Room"
                  onClick={this.leaveRoom}
                >
                  <span>Salir</span>
                </button>
              </div>
              <div className="flex-item" ref="remoteMedia" id="remote-media" />
            </div>
            <div></div>
            <div>
              <ConsultaForm />
            </div>
          </div>
        </div>
        <Bottombar></Bottombar>
      </React.Fragment>
    );
  }
}

export default RoomPrivate;
