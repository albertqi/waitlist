import { COLLEGES } from "../constants/Constants";

function CollegeInfo({ formData, setFormData }) {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="colleges" className="block mb-2 text-sm font-medium text-white">Select your college</label>
                <select
                    value={formData.college}
                    onChange={(e) => {
                        setFormData({ ...formData, college: e.target.value });
                    }}
                    id="colleges"
                    className="appearance-none bg-white text-gray-900 text-sm rounded-lg outline-0 focus:ring-1 focus:ring-violet-600 block w-full p-2.5"
                >
                    {COLLEGES.map((college) => (
                        <option key={college} value={college}>{college}</option>
                    ))}
                    <option value="Other">Other</option>
                </select>
            </div>
            {formData.college === "Other" &&
                <div>
                    <label htmlFor="otherCollege" className="block mb-2 text-sm font-medium text-white">Other college</label>
                    <input
                        value={formData.otherCollege}
                        onChange={(e) => {
                            setFormData({ ...formData, otherCollege: e.target.value });
                        }}
                        type="text"
                        id="otherCollege"
                        className="rounded-lg bg-white text-gray-900 outline-0 focus:ring-1 focus:ring-violet-600 block flex-1 min-w-0 w-full text-sm p-2.5"
                    />
                </div>
            }
        </div>
    );
}

export default CollegeInfo;