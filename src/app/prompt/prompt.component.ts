import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {
  @Input() rowId: number;
  @Input() titlePrompt: string;

  constructor() { }

  loading: boolean = true;

  onOk() {
    console.log(this.rowId);
  }

  onCancel() {
    console.log(this.titlePrompt);
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      console.log(this.rowId);
      console.log(this.titlePrompt);
    }, 500);
  }
}
