import { Component } from '@angular/core';
import { CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private catService: CatService) {

  }

  parentCats = { cat1: 'path/to/cat1.jpg', cat2: 'path/to/cat2.jpg' }; // Initialize with default or fetched values
  kittens: (string )[][] = [
    
  ]; // Initialize with default or fetched values
  kittenSilvers: number[] = []
  kittenGolds: number[] = []
  kittenGenders: string[] = []
  kittenTabbies: string[] = []
  kittenAmbers: number[] = []
  kittenRs: number[] = []

  // Additional logic for the AppComponent

  onParentsSelected(parents: { parent1: any, parent2: any }) {
    this.catService.breedCats([parents.parent1, parents.parent2]).subscribe((x) => {
      this.kittenSilvers = []
      this.kittenGolds = []
      this.kittenGenders = []
      this.kittenTabbies = []
      this.kittenRs = []
      for (let i = 0; i < 4; i++) {
        this.kittenSilvers.push(parseFloat(x.baseCoats[i][4]));
        this.kittenGolds.push(parseFloat(x.baseCoats[i][9]));
        this.kittenAmbers.push(parseFloat(x.baseCoats[i][11]));
        this.kittenRs.push(parseFloat(x.baseCoats[i][14]));
        if (x.genotypes[i].includes("tom")) {
          this.kittenGenders.push("Tom")
        }
        else {
          this.kittenGenders.push("Molly")
        }
        if (x.genotypes[i].includes("A")) {
          this.kittenTabbies.push("Aa");
        }
        else if (x.genotypes[i].includes("a") && (x.genotypes[i].includes("tortise") || x.genotypes[i].includes("calico"))) {
          this.kittenTabbies.push("aaT");
        }
        else {
          this.kittenTabbies.push("aa");

        }

      }
      this.kittens = x.baseCoats;

      console.log(x)
      console.log(this.kittenTabbies)
    });
  }
}
