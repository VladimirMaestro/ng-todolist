ToDoList
[+] Asynchronous programming
[+] Promise
[+] DI
[+] Forms
[+] RxJS
[+] Architecture
[ ] Store (RxState)
[ ] UI Frameworks (CSS / Angular Components)

-------------------------
Forms:
?????


-------------------------
CSS:
Menu

-------------------------
Modals:

Requirements:
[ ] The content shouldn't be aware that it is being used in the dialog;
[ ] Not every dialog is required to have header and footer. They have to be optional; 
[ ] Repetitive sections should be generic and extracted to a separate component, so they can be modified in single place; 
[ ] It is important to consider that we may have more the two button in the footer or not only buttons.
    We need distinguish the reason why modal was closed or which button was clicked;
[ ] It should be possible to pass an initial state for every dialog from the code where we open the dialog;
[ ] Everything should be type safe;
[ ] Dialogs implementation details should be encapsulated in a separate dialog module. The ngx-bootstrap modals is not only possible implementation or framework;


Task modal dialog statements:
[ ] The task form will be used not only for creating a new task, but also for editing existing tasks;
[ ] The task form component will be responsible only for the form itself. The submit and cancel buttons doesn't necessary belongs to the form.
