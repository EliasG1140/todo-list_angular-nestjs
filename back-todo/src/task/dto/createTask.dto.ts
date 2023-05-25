import { OmitType } from "@nestjs/mapped-types"
import { TaskEntity } from "src/shared/Entities"

export class CreateTask extends OmitType(TaskEntity, ['id', 'finished'] as const){}