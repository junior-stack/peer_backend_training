import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ColorsDto } from 'src/dto/game.dto';
import { GameService } from 'src/services/game/game.service';

@Controller('gameloby')
export class GameLobyController {
  constructor(private readonly gameService: GameService) {}

  @Get('/allColors')
  async getAllColors(): Promise<ColorsDto[]> {
    const data = await this.gameService.getAllColors();
    return data;
  }

  @Post('/updateColor')
  updateColor(@Body() body: ColorsDto) {
    console.log('body: ', body);
    return 'updateColor';
  }
}
