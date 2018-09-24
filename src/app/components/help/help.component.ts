import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatStepper } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      option: ['', Validators.required],
      aliasTemp: ''
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

  showDialog() {
    this.dialog.open(AppDialog, {
      width: '250px'
    });
  }

  goBack(stepper: MatStepper) {
    // if ( this.setAlias() ) {
    //   stepper.previous();
    // } else {
    //   this.dialog.open(AppDialog, {
    //     width: '250px'
    //   });
    // }

    stepper.previous();
  }

  setAlias() {
    const aliasTemp = this.aliasTemp.trim();
    console.log(aliasTemp);

    if ( aliasTemp.length > 0 ) {
      const alias = aliasTemp.split(' ');
      this.alias = alias[0];
      return true;
    }

    return false;
  }

  goNext(stepper: MatStepper) {
    stepper.next();
  }

}


@Component({
  template: `
    <h4>Ingrese alias</h4>
    <p>No se ha ingresado ningún alias</p>
    <div class='d-flex'>
        <button class='full-width' mat-raised-button (click)='onYesClick()'>Ok</button>
    </div>
  `,
  styleUrls: ['./help.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class AppDialog {

  constructor(
    public dialogRef: MatDialogRef<AppDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onYesClick(): void {
    this.dialogRef.close();
  }

}
