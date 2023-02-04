//Formik is a library for handling, I'm importing the use formik hook.
import {useFormik} from "formik"
//This is the regex for an email.
const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const Contact = () => {
    const formik = useFormik({
        //Setting up the initial values for the inputs
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        //This is handling when the form is submitted.
        onSubmit:(values) => {
            console.log(values)
        },
        //Validate checks values if they meet conditions, if not then create an error for that specific value.
        validate:(values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Name is required."
            }
            if (!values.email) {
                errors.email = "Email is required."
            }
            else if (!regexEmail.test(values.email)) {
                errors.email = "Enter a valid email."
            }
            if (!values.message) {
                errors.message = "Message is required."
            }
            return errors
        },
        //focus is when a user has interacted with an element on the page, so blur is when you lose focus.
        validateOnBlur:true
    })
    //setting up the form
    return (
        <div>
            <h2>Contact</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name</label>
                    {formik.errors.name && <p>{formik.errors.name}</p>}
                    <input className = "input"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label>Email</label>
                    {formik.errors.email && <p>{formik.errors.email}</p>}
                    <input className = "input"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label>Message</label>
                    {formik.errors.message && <p>{formik.errors.message}</p>}
                    <textarea className = "text-area" 
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        >
                    </textarea>
                </div>
                <div>
                    <button className="submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;