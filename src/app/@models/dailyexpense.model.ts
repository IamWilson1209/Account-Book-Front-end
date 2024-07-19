export interface DailyExpenseDto {
    ID: number;
    RecordDateTime: Date;
    Category: string;
    Item: string;
    Cost: number;
    Bank: string;
    Remark: string;
  }