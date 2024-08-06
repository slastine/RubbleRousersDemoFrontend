import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-parent-display',
  templateUrl: './parent-display.component.html',
  styleUrls: ['./parent-display.component.css']
})
export class ParentDisplayComponent implements OnInit {

  constructor(private catService: CatService) {

  }
    ngOnInit(): void {
      this.parent1Data["RufousingSlider"] = "0";
      this.parent2Data["RufousingSlider"] = "0";
    }
  parent1Data: { [key: string]: string } = {};
  parent2Data: { [key: string]: string } = {};

  // URLs or paths for the images
  parent1ImageUrl: string[] = [];
  parent2ImageUrl: string[] = [];

  //Opacities
  parent1SilverSliderValue: number = 0;

  parent2SilverSliderValue: number = 0;

  parent1GoldenSliderValue: number = 0;

  parent2GoldenSliderValue: number = 0

  parent1AmberSliderValue: number = 0;

  parent2AmberSliderValue: number = 0;

  parent1RSliderValue: number = 0;

  parent2RSliderValue: number = 0;

  kittenUrls: string[] = []

  get goldenSaturation1(): number {
    if (this.parent1SilverSliderValue > 0) {
      return this.parent1GoldenSliderValue;
    }
    else {
      return 100;
    }
  }

  get goldenSaturation2(): number {
    if (this.parent2SilverSliderValue > 0) {
      return this.parent2GoldenSliderValue;
    }
    else {
      return 100;
    }
  }
  get saturateValue1(): number {
    return 100 - this.parent1GoldenSliderValue;
  }

  get brightnessValue1(): number {
    if (this.parent1Data["Tabby"] != "Tabby" || this.parent1Data["Golden"] != "Golden") {
      return 100;
    }
    return Math.min(110, 90 + this.parent1GoldenSliderValue);
  }

  get contrastValue1(): number {
    return Math.min(100, 80 + (this.parent1GoldenSliderValue / 5));
  }

  get saturateValue2(): number {
    return 100 - this.parent2GoldenSliderValue;
  }

  get brightnessValue2(): number {
    if (this.parent2Data["Tabby"] != "Tabby" || this.parent2Data["Golden"] != "Golden") {
      return 100;
    }
    return Math.min(110, 90 + this.parent2GoldenSliderValue);
  }

  get contrastValue2(): number {
    return Math.min(120, 80 + (this.parent2GoldenSliderValue / 5));
  }


  get tickedOpacity1(): number {
    if (this.parent1Data["Bases"] == "White") return 0;
    return (this.parent1SilverSliderValue / 100);
  }

  get brokenOpacity1(): number {
    if (this.parent1Data["Bases"] == "White") return 0;
    if (this.parent1Data["Tabby"] != "Tabby" && this.parent1Data["Bases"] != "Red" && this.parent1Data["Bases"] != "Apricot" && this.parent1Data["Bases"] != "Cream") {

      return 0;
    }
    if (this.parent1GoldenSliderValue <= 90 && this.parent1GoldenSliderValue > 0) {
      return 1 - (this.parent1GoldenSliderValue / 90);
    } else {
      if (this.parent1Data["Tabby"] == "Tabby") {
        return Math.min(1 - (this.parent1GoldenSliderValue / 90), .9);
      }
      else return 0;
    }
  }

  get tickedOpacity2(): number {
    if (this.parent2Data["Bases"] == "White") return 0;
    return (this.parent2SilverSliderValue / 50);
  }

  get brokenOpacity2(): number {
    if (this.parent2Data["Bases"] == "White") return 0;
    if (this.parent2Data["Tabby"] != "Tabby" && this.parent2Data["Bases"] != "Red" && this.parent2Data["Bases"] != "Apricot" && this.parent2Data["Bases"] != "Cream") {

      return 0;
    }
    if (this.parent2GoldenSliderValue <= 90 && this.parent2GoldenSliderValue > 0) {
      return 2 - (this.parent2GoldenSliderValue / 90);
    } else {
      if (this.parent2Data["Tabby"] == "Tabby") {
        return Math.min(2 - (this.parent2GoldenSliderValue / 90), .9);
      }
      else return 0;
    }
  }
  get whiteUnderbelly1(): number {
    return Math.min(80, this.parent1GoldenSliderValue) / 100;
  }

  get whiteUnderbelly2(): number {
    return Math.min(80, this.parent2GoldenSliderValue) / 100;
  }

  get contrast1(): number {
    if (this.parent1Data["Tabby"] == "Tabby") {
      return 1;
    }
    else {
      return .5;
    }
  }

  get contrast2(): number {
    if (this.parent2Data["Tabby"] == "Tabby") {
      return 1;
    }
    else {
      return .5;
    }
  }

  @Output() parentsSelected = new EventEmitter<{ parent1: any, parent2: any }>();

  onDropdownChange(event: any, parentId: string): void {
    if (parentId === 'parent1') {
      this.parent1Data[event.name] = event.value;
      if (event.name == "Silver" && event.value == "No Silver") {
        this.parent1SilverSliderValue = 0;
        this.parent1Data["SilverSlider"] = "0";
      }
      if ((event.name == "Golden" && event.value == "No Golden") || (event.name == "Tabby" && event.value == "No Tabby")) {
        this.parent1GoldenSliderValue = 0;
        this.parent1Data["GoldenSlider"] = "0";
      }
      if (event.name == "Extension" && event.value == "Normal") {
        this.parent1AmberSliderValue = 0;
        this.parent1Data["AmberSlider"] = "0";
      }
      if (event.submit) {
        console.log(this.parent1Data)
        this.catService.getCat(this.parent1Data).subscribe(response => {
          this.parent1ImageUrl = response;
          if (this.parent1ImageUrl[0].includes("White")) {
            this.parent1Data["Bases"] = "White";
            this.parent1ImageUrl[6] == "https://catbreedersim.8vsebhnlikoo8.us-east-1.cs.amazonlightsail.com/Markings/Bases/White.png"
          }
          console.log(this.parent1ImageUrl);
        });
      }
    } else if (parentId === 'parent2') {
      this.parent2Data[event.name] = event.value;// Adjust according to your server's expectations
      if (event.name == "Silver" && event.value == "No Silver") {
        this.parent2SilverSliderValue = 0;
        this.parent2Data["SilverSlider"] = "0";
      }
      if ((event.name == "Golden" && event.value == "No Golden") || (event.name == "Tabby" && event.value == "No Tabby")) {
        this.parent2GoldenSliderValue = 0;
        this.parent2Data["GoldenSlider"] = "0";
      }
      if (event.name == "Extension" && event.value == "Normal") {
        this.parent2AmberSliderValue = 0;
        this.parent2Data["AmberSlider"] = "0";
      }
      if (event.submit) {
        this.catService.getCat(this.parent2Data).subscribe(response => {
          
          this.parent2ImageUrl = response;
          if (this.parent2ImageUrl[0].includes("White")) {
            this.parent2Data["Bases"] = "White";
            this.parent2ImageUrl[6] == "https://catbreedersim.8vsebhnlikoo8.us-east-1.cs.amazonlightsail.com/Markings/Bases/White.png"
          }
          console.log(this.parent2ImageUrl);
        });
      }

    }

   
    
  }

  onSilverSliderChange(event: any, parentId: string): void {
    if (parentId === 'parent1') {
      this.parent1SilverSliderValue = event;
      this.parent1Data["SilverSlider"] = event;
    } else if (parentId === 'parent2') {
     
        this.parent2SilverSliderValue = event;
      this.parent2Data["SilverSlider"] = event;

    }
  }


  onAmberSliderChange(event: any, parentId: string): void {
    if (parentId === 'parent1') {
      this.parent1AmberSliderValue = event;
      this.parent1Data["AmberSlider"] = event;
    } else if (parentId === 'parent2') {

      this.parent2AmberSliderValue = event;
      this.parent2Data["AmberSlider"] = event;

    }
  }

  onGoldenSliderChange(event: any, parentId: string): void {
    if (parentId === 'parent1') {
      this.parent1GoldenSliderValue = event;
      this.parent1Data["GoldenSlider"] = event;
    } else if (parentId === 'parent2') {

      this.parent2GoldenSliderValue = event;
      this.parent2Data["GoldenSlider"] = event;

    }
  }

  onRSliderChange(event: any, parentId: string): void {
    if (parentId === 'parent1') {
      this.parent1RSliderValue = event;
      this.parent1Data["RufousingSlider"] = event;
    } else if (parentId === 'parent2') {

      this.parent2RSliderValue = event;
      this.parent2Data["RufousingSlider"] = event;

    }
  }



  onSubmit() {
    this.parentsSelected.emit({ parent1: this.parent1Data, parent2: this.parent2Data })
  }
}

interface DropdownSelections {
  [key: string]: string; // Key is a string, value is also a string
}
