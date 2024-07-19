export interface UploadFileDto {
  Name: string;
  Src: string;
}

export interface DailyExpenseUploadDto {
    RecordDateTime: Date;
    Category: string;
    Item: string;
    Cost: number;
    Bank: string;
    Remark: string;
    UploadFile: UploadFileDto[];
  }