const YoutubeEmbed = ({ embedId, setyoutubeVideo }) => (
  <div
    className="video-responsive"
    style={{
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      background:'rgb(0 0 7 / 84%)',
      zIndex: 1000,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }}
  >
    <iframe
      width="90%"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <i 
    onClick={() => {
        setyoutubeVideo(false);
      }}
    style={{position:'absolute', top:'10px',right:'10px',cursor:'pointer'}}
    className="bi bi-x-octagon fs-1 text-danger rounded-circle"></i>
    {/* <span
    style={{position:'absolute', top:'10px',right:'10px'}}
      onClick={() => {
        setyoutubeVideo(false);
      }}
    >
      close
    </span> */}
  </div>
);

//   YoutubeEmbed.propTypes = {
//     embedId: PropTypes.string.isRequired
//   };

export default YoutubeEmbed;
