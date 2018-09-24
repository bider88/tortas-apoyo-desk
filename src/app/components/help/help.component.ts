import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  showInput: boolean = false;
  showButton: boolean = false;
  option: number = 0;
  alias: string = 'Anónimo';
  quantity: number = 1;
  aliasTemp = '';

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      option: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      quantity: ['', Validators.required]
    });
  }

  goTohome() {
    this.router.navigateByUrl('/');
  }

  onChangeRadio(val: number) {
    val = Number(val);
    if (val === 2) {
      this.showInput = true;
      this.showButton = false;
    } else if ( val === 3 ) {
      this.showInput = false;
      this.showButton = true;
    } else {
      this.showInput = false;
      this.showButton = false;
    }
  }

}
