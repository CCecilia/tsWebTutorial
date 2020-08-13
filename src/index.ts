import { User } from "./models/User";

const user = new User({name: 'chris', age: 30});

user.set({name: 'christian'});

console.log(user.get('name'));
console.log(user.get('age'));