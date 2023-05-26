import * as yup from "yup";

export const validationSchema = yup.object().shape({
  mobile: yup
    .string()
    .required("شماره موبایل را وارد کنید.")
    .min(11, "شماره موبایل باید حداقل 11 کاراکتر باشد.")
    .max(11, "شماره موبایل نباید بیشتر از 11 کاراکتر باشد."),
  password: yup.string().required("رمز عبور را وارد کنید."),
  "repeat-password": yup
    .string()
    .required("لطفاً رمز عبور را تکرار کنید.")
    .oneOf([yup.ref("password"), null], "رمز عبور‌ها باید یکسان باشند."),
});
