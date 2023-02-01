import {useFormik} from "formik"
const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        onSubmit:(values) => {
            console.log(values)
        },
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
        validateOnBlur:true
    })
    return (
        <div>
            <h2>Contact</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name</label>
                    {formik.errors.name && <p>{formik.errors.name}</p>}
                    <input
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label>Email</label>
                    {formik.errors.email && <p>{formik.errors.email}</p>}
                    <input
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label>Message</label>
                    {formik.errors.message && <p>{formik.errors.message}</p>}
                    <textarea 
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        >
                    </textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;