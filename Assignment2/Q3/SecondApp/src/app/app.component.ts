import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Marvellous Infosystes
  </h1>  
</div>
<div>
  <label>Enter text</label><br/>
  <input type="text" id ='input1'>
</div>`,
  styles: ['#input1 {background-color:blue;}']
})
export class AppComponent {
  title = 'app';
}
