import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'truncateWords'
})

export class TruncateWordsPipe implements PipeTransform {
  transform(value: string, wordCount: number = 12): string {
    const words = value.split(' ');
    if (words.length <= wordCount) {
      return value;
    } else {
      const truncatedWords = words.slice(0, wordCount);
      return truncatedWords.join(' ') + '...';
    }
  }
}