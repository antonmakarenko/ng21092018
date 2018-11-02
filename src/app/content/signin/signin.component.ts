import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
            name: ['Vlad', [Validators.required, Validators.minLength(4)]],
            passwordGroup: this._fb.group({
                password: ['1234', [Validators.required, Validators.minLength(4)]],
                cpassword: ['1234', [Validators.required, Validators.minLength(4)]],
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

}
