// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-with-a-m-s-in-information-systems-from-yonsei-university",
          title: 'Graduated with a M.S. in Information Systems from Yonsei University.',
          description: "",
          section: "News",},{id: "news-started-ph-d-program-in-information-systems-at-yonsei-university",
          title: 'Started Ph.D. program in Information Systems at Yonsei University.',
          description: "",
          section: "News",},{id: "news-submitted-an-extended-version-of-my-m-s-thesis-work-to-an-international-conference-under-review",
          title: 'Submitted an extended version of my M.S. thesis work to an international conference...',
          description: "",
          section: "News",},{id: "news-submitted-a-paper-to-ieee-transactions-on-vehicular-technology-under-review",
          title: 'Submitted a paper to IEEE Transactions on Vehicular Technology (under review).',
          description: "",
          section: "News",},{id: "projects-aiot-llm-system-for-disaster-environments",
          title: 'AIoT-LLM System for Disaster Environments',
          description: "IITP Leading Generative AI Human Resources Development · Jun. 2024 ~ present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-development-of-image-fusion-technology-for-improving-deteriorated-gas-sensor-performance",
          title: 'Development of Image Fusion Technology for Improving Deteriorated Gas Sensor Performance',
          description: "Hyundai Motor Company · Mar. 2025 ~ present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-blockage-aware-uav-positioning",
          title: 'Blockage-Aware UAV Positioning',
          description: "Deep learning-based aerial base station placement with embedded validation · IEEE TVT (under review)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-pfedhalo",
          title: 'pFedHALO',
          description: "Personalized federated learning for resource-constrained AIoT · M.S. Thesis · IEIE 2026 · under review at an international conference",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%73%6B%61%6E%67@%79%6F%6E%73%65%69.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Marvic1130", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0001-4984-8921", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=fhRm0nUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
