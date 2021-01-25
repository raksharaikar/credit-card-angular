import { Month } from './month';
import { Year } from './year';

export class User {
    id!: string;
    CreditcardHolderName!: string;
    CreditcardNumber!: string;
    CVV!: string;
    Amount!: string;
    month!: Month;
    year!: Year;
    isDeleting: boolean = false;
}