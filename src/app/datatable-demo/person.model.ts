import { UUID } from 'angular2-uuid';

export class Person {
    id: string;
    first: string;
    last: string;
    age: number;

    constructor(obj?: any) {
        this.id = obj && obj.id || UUID.UUID();
        this.first = obj && obj.first || null;
        this.last = obj && obj.last || null;
        this.age = obj && obj.age || null;
    }
}