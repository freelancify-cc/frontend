import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";
import './index.css';

const ChooseRegistration = () => {
    const [selectedRole, setSelectedRole] = useState(1);

    const handleRadioChange = (e) => {
        console.log(e);
        setSelectedRole(e.target);
    }

    const handleSubmit = (e) => {
        localStorage.setItem("role", selectedRole);
        navigate('/create_account', { role: selectedRole });
    }

    var navigate = useNavigate();

    return (
        <Container>
            <br /><br /><br /><br /><br /><br />
            <div>
                <label class="text-white fs-1 mb-2 ">Why are you visiting our website?</label>
                <div>
                    <input
                        type="radio"
                        id="freelancer"
                        name="radioBlocks"
                        value={1}
                        onChange={() => handleRadioChange(1)}
                    />
                    <label class="text-white fs-4 mx-4" htmlFor="freelancer">Freelancer</label>
                    <p class="text-white mt-2 " >I am looking for to work as a freelancer</p>
                </div>
                <div>
                    <input
                        type="radio"
                        id="employer"
                        name="radioBlocks"
                        value={2}
                        onChange={() => handleRadioChange(2)}
                    />
                    <label class="text-white fs-4 mx-4" htmlFor="employer">Employer</label>
                    <p class="text-white mt-2" >I am looking for a freelancer for my project</p>
                </div>
            </div>
            <button class="rounded-pill m-4 fs-4" type="button" onClick={handleSubmit}>
                Submit
            </button>
        </Container>
    );
};

export default ChooseRegistration;