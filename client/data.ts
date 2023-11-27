
const basic = {
    "name": "David",
    "email": "",
    "phone": "",
    "photo": {
        "url": "",
        "filters": {
            "size": 128,
            "shape": "square",
            "border": false,
            "grayscale": false
        },
        "visible": true
    },
    "summary": "",
    "website": "",
    "headline": "",
    "location": {
        "city": "",
        "region": "",
        "address": "",
        "country": "",
        "postalCode": ""
    },
    "profiles": [],
    "birthdate": ""
}


const sections = {
    "work": {
        "id": "work",
        "name": "Work Experience",
        "type": "work",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "awards": {
        "id": "awards",
        "name": "Awards",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "skills": {
        "id": "skills",
        "name": "Skills",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "projects": {
        "id": "projects",
        "name": "Projects",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "education": {
        "id": "education",
        "name": "Education",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "interests": {
        "id": "interests",
        "name": "Interests",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "languages": {
        "id": "languages",
        "name": "Languages",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "volunteer": {
        "id": "volunteer",
        "name": "Volunteer Experience",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "references": {
        "id": "references",
        "name": "References",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "publications": {
        "id": "publications",
        "name": "Publications",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    },
    "certifications": {
        "id": "certifications",
        "name": "Certifications",
        "type": "basic",
        "items": [],
        "columns": 2,
        "visible": true
    }
}



const metadata = {
    "css": {
        "value": "/* Enter custom CSS here */\n\n* {\n    outline: 1px solid #000;\n}",
        "visible": false
    },
    "date": {
        "format": "MMMM DD, YYYY"

    },
    "page": {
        "format": "A4"
    },
    "theme": {
        "text": "#000000",
        "primary": "#00bcd4",
        "background": "#ffffff"
    },
    "layout": [
        [
            [
                "work-1", "education", "references", "projects", "work", "volunteer", "languages"
            ],
            [
                "skills", "interests", "awards", "certifications", "publications"
            ]
        ]
    ],
    "locale": "en",
    "template": "onyx",
    "typography": {
        "size": {
            "body": 16,
            "heading": 34
        },
        "family": {
            "body": "Aleo",
            "heading": "Roboto Condensed"
        }
    }
}



const resumes: Resume[] = [
    {
        "id": 3,
        "shortId": "cDW2fwVu",
        "name": "Alex Dev",
        "slug": "alex-dev",
        "image": "/images/templates/resumes/leafish.jpg",
        "basics": {
            "name": "David",
            "email": "",
            "phone": "",
            "photo": {
                "url": "",
                "filters": {
                    "size": 128,
                    "shape": "square",
                    "border": false,
                    "grayscale": false
                },
                "visible": true
            },
            "summary": "",
            "website": "",
            "headline": "",
            "location": {
                "city": "",
                "region": "",
                "address": "",
                "country": "",
                "postalCode": ""
            },
            "profiles": [],
            "birthdate": ""
        },
        "sections": {
            "work": {
                "id": "work",
                "name": "Work Experience",
                "type": "work",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "awards": {
                "id": "awards",
                "name": "Awards",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "skills": {
                "id": "skills",
                "name": "Skills",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "projects": {
                "id": "projects",
                "name": "Projects",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "education": {
                "id": "education",
                "name": "Education",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "interests": {
                "id": "interests",
                "name": "Interests",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "languages": {
                "id": "languages",
                "name": "Languages",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "volunteer": {
                "id": "volunteer",
                "name": "Volunteer Experience",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "references": {
                "id": "references",
                "name": "References",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "publications": {
                "id": "publications",
                "name": "Publications",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "certifications": {
                "id": "certifications",
                "name": "Certifications",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            }
        },
        "metadata": {
            "css": {
                "value": "/* Enter custom CSS here */\n\n* {\n    outline: 1px solid #000;\n}",
                "visible": false
            },
            "date": {
                "format": "MMMM DD, YYYY"
            },
            "page": {
                "format": "A4"
            },
            "theme": {
                "text": "#000000",
                "primary": "#f44336",
                "background": "#ffffff"
            },
            "layout": [
                [
                    [
                        "work",
                        "education",
                        "projects",
                        "volunteer",
                        "references"
                    ],
                    [
                        "skills",
                        "interests",
                        "languages",
                        "awards",
                        "certifications",
                        "publications"
                    ]
                ]
            ],
            "locale": "en",
            "template": "kakuna",
            "typography": {
                "size": {
                    "body": 14,
                    "heading": 28
                },
                "family": {
                    "body": "Open Sans",
                    "heading": "Open Sans"
                }
            }
        },
        "public": true,
        "createdAt": new Date('2023-10-30T21:56:08.027Z'),
        "updatedAt": new Date("2023-10-30T21:56:08.027Z"),
        "user": {
            "id": 1,
            "name": "David",
            "username": "zoppina",
            "email": "fullstack1128@gmail.com",
            "provider": "email",
            "createdAt": new Date("2023-10-30T21:56:08.027Z"),
            "updatedAt": new Date("2023-10-30T21:56:08.027Z")
        }
    },
    {
        "id": 2,
        "shortId": "rmkiNBek",
        "name": "andrei carpob",
        "slug": "andrei-carpob",
        "image": "/images/templates/resumes/pikachu.jpg",
        "basics": {
            "name": "David",
            "email": "",
            "phone": "",
            "photo": {
                "url": "",
                "filters": {
                    "size": 192,
                    "shape": "square",
                    "border": false,
                    "grayscale": false
                },
                "visible": true
            },
            "summary": "",
            "website": "",
            "headline": "",
            "location": {
                "city": "",
                "region": "",
                "address": "",
                "country": "",
                "postalCode": ""
            },
            "profiles": [],
            "birthdate": ""
        },
        "sections": {
            "work": {
                "id": "work",
                "name": "Work Experience",
                "type": "work",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "awards": {
                "id": "awards",
                "name": "Awards",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "skills": {
                "id": "skills",
                "name": "Skills",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "projects": {
                "id": "projects",
                "name": "Projects",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "education": {
                "id": "education",
                "name": "Education",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "interests": {
                "id": "interests",
                "name": "Interests",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "languages": {
                "id": "languages",
                "name": "Languages",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "volunteer": {
                "id": "volunteer",
                "name": "Volunteer Experience",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "references": {
                "id": "references",
                "name": "References",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "publications": {
                "id": "publications",
                "name": "Publications",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "certifications": {
                "id": "certifications",
                "name": "Certifications",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            }
        },
        "metadata": {
            "css": {
                "value": "/* Enter custom CSS here */\n\n* {\n    outline: 1px solid #000;\n}",
                "visible": false
            },
            "date": {
                "format": "MMMM DD, YYYY"
            },
            "page": {
                "format": "A4"
            },
            "theme": {
                "text": "#000000",
                "primary": "#f44336",
                "background": "#ffffff"
            },
            "layout": [
                [
                    [
                        "work",
                        "education",
                        "projects",
                        "volunteer",
                        "references"
                    ],
                    [
                        "skills",
                        "interests",
                        "languages",
                        "awards",
                        "certifications",
                        "publications"
                    ]
                ]
            ],
            "locale": "en",
            "template": "kakuna",
            "typography": {
                "size": {
                    "body": 14,
                    "heading": 28
                },
                "family": {
                    "body": "Open Sans",
                    "heading": "Open Sans"
                }
            }
        },
        "public": true,
        "createdAt": new Date("2023-10-31T15:53:18.008Z"),
        "updatedAt": new Date("2023-10-31T23:39:12.072Z"),
        "user": {
            "id": 1,
            "name": "David",
            "username": "zoppina",
            "email": "fullstack1128@gmail.com",
            "provider": "email",
            "createdAt": new Date("2023-10-30T21:56:08.027Z"),
            "updatedAt": new Date("2023-10-30T21:56:08.027Z")
        }
    },
    {
        "id": 1,
        "shortId": "-F4rAGne",
        "name": "david resume",
        "slug": "david-resume",
        "image": "/images/templates/resumes/pikachu.jpg",
        "basics": {
            "name": "David Zoppina",
            "email": "",
            "phone": "1915500691",
            "photo": {
                "url": "http://localhost:3100/assets/uploads/1/1/1698723655724.png",
                "filters": {
                    "size": 128,
                    "shape": "square",
                    "border": false,
                    "grayscale": false
                },
                "visible": true
            },
            "summary": "As a Senior-level Fullstack Web, Mobile, and Blockchain developer with 20 years of experience, I have a deep understanding and expertise in various technologies and frameworks. I have successfully delivered numerous projects across different industries, demonstrating my ability to work with complex requirements and deliver high-quality solutions.",
            "website": "david.com",
            "headline": "Senior Web & Mobile Developer",
            "location": {
                "city": "Saint-Laurent ",
                "region": "QC ",
                "address": "313 Boulevard Cote Vertu Quest",
                "country": "Canada",
                "postalCode": "H4R 1Y0"
            },
            "profiles": [],
            "birthdate": "1993-11-28"
        },
        "sections": {
            "work": {
                "id": "work",
                "name": "Work Experience",
                "type": "work",
                "items": [
                    {
                        "id": "27f44ddc-afdd-42b9-b6cf-481f1784ab1e",
                        "url": "",
                        "date": {
                            "end": "2023-09-14",
                            "start": "2022-04-01"
                        },
                        "name": "Orange System",
                        "summary": "•\tLed the design and execution of technical projects. Delivered the partner showcase portal for presentation towards investors in Italy.\n•\t Saved over 100 hours of the developer’s time by optimizing the project development pipeline from 40+ minutes to under five minutes.\n•\tBuilt mobile wallet app for Solana, SPL token based payment EcoSystem using React Native.",
                        "position": "Fullstack Developer"
                    },
                    {
                        "id": "184cd72d-96c8-4fce-8a2f-e695741a1512",
                        "url": "",
                        "date": {
                            "end": "2022-02-10",
                            "start": "2020-01-15"
                        },
                        "name": "AMAZD",
                        "summary": "• Planned and executed the migration from Heroku to Google Cloud for the company’s back-end infrastructure, including APIs, databases, caching, workflows, etc. Saved lots of money for the client and improved the scalability of systems.\n• Integrated Segment.io tracking in their back-end application to better understand the customer behavior and system actions. It helped them in generating useful metrics to show to their investors.",
                        "position": "Fullstack Web Developer"
                    },
                    {
                        "id": "d982ead7-a9bd-465e-80da-118ae8f6a27b",
                        "url": "",
                        "date": {
                            "end": "2019-08-13",
                            "start": "2016-11-09"
                        },
                        "name": "EBS Integrator",
                        "summary": "•\tAs a Full-Stack Software Developer, I played a key role in designing, developing, and maintaining a wide range of web applications and software solutions.\n•\tLeveraged front-end technologies like React.js and Vue.js to create highly responsive and dynamic user interfaces, resulting in a 40% improvement in user engagement.\n•\tCollaborated with back-end teams to implement robust server-side solutions using Django, ASP.NET, and Laravel, enabling seamless data flow and enhancing application functionality.\n",
                        "position": "Senior Fullstack Developer"
                    }
                ],
                "columns": 2,
                "visible": true
            },
            "awards": {
                "id": "awards",
                "name": "Awards",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "skills": {
                "id": "skills",
                "name": "Skills",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "work-1": {
                "name": "Work Experience-1",
                "type": "work",
                "items": [],
                "columns": 2,
                "visible": true,
                "isDuplicated": true
            },
            "projects": {
                "id": "projects",
                "name": "Projects",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "education": {
                "id": "education",
                "name": "Education",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "interests": {
                "id": "interests",
                "name": "Interests",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "languages": {
                "id": "languages",
                "name": "Languages",
                "type": "basic",
                "items": [
                    {
                        "id": "2579d148-92e2-459d-ab33-b9a86260dc37",
                        "name": "English",
                        "level": "8",
                        "levelNum": 9
                    },
                    {
                        "id": "910f7bc5-c6e4-441c-9b65-7cc3a815515f",
                        "name": "Chinese",
                        "level": "5",
                        "levelNum": 0
                    }
                ],
                "columns": 2,
                "visible": true
            },
            "volunteer": {
                "id": "volunteer",
                "name": "Volunteer Experience",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "references": {
                "id": "references",
                "name": "References",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "publications": {
                "id": "publications",
                "name": "Publications",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "certifications": {
                "id": "certifications",
                "name": "Certifications",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            }
        },
        "metadata": {
            "css": {
                "value": "/* Enter custom CSS here */\n\n* {\n    outline: 1px solid #000;\n}",
                "visible": false
            },
            "date": {
                "format": "MMMM DD, YYYY"
            },
            "page": {
                "format": "A4"
            },
            "theme": {
                "text": "#000000",
                "primary": "#00bcd4",
                "background": "#ffffff"
            },
            "layout": [
                [
                    [
                        "work-1",
                        "education",
                        "references",
                        "projects",
                        "work",
                        "volunteer",
                        "languages"
                    ],
                    [
                        "skills",
                        "interests",
                        "awards",
                        "certifications",
                        "publications"
                    ]
                ]
            ],
            "locale": "en",
            "template": "onyx",
            "typography": {
                "size": {
                    "body": 16,
                    "heading": 34
                },
                "family": {
                    "body": "Aleo",
                    "heading": "Roboto Condensed"
                }
            }
        },
        "public": true,
        "createdAt": new Date("2023-10-30T21:56:38.732Z"),
        "updatedAt": new Date("2023-10-31T05:00:14.565Z"),
        "user": {
            "id": 1,
            "name": "David",
            "username": "zoppina",
            "email": "fullstack1128@gmail.com",
            "provider": "email",
            "createdAt": new Date("2023-10-30T21:56:08.027Z"),
            "updatedAt": new Date("2023-10-30T21:56:08.027Z")
        }
    },
    {
        "id": 4,
        "shortId": "8r2FV5qL",
        "name": "test david",
        "slug": "test-david",
        "image": "/images/templates/resumes/pikachu.jpg",
        "basics": {
            "name": "David",
            "email": "",
            "phone": "",
            "photo": {
                "url": "",
                "filters": {
                    "size": 128,
                    "shape": "square",
                    "border": false,
                    "grayscale": false
                },
                "visible": true
            },
            "summary": "",
            "website": "",
            "headline": "",
            "location": {
                "city": "",
                "region": "",
                "address": "",
                "country": "",
                "postalCode": ""
            },
            "profiles": [],
            "birthdate": ""
        },
        "sections": {
            "work": {
                "id": "work",
                "name": "Work Experience",
                "type": "work",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "awards": {
                "id": "awards",
                "name": "Awards",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "skills": {
                "id": "skills",
                "name": "Skills",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "projects": {
                "id": "projects",
                "name": "Projects",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "education": {
                "id": "education",
                "name": "Education",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "interests": {
                "id": "interests",
                "name": "Interests",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "languages": {
                "id": "languages",
                "name": "Languages",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "volunteer": {
                "id": "volunteer",
                "name": "Volunteer Experience",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "references": {
                "id": "references",
                "name": "References",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "publications": {
                "id": "publications",
                "name": "Publications",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            },
            "certifications": {
                "id": "certifications",
                "name": "Certifications",
                "type": "basic",
                "items": [],
                "columns": 2,
                "visible": true
            }
        },
        "metadata": {
            "css": {
                "value": "/* Enter custom CSS here */\n\n* {\n    outline: 1px solid #000;\n}",
                "visible": false
            },
            "date": {
                "format": "MMMM DD, YYYY"
            },
            "page": {
                "format": "A4"
            },
            "theme": {
                "text": "#000000",
                "primary": "#f44336",
                "background": "#ffffff"
            },
            "layout": [
                [
                    [
                        "work",
                        "education",
                        "projects",
                        "volunteer",
                        "references"
                    ],
                    [
                        "skills",
                        "interests",
                        "languages",
                        "awards",
                        "certifications",
                        "publications"
                    ]
                ]
            ],
            "locale": "en",
            "template": "kakuna",
            "typography": {
                "size": {
                    "body": 14,
                    "heading": 28
                },
                "family": {
                    "body": "Open Sans",
                    "heading": "Open Sans"
                }
            }
        },
        "public": true,
        "createdAt": new Date("2023-11-01T14:09:25.433Z"),
        "updatedAt": new Date("2023-11-01T14:09:25.433Z"),
        "user": {
            "id": 1,
            "name": "David",
            "username": "zoppina",
            "email": "fullstack1128@gmail.com",
            "provider": "email",
            "createdAt": new Date("2023-10-30T21:56:08.027Z"),
            "updatedAt": new Date("2023-10-30T21:56:08.027Z")
        }
    }
];




const resume: Resume = {
    "id": 1,
    "shortId": "-F4rAGne",
    "name": "david resume",
    "slug": "david-resume",
    "image": "/images/covers/cover-6b8ae.jpeg",

    "recruiter": {
        "section_name": "Recruiter Information",
        "agency_name": "Apple Recruiting Firm",
        "recruiter_name": "Daisy Chen",
        "recruiter_title": "Senior recruiting consultant",
        "recruiter_email": "daisy.sample@abcrecruiting.com",
        "recruiter_phone": "+852 4344 1333"
    },

    "basics": {
        "name": "David Zoppina",
        "email": "",
        "phone": "1915500691",
        "photo": {
            "url": "http://localhost:3100/assets/uploads/1/1/1698723655724.png",
            "filters": {
                "size": 60,
                "shape": "square",
                "border": false,
                "grayscale": false
            },
            "visible": true
        },
        "summary": "As a Senior-level Fullstack Web, Mobile, and Blockchain developer with 20 years of experience, I have a deep understanding and expertise in various technologies and frameworks. I have successfully delivered numerous projects across different industries, demonstrating my ability to work with complex requirements and deliver high-quality solutions.",
        "website": "david.com",
        "headline": "Senior Web & Mobile Developer",
        "location": {
            "city": "Saint-Laurent ",
            "region": "QC ",
            "address": "313 Boulevard Cote Vertu Quest",
            "country": "Canada",
            "postalCode": "H4R 1Y0"
        },
        "profiles": [],
        "birthdate": "1993-11-28"
    },
    "sections": {
        "work": {
            "id": "work",
            "name": "Work Experience",
            "type": "work",
            "items": [
                {
                    "id": "27f44ddc-afdd-42b9-b6cf-481f1784ab1e",
                    "url": "",
                    "date": {
                        "end": "2023-09-14",
                        "start": "2022-04-01"
                    },
                    "name": "Orange System",
                    "summary": "•\tLed the design and execution of technical projects. Delivered the partner showcase portal for presentation towards investors in Italy.\n•\t Saved over 100 hours of the developer’s time by optimizing the project development pipeline from 40+ minutes to under five minutes.\n•\tBuilt mobile wallet app for Solana, SPL token based payment EcoSystem using React Native.",
                    "position": "Fullstack Developer"
                },
                {
                    "id": "184cd72d-96c8-4fce-8a2f-e695741a1512",
                    "url": "",
                    "date": {
                        "end": "2022-02-10",
                        "start": "2020-01-15"
                    },
                    "name": "AMAZD",
                    "summary": "• Planned and executed the migration from Heroku to Google Cloud for the company’s back-end infrastructure, including APIs, databases, caching, workflows, etc. Saved lots of money for the client and improved the scalability of systems.\n• Integrated Segment.io tracking in their back-end application to better understand the customer behavior and system actions. It helped them in generating useful metrics to show to their investors.",
                    "position": "Fullstack Web Developer"
                },
            ],
            "columns": 1,
            "visible": true
        },
        "awards": {
            "id": "awards",
            "name": "Awards",
            "type": "basic",
            "items": [],
            "columns": 2,
            "visible": true
        },
        "skills": {
            "id": "skills",
            "name": "Skills",
            "type": "basic",
            "items": [
                {
                    "summary": "Next, Android, Telegram, React, IOS, Asp.net, Laravel, GPT, Ruby on Rails"
                },
            ],
            "columns": 1,
            "visible": true
        },

        "work-1": {
            "name": "Work Experience-1",
            "type": "work",
            "items": [],
            "columns": 2,
            "visible": true,
            "isDuplicated": true
        },
        "projects": {
            "id": "projects",
            "name": "Projects",
            "type": "basic",
            "items": [],
            "columns": 2,
            "visible": true
        },
        "education": {
            "id": "education",
            "name": "Education",
            "type": "basic",
            "items": [],
            "columns": 2,
            "visible": true
        },
        "interests": {
            "id": "interests",
            "name": "Interests",
            "type": "basic",
            "items": [],
            "columns": 2,
            "visible": true
        },
        "languages": {
            "id": "languages",
            "name": "Languages",
            "type": "basic",
            "items": [
                {
                    "id": "2579d148-92e2-459d-ab33-b9a86260dc37",
                    "name": "English",
                    "level": "8",
                    "levelNum": 9
                },
                {
                    "id": "910f7bc5-c6e4-441c-9b65-7cc3a815515f",
                    "name": "Chinese",
                    "level": "5",
                    "levelNum": 0
                }
            ],
            "columns": 2,
            "visible": true
        },
        "volunteer": {
            "id": "volunteer",
            "name": "Volunteer Experience",
            "type": "basic",
            "items": [],
            "columns": 2,
            "visible": true
        },
        "references": {
            "id": "references",
            "name": "References",
            "type": "basic",
            "items": [
                {
                    "id": "d982ead7-a9bd-465e-80da-118ae8f6a27b",
                    "name": "Helane Anderson",
                    "organization": "The Key Consulting for the Performing Arts",
                    "location": "Culver City, Calif.90232",
                    "title": "Director",
                    "phone": "301.945.5481",
                    "email": "hemander@yahoo.com"
                },
                {
                    "id": "d982ead7-a9bd-465e-80da-118ae8f6a27b",
                    "name": "Dr. George Keeler",
                    "organization": "University of Laverne",
                    "location": "La Verne, Calif.91750",
                    "title": "Director",
                    "phone": "301.945.5481",
                    "email": "hemander@yahoo.com"
                }
            ],
            "columns": 1,
            "visible": true
        },
        "publications": {
            "id": "publications",
            "name": "Publications",
            "type": "basic",
            "items": [],
            "columns": 2,
            "visible": true
        },
        "certifications": {
            "id": "certifications",
            "name": "Certifications",
            "type": "basic",
            "items": [],
            "columns": 2,
            "visible": true
        },
        "profile_summary": {
            "id": "profile_summary",
            "name": "Profile Summary",
            "type": "work",
            "items": [
                {
                    "summary": "**Most recently working as City Life Editor at The Madison Commons, with a total working experience of 2 years.**\
                    \nExprerienced jounalist with a background in reporting, editing, breaking coverage, feature writing, interstiative reporting,\
                    interviewing, research, fact-checking, copy editing, AP Style, leadership, mentoring, training, headlines, cutines, and digital photo."
                },
            ],
            "columns": 1,
            "visible": true
        },
        "strenths": {
            "id": "strenths",
            "name": "Strenths",
            "type": "work",
            "items": [
                {
                    "summary": "Breaking coverage, Feature writing, Investigative, reporting, Interviewing, Research, Fact-checking, Copy editing, AP Style, Leadership, Mentoring, Training, Headlines, Cutlines, Digital Photo"
                },
            ],
            "columns": 1,
            "visible": true
        },
    },
    "metadata": {
        "css": {
            "value": "/* Enter custom CSS here */\n\n* {\n    outline: 1px solid #000;\n}",
            "visible": false
        },
        "date": {
            "format": "MMMM DD, YYYY"
        },
        "page": {
            "format": "A4"
        },
        "theme": {
            "text": "#000000",
            "primary": "#00bcd4",
            "background": "#ffffff"
        },
        "layout": [
            [
                [
                    "profile_summary",
                    "work-1",
                    "education",
                    "projects",
                    "work",
                    "volunteer",
                    "languages",
                ],
                [
                    "skills",
                    "strenths",
                    "references",
                    "interests",
                    "awards",
                    "certifications",
                    "publications"
                ]
            ]
        ],
        "locale": "en",
        "template": "onyx",
        "typography": {
            "size": {
                "body": 16,
                "heading": 34
            },
            "family": {
                "body": "Aleo",
                "heading": "Roboto Condensed"
            }
        }
    },
    "public": true,
    "createdAt": new Date("2023-10-30T21:56:38.732Z"),
    "updatedAt": new Date("2023-10-31T05:00:14.565Z"),
    "user": {
        "id": 1,
        "name": "David",
        "username": "zoppina",
        "email": "fullstack1128@gmail.com",
        "provider": "email",
        "createdAt": new Date("2023-10-30T21:56:08.027Z"),
        "updatedAt": new Date("2023-10-30T21:56:08.027Z")
    }
}