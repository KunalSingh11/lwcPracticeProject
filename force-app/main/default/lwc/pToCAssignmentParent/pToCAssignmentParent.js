import { LightningElement, api, track, wire } from 'lwc';
import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';
export default class PToCAssignmentParent extends LightningElement {


    @track selectedAccountId;
    @track options = [];

    @wire(getRecentAccounts)
    wiredRecentAccounts({ error, data }) {
        if (data) {
            this.options = data.map(account => ({
                label: account.Name,
                value: account.Id
            }));
        } else if (error) {
            console.error('Error retrieving recent accounts', error);
        }
    }

    handleRadioChange(event) {
        this.selectedAccountId = event.detail.value;
    }

}