import { Component, inject, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-dialog-container',
  templateUrl: 'dialog-container.component.html'
})
export class DialogContainerComponent implements OnInit {
  public bsModalRef: BsModalRef = inject(BsModalRef);

  ngOnInit() { }
}
