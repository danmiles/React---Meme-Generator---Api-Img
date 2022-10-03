import React from 'react';
import { useState } from 'react';

function Form() {
    // ========= 1) Etape 1 - not good solution for form with only "useState" =========

    // const [firstName, setFirstName] = React.useState('');
    // const [lastName, setLastName] = React.useState('');

    // function handleFirstNameChange(event) {
    //     setFirstName(event.target.value);
    // }

    // function handleLastNameChange(event) {
    //     setLastName(event.target.value);
    // }

    // console.log(firstName, lastName);

    // return (
    //     <form>
    //         <input
    //             type="text"
    //             placeholder="First Name"
    //             placeholder="First Name"
    //             onChange={handleFirstNameChange}
    //         />
    //         <input
    //             type="text"
    //             placeholder="Last Name"
    //             placeholder="Last Name"
    //             onChange={handleLastNameChange}
    //         />
    //     </form>
    // );

    // // 2) ========= Etape 2 - create checkbox =========
    // const [formData, setFormData] = React.useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     comments: '',
    //     isFriendly: true,
    //     employment: '',
    //     favColor: '',
    // });

    // console.log(formData);

    // function handleChange(event) {
    //     const { name, value, type, checked } = event.target;
    //     setFormData((prevFormData) => {
    //         return {
    //             ...prevFormData,
    //             [name]: type === 'checkbox' ? checked : value,
    //         };
    //     });
    // }

    // function handleSubmit (event) {
    //     event.preventDefault()
    //     console.log(formData);
    // }

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <input
    //             type="text"
    //             placeholder="First Name"
    //             onChange={handleChange}
    //             name="firstName"
    //             value={formData.firstName}
    //         />
    //         <input
    //             type="text"
    //             placeholder="Last Name"
    //             onChange={handleChange}
    //             name="lastName"
    //             value={formData.lastName}
    //         />
    //         <input
    //             type="email"
    //             placeholder="Email"
    //             onChange={handleChange}
    //             name="email"
    //             value={formData.email}
    //         />
    //         <textarea
    //             value={formData.comments}
    //             placeholder="Comments"
    //             onChange={handleChange}
    //             name="comments"
    //         />
    //         <div className="checkbox">
    //             <input
    //                 type="checkbox"
    //                 id="isFriendly"
    //                 checked={formData.isFriendly}
    //                 onChange={handleChange}
    //                 name="isFriendly"
    //             />
    //             <label htmlFor="isFriendly">Are you friendly?</label>
    //         </div>

    //         {/*=================== Radio buttons start ===================  */}

    //         <fieldset>
    //             <legend>Current employment status</legend>

    //             <input
    //                 type="radio"
    //                 id="unemployed"
    //                 name="employment"
    //                 value="unemployed"
    //                 checked={formData.employment === 'unemployed'}
    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="unemployed">Unemployed</label>
    //             <br />

    //             <input
    //                 type="radio"
    //                 id="part-time"
    //                 name="employment"
    //                 value="part-time"
    //                 checked={formData.employment === 'part-time'}
    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="part-time">Part-time</label>
    //             <br />

    //             <input
    //                 type="radio"
    //                 id="full-time"
    //                 name="employment"
    //                 value="full-time"
    //                 checked={formData.employment === 'full-time'}
    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="full-time">Full-time</label>
    //             <br />
    //         </fieldset>
    //         {/* Radio buttons END */}

    //         <select
    //             value={formData.favColor}
    //             id="favColor"
    //             onChange={handleChange}
    //             name="favColor"
    //         >
    //             <option value="">--Choose--</option>
    //             <option value="red">Red</option>
    //             <option value="orange">Orange</option>
    //             <option value="yellow">Yellow</option>
    //             <option value="green">Green</option>
    //             <option value="blue">Blue</option>
    //             <option value="indigo">Indigo</option>
    //             <option value="violet">Violet</option>
    //         </select>

    //         <button>Submit</button>
    //     </form>
    // );

    // 3) ========= Etape 3 -Sign UP form create myself

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        okayToEmail: false,
    });

    console.log(formData);

    function handleChange(event) {
        // object destructuring
        const { name, value, type, checked } = event.target;
        
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                // [name] is Computed property
                [name]: name === 'okayToEmail' ? checked : value,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (
            formData.password === formData.passwordConfirm &&
            formData.okayToEmail === false
        ) {
            alert('Thank you. But you have not subscribed to our newsletter');
        } else if (
            formData.password === formData.passwordConfirm &&
            formData.okayToEmail === true
        ) {
            alert('Thank you very much for subscribing to our newsletter!!! Now we have one more address for sending spam -)!!!');
        } else {
            alert('Your passwords do not match');
        }
    }

   

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        name="okayToEmail"
                        type="checkbox"
                        checked={formData.okayToEmail}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">
                        I want to join the newsletter
                    </label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    );
}

export default Form;
