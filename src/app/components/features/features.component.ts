import { Component, Input } from '@angular/core';
import { FeatureSectionData } from 'src/app/models/features-section-data.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  @Input() public featureData!: FeatureSectionData;
}
