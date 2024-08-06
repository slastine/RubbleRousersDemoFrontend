import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-kitten-grid',
  templateUrl: './kitten-grid.component.html',
  styleUrls: ['./kitten-grid.component.css']
})
export class KittenGridComponent {
  @Input() kittens: (string)[][] = [];
  @Input() kittenSilvers: number[] = []
  @Input() kittenGolds: number[] = []
  @Input() kittenGenders: string[] = []
  @Input() kittenTabbies: string[] = []
  @Input() kittenAmbers: number[] = []
  @Input() kittenRs: number[] = []
  getFileName(filePath: string): string {
  const fileName = filePath.split('/').pop() || '';
  return fileName.split('.').slice(0, -1).join('.') || fileName;
  }

  brokenOpacity(i: number): number {
    if (this.kittenGolds[i] == 0) {
      if (this.kittenTabbies[i]) {
        return 1;
      }
      else return 0;
    }
    else {
      return 1 - (this.kittenGolds[i] / 100)
    }
  }

  whiteUnderbelly(i: number): number {
    return Math.min(80, this.kittenGolds[i]) / 100;
  }

  // your-component.ts
  getMaskStyle(maskUrl: string): string {
    console.log(maskUrl)
    return maskUrl ? `url(${maskUrl})` : '';
  }
  // your-component.ts
  getStyle(maskUrl: string, opacity: number): string {
    return `
    mask-image: url(${maskUrl});
    -webkit-mask-image: url(${maskUrl});
    mask-size: cover;
    opacity: ${opacity};
  `;
  
}
}
