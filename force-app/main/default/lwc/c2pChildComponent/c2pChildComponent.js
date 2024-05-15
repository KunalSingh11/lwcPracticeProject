import { LightningElement, track } from 'lwc';

export default class C2pChildComponent extends LightningElement {
    inputString = '';

    handleInputChange(event) {
        this.inputString = event.target.value;
        const stringChangeEvent = new CustomEvent('stringchange', {
            detail: this.inputString
        });
        this.dispatchEvent(stringChangeEvent);
    }
}