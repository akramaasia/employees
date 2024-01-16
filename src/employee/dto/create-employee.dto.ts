import { isString ,IsNumber, IsBoolean, IsString} from  "class-validator";

export class CreateEmployeeDto {
    @IsString()
    
    name :string;

    @IsNumber()

    salery : number;

    @IsBoolean()

    isManager: boolean;

}
