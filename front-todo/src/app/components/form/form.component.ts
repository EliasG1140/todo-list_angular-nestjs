import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/shared/service/todo.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  submitted = false
  taskForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly todoService: TodoService,
    private readonly iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    const svgPlus = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/plus.svg');
    this.iconRegistry.addSvgIcon('plus', svgPlus)
  }

  ngOnInit(): void {
    this.taskForm = this.initForm()
  }

  initForm(): FormGroup {
    return this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required]]
    })
  }

  onSubmit(){
    this.submitted = true
    const values = this.taskForm.value

    if(this.taskForm.valid){
      this.todoService.addTask(values)
      this.taskForm.reset()
      this.submitted = false
    }     
  }

}
