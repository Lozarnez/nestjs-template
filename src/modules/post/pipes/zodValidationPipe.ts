import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  // transform(value: any) {
  //   try {
  //     return this.schema.parse(value);
  //   } catch (error) {
  //     console.log('Error', error);
  //     throw new BadRequestException('Validation failed!');
  //   }
  // }

  transform(value: any) {
    const parsedValue = this.schema.safeParse(value);
    if (parsedValue.success) return parsedValue.data;
    throw new BadRequestException(parsedValue.error.format());
  }
}
