import { Component, OnInit } from '@angular/core';

import { SetupProvider } from '../../providers';

@Component({
    selector: 'app-dictionary',
    templateUrl: './dictionary.component.html',
    styleUrls: ['./dictionary.component.css']
})

export class DictionaryComponent implements OnInit {
    public vm: any = { vietnamese: '', zng: '' };

    constructor(private pro: SetupProvider) { }

    ngOnInit() { }

    public translate() {
        var x = {
            keyword: this.vm.vietnamese
        };

        this.pro.toZng(x).subscribe((rsp: any) => {
            if (rsp.success) {
                this.vm.zng = rsp.data;
            }
            else {
                this.vm.zng = rsp.message;
            }
        }, err => console.log(err));
    }
}