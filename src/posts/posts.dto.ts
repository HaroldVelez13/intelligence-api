import { IsEmail, IsNotEmpty } from 'class-validator';

export class PostDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    body: string;

    @IsNotEmpty()
    userId: number;
}