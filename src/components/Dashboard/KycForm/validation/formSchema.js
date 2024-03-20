import * as yup from "yup";

const formSchema = yup.object().shape({
    fullName: yup
    .string()
    .required("Full Name is Required")
    .min(3, "Name can't be less than 3 characters"),
    gender: yup.
    string()
    .required("Gender must be selected"),
    dob: yup
    .string()
    .required("Date of Birth must be selected"),
    fatherName: yup
    .string()
    .required("Father's Name is Required"),
    grandFatherName: yup.string(),
    maritalStatus: yup.string(),
    "occupation-field": yup
    .string()
    .required("You must select your occupation field"),
    emailAddress: yup
    .string()
    .email("Email Adress must be valid")
    .required("Email address is required"),
    contactNumber: yup
    .string()
    .required("Contact number is required")
    .matches("^[0-9]", "Contact Number can't contain any letters or special characters"),
    state: yup
    .string()
    .required("State must be selected")
    .matches(/^[a-zA-Z ]*$/, "State name can't contain numbers or special characters"),
    streetAddress: yup
    .string()
    .required("Street Address is required field"),
    city: yup
    .string()
    .matches(/^[a-zA-Z ]*$/, "City name can't contain numbers or special characters")
    .required("City is required field"),
    zipcode: yup
    .string()
    .required("Zipcode is required field")
    .matches("^[0-9]", "Zipcode can't contain any letters or special characters"),
    toleName: yup.string(),
    documentType: yup
    .string()
    .required("Document Type must be selected"),
    dlnumber: yup
    .string()
    .required("Driver's License Number is required"),
    issuingState: yup
    .string()
        .required("Issuing State must be selected"),
    dateOfIssue: yup
    .string()
    .required("Date of Issue must be selected"),
    dateOfExpiry: yup
        .string()
        .required("Date of Expiry must be selected"),
    profilePicture: yup.mixed()
});

export default formSchema;