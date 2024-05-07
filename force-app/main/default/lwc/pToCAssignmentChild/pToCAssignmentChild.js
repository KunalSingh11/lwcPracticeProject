import { LightningElement, api } from 'lwc';

export default class PToCAssignmentChild extends LightningElement {

    @api message;
    @api accountData = [];
}