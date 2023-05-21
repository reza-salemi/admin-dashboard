export const validationRules = {
  mobile: {
    required: "شماره موبایل را وارد کنید.",
    minLength: {
      value: 11,
      message: "شماره موبایل باید حداقل 11 کاراکتر باشد.",
    },
    maxLength: {
      value: 11,
      message: "شماره موبایل نباید بیشتر از 11 کاراکتر باشد.",
    },
  },
  password: {
    required: "رمز عبور را وارد کنید.",
  },
  "repeat-password": {
    required: "لطفاً رمز عبور را تکرار کنید.",
  },
};
