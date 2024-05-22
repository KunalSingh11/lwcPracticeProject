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

}