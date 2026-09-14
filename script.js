const caseData = {

    financial: {

        title: "Financial Services",

        description:
            "Streamline your financial processes. Nected's low-code platform empowers FinTech businesses to automate tasks and workflows, boosting efficiency.",

        cards: [
            [
                "Global Financial SAAS platform",
                "See how a leading US financial software provider used Nected's on-demand workflow automation."
            ],
            [
                "Wealthright",
                "Learn how Wealthright partnered with Nected to optimize health services and workflows."
            ],
            [
                "Leading B2B SaaS Provider",
                "Discover how a top Asia Pacific B2B SaaS provider increased client conversions."
            ]
        ]

    },


    insurance: {

        title: "Insurance",

        description:
            "Improve efficiency and accuracy. Nected's low-code platform empowers insurance companies to automate workflows and streamline operations.",

        cards: [
            [
                "Insurance Claims Automation",
                "Automate claims processing and reduce manual intervention across your insurance operations."
            ],
            [
                "Policy Management",
                "Create faster and more reliable policy workflows with configurable business logic."
            ],
            [
                "Customer Risk Assessment",
                "Build automated risk assessment workflows for faster insurance decisions."
            ]
        ]

    },


    healthtech: {

        title: "HealthTech",

        description:
            "Build smarter healthcare workflows that improve operational efficiency while reducing repetitive manual processes.",

        cards: [
            [
                "Healthcare Automation",
                "Automate complex healthcare workflows and simplify operational processes."
            ],
            [
                "Patient Management",
                "Create streamlined workflows for patient onboarding and management."
            ],
            [
                "Healthcare Compliance",
                "Automate compliance-related processes and business decisions."
            ]
        ]

    },


    ecommerce: {

        title: "Ecommerce",

        description:
            "Create personalized and scalable ecommerce workflows that help teams automate decisions and improve conversions.",

        cards: [
            [
                "Dynamic Pricing",
                "Automate pricing decisions based on products, customers and business rules."
            ],
            [
                "Personalized Promotions",
                "Build automated coupon and promotion workflows for different customer segments."
            ],
            [
                "Customer Campaigns",
                "Deliver personalized campaigns using automated decision workflows."
            ]
        ]

    },


    retail: {

        title: "Retail",

        description:
            "Automate retail operations with configurable workflows that connect business rules, data and actions.",

        cards: [
            [
                "Retail Automation",
                "Build workflows that automate repetitive retail processes."
            ],
            [
                "Customer Offers",
                "Create personalized offers using configurable decision logic."
            ],
            [
                "Inventory Workflows",
                "Automate operational workflows around retail inventory."
            ]
        ]

    },


    aviation: {

        title: "Aviation",

        description:
            "Automate aviation workflows and decisions to improve efficiency across pricing, operations and customer experiences.",

        cards: [
            [
                "Dynamic Fare Management",
                "Automate fare decisions based on configurable business conditions."
            ],
            [
                "Passenger Workflows",
                "Build automated workflows for passenger-facing processes."
            ],
            [
                "Aviation Operations",
                "Connect operational systems with reliable automated workflows."
            ]
        ]

    },


    automobile: {

        title: "Automobile",

        description:
            "Build automated automotive workflows for pricing, financing, customer journeys and operational decisions.",

        cards: [
            [
                "EMI Calculator",
                "Create automated financial calculations and decision workflows."
            ],
            [
                "Automotive Risk Management",
                "Automate risk-based business decisions across automotive operations."
            ],
            [
                "Customer Eligibility",
                "Build configurable eligibility workflows for automotive customers."
            ]
        ]

    },


    transportation: {

        title: "Transportation & Logistics",

        description:
            "Optimize transportation and logistics operations with automated workflows and real-time business decisions.",

        cards: [
            [
                "On-Road Pricing",
                "Automate pricing decisions based on routes, customers and operational conditions."
            ],
            [
                "Logistics Automation",
                "Reduce manual work across logistics operations with configurable workflows."
            ],
            [
                "Transport Decisioning",
                "Build reliable decision workflows for transportation businesses."
            ]
        ]

    },


    it: {

        title: "IT Services",

        description:
            "Help IT teams move faster by automating repetitive workflows, business decisions and operational processes.",

        cards: [
            [
                "IT Workflow Automation",
                "Automate repetitive IT processes and improve operational efficiency."
            ],
            [
                "Service Operations",
                "Build configurable workflows for service delivery and operations."
            ],
            [
                "Business Decisioning",
                "Connect business rules and systems to automate complex decisions."
            ]
        ]

    }

};


/* ========================================
   CASE STUDY INTERACTION
======================================== */

const categoryButtons =
    document.querySelectorAll(".case-category");

const caseTitle =
    document.getElementById("case-title");

const caseDescription =
    document.getElementById("case-description");

const caseCards =
    document.getElementById("case-cards");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;

        const data =
            caseData[category];

        if (!data) return;


        /* Active button */

        categoryButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");


        /* Heading */

        caseTitle.textContent =
            data.title;


        /* Description */

        caseDescription.textContent =
            data.description;


        /* Cards */

        caseCards.innerHTML =
            data.cards.map((card, index) => {

                return `
                    <article class="case-card">

                        <div class="case-image">

                            <div class="dashboard-graphic">

                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>

                            </div>

                        </div>

                        <div class="case-card-body">

                            <h3>
                                ${card[0]}
                            </h3>

                            <p>
                                ${card[1]}
                            </p>

                            <a href="#">
                                Learn More →
                            </a>

                        </div>

                    </article>
                `;

            }).join("");

    });

});
/* ========================================
   TESTIMONIAL DATA
======================================== */

const testimonialData = {

    sidecar: {

        text:
            "Nected lets us move faster than building everything in-house. With their cloud solution, URLs for staging and production are automatically set up, so we have no DevOps overhead. This speeds up development and cuts maintenance.",

        name: "Greg R.",

        role: "Tech Lead",

        company: "SidecarHealth",

        stat: "80% Faster",

        statText: "Development for our system"

    },


    bright: {

        text:
            "Nected helped our team automate complex business workflows and move faster without depending on engineering for every change.",

        name: "Business Team",

        role: "Operations",

        company: "BrightCHAMPS",

        stat: "2x Faster",

        statText: "Time to market"

    },


    wealth: {

        text:
            "With configurable workflows and decisioning, our teams can build and optimize processes without creating unnecessary development bottlenecks.",

        name: "WealthRight",

        role: "Product Team",

        company: "WealthRight",

        stat: "50% Faster",

        statText: "Sprint cycle"

    },


    torch: {

        text:
            "Nected gives our teams the flexibility to automate business processes while keeping workflows reliable and easy to manage.",

        name: "Torch",

        role: "Technology Team",

        company: "TORCH",

        stat: "4x Faster",

        statText: "Decisioning"

    },


    nupay: {

        text:
            "Our teams can create and update decision workflows quickly while reducing the amount of engineering bandwidth needed for business changes.",

        name: "NU Pay",

        role: "Product Team",

        company: "NU Pay",

        stat: "10x",

        statText: "Faster execution"

    },


    vidyakul: {

        text:
            "Nected allowed us to bring business and technology teams together around flexible workflows and faster execution.",

        name: "Vidyakul",

        role: "Technology Team",

        company: "VIDYAKUL",

        stat: "4% Growth",

        statText: "In conversions"

    }

};


/* ========================================
   TESTIMONIAL INTERACTION
======================================== */

const testimonialButtons =
    document.querySelectorAll(".testimonial-company");

const testimonialText =
    document.getElementById("testimonial-text");

const testimonialName =
    document.querySelector(".person strong");

const testimonialRole =
    document.querySelectorAll(".person span")[0];

const testimonialCompany =
    document.querySelectorAll(".person span")[1];

const testimonialStat =
    document.querySelector(".stat-content strong");

const testimonialStatText =
    document.querySelector(".stat-content span");


testimonialButtons.forEach(button => {

    button.addEventListener("click", () => {

        const key =
            button.dataset.testimonial;

        const data =
            testimonialData[key];

        if (!data) return;


        /* Active logo */

        testimonialButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");


        /* Change content */

        testimonialText.textContent =
            data.text;

        testimonialName.textContent =
            data.name;

        testimonialRole.textContent =
            data.role;

        testimonialCompany.textContent =
            data.company;

        testimonialStat.textContent =
            data.stat;

        testimonialStatText.textContent =
            data.statText;

    });

});