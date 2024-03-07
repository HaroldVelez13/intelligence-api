import { BadRequestException, Injectable } from '@nestjs/common';
import { PostDto } from 'src/posts/posts.dto';
import { IPost } from 'src/posts/posts.interface';

@Injectable()
export class PostsService {

    private url = 'https://jsonplaceholder.typicode.com/posts/'
    async findAll(): Promise<IPost[]> {
        let posts = {} as IPost[]
        const response = await fetch(this.url);
        if (response.status !== 200) {
            throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
        }
        posts = await response.json();
        return posts;
    }

    async findOne(id: number): Promise<IPost> {
        let post = {} as IPost
        const url = this.url + id.toString()
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
        }
        post = await response.json();
        return post;
    }

    async create(postDto: PostDto): Promise<IPost> {
        let post = {} as IPost
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(postDto),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.status !== 200) {
            throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
        }
        post = await response.json();
        return post;
    }

    async update(id: number, postDto: PostDto): Promise<IPost> {
        let post = {} as IPost
        const url = this.url + id.toString()
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(postDto),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.status !== 200) {
            throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
        }
        post = await response.json();
        return post;
    }

    async delete(id: number): Promise<number> {
        const url = this.url + id.toString()
        const response = await fetch(url, {
            method: 'Delete',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.status !== 200) {
            throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
        }
        return id;
    }
}
