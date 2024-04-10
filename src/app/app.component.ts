import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  urlCover: any | undefined = '';
  urlProfile: any | undefined = '';
  imagePath: any;
  message: string | undefined;
  neweduLabel: string = '';
  neweduContent: string = '';
  showeduAdd: boolean = false;
  showedubtnAdd: boolean = true;
  eduItems: { label: string; content: string }[] = [
    { content: 'School 1', label: 'Year 1' },
    { content: 'School 2', label: 'Year 2' },
    { content: 'School 3', label: 'Year 3' },
  ];
  newexpContent: string = '';
  showexpAdd: boolean = false;
  showexpbtnAdd: boolean = true;
  expItems: { content: string }[] = [
    { content: 'Experience 1' },
    { content: 'Experience 2' },
    { content: 'Experience 3' },
  ];
  newskillContent: string = '';
  newskillLevelContent: string = '';
  showskillAdd: boolean = false;
  showskillbtnAdd: boolean = true;
  skillItems: { content: string; skillpoint: any }[] = [
    { content: 'Skilltest 1', skillpoint: 5 },
    { content: 'Skilltest 2', skillpoint: 8 },
  ];
  newintLabel: string = '';
  newintContent: string = '';
  showintAdd: boolean = false;
  showintbtnAdd: boolean = true;
  intItems: { content: string }[] = [
    { content: 'INTERESTS 1' },
    { content: 'INTERESTS 2' },
    { content: 'INTERESTS 3' },
  ];
  newguildLabel: string = '';
  newguildContent: string = '';
  showguildAdd: boolean = false;
  showguildbtnAdd: boolean = true;
  guildItems: { content: string }[] = [
    { content: 'Guild 1' },
    { content: 'Guild 2' },
    { content: 'Guild 3' },
  ];
  onFileChanged(event: any, type: string) {
    console.log(event);
    const files = event.target.files;
    if (files.length === 0) return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      if (type === 'Pro') {
        this.urlProfile = reader.result;
      } else if (type === 'Cov') {
        this.urlCover = reader.result;
      }
    };
  }

  AddItem(chkCard: string): void {
    if (chkCard === 'exp') {
      this.showexpAdd = true;
      this.showexpbtnAdd = false;
    } else if (chkCard === 'edu') {
      this.showeduAdd = true;
      this.showedubtnAdd = false;
    } else if (chkCard === 'skill') {
      this.showskillAdd = true;
      this.showskillbtnAdd = false;
    } else if (chkCard === 'int') {
      this.showintAdd = true;
      this.showintbtnAdd = false;
    } else if (chkCard === 'guild') {
      this.showguildAdd = true;
      this.showguildbtnAdd = false;
    }
  }

  saveItem(): void {
    if (this.neweduLabel && this.neweduContent) {
      this.eduItems.unshift({
        label: this.neweduLabel,
        content: this.neweduContent,
      });
      this.showeduAdd = false;
      this.showedubtnAdd = true;
      this.neweduLabel = '';
      this.neweduContent = '';
    } else if (this.newexpContent) {
      this.expItems.push({
        content: this.newexpContent,
      });
      this.newexpContent = '';
      this.showexpAdd = false;
      this.showexpbtnAdd = true;
    } else if (this.newskillContent && this.newskillLevelContent) {
      this.skillItems.push({
        content: this.newskillContent,
        skillpoint: Number(this.newskillLevelContent),
      });
      this.showskillAdd = false;
      this.showskillbtnAdd = true;
      this.newskillContent = '';
      this.newskillLevelContent = '';
    } else if (this.newintContent) {
      this.intItems.push({
        content: this.newintContent,
      });
      this.showintAdd = false;
      this.showintbtnAdd = true;
      this.newintContent = '';
    } else if (this.newguildContent) {
      this.guildItems.push({
        content: this.newguildContent,
      });
      this.showguildAdd = false;
      this.showguildbtnAdd = true;
      this.newguildContent = '';
    }
  }

  constructor() {
    this.addItem();
  }

  addItem(): void {
    this.expItems.push({ content: '' });
  }

  clearContent(item: { content: string }): void {
    item.content = '';
  }
}
