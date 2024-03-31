// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'yinan4099', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Mobile Air-Plane Game',
          description:
            'A unique artificial intelligence-powered, 3D pixel art style mobile airplane simulation game made with Unity.',
          imageUrl:
            'https://i.postimg.cc/mZn6Cyjc/Whats-App-Video-2023-06-06-at-1-58-00-PM-2-1-frame-at-0m22s.jpg',
          link: '#',
        },
        {
          title: 'Harmful Brain Activity Classification',
          description:
            'AI model for "Classify seizures and other patterns of harmful brain activity in critically ill patients" based on electroencephalography (EEG) signals. (Competition hosted by Harvard Medical School)',
          imageUrl:
            'https://i.postimg.cc/N0TPs2bj/header.png',
          link: '#',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Yavuz Selim INan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'yavuz-selim-inan',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '830 714 22 28',
    email: 'yinan4099@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/15xs0cEpUOSRI8JpUG2efzgBUz6maxNQ5/view?usp=sharing',   },
  skills: [
    'AI/ML',
    'Tensorflow/Keras',
    'Python',
    'Scikit-Learn',
    'Unity',
    'C++',
    'C',
    'C#',
    'Git',
    'Java',
    'Bash',
    'HTML/CSS',
    'OpenCV',
    'Autodesk Inventor',
  ],
  experiences: [
    {
      company: 'Texas A&M University Department of Biomedical Engineering',
      position: 'Biomedical Research Intern',
      from: 'Aug 2023',
      to: 'Present',
      companyLink: 'https://engineering.tamu.edu/biomedical/index.html',
    },
    {
      company: 'uVox INC',
      position: 'API System Developer & AI Engineer Intern',
      from: 'Jun 2023',
      to: 'Jul 2023',
      companyLink: 'https://www.uvoxapp.com/',
    },
  ],
  certifications: [
    {
      name: 'Turkey National Junior Olympiad Team',
      body: '',
      year: '2022 - 2023',
      link: '',
    },
        {
      name: 'EJOI : Bronze Medal',
      body: 'European Junior Olympiad in Informatics',
      year: 'September 2022',
      link: 'https://olympiads.jsoft.am/Participants/ParticipantDetails?participantId=1731',
    },
        {
      name: 'USACO Platinum',
    },
            {
      name: 'CyberPatriot Platinum Division: National Semi-Finalist',
    },
            {
      name: 'USACO Platinum',
    },
            {
      name: 'USACO Platinum',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Adaptive Multiscale Retinal Diagnosis: A Hybrid Trio-Model Approach for Comprehensive Fundus Multi-Disease Detection Leveraging Transfer Learning and Siamese Networks ',
      conferenceName: 'Grand Award Winner Research',
      journalName: 'Alamo Regional Science & Engineering Fair',
      authors: '',
      link: 'https://drive.google.com/file/d/1DuvbgYOcfC4j0vwK218_Lm8mvoIAnEu9/view?usp=sharing',
      description:
        'WHO has declared that more than 2.2 billion people worldwide are suffering from visual disorders, such as media haze, glaucoma, and drusen. At least 1 billion of these cases could have been either prevented or successfully treated, yet they remain unaddressed due to poverty, a lack of specialists, inaccurate ocular fundus diagnoses by ophthalmologists, or the presence of a rare disease. To address this, the research has developed the Hybrid Trio-Network Model Algorithm for accurately diagnosing 12 distinct common and rare eye diseases. This algorithm utilized the RFMiD dataset of 3,200 fundus images and the Binary Relevance Method to detect diseases separately, ensuring expandability and avoiding incorrect correlations. Each detector, incorporating finely tuned hyperparameters to optimize performance, consisted of three feature components: A classical transfer learning CNN model, a two-stage CNN model, and a Siamese Network. The diagnosis was made using features extracted through this Trio-Model with Ensembled Machine Learning algorithms. The proposed model achieved an average accuracy of 97% and an AUC score of 0.96. Compared to past benchmark studies, an increase of over 10% in the F1-score was observed for most diseases. Furthermore, using the Siamese Network, the model successfully made predictions in diseases like optic disc pallor, which past studies failed to predict due to low confidence. This diagnostic tool presents a stable, adaptive, cost-effective, efficient, accessible, and fast solution for globalizing early detection of both common and rare diseases. An FDA-cleared, smartphone-based artificial intelligence system, capable of detecting over 100 diseases, is currently under development.',
    },
    {
      title: 'Periodic monitoring of Geobacillus stearothermophilus growth using a custom-developed portable platform for enhanced autoclave sterilization verification',
      conferenceName: 'Texas A&M SRW',
      journalName: '',
      authors: '',
      link: 'https://drive.google.com/file/d/11GSYPg9h3AM1tqwWI4Wl2_rAhrZyi-to/view?usp=sharing',
      description:
        'In the face of alarming sterilization failure rates in healthcare settings, which studies indicate can reach as high as 71.0% [1], the need for improved verification methods for sterilization is undeniable. Traditional sterilization techniques, reliant on biological and chemical indicators, suffer from significant drawbacks, such as protracted processing times (up to 48 hours) and susceptibility to environmental conditions, and require manual interpretation. Here, we present the details of the digital image processing algorithm for automated colorimetric analysis used in conjunction with a custom-developed optical system to improve autoclave sterilization verification. The images of test samples were automatically acquired with 30-minutes time intervals and processed digitally for early detection of color change in samples due to the growth of Geobacillus stearothermophilus. This periodic monitoring system facilitates a rapid, reliable, and fully automated assessment of sterilization efficacy through the analysis of colorimetric changes in autoclave sterilization test tubes, offering results within 5 hours— substantially quicker than that required by conventional methods. Our findings demonstrate the systems capability to significantly reduce the time required for sterilization verification, thus enhancing infection control measures. Furthermore, the automation of the verification process minimizes the potential for human error, underscoring the systems reliability. While primarily aimed at autoclave validation, the application of this technology extends beyond microbial growth monitoring and infection control, promising to impact healthcare practices.',
    },
        {
      title: 'Examining concept development classroom interaction quality and childrens developmental progress in state pre-K/head start programs using pre-K CLASS and LAP-3',
      conferenceName: '',
      journalName: 'Acta Psychologica',
      authors: '',
      link: '',
      description:
        'Concept Development [CD] in the early years cannot be complete without teachers support. However, limited research exists. This research aimed to assess CD classroom interactional quality and its relationship with other quality dimensions/domains and childrens overall development using the data collected in State Pre-K/Head Start classrooms with Pre-K CLASS and LAP-3. Data collected from 171 classrooms underwent analysis with Python and SPSS. Pre-K CLASS scores showed that with the exception of one high-quality classroom, all other classrooms were categorized as either mid-quality or low-quality CD. Moreover, most teachers showed lower interactional quality not only in the CD dimension but also in the Quality of Feedback [QF] and Language Modeling [LM] dimensions of Instructional Support [IS], than in the dimensions of Emotional Support [ES] and Classroom Organization [CO] domains. The results indicated that CD, QF, and LM quality dimensions did not differ across the classrooms or districts. However, ES, CO, and IS domains differed significantly. While the observed differences for ES and CO were similar between the two districts, District 1 had higher mean IS scores than District 2. Furthermore, LAP-3 scores of 2514 children showed that 26.7 % of children scored below the expected level in cognitive development and 35.5 % scored below in language development by the end of the school year, with a higher proportion of male children falling in this category. Nonetheless, children attending State Pre-K/Head Start classrooms demonstrated an average gain of 4 months beyond their chronological age. The multi-level regression analysis of Pre-K CLASS and those LAP-3 scores showed no statistically significant relationship between interactional quality and children's developmental progress. Children in mid-quality CD classrooms showed slightly more progress in all areas of development, except in personal/social, compared to children in low-quality CD classrooms. Similarly, children in mid-quality IS classrooms outperformed those in low-quality IS classrooms in all LAP-3 areas except personal/social and pre-writing as well. In conclusion, the current research suggests that many teachers struggle not only to effectively provide high-quality CD teacher-child interactions but also high-quality IS teacher-child interactions in their classrooms. Comprehensive in-service training on CD and an alternative assessment tool that extends beyond the 72-month age limit are strongly recommended. This is important to ensure that teachers are equipped with the necessary skills and motivation to provide high-quality education to young children to prevent developmental delays in children.',
    },
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
