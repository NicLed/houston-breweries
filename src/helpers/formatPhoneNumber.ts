export const formatPhoneNumber = (phoneNumber: string) => {
  let formattedPhoneNumber = '';

    for (let i = 0; i < phoneNumber.length; i++) {
      if (i === 0) {
        formattedPhoneNumber += '(';
        formattedPhoneNumber += phoneNumber[i];
      } else if (i === 2) {
        formattedPhoneNumber += phoneNumber[i];
        formattedPhoneNumber += ')';
      } else if (i === 5) {
        formattedPhoneNumber += phoneNumber[i];
        formattedPhoneNumber += '-'
      } else {
        formattedPhoneNumber += phoneNumber[i];
      }
    }
  return formattedPhoneNumber;
}