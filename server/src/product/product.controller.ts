import { Controller, Get, Post,Put, Delete, Res, HttpStatus, Body, Param , NotFoundException} from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from "./product.service";



@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post('/create')
    async createPost(
        @Res() res, 
        @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({
            message: 'Created',
            product: product
        })
    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            message: 'Products',
            products
        })
    }

    @Get('/:id')
    async getProduct(@Res() res, @Param('id') productId){
        const product = await this.productService.getProductById(productId)
        if(!product) throw new NotFoundException('Product does not exist')
        return res.status(HttpStatus.OK).json(product)
    }

    @Delete('/:id')
    async deleteProduct(@Res() res, @Param('id') productId){
        const product = await this.productService.deleteProduct(productId)
        if(!product) throw new NotFoundException('Product does not exist')
        return res.status(HttpStatus.OK).json({
            message:'deleted',
            product
        })
    }

    @Put('/:id')
    async updateProduct(@Res() res, @Param('id') productId, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.updateProduct(productId,createProductDTO)
        if(!product) throw new NotFoundException('Product does not exist')
        return res.status(HttpStatus.OK).json({
            message:'updated',
            product
        })
    }
    
}
