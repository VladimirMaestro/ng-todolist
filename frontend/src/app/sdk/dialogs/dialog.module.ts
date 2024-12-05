import { NgModule, Type } from '@angular/core';
import { DialogContainerComponent } from "./components/dialog-container/dialog-container.component";
import { ModalModule } from "ngx-bootstrap/modal";

const SHARED_COMPONENTS: Type<unknown>[] = [
  DialogContainerComponent
];

@NgModule({
  imports: [ModalModule.forRoot()],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS]
})
export class AppDialogModule {}
