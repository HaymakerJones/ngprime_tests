import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { Observable, Subject } from 'rxjs/Rx';

interface PersonOperation extends Function {
    (persons: Person[]): Person[];
}

const initialPersons: Person[] = [];

@Injectable()
export class DatatableService {

    persons: Observable<Person[]>;
    updates: Subject<any> = new Subject<any>();

    //action streams
    create: Subject<Person> = new Subject<Person>();
    remove: Subject<Person> = new Subject<Person>();
    change: Subject<Person> = new Subject<Person>();

    constructor() {
        this.persons =
            this.updates
                .scan((persons: Person[], operation: PersonOperation) => operation(persons), initialPersons)
                .publishReplay(1)
                .refCount();

        this.create.map(
            (person: Person): PersonOperation => {
                return (persons: Person[]) => {
                    return persons.concat(person);
                }
            }
        ).subscribe(this.updates);

        this.remove.map(
            (person: Person): PersonOperation => {
                return (persons: Person[]) => {
                    return persons.filter(
                        p => person.first !== p.first
                    );
                }
            }
        ).subscribe(this.updates);

        this.change.map(
            (person: Person) => {
                return (persons: Person[]) => {
                    persons.forEach(
                        data => {
                            if (data.id === person.id) {
                                data = Object.assign(data, person);
                            }
                        }
                    );
                    return persons;
                }
            }
        ).subscribe(this.updates);
    }

    addPerson(person: Person): void {
        this.create.next(person);
    }

    removePerson(person: Person): void {
        this.remove.next(person);
    }

    changePerson(person: Person): void {
        this.change.next(person);
    }
}

export const DATATABLE_PROVIDER: Array<any> = [
    { provide: DatatableService, useClass: DatatableService }
];
