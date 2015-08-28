var bio = {
    "name": "Tony Morrow",
    "role": "Web Developer",
    "contacts": {
        "email": "tony@example.com",
        "mobile": "111-1111",
        "twitter": "@morr0350",
        "github": "github.com/morr0350",
        "location": "Minneapolis, MN"
    },
    "welcomeMessage": "Welcome to the site! Aquarium nest small animals tooth wag tail run warm pet gate lol catz parrot bark catch walk. ",
    "pictureUrl": "images/self.jpg",
    "age": 39,
    "skills": ["Python", "C#", "SQL", "HTML", "CSS", "Javascript"]
};

var work = {
    "jobs": [
        {
            "title": "Developer",
            "employer": "WhereToLive.com",
            "dates": {
                "start": "2008-06-01",
                "end": "--"
            },
            "location": "Eden Prairie, MN",
            "description": "Puppy kitty ipsum dolor sit good dog meow lol catz tooth right paw turtle bark mittens scooby snacks tabby food mittens wag tail. Speak left paw fluffy vitamins right paw stay ferret Fido litter box foot ID tag Buddy chow lick harness licks gimme five hamster. Aquatic bird pet supplies kitty puppy bird seed yawn vitamins foot roll over feathers. Mittens head dragging toys vitamins kitten Mittens meow pet supplies canary fluffy nap shake paws run feathers fluffy ball treats stay."
        },
        {
            "title": "Developer",
            "employer": "GreatBizTools",
            "dates": {
                "start": "2015-05-01",
                "end": "2015-08-17"
            },
            "location": "Minneapolis, MN",
            "description": "Tooth treats stick mouse play wagging slobbery Snowball chow twine purr toy critters bed good boy run fast. Tabby furry tuxedo commands head slobber warm slobber vaccination small animals lol catz collar walk biscuit chow fish canary pet supplies. Fido kitten catch chow bedding sit chow pet food. Foot litter box Rover puppy lick cockatiel pet Tigger twine. Roll Over wag tail fur sit groom run wet nose walk turtle."
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Pearson College UWC",
            "location": "Victoria, BC",
            "degree": "International Baccalaureate",
            "major": "English/Art/Anthropology",
            "dates": "1993 - 1995"
        },
        {
            "name": "Macalester College",
            "location": "St. Paul, MN",
            "degree": "Bachelor of Arts",
            "major": "Geography",
            "dates": "1996 - 2000"
        },
        {
            "name": "Metro State University",
            "location": "St. Paul, MN",
            "degree": "Bachelor of Science, in progress",
            "major": "Computer Science",
            "gradYear": "In Progress",
            "dates": "2015 - "
        }
    ],
    "onlineCourses": [
        {
            "school": "Udacity",
            "location": "Stanford, CA",
            "title": "Front End Nanodegree",
            "date": "2015 - ",
            "url": "www.udacity.com"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "2014-08-04 - 2014-08-17",
            "description": "Project Portfolio",
            "image": "http://lorempixel.com/300/200/"
        }
    ]
};

bio.displayContacts = function () {
    var headerContactElem = $('#topContacts');
    var footerContactElem = $('#footerContacts');

    var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

    headerContactElem.append(formattedMobile);
    headerContactElem.append(formattedEmail);
    headerContactElem.append(formattedGithub);
    headerContactElem.append(formattedTwitter);
    headerContactElem.append(formattedLocation);

    footerContactElem.append(formattedMobile);
    footerContactElem.append(formattedEmail);
    footerContactElem.append(formattedGithub);
    footerContactElem.append(formattedTwitter);
    footerContactElem.append(formattedLocation);
}

bio.display = function () {

    var headerElem = $('#header');
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
    headerElem.prepend(formattedRole);
    headerElem.prepend(formattedName);
    headerElem.append(formattedWelcome);

    if (bio.pictureUrl) {
        var formattedPic = HTMLbioPic.replace("%data%", this.pictureUrl);
        headerElem.append(formattedPic);
    }

    if (bio.skills && bio.skills.length > 0) {
        headerElem.append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var skillsElem = $('#skills');
            var formattedSkills = HTMLskills.replace("%data%", this.skills[i]);
            skillsElem.append(formattedSkills);
        }
    }

    this.displayContacts();
}

education.display = function () {

    var educationDiv = $('#education');

    this.schools.forEach(function (school) {

        var schoolDiv = $(HTMLschoolStart);
        educationDiv.append(schoolDiv);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedSchoolLocation);
        $('.education-entry:last').append(formattedSchoolMajor);
    });

    educationDiv.append(HTMLonlineClasses);

    this.onlineCourses.forEach(function (onlineCourse) {

        var onlineSchoolDiv = $(HTMLschoolStart);
        educationDiv.append(onlineSchoolDiv);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", onlineCourse.date);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);

        $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
        $('.education-entry:last').append(formattedOnlineDate);
        $('.education-entry:last').append(formattedOnlineUrl);
    });
}

work.display = function () {
    this.jobs.forEach(function (job) {
        $('#workExperience').append(HTMLworkStart);
        var formattedworkTitleElem = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkDates = HTMLworkDates.replace("%data%", "Start: " + job.dates.start + ", End: " + job.dates.end);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $('.work-entry:last').append(formattedworkEmployer + formattedworkTitleElem);
        $('.work-entry:last').append(formattedworkDates);
        $('.work-entry:last').append(formattedworkLocation);
        $('.work-entry:last').append(formattedDescription);
    });
}

projects.display = function () {
    this.projects.forEach(function (project) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedImage = HTMLprojectImage.replace("%data%", project.image);

        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);
        $('.project-entry:last').append(formattedImage);
    });
}

$('#mapDiv').append(googleMap);
bio.display();
work.display();
projects.display();
education.display();