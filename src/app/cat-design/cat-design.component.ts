import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-design',
  templateUrl: './cat-design.component.html',
  styleUrls: ['./cat-design.component.css']
})
export class CatDesignComponent implements OnInit {
  dropdownOptions: any = {};
  selectedOptions: any = {};
  @Output() dropdownChange = new EventEmitter<any>();
  silverSliderValue: number = 0;
  goldenSliderValue: number = 0;
  amberSliderValue: number = 0;
  rSliderValue: number = 0;

  @Output() silverSliderChange = new EventEmitter<number>();

  @Output() goldenSliderChange = new EventEmitter<number>();

  @Output() amberSliderChange = new EventEmitter<number>();

  @Output() rSliderChange = new EventEmitter<number>();
  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getDropdownOptions().subscribe(data => {
      this.dropdownOptions = data.dropdowns;
      let count = 0; // Initialize count
      for (let i = 0; i < data.dropdowns.length; i++) {
          this.selectedOptions[data.dropdowns[i].name] = data.dropdowns[i].values[0];
          this.onDropdownChange(data.dropdowns[i].name, data.dropdowns[i].values[0], i == (data.dropdowns.length - 1));
          count++;
        
        
      }

      
    });
  }

  onSilverSliderChange(event: any): void {
    this.silverSliderValue = event.target.value;
    // Trigger any other function or logic here
    this.silverSliderChange.emit(this.silverSliderValue);
  }

  onGoldenSliderChange(event: any): void {
    this.goldenSliderValue = event.target.value;
    // Trigger any other function or logic here
    this.goldenSliderChange.emit(this.goldenSliderValue);
  }


  onAmberSliderChange(event: any): void {
    this.amberSliderValue = event.target.value;
    // Trigger any other function or logic here
    this.amberSliderChange.emit(this.amberSliderValue);
  }

  onRSliderChange(event: any): void {
    this.rSliderValue = event.target.value;
    // Trigger any other function or logic here
    this.rSliderChange.emit(this.rSliderValue);
  }


  setDropdownValue(optionName: string, value: any) {
    if (this.selectedOptions.hasOwnProperty(optionName)) {
      this.selectedOptions[optionName] = value;
    }
  }


  onDropdownChange(name: string, value: string, submit: boolean = true): void {
    this.selectedOptions[name] = value;
    if (name == "White" && value == "White" && this.selectedOptions["Bases"] !== "White" && submit) {
      this.setDropdownValue("Bases", "White");
    }
    if ((name == "Golden" && value == "No Golden") || (name == "Tabby" && value == "No Tabby")) {
      this.goldenSliderValue = 0;
    }
      if (name == "Silver" && value == "No Silver")
      {
        this.silverSliderValue = 0;
      }
    if (name == "Extension" && value == "Normal") {
      this.amberSliderValue = 0;
    }
      this.dropdownChange.emit({ name, value, submit }); // Emit event with data
    
  }

  onSubmit() {
    // Logic to handle form submission and breed cats
  }
}
