import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Public } from 'src/auth/auth.guard';
import { PostDto } from 'src/posts/posts.dto';
import { IPost } from 'src/posts/posts.interface';
import { PostsService } from 'src/posts/posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    async findAll(): Promise<IPost[]> {
        return this.postsService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<IPost> {
        return this.postsService.findOne(id);
    }
    @Post()
    async create(@Body() post: PostDto): Promise<IPost> {
        return this.postsService.create(post);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() post: PostDto): Promise<IPost> {
        return this.postsService.update(id, post);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<number> {
        return this.postsService.delete(id);
    }
}
