const formConfig = {
    sections: [
        {
            id: 1,
            heading: "Personal Details",
            fields: [
                {
                    id: 11,
                    name: "fullName",
                    type: "text",
                    label: "Full Name",
                    placeholder: "Enter your full name",

                },
                {
                    id: 12,
                    name: "gender",
                    type: "select",
                    label: "Gender",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select a gender", disabled: true
                        },
                        {
                            value: "male", label: "Male"
                        },
                        {
                            value: "female", label: "Female"
                        },
                        {
                            value: "others", label: "Others"
                        },
                    ],
                },
                {
                    id: 13,
                    name: "dob",
                    type: "date",
                    label: "DOB",
                },
                {
                    id: 14,
                    name: "fatherName",
                    type: "text",
                    label: "Father Name",
                    placeholder: "Enter your father's name",
                },
                {
                    id: 15,
                    name: "grandFatherName",
                    type: "text",
                    label: "Grand Father Name (optional)",
                    placeholder: "Enter your grand father's name"
                },
                {
                    id: 16,
                    name: "maritalStatus",
                    type: "select",
                    label: "Marital Status (optional)",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select a status", disabled: true
                        },
                        {
                            value: "single", label: "Single"
                        },
                        {
                            value: "married", label: "Married"
                        },
                    ],
                },
                {
                    id: 17,
                    name: "occupation-field",
                    type: "select",
                    label: "Occupation Field",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select Occupation", disabled: true
                        },
                        {
                            value: "student", label: "Student"
                        },
                        {
                            value: "business", label: "Business"
                        },
                        {
                            value: "tourism", label: "Tourism"
                        },
                        {
                            value: "agriculture", label: "Agriculture"
                        },
                        {
                            value: "trade", label: "Trade"
                        },
                        {
                            value: "tech", label: "Tech"
                        },
                        {
                            value: "medical", label: "Medical"
                        },
                        {
                            value: "education", label: "Education"
                        },
                        {
                            value: "self", label: "Self Employed"
                        },
                    ],
                },
                {
                    id: 18,
                    name: "emailAddress",
                    type: "text",
                    label: "Email Address",
                    placeholder: "Enter your email address",
                },
                {
                    id: 19,
                    name: "contactNumber",
                    type: "text",
                    label: "Contact Number",
                    placeholder: "Enter your contact number",
                },
            ],
        },

        {
            id: 2,
            heading: "Address Details",
            fields: [
                {
                    id: 21,
                    name: "state",
                    type: "select",
                    label: "State",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select State", disabled: true
                        },
                        {
                            value: "illinois", label: "Illinois"
                        },
                        {
                            value: "new york", label: "New York"
                        },
                        {
                            value: "california", label: "California"
                        },
                        {
                            value: "idaho", label: "Idaho"
                        },
                        {
                            value: "texas", label: "Texas"
                        },
                        {
                            value: "minnesota", label: "Minnesota"
                        },
                        {
                            value: "new jersey", label: "New Jersey"
                        },
                    ],
                },
                {
                    id: 22,
                    name: "streetAddress",
                    type: "text",
                    label: "Street Address",
                    placeholder: "Enter your Street Address",
                },
                {
                    id: 23,
                    name: "city",
                    type: "text",
                    label: "City",
                    placeholder: "Enter your city name",
                },
                {
                    id: 24,
                    name: "zipcode",
                    type: "text",
                    label: "Zipcode",
                    placeholder: "Enter your zipcode",
                },
                {
                    id: 25,
                    name: "toleName",
                    type: "text",
                    label: "Tole Name (optional)",
                    placeholder: "Enter your tole name"
                },
            ],
        },

        {
            id: 3,
            heading: "Document Details",
            fields: [
                {
                    id: 31,
                    name: "documentType",
                    type: "select",
                    label: "Document Type",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select a document type", disabled: true
                        },
                        {
                            value: "citizenship", label: "Citizenship"
                        },
                        {
                            value: "license", label: "License"
                        },
                        {
                            value: "passport", label: "Passport"
                        },
                    ],
                },
                {
                    id: 32,
                    name: "dlnumber",
                    type: "text",
                    label: "Document Number",
                    placeholder: "Enter your Document Number",
                },
                {
                    id: 33,
                    name: "issuingState",
                    type: "select",
                    label: "Select Issuing State",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select a State", disabled: true
                        },
                        {
                            value: "illinois", label: "Illinois"
                        },
                        {
                            value: "wisconsin", label: "Wisconsin"
                        },
                        {
                            value: "indiana", label: "Indiana"
                        },
                    ],
                },
                {
                    id: 34,
                    name: "dateOfIssue",
                    type: "date",
                    label: "Date of Issue",
                },
                {
                    id: 35,
                    name: "dateOfExpiry",
                    type: "date",
                    label: "Date of Expiry",
                },
                {
                    id: 36,
                    name: "profilePicture",
                    type: "file",
                    label: "your documents"
                },
            ]
        }
    ]
};

export default formConfig;