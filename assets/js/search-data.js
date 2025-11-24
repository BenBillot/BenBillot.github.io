// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Here&#39;s a summary of my resume. My full CV is available in PDF format at the link given above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-my-new-job-at-mit",
          title: 'Started my new job at MIT!',
          description: "",
          section: "News",},{id: "news-synthseg-medical-image-analysis-and-synthseg-2-0-pnas-are-out-open-book-open-book",
          title: 'SynthSeg (Medical Image Analysis) and  SynthSeg 2.0 (PNAS) are out! :open_book: :open_book:',
          description: "",
          section: "News",},{id: "news-glad-to-have-presented-my-work-at-midl-2023-on-equivariant-networks-for-registration-of-fetal-brain-mri",
          title: 'Glad to have presented my work at MIDL 2023 on Equivariant Networks for...',
          description: "",
          section: "News",},{id: "news-great-presentations-and-discussion-at-the-boston-medical-imaging-workshop-that-i-co-organised-with-oula-puonti-katie-larson-jon-haitz-and-neel-dey",
          title: 'Great presentations and discussion at the Boston Medical Imaging Workshop that I co-organised...',
          description: "",
          section: "News",},{id: "news-loads-of-great-works-at-miccai-always-a-pleasure-to-attend",
          title: 'Loads of  great works  at MICCAI, always a pleasure to attend!',
          description: "",
          section: "News",},{id: "news-check-out-our-new-preprint-accepted-at-wcacv-2024-work-led-by-neel-dey-on-domain-randomisation-for-segmentation-of-star-shape-objects",
          title: 'Check out our new preprint (accepted at WCACV 2024). Work led by Neel...',
          description: "",
          section: "News",},{id: "news-another-successful-edition-of-the-boston-medical-imaging-workshop-that-i-organised-at-mit",
          title: 'Another successful edition of the Boston Medical Imaging Workshop that I organised at...',
          description: "",
          section: "News",},{id: "news-i-started-m-new-job-as-full-time-researcher-at-inria",
          title: 'I started m new job as full-time researcher at Inria!',
          description: "",
          section: "News",},{id: "news-check-out-my-new-miccai-paper-on-keypoint-based-registration-with-spatial-regularisation-for-enhanced-interpretability",
          title: 'Check out my new MICCAI paper on keypoint-based registration with spatial regularisation for...',
          description: "",
          section: "News",},{id: "projects-synthmorph",
          title: 'SynthMorph',
          description: "A domain-agnostic registration suite for brain MRI implemented in FreeSurfer.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SynthMorph/";
            },},{id: "projects-synthsr",
          title: 'SynthSR',
          description: "A tool implemented in FreeSurfer to turn any brain scan into a 1mm T1",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SynthSR/";
            },},{id: "projects-synthseg",
          title: 'SynthSeg',
          description: "A domain-agnostic brain MR segmentation suite implemented in FreeSurfer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SynthSeg/";
            },},{id: "projects-anatomix",
          title: 'anatomix',
          description: "Extract modality-agnostic 3D features for any biomedical imaging task.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/anatomix/";
            },},{id: "projects-hypo-seg",
          title: 'Hypo_seg',
          description: "A segmentation tool for hypothalamic subunits implemented in FreeSurfer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hypo_seg/";
            },},{
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
