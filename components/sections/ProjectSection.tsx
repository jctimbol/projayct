export default function ProjectSection() {
  return (
    <section className="project">
      <div className="projectTitle">recent projects</div>
      <div className="projectGrid">
        <div className="projectCard">
          <img
            className="projectIcon"
            src="../../stickers/nonclickable/SeeneLogo.png"
          ></img>
        </div>
        <div className="projectCard">
          <img
            className="projectIcon"
            src="../../stickers/nonclickable/TransitLogo.png"
          ></img>
        </div>
        <div className="projectCard">
          <img
            className="projectIcon"
            width="150"
            height="250"
            src="../../stickers/nonclickable/DDDLogo.png"
          ></img>
        </div>
        <div className="projectCard">
          <img
            className="projectIcon"
            src="../../stickers/nonclickable/HelloStrangerLogo.png"
          ></img>
        </div>
      </div>
    </section>
  );
}
