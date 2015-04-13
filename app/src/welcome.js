export class Welcome{
  heading = 'Welcome to the Archery Shot App!';
  firstName = 'Paul';
  lastName = 'McKee';

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
}
