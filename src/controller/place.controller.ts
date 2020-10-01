import { JsonController, Get, Post, Put, Delete, Res, Req } from "routing-controllers";
import { Response, Request } from "express";

@JsonController()
export class PlaceController {

    @Get("/places")
    async getPlaces(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }

    @Get("/place/:id")
    async getCoupon(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }

    @Post("/place")
    async createPlace(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }

    @Put("/place")
    async updatePlace(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }

    @Delete("/place")
    async deletePlace(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }

}