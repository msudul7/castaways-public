import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import maplibregl from 'maplibre-gl';
import { Map } from 'maplibre-gl';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-clubhouse-location',
  imports: [],
  templateUrl: './clubhouse-location.html',
  styleUrl: './clubhouse-location.scss'
})
export class ClubhouseLocation implements AfterViewInit {
  @ViewChild('mapElement', { static: true }) mapElement!: ElementRef<HTMLElement>;
  @ViewChild('mapIcon', { static: true }) mapIcon!: ElementRef<HTMLElement>;
  public _containerSubject = new BehaviorSubject<boolean>(false);
  public _windowSubject = new BehaviorSubject(null);

  public map: Map | undefined;

  createMap() {
    if (typeof window !== 'undefined') {
      console.log('typeof window:', typeof window);
      this.map = new Map({
        container: this.mapElement.nativeElement,
        style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
        center: [-123.36374573927469, 48.43211324311844], // Clubhouse coordinates
        zoom: 14,
        maxBounds: [
          [-141.06, 46.30], // Southwest coordinates of BC (approximate)
          [-112.03, 62.00]  // Northeast coordinates of BC (approximate)
        ],
        attributionControl: false,
      });
      console.log('before load');
      this.map.on('load', () => {
        console.log('afterload');
        // Add a marker for the clubhouse location
        new maplibregl.Marker(
          {
            element: this.createIconElement(),
            anchor: 'bottom',
          }
        )
          .setLngLat([-123.36374573927469, 48.43211324311844])
          .setPopup(new maplibregl.Popup().setHTML('<h3>Castaways Clubhouse</h3><p>Our main clubhouse location.</p>'))
          .addTo(this.map);
        // Add navigation controls to the map
        this.map.addControl(new maplibregl.NavigationControl({
          visualizePitch: true,
        }));
        this.map.addControl(new maplibregl.GeolocateControl({}));
        this.map.addControl(new maplibregl.FullscreenControl({}));
      });
    }
  }

  createIconElement() {
    const iconElement = document.createElement('div');
    const iconImage = document.createElement('img');
    iconImage.src = '/assets/images/castaways_web_logo.png'; // Path to your icon image
    iconImage.alt = 'Castaways Clubhouse Icon';
    iconImage.style.width = '50px'; // Adjust size as needed
    iconImage.style.height = 'auto'; // Adjust size as needed
    iconElement.appendChild(iconImage);
    return iconElement;
  }

  ngAfterViewInit() {
    this.createMap();
  }

}
