import { Reveal } from "@/components/ui/reveal";
import { portfolioContent } from "@/content/portfolio";

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
            Experience,
            <br />
            <em>clearly framed.</em>
          </h2>
        </Reveal>

        <section
          className="profile-block specializations"
          aria-labelledby="specializations-title"
        >
          <Reveal>
            <div className="block-heading">
              <span>01</span>
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

        <section className="profile-block about-me" aria-labelledby="about-me-title">
          <Reveal>
            <div className="block-heading">
              <span>02</span>
              <div>
                <p className="eyebrow">Background / Capabilities</p>
                <h3 id="about-me-title">About me</h3>
              </div>
            </div>
            <div className="about-grid">
              <div className="about-copy">
                <p className="about-lead">
                  I am a Singapore-based freelance and hobbyist photographer
                  interested in how people, purpose, and atmosphere come
                  together in a frame.
                </p>
                <p>
                  My background began in school media and publicity from 2018
                  to 2023, followed by photography work with the Digital and
                  Intelligence Service Information Centre during NDP25. I now
                  develop portrait and cosplay work alongside my studies in
                  Information Systems at SMU.
                </p>
              </div>
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
