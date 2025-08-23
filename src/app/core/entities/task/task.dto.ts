import {UserDto} from "../user/user.dto";

export interface TaskDto {
  id: number;
  user: UserDto;
  taskName: string;
  additionalInformation: string;
  recurringType: string;
  expirationDate: string | undefined;
  generatesFine: boolean;
  taskNumber: number;
  taskStatus: string;
  automaticallyGenerating: boolean;
  generationEndDate: string | undefined;
  pendingFlag: boolean;
  previousFlag: boolean;
  taskCreationDate: string | undefined;
}
