import './About.css'

const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'C'] },
  { group: 'Frontend', items: ['React', 'HTML5', 'CSS3'] },
  { group: 'Tools & Other', items: ['Git', 'BLE / IoT', 'Machine Learning', 'Data Analysis'] },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">

        <div className="about__header">
          <span className="section-label">About</span>
        </div>

        <div className="about__grid">
          {/* Left: big statement */}
          <div className="about__statement">
            <h2 className="about__headline">
              Building at the intersection of&nbsp;
              <em>intelligence</em> and&nbsp;
              <em>craft.</em>
            </h2>
          </div>

          {/* Right: bio + skills */}
          <div className="about__right">
            <p className="about__bio">
              I'm Selwyn — a student at SKCET studying Artificial Intelligence
              and Data Science, with a genuine curiosity for how systems think
              and how interfaces feel. I build things for the web and explore
              how emerging technology can solve real problems.
            </p>
            <p className="about__bio">
              When I'm not writing code, I'm reading about ML research,
              tinkering with hardware, or thinking about design.
            </p>

            <div className="about__skills">
              {skills.map(({ group, items }) => (
                <div key={group} className="about__skill-group">
                  <span className="about__skill-label">{group}</span>
                  <div className="about__skill-tags">
                    {items.map((item) => (
                      <span key={item} className="about__tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
