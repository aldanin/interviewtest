import * as angular from 'angular';
import { appModule } from './app.module';
import './site.css';
import { AppComponent } from './app.component';

const components = [
    AppComponent,
];

angular.bootstrap(document.querySelector('html'), [appModule.name]);
