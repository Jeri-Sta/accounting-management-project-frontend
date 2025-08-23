import {UserDto} from "../user/user.dto";

export interface TaskDto {
  id: number;
  user: UserDto;
  taskName: string;
  additionalInformation: string;
  recurringType: string;
  expirationDate: string;
  generatesFine: boolean;
  taskNumber: number;
  taskStatus: string;
  automaticallyGenerating: boolean;
  generationEndDate: string;
  pendingFlag: boolean;
  previousFlag: boolean;
  taskCreationDate: string;
}
