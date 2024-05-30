import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';//Step 1 - import Navigationmixin from lightning/navigation
export default class NavigationService extends NavigationMixin(LightningElement) {//Step 2 - wrap lightningelement in navigationmixin

    //type = namedPage

    navigateToNamedPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        })
    }

    navigateToNamedPageChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        })
    }

    navigateToRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.cognizant.com/in/en'
            }
        })
    }

    navigateToTabPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'lwc_practice'
            }
        })
    }

}