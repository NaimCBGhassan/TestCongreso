export class DTOPreferenceReq {
  firstName: string;
  lastName: string;
  DNI: string;
  phoneNumber: string;
  mail: string;

  constructor(
    firstName: string,
    lastName: string,
    DNI: string,
    phoneNumber: string,
    mail: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.DNI = DNI;
    this.phoneNumber = phoneNumber;
    this.mail = mail;
  }
}
