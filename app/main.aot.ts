import { platformBrowser }    from '@angular/platform-browser';
import {AppModuleNgFactory} from './ngfactory/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

console.log('Running in PROD mode');
enableProdMode();

console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);