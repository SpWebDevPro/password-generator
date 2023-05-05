import { Settings } from '../types';
import * as Generator from 'generate-password-browser';

export class PasswordGeneratorService {
  generate(settings: Settings) {
    console.log(Generator.generate(settings));
    return Generator.generate(settings);
  }
}
