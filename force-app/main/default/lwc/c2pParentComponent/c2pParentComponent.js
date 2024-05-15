import { LightningElement, track } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    @track childString = '';

    handleStringChange(event) {
        this.childString = event.detail;
    }
}