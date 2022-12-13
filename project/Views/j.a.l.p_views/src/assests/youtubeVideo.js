function YoutubeVideo({src,height,width,title}) {
    return (  
    <iframe 
        width={width}
        height={height}
        src={"https://www.youtube.com/embed/"+src}
        title={title}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
        </iframe>);
}

export default YoutubeVideo;