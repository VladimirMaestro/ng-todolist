import { Component, inject, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: 'modal-dialog.component.html'
})
export class ModalDialogComponent implements OnInit {
  public bsModalRef: BsModalRef = inject(BsModalRef);

  ngOnInit() { }
}
