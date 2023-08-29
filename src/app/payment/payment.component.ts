import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  tier : string;

  paymentForm = new FormGroup({
    serviceDate: new FormControl('', Validators.required),
    serviceTime: new FormControl('', Validators.required),
    serviceLevel: new FormControl('', Validators.required),
    cardNumber: new FormControl('', Validators.required),
    cardHolder: new FormControl('', Validators.required),
    expirationDate: new FormControl('', Validators.required),
    securityCode: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required)
  });
  constructor(router: Router) { 
    this.tier = router.url.split('/').pop()?.toString() || 'tier1';
  }
  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(this.paymentForm.value);
  }
  formatCardNumber(e: any) {
    const input = e.target.value;
    const cardNumber = input.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    this.paymentForm.patchValue({ cardNumber });
  }
  formatExpirationDate(e: any) {
    const input = e.target.value;
    const expirationDate = input.replace(/\s/g, '').replace(/(\d{2})/g, '$1/').trim();
    this.paymentForm.patchValue({ expirationDate });
  }
  formatSecurityCode(e: any) {
    const input = e.target.value;
    const securityCode = input.replace(/\s/g, '').replace(/(\d{3})/g, '$1 ').trim();
    this.paymentForm.patchValue({ securityCode });
  }
  formatCardHolder(e: any) {
    const input = e.target.value;
    const cardHolder = input.replace(/[^a-zA-Z\s]/g, '').trim();
    this.paymentForm.patchValue({ cardHolder });
  }
  getPrice(){
    switch(this.tier){
      case 'tier1':
        return 19.99;
      case 'tier2':
        return 29.99;
      case 'tier3':
        return 39.99;
      default:
        return 0.00;
    }
  }
}
