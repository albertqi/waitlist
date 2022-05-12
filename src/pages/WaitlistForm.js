import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import CollegeInfo from "../components/CollegeInfo";
import { addUser } from "../services/FirebaseService";
import { WaitlistValidation } from "../validation/WaitlistValidation";

function WaitlistForm() {
    const navigate = useNavigate();

    const [pageIndex, setPageIndex] = useState(0);
    const [formData, setFormData] = useState({
        username: "",
        country: "United States",
        countryCode: "1",
        tel: "",
        college: "Amherst College",
        otherCollege: "",
    });

    const FORM_TITLES = ["Let's get started", "Almost finished"];

    const onSubmit = async (e) => {
        e.preventDefault();
        const validate = new WaitlistValidation(formData);
        if (!await validate.validate()) return;
        addUser(formData);
        navigate("/");
        alert("Successfully added to the waitlist!");
    };

    return (
        <form className="mx-auto my-28 max-w-md bg-transparent p-8 space-y-6">
            <h5 className="text-xl font-medium text-white">{FORM_TITLES[pageIndex]}</h5>
            {pageIndex === 0 ? <PersonalInfo formData={formData} setFormData={setFormData} /> : <CollegeInfo formData={formData} setFormData={setFormData} />}
            <div>
                <button
                    type="button"
                    disabled={pageIndex === 0}
                    onClick={() => {
                        setPageIndex(pageIndex - 1);
                    }}
                    className={`border font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white border-white${pageIndex === 0 ? "" : " hover:text-gray-200 hover:border-gray-200"}`}
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={pageIndex === FORM_TITLES.length - 1 ? onSubmit : async () => {
                        const validate = new WaitlistValidation(formData);
                        if (!await validate.validate()) return;
                        setPageIndex(pageIndex + 1);
                    }}
                    className="float-right text-white border border-violet-500 hover:border-violet-600 bg-violet-500 hover:bg-violet-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    {pageIndex === FORM_TITLES.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </form>
    );
}

export default WaitlistForm;