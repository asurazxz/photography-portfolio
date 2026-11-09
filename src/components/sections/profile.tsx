import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { aboutPortrait, portfolioContent } from "@/content/portfolio";

export function Profile() {
  return (
    <section
      className="profile section-space"
      id="about"
      aria-labelledby="profile-title"
    >
      <div className="profile-shell">
        <Reveal className="profile-heading">
          <p className="eyebrow">Practice / Profile</p>
          <h2 id="profile-title">
            Memories,
            <br />
            <span>clearly framed.</span>
          </h2>
        </Reveal>

        <section className="profile-block about-me" aria-labelledby="about-me-title">
          <Reveal>
            <div className="block-heading">
              <span>01</span>
              <div>
                <p className="eyebrow">Background / Capabilities</p>
                <h3 id="about-me-title">About me</h3>
              </div>
            </div>
            <div className="about-grid">
              <figure className="about-portrait">
                <Image
                  src={aboutPortrait.src}
                  alt={aboutPortrait.alt}
                  fill
                  sizes="(max-width: 720px) 22rem, 40vw"
                />
              </figure>
              <div className="about-body">
              <div className="about-copy">
                <p className="about-lead">
                  I am an aspiring Singapore-based freelance and hobbyist
                  photographer who is always looking for ways to capture
                  everyday emotions in stills.
                </p>
                <p>
                  My love for photography began in secondary school (Maris Stella), where I was part of the Student Council's Corporate Communications committee.
                  <br/>
                  Upon entering Junior College (St. Andrew's), I joined the Student Council's Media and Publicity Committee, where my passion for photography took a leap and flourished.
                  <br/><br/>
                  More recently, I was under the Digital and Intelligence Service (DIS) Information Centre, and engaged in Media Ops for NDP25.
                  Now, I do freelance photography, and as a hobby in my free time!
                </p>
              </div>
              <div className="about-details">
              <div className="skills-panel">
                <p className="eyebrow">Technical skills</p>
                <div className="skill-groups">
                  {portfolioContent.skillGroups.map((group) => (
                    <section key={group.id}>
                      <h4>{group.title}</h4>
                      <ul>
                        {group.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
              <aside className="interests-panel" aria-label="Secondary interests">
                <p className="eyebrow">Secondary interests</p>
                <dl>
                  {portfolioContent.secondaryInterests.map((item) => (
                    <div key={item.title}>
                      <dt>{item.title}</dt>
                      <dd>{item.code}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
              </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          className="profile-block specializations"
          aria-labelledby="specializations-title"
        >
          <Reveal>
            <div className="block-heading">
              <span>02</span>
              <div>
                <p className="eyebrow">Primary disciplines</p>
                <h3 id="specializations-title">Main specialisations</h3>
              </div>
            </div>
            <div className="specialization-grid">
              {portfolioContent.specializations.map((item) => (
                <article className="specialization" key={item.id}>
                  <span aria-hidden="true">{item.id}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          className="profile-block experience"
          aria-labelledby="experience-title"
        >
          <Reveal>
            <div className="block-heading">
              <span>03</span>
              <div>
                <p className="eyebrow">Chronology</p>
                <h3 id="experience-title">Past experience</h3>
              </div>
            </div>
            <ol className="timeline">
              {portfolioContent.timeline.map((entry, index) => (
                <li className="timeline-entry" key={entry.id}>
                  <div className="timeline-marker" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="timeline-period">
                    <span className={entry.current ? "current-period" : ""}>
                      {entry.period}
                    </span>
                    <strong>{entry.tag}</strong>
                  </div>
                  <div className="timeline-copy">
                    <h4>{entry.title}</h4>
                    <p>{entry.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>
      </div>
    </section>
  );
}
