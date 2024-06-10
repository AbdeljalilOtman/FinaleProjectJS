<template>
  <div id="top">
    <header class="d-print-none">
      <div class="container text-center text-lg-left">
        <div class="py-3 clearfix">
          <h1 class="site-title mb-0">{{ name }}</h1>
          <div class="site-nav">
            <nav role="navigation">
              <ul class="nav justify-content-center">
                <li class="nav-item"><a class="nav-link" :href="social.twitter" title="Twitter"><i class="fab fa-twitter"></i><span class="menu-title sr-only">Twitter</span></a></li>
                <li class="nav-item"><a class="nav-link" :href="social.facebook" title="Facebook"><i class="fab fa-facebook"></i><span class="menu-title sr-only">Facebook</span></a></li>
                <li class="nav-item"><a class="nav-link" :href="social.instagram" title="Instagram"><i class="fab fa-instagram"></i><span class="menu-title sr-only">Instagram</span></a></li>
                <li class="nav-item"><a class="nav-link" :href="social.github" title="Github"><i class="fab fa-github"></i><span class="menu-title sr-only">Github</span></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div class="page-content">
      <div class="container">
        <div class="cover shadow-lg bg-white">
          <div class="cover-bg p-3 p-lg-4 text-white">
            <div class="row">
              <div class="col-lg-4 col-md-5">
                <div class="avatar hover-effect bg-white shadow-sm p-1">
                  <img :src="avatar" width="200" height="200" />
                </div>
              </div>
              <div class="col-lg-8 col-md-7 text-center text-md-start">
                <h2 class="h1 mt-2" data-aos="fade-left" data-aos-delay="0">{{ name }}</h2>
                <p data-aos="fade-left" data-aos-delay="100">{{ title }}</p>
                <div class="d-print-none" data-aos="fade-left" data-aos-delay="200">
                  <a class="btn btn-light text-dark shadow-sm mt-1 me-1" :href="resumeLink" target="_blank">Download CV</a>
                  <a class="btn btn-success shadow-sm mt-1" href="#contact">Hire Me</a>
                </div>
              </div>
            </div>
          </div>
          <div class="about-section pt-4 px-3 px-lg-4 mt-1">
            <div class="row">
              <div class="col-md-6">
                <h2 class="h3 mb-3">About Me</h2>
                <p>{{ about }}</p>
              </div>
              <div class="col-md-5 offset-md-1">
                <div class="row mt-2">
                  <div class="col-sm-4">
                    <div class="pb-1">Age</div>
                  </div>
                  <div class="col-sm-8">
                    <div class="pb-1 text-secondary">{{ age }}</div>
                  </div>
                  <div class="col-sm-4">
                    <div class="pb-1">Email</div>
                  </div>
                  <div class="col-sm-8">
                    <div class="pb-1 text-secondary">{{ email }}</div>
                  </div>
                  <div class="col-sm-4">
                    <div class="pb-1">Phone</div>
                  </div>
                  <div class="col-sm-8">
                    <div class="pb-1 text-secondary">{{ phone }}</div>
                  </div>
                  <div class="col-sm-4">
                    <div class="pb-1">Address</div>
                  </div>
                  <div class="col-sm-8">
                    <div class="pb-1 text-secondary">{{ address }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="d-print-none" />
          <div class="skills-section px-3 px-lg-4">
            <h2 class="h3 mb-3">Professional Skills</h2>
            <div class="row">
              <div class="col-md-6" v-for="(skill, index) in skills.slice(0, 3)" :key="index">
                <div class="mb-2"><span>{{ skill.name }}</span>
                  <div class="progress my-1">
                    <div class="progress-bar bg-primary" role="progressbar" :data-aos="'zoom-in-right'" :data-aos-delay="(index + 1) * 100" data-aos-anchor=".skills-section" :style="{ width: skill.level + '%' }" :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6" v-for="(skill, index) in skills.slice(3)" :key="index">
                <div class="mb-2"><span>{{ skill.name }}</span>
                  <div class="progress my-1">
                    <div class="progress-bar bg-success" role="progressbar" :data-aos="'zoom-in-right'" :data-aos-delay="(index + 4) * 100" data-aos-anchor=".skills-section" :style="{ width: skill.level + '%' }" :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="d-print-none" />
          <div class="work-experience-section px-3 px-lg-4">
            <h2 class="h3 mb-4">Work Experience</h2>
            <div class="timeline">
              <div class="timeline-card timeline-card-primary card shadow-sm" v-for="(job, index) in workExperience" :key="index">
                <div class="card-body">
                  <div class="h5 mb-1">{{ job.title }} <span class="text-muted h6">at {{ job.company }}</span></div>
                  <div class="text-muted text-small mb-2">{{ job.period }}</div>
                  <div>{{ job.description }}</div>
                </div>
              </div>
            </div>
          </div>
          <hr class="d-print-none" />
          <div class="page-break"></div>
          <div class="education-section px-3 px-lg-4 pb-4">
            <h2 class="h3 mb-4">Education</h2>
            <div class="timeline">
              <div class="timeline-card timeline-card-success card shadow-sm" v-for="(education, index) in educationList" :key="index">
                <div class="card-body">
                  <div class="h5 mb-1">{{ education.degree }} <span class="text-muted h6">from {{ education.institution }}</span></div>
                  <div class="text-muted text-small mb-2">{{ education.period }}</div>
                  <div>{{ education.description }}</div>
                </div>
              </div>
            </div>
          </div>
          <hr class="d-print-none" />
          <div class="contact-section px-3 px-lg-4 pb-4" id="contact">
            <h2 class="h3 text mb-3">Contact</h2>
            <div class="row">
              <div class="col-md-7 d-print-none">
                <div class="my-2">
                  <form :action="formAction" method="POST">
                    <div class="row">
                      <div class="col-6">
                        <input class="form-control" type="text" id="name" name="name" placeholder="Your Name" required>
                      </div>
                      <div class="col-6">
                        <input class="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail" required>
                      </div>
                    </div>
                    <div class="form-group my-2">
                      <textarea class="form-control" style="resize: none;" id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <button class="btn btn-primary mt-2" type="submit">Send</button>
                  </form>
                </div>
              </div>
              <div class="col">
                <div class="mt-2">
                  <h3 class="h6">Address</h3>
                  <div class="pb-2 text-secondary">{{ address }}</div>
                  <h3 class="h6">Phone</h3>
                  <div class="pb-2 text-secondary">{{ phone }}</div>
                  <h3 class="h6">Email</h3>
                  <div class="pb-2 text-secondary">{{ email }}</div>
                </div>
              </div>
              <div class="col d-none d-print-block">
                <div class="mt-2">
                  <div>
                    <div class="mb-2" v-for="(link, index) in socialLinks" :key="index">
                      <div class="text-dark">
                        <i :class="'fab fa-' + link.icon + ' mr-1'"></i><span>{{ link.url }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
    <footer class="pt-4 pb-4 text-muted text-center d-print-none">
      <div class="container">
        <div class="my-3">
          <div class="h4">{{ name }}</div>
          <div class="footer-nav">
            <nav role="navigation">
              <ul class="nav justify-content-center">
                <li class="nav-item"><a class="nav-link" :href="social.twitter" title="Twitter"><i class="fab fa-twitter"></i><span class="menu-title sr-only">Twitter</span></a></li>
                <li class="nav-item"><a class="nav-link" :href="social.facebook" title="Facebook"><i class="fab fa-facebook"></i><span class="menu-title sr-only">Facebook</span></a></li>
                <li class="nav-item"><a class="nav-link" :href="social.instagram" title="Instagram"><i class="fab fa-instagram"></i><span class="menu-title sr-only">Instagram</span></a></li>
                <li class="nav-item"><a class="nav-link" :href="social.github" title="Github"><i class="fab fa-github"></i><span class="menu-title sr-only">Github</span></a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="text-small">
          <div class="mb-1">&copy; Right Resume. All rights reserved.</div>
          <div>Design - <a href="https://templateflip.com/" target="_blank">TemplateFlip</a></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      name: 'Joyce Harrison',
      title: 'Graphic Designer & Web Developer',
      avatar: 'images/avatar.jpg',
      resumeLink: 'right-resume.pdf',
      about: `Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. 
              I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.`,
      age: 28,
      email: 'Joyce@company.com',
      phone: '+0718-111-0011',
      address: '140, City Center, New York, U.S.A',
      formAction: 'https://formspree.io/your@email.com',
      social: {
        twitter: 'https://twitter.com/templateflip',
        facebook: 'https://www.facebook.com/templateflip',
        instagram: 'https://www.instagram.com/templateflip',
        github: 'https://github.com/templateflip'
      },
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'Adobe Photoshop', level: 80 },
        { name: 'Sketch', level: 85 },
        { name: 'Adobe XD', level: 75 }
      ],
      workExperience: [
        {
          title: 'Frontend Developer',
          company: 'Creative Agency',
          period: 'May, 2015 - Present',
          description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                        Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`
        },
        {
          title: 'Graphic Designer',
          company: 'Design Studio',
          period: 'June, 2013 - May, 2015',
          description: `Override the digital divide with additional clickthroughs from DevOps. 
                        Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.`
        },
        {
          title: 'Junior Web Developer',
          company: 'Indie Studio',
          period: 'Jan, 2011 - May, 2013',
          description: `User generated content in real-time will have multiple touchpoints for offshoring. 
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`
        }
      ],
      educationList: [
        {
          degree: 'Masters in Information Technology',
          institution: 'International University',
          period: '2011 - 2013',
          description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                        Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`
        },
        {
          degree: 'Bachelor of Computer Science',
          institution: 'Regional College',
          period: '2007 - 2011',
          description: `Override the digital divide with additional clickthroughs from DevOps. 
                        Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.`
        },
        {
          degree: 'Science and Mathematics',
          institution: 'Mt. High School',
          period: '1995 - 2007',
          description: `User generated content in real-time will have multiple touchpoints for offshoring. 
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`
        }
      ],
      socialLinks: [
        { icon: 'twitter', url: 'https://twitter.com/templateflip' },
        { icon: 'facebook', url: 'https://www.facebook.com/templateflip' },
        { icon: 'instagram', url: 'https://www.instagram.com/templateflip' },
        { icon: 'github', url: 'https://github.com/templateflip' }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@300;400;500;700&display=swap');
@import url('css/font-awesome/css/all.min.css?ver=1.2.0');
@import url('css/bootstrap.min.css?ver=1.2.0');
@import url('css/aos.css?ver=1.2.0');
@import url('css/main.css?ver=1.2.0');

/* Your additional CSS styles go here */
</style>
