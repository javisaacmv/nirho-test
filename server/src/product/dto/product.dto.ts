export class CreateProductDTO {
    NameProduct: string;
    Category: string;
    Description: string;
    ProductQuantity: number;
    Status: boolean;
    TimeStamp: Date;
}
export class PaginationDTO {
    page: number;
    limit: number;
}