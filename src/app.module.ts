import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: process.env.DB_CONNECTION as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Account, Transaction, Report],
      autoLoadModels: true,
      synchronize: true,
      sync:{
        alter: true,
        force: true,
      },
    })
    //TransactionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
