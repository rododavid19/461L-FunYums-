import {ValidatorService} from '../validator.service';
import {OnInit} from '@angular/core';

export class filterInputs implements OnInit {
  list: string[];
  exists: boolean;
  error: boolean;
  constructor(public validator: ValidatorService) {}
  ngOnInit(): void {
  }

  initList(): void {
    this.list = [];
    this.exists = true;
  }

  removeFromList(name: string): void {
    const indx = this.list.indexOf(name);
    this.list.splice(indx, 1);
    if (this.list.length === 0) {
      this.exists = false;
    }
  }

  addToList(name: string): void {
    const vald = this.validation(name);
    if(vald !== null && !this.error){
      if (!this.exists) {
        this.initList();
      }
      this.error = false;
      this.list.push(vald[0]);
    }
  }

  prepSearch(): string[] {
    if (this.exists) {
      if (this.list.length !== 0) {
        const params = [];
        for (const member of this.list) {
            params.push(this.validation(member)[1]);
        }
        return params;
      }
    }
    return null;
  }
  validation(name: string): string[] {
    return null;
  }
}

export class dietList extends filterInputs {
  validation(name: string): string[] {
    if (name == null) { return null; }
    if (this.validator.validateDiet(name) == null) {
      this.error = true;
      return null;
    } else {
      this.error = false;
    }
    return this.validator.validateDiet(name);
  }
}

export class allergyList extends filterInputs {
  validation(name: string): string[] {
    if (name == null) { return null; }
    if (this.validator.validateAllergy(name) == null) {
      this.error = true;
      return null;
    } else {
      this.error = false;
    }
    return this.validator.validateAllergy(name);
  }
}

export class ingList extends filterInputs {
  validation(name: string): string[] {
    if (name == null || name == '') return null;
    return [name, name];
  }
}
