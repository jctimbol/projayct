export default function AboutSection() {
  return (
    <section className="about">
      <div className="aboutGrid">
        <div className="aboutLeft">
          <h2 className="aboutTitle">about me</h2>
          <p className="aboutText">
            hello! im jay, a software engineering student at san jose state
            university! i'm currently into full-stack web dev, but i'm also
            looking into distributed systems and networking. i also used to be
            into game dev, but have since pivoted (it's rough out there)
            <br /> <br />
            outside of coding, i'm a huuuuge music nerd and i love taking (not
            very good) pictures of my life!
          </p>
        </div>

        <div className="aboutRight">
          <img
            className="photoStrip"
            src="/stickers/nonclickable/PhotoCollage.png"
          ></img>
        </div>
      </div>
    </section>
  );
}
