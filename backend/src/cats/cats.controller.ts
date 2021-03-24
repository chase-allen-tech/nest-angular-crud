import {
    Controller, Get, Req, Post, Header, Redirect,
    Query, Param, Body, Put, Delete, Res, HttpStatus, HttpException, ParseIntPipe, SetMetadata
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { ListAllEntities } from 'src/cats/dto/list-all-entities.dto';
import { UpdateCatDto } from 'src/cats/dto/update-cat.dto';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    @SetMetadata('roles', ['admin'])
    // @Header('Cache-Control', 'none')
    create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
        res.status(HttpStatus.CREATED).send();
        // return 'This action adds a new cat';
    }

    @Get()
    async findAll(@Query() query: ListAllEntities, @Res() res: Response): Promise<Cat[]> {

        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message'
        }, HttpStatus.FORBIDDEN);
        // res.status(HttpStatus.OK);
        // return [];
        // res.status(HttpStatus.OK).json([]);
        // return this.catsService.findAll();
    }

    // @Get(':uuid')
    // async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    //     return this.catsService.findOne(uuid);
    // }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        return `This action returns a $${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

    // @Get('docs')
    // @Redirect('https://docs.nestjs.com', 302)
    // getDocs(@Query('version') version) {
    //     if (version && version === '5') {
    //         return { url: 'https://docs.nestjs.com/v5/'};
    //     }
    // }
}