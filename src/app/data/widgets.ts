export let widgets = [
    {
        "title": "View Inbox",
        "icon": "glyphicon-envelope",
        "description": "View any correspondence that has previously been sent to you.",
        "points": [],        
        "category": "left",
        "module": "/inbox",
        "custom": false
    },
    {
        "title": "Load Work-In-Progress",
        "icon": "glyphicon-pencil",
        "description": `
            <p> 
                Work on, submit, or delete an application that you already started, but have not yet submitted.
            </p>
            <p>
                Information entered in the online application is automatically saved for you, but is deleted after7 deays if you do not
                submit it.
            </p>
        `,
        "points": [],
        "category": "center",
        "module": "/wip",
        "custom": true

    },
    {
        "title": "Apply for Post-Secondary Funding",
        "icon": "glyphicon-usd",
        "description": `
                <p>Begin a new application for Full-Time student aid.</p>
                <ul>
                    <li>Apply for2016-2017 (classes start between01-Aug-2016 and31-Jul-2017)
                    </li>
                </ul>
                <p>
                    You cannot begin a new application if you currently have an existing work-in-progress application for the same year. If you have a work-in-progress application, complete it or delete it.
                </p>

        `,
        "points": [],
        "category": "center",
        "module": "/funding",
        "custom": false

    },
    {
        "title": "Request for Review",
        "icon": "glyphicon-list-alt",
        "description": `
                <p>This option allows you to request a review if you are not satisfied with a decision made by Student Aid Alberta on your application:</p>
        `,
        "points": [
            "Continue working on your Request for Review (Work-in-Progress)",
            "Make changes to your processed Student Aid Alberta application",
            "To submit additional Request for Review documents such as disability-related documents",
            "View the status of previously submitted application changes or requests for review"
        ],
        "category": "center",
        "module": "/review",
        "custom": false

    },
    {
        "title": "Apply for the Alexander Rutherford High School Achievement Scholarship",
        "icon": "glyphicon-list-alt",
        "description": `
               <p>You must be accepted for full-time studies at a post-secondary institution before you can apply. If your study date is after31-Jul-2018, you cannot use this application. Apply on the2018-2019 application when it is available online.</p>
                <ul><li>Apply for2017-2018 (classes start between01-Aug-2017 and31-Jul-2018) or previous years</li></ul>
                <p>
                You cannot begin a new application if you currently have an existing work-in-progress application for the same year. If you have a work-in-progress application, complete it or delete it.
                </p>

        `,
        "points": [],
        "category": "center",
        "module": "/scholarships",
        "custom": false

    },
    {
        "title": "Update Address and Notification Preference",
        "icon": "glyphicon-home",
        "description": `
                          Update your address and notification preference details. You should also update your address and notification preference with Student Aid Alberta Service Centre, the National Student Loans Service Centre and any other lending institution where you may have students loans.
 
        `,
        "points": [],
        "category": "right",
        "module": "/address",
        "custom": false

    },
    {
        "title": "Upload Electronic Document(s)",
        "icon": "glyphicon-upload",
        "description": `
              Update your address and notification preference details. You should also update your address and notification preference with Student Aid Alberta Service Centre, the National Student Loans Service Centre and any other lending institution where you may have students loans.
 
        `,
        "points": [],
        "category": "left",
        "module": "/upload",
        "custom": false

    },
    {
        "title": "View Inquiry",
        "icon": "glyphicon-info-sign",
        "description": `
              This option allows you to view previously submitted application details.
 
        `,
        "points": [],
        "category": "right",
        "module": "/inquiry",
        "custom": false

    }
];
