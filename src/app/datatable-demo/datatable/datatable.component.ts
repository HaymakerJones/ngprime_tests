import { Component, OnInit, Inject, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../person.model';
import { DatatableService } from '../datatable.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  personList: Person[] = [];
  cols: any[];
  displayDialog: boolean;
  person: Person;
  selectedPerson: Person;
  newPerson: boolean;

  personForm: FormGroup;
  formErrors = {
    first: '',
    last: '',
    age: '',
  };
  validationMessages = {
    first: {
      required: 'First name is required'
    },
    last: {
      required: 'Last name is required'
    },
    age: {
      required: 'Age is required'
    },
  };


  constructor(
    @Inject(DatatableService) private ds,
    @Inject(FormBuilder) private fb
  ) { }

  ngOnInit() {
    this.ds.persons.subscribe(
      data => this.personList = data
    );

    this.cols = [
      { field: 'first', header: 'First Name' },
      { field: 'last', header: 'Last Name' },
      { field: 'age', header: 'Age' },
    ];
    this.createForm();
  }

  createForm() {
    this.personForm = this.fb.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      age: [1, Validators.required]
    });

    this.personForm.valueChanges.subscribe(
      data => this.validateForm()
    );
  }

  validateForm() {
    for (let field in this.formErrors) {
      this.formErrors[field] = '';

      let input = this.personForm.get(field);

      if (input.invalid && input.dirty) {
        for (let error in input.errors) {
          this.formErrors[field] = this.validationMessages[field][error];
        }
      }
    }
  }

  onRowSelect(event: any) {
    this.person = new Person(event.data);
    //this.person = Object.assign({}, event.data);
    this.displayDialog = true;
  }

  addPerson(f: any) {
    this.ds.addPerson(new Person({
      first: f.first,
      last: f.last,
      age: f.age
    }));

    this.personForm.reset();
  }

  save(): void {
    this.ds.changePerson(this.person);
    this.person = null;
    this.displayDialog = false;
  }

  delete(): void {
    this.ds.removePerson(this.person);
    this.person = null;
    this.displayDialog = false;
  }

}
