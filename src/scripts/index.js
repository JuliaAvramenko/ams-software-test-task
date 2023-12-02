import '../vendor/normalize.css'
import '../pages/index.css'; // импорт главного файла стилей

import './include'
import './article'
import Picture from './picture';
import Popup from './popup'

import { VIDEO_URL } from './constants';


Popup.start(VIDEO_URL)
Picture.init()
