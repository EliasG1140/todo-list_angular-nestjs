import { IsBoolean, IsNumber, IsString } from "class-validator"

export class TaskEntity {
  @IsNumber()
  id: number
  
  @IsString()
  title:string
  
  @IsString()
  description:string

  @IsBoolean()
  finished: boolean
}