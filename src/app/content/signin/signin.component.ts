import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'course-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, AfterViewInit {


    @ViewChild('f')
    public form!: FormGroup;


    public authForm!: FormGroup;

    // public name = ;

    constructor(
        private _fb: FormBuilder
    ) { }

    ngOnInit() {

        this.authForm = this._fb.group({
            name: [
                'Vlad', [
                    Validators.required,
                    Validators.minLength(4),
                    this._nameValidator
                ]
            ],
            emails: this._fb.array([this._fb.control('')]),
            male: [true],
            passwordGroup: this._fb.group(
                {
                    password: ['1234', [Validators.required, Validators.minLength(4)]],
                    cpassword: ['1234', [Validators.required, Validators.minLength(4)]],
                }, {
                    asyncValidator: this._asyncEqualValidator
                }),
        });

        this.authForm.valueChanges.subscribe((value) => {
            console.log(value);
        });
    }

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.authForm.patchValue({
                name: 'Igor',
                password: '123'
            });
        }, 5000);

    }

    public addEmail(): void {
        (this.authForm.get('emails') as FormArray).push(this._fb.control(''));
    }

    public removeEmail(index: number): void {
        (this.authForm.get('emails') as FormArray).removeAt(index);
    }

    private _nameValidator({ value }: FormControl): ValidationErrors | null {
        const valid: boolean = /^[a-zA-Z]*$/.test(value);
        return valid
            ? null
            : { nospecial: true };
    }

    private _asyncEqualValidator({ value }: FormGroup): Observable<ValidationErrors | null>  {
        const [password, cpassword] = Object.keys(value);
        const valid = value[password] === value[cpassword]
            ? null
            : {
                notequal: true
            };
        return of<ValidationErrors | null>(valid)
            .pipe(delay(5000));
    }

}
