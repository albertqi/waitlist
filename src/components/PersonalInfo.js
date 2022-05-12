import { COUNTRIES, COUNTRY_CODES } from "../constants/Constants";

function PersonalInfo({ formData, setFormData }) {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border-r border-gray-300">
                        @
                    </span>
                    <input
                        value={formData.username}
                        onChange={(e) => {
                            setFormData({ ...formData, username: e.target.value });
                        }}
                        type="text"
                        id="username"
                        className="rounded-none rounded-r-lg bg-white text-gray-900 outline-0 focus:ring-1 focus:ring-violet-600 block flex-1 min-w-0 w-full text-sm p-2.5"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="tel" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
                <div className="flex">
                    <div className="relative inline-flex items-center bg-white rounded-l-md border-r border-gray-300">
                        <span className="px-3 text-sm text-gray-900">+{formData.countryCode}</span>
                        <select
                            value={formData.country}
                            onChange={(e) => {
                                setFormData({ ...formData, country: e.target.value, countryCode: COUNTRY_CODES[e.target.options.selectedIndex] });
                            }}
                            className="appearance-none absolute left-0 w-full h-full rounded-l-md opacity-0"
                        >
                            {COUNTRIES.map((country, i) => (
                                <option key={i} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>
                    <input
                        value={formData.tel}
                        onChange={(e) => {
                            setFormData({ ...formData, tel: e.target.value });
                        }}
                        type="tel"
                        id="tel"
                        className="relative rounded-none rounded-r-lg bg-white text-gray-900 outline-0 focus:ring-1 focus:ring-violet-600 block flex-1 min-w-0 w-full text-sm p-2.5"
                    />
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;