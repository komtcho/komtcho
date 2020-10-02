var app = angular.module('app', []);
app.controller('app', function($scope) {
    $scope.experiences = [
        {
            companyName: 'FoxLaby',
            duration: 'Apr 2018 - Present',
            jobTitle: 'Founder - Software Developer',
            jobType: 'Full Time',
            jobDescription: 'Forming an Egyptian society interested in developing on laravel.',
            projects: [
                {
                    name: 'Units Estate',
                    logo: 'unitsestate.png',
                    description: 'An electronic platform for managing real estate marketing companies and project management, working to provide advantages for managing company\'s\' resources and providing information.',
                    tasks: [
                        'Develop backend',
                        'Develop Apis',
                        'Build architecture',
                    ],
                    landingPage: 'http://units.estate/'
                },
                {
                    name: 'SMSLaby',
                    logo: 'foxlaby.png',
                    description: 'An SMS messaging platform primarily aimed at developers offering SDKs to integrate with third-party apps.',
                    tasks: [
                        'Develop backend',
                        'Develop Apis',
                        'Participation in Develop Sdk (PHP, Node.js)',
                        'Build architecture'
                    ],
                    landingPage: 'https://foxlaby.com/sms'
                }
            ],
            previous: false
        },
        {
            companyName: 'Shieldfy',
            duration: 'July 2018 - May 2018',
            jobTitle: 'Software Engineer',
            jobType: 'Full Time',
            jobDescription: 'Development within a team with good experience .. I have written in different languages',
            projects: [
                {
                    name: 'Shieldfy App',
                    logo: 'shieldfy.png',
                    description: 'A cloud software designed by developers for developers to help them protect their web applications from web attacks & vulnerabilities.',
                    tasks: [
                        'Develop backend',
                        'Develop Apis',
                        'Participation in Develop Sdk (PHP, Node.js)',
                    ],
                    landingPage: 'https://shieldfy.io/'
                }
            ],
            previous: true
        },
        {
            companyName: 'Where2group',
            duration: 'Feb 2018 - Sept 2018',
            jobTitle: 'Senior Backend Developer',
            jobType: 'Remotely',
            jobDescription: 'Tasks of managing the technical team, distribution of tasks and follow-up of the work with participation in writing the code',
            projects: [
                {
                    name: 'Benzeny',
                    logo: 'gasme.svg',
                    description: 'A fuel project that facilitates cost tracking, transfers and station readiness. With access to neighboring stations, you can agree to your requirements, manage your fuel expenses, track all your account movements and transfer your balance through your wallet And determine the appropriate fuel type for each car.',
                    tasks: [
                        'Technical team management',
                        'Maintain quality code',
                        'Participation in Develop backend',
                        'Develop Apis'
                    ],
                    landingPage: 'https://www.benzeny.com/'
                }
            ],
            previous: true
        },
        {
            companyName: 'Komicho',
            duration: 'Jun 2017 - Present',
            jobTitle: 'Fullstack Web Developer',
            jobDescription: 'Create user-friendly web applications that deliver interest',
            projects: [
                {
                    name: 'Komicho Phone',
                    logo: 'komichophone.png',
                    description: 'Komicho Phone is not a site for displaying data of phones and smart devices, but it is a web application that works to make everything new in your hands in the world of smart phones.',
                    tasks: [
                        'Founder of the project',
                        'Maintain quality code',
                        'Participation in Development backend'
                    ],
                    landingPage: 'https://komicho.com/phone/ar'
                },
                {
                    name: 'KomichOss Project',
                    logo: 'komichoss.png',
                    description: 'You can integrate with us within the community to build more and better projects. We welcome you from anywhere and anytime. You can development with us by taking Fork from our projects. This is very gratifying.',
                    tasks: [
                        'Founder of the project',
                        'Create a new library'
                    ],
                    landingPage: 'https://komichoss.github.io/'
                },
                {
                    name: 'Dwayr',
                    logo: 'Logo-dwayr.png',
                    description: 'Is an application that provides a platform for communication between companies, developers and developers, and some of them in a technical community aimed at better and faster communication and credibility in information.',
                    tasks: [
                        'User Interface Design',
                        'Database design',
                        'Develop backend'
                    ],
                    landingPage: 'https://dwayr.com/'
                }
            ],
            previous: false
        },
        {
            companyName: 'Freelance',
            duration: 'Des 2017 - Jun 2017',
            jobTitle: 'Backend Developer',
            jobType: 'Outsource',
            jobDescription: 'I was working on an application in Canada',
            projects: [
                {
                    name: 'gymBuddy',
                    logo: 'Logo-6.png',
                    description: 'Gym Buddy is a mobile App that finds you a local workout partner. Through a filtering process, you will be able to find your match by entering your fitness level, fitness goal, location, gym, type of activity, schedule and more.',
                    tasks: [
                        'Develop mobile application',
                        'Database design',
                        'Develop backend'
                    ],
                    note: 'Location: Canada - My mission: Backend Development'
                }
            ],
            previous: true
        },
        {
            companyName: 'TravelFox',
            duration: 'May 2016 - Nov 2017',
            jobTitle: 'Web Developer',
            jobType: 'Full Time',
            jobDescription: 'I was working with your company team .. In one of the largest projects of the company and he travelfox.com',
            projects: [
                {
                    name: 'TravelFox',
                    logo: 'TravelFox.png',
                    description: 'Travelfox is a " travel search engine" where we search and compare hundreds of travel website for the best prices and options to save you time and money when you planning to travel almost to any city in the world. Our search includes hotels websites / airline websites / car rentals websites/ vacation rentals websites and more sections will be available in the near future.',
                    tasks: [
                        'Develop UI',
                        'javascript code refactoring'
                    ],
                    note: 'Location: Egypt - My mission: frontend Development',
                    landingPage: 'http://www.travelfox.com/'
                }
            ],
            previous: true
        },
        {
            companyName: 'BRQIA',
            duration: 'Jun 2015 - Apr 2016',
            jobTitle: 'Web Developer',
            jobType: 'Full Time',
            jobDescription: 'My first full time job and I work as a developer in web applications',
            previous: true
        }
    ];
});