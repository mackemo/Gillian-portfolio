import { useState } from 'react'
import '../styles/contact.css'

export default function Contact() {
    
    // contact form
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    // error messages for empty fields
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    // success message after submission
    const [successMessage, setSuccessMessage] = useState('');

    // set changes of form input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };
    
    // validating the fields are inputted
    const validateForm = () => {
        let isValid = true;
        let newErrors = { name: '', email: '', message: '' };
    
        if (!form.name) {
          newErrors.name = 'Name is required.';
          isValid = false;
        }

        if (!form.email) {
          newErrors.email = 'Email address is required.';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
          newErrors.email = 'Email address is invalid.';
          isValid = false;
        }

        if (!form.message) {
          newErrors.message = 'Message is required.';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };

    // on submit, email draft created with succes message
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        } else {
            const mailtoLink = `mailto:gillianflatt@example.com?subject=Contact from 
            ${form.name}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)}`;
            window.location.href = mailtoLink;
            setSuccessMessage('Your message has been prepared in your email client!');
        }

        console.log('Form submitted:', form);
        // reset form after submission
        setForm({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
        <section id="contact" className="container col-md-10">
            <h3 className="title fw-medium">Contact</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="contact fst-italic fw-light">
                        <p><span className="label fw-medium">Email:</span> gillianflatt@example.com
                        <br></br><span className="label fw-medium">Phone number:</span> (111) 111-1111
                        <br></br><span className="label fw-medium">Address: </span> 703 Pinnacle Hill Rd, Nashville TN 37082
                        </p>
                    </div>
                </div> 
                <div className="contact-section">
                {successMessage && <p className="success-message">{successMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <p className="error-message">{errors.name}</p>}
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {errors.message && <p className="error-message">{errors.message}</p>}
                        </div>
                    
                        <button type="submit">Submit</button>
                    </form>
                </div> 
            </div>
        </section>
        </>
    );
};