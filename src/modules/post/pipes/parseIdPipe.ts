import { BadRequestException, PipeTransform } from '@nestjs/common';

// @Injectable() for use in other modules
export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const _value = parseInt(value, 10);
    if (isNaN(_value)) {
      throw new BadRequestException('Id must be a number');
    } else if (_value <= 0) {
      throw new BadRequestException('Id must be a positive number');
    }

    return _value;
  }
}
