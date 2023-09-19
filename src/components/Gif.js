export const Gif = (props) => {
    return props.format === 'webp' ? (
        <img
            alt="gif"
            className={props.className}
            style={{ width: props.width, height: props.height }}
            src={props.src}
        />
    ) : (
        <video
            className={props.className}
            width={props.width}
            height={props.height}
            autoPlay
            loop
            muted
        >
            <source alt="gif" type="video/mp4" src={props.src} />
        </video>
    );
};
