import { LightningElement, wire } from 'lwc';
import forAccordionData from '@salesforce/apex/AccordionData.forAccordionData';

const columns = [
    { label: "Contact Name", fieldName: "Name" },
    { label: "Contact Phone", fieldName: "Phone" },
    { label: "Contact Email", fieldName: "Email" }
];


export default class AccordionComponent extends LightningElement {
    columnList = columns;
    allData;
    @wire(forAccordionData)
    wiredData({ error, data }) {
        if (data) {
            this.allData = data;
        } else if (error) {
            console.error('Error: ', error);
        }
    }
}