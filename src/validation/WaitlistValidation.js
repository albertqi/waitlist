import { freeField } from "../services/FirebaseService";

export class WaitlistValidation {
    formData;

    constructor(formData) {
        this.formData = formData;
    };

    validateUsername = () => {
        return /^\w+$/.test(this.formData.username);
    };

    validateTel = () => {
        let stripped = this.formData.tel.replace(/[^-\d\s().]/g, "");
        if (stripped.length !== this.formData.tel.length) return null;
        let telDigits = stripped.replace(/\D/g, "");
        if (telDigits.length < 4 || telDigits.length > 15) return null;
        return telDigits;
    };

    validatePersonal = async () => {
        let required = [this.formData.username, this.formData.country,
        this.formData.countryCode, this.formData.tel];
        for (const field of required) {
            if (field == null || field.length < 1) {
                alert("Please fill in all fields.");
                return false;
            }
        }
        if (!this.validateUsername()) {
            alert("Invalid username.");
            return false;
        }
        let tel = await this.validateTel();
        if (tel == null) {
            alert("Invalid phone number.");
            return false;
        }
        let isFree = await freeField("username", this.formData.username) && await freeField("tel", tel);
        if (!isFree) {
            alert("Username or phone number not available.");
            return false;
        }
        return true;
    };

    validate = async () => {
        if (!await this.validatePersonal()) return false;
        let required = [this.formData.username, this.formData.country,
        this.formData.countryCode, this.formData.tel, this.formData.college];
        for (const field of required) {
            if (field == null || field.length < 1) {
                alert("Please fill in all fields.");
                return false;
            }
        }
        if (this.formData.college === "Other" &&
            (this.formData.otherCollege == null || this.formData.otherCollege < 1)) {
            alert("Please input other college.");
            return false;
        }
        return true;
    };
};