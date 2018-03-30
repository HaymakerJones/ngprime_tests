export class Person {
    first: string;
    last: string;
    age: number;

    constructor(obj?: any) {
        this.first = obj && obj.first || null;
        this.last = obj && obj.last || null;
        this.age = obj && obj.age || null;
    }
}