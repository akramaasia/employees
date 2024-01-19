import { Expose } from "class-transformer";

export class employeeDto{
    @Expose()
    id: number;

    @Expose()
    name : string;

    @Expose()
    isManager: string;

}