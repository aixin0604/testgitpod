import { LightningElement, api } from 'lwc';

export default class ViewSource extends LightningElement {
    baseURL =
        'https://github.com//workspace/testgitpod/LWC/force-app/main/default/';

    @api source;

    get sourceURL() {
        return this.baseURL + this.source;
    }
}
