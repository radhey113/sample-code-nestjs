import { NestFactory } from '@nestjs/core';
import { AppModule } from './init/init.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';
import { ErrorHandler } from 'src/services';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  SwaggerModule.setup('api', app, createDocument(app));
  app.useGlobalFilters(new ErrorHandler());
  app.listen(process.env.PORT || 4000).then(() => {
    console.log(`Server running on ${process.env.PORT || '4000'}`);
  });
}
bootstrap();
