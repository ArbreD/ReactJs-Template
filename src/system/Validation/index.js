import { MSG01, MSG02, MSG03, MSG04, MSG05, MSG06 } from "~/system/Messages";
import { emailPattern } from "~/system/Constants/Constants";

export const checkEmailMessage = (email, emailIsExisted) => {
  if (!email) {
    return MSG01;
  } else if (!emailPattern.test(email)) {
    return MSG04;
  } else if (emailIsExisted === true) {
    return MSG03;
  }
};

export const checkPasswordMessage = (password, currentPasswordIsNotMatch) => {
  if (password.length === 0) {
    return MSG02;
  } else if (password.length < 6 || password.length > 10) {
    return MSG05;
  } else if (currentPasswordIsNotMatch === true) {
    return MSG06;
  }
};
