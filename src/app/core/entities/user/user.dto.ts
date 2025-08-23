export interface UserDto {
  id: number;
  name: string;
  username: string;
  role: string;
  email: string;
  password: string;
  active: boolean;
  timestampCreatedAt: string | undefined;
  timestampUpdatedAt: string | undefined;
}
