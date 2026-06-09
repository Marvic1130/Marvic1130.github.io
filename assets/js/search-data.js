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
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-with-a-m-s-in-information-systems-from-yonsei-university",
          title: 'Graduated with a M.S. in Information Systems from Yonsei University.',
          description: "",
          section: "News",},{id: "news-started-ph-d-program-in-information-systems-at-yonsei-university",
          title: 'Started Ph.D. program in Information Systems at Yonsei University.',
          description: "",
          section: "News",},{id: "news-submitted-a-paper-to-ieee-internet-of-things-journal-under-review",
          title: 'Submitted a paper to IEEE Internet of Things Journal (under review).',
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
            },},{id: "projects-deep-learning-based-uav-positioning-under-blockage-aware-channels-with-embedded-validation",
          title: 'Deep Learning-based UAV Positioning under Blockage-Aware Channels with Embedded Validation',
          description: "IEEE Internet of Things Journal · Under Review",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-pfedhalo-communication-efficient-personalized-federated-learning-for-resource-constrained-aiot",
          title: 'pFedHALO: Communication-Efficient Personalized Federated Learning for Resource-Constrained AIoT',
          description: "M.S. Thesis · IEIE 2026 · AAAI 2027 (planned)",
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
