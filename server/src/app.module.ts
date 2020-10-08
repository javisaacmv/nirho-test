import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ProductModule, 
    MongooseModule.forRoot("mongodb+srv://testuser:4APWK5m^CuT8@guiltyspark.qsbai.mongodb.net/RoomieTest?retryWrit es=true&w=majority"),
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
