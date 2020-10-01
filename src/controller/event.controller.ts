import { JsonController, Get, Post, Put, Delete, Req, Res } from "routing-controllers";
import { Response, Request } from "express";

@JsonController()
export class EventController {

    @Get("/events")
    async getCoupons(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }

    @Get("/event/:id")
    async getCoupon(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }

    @Post("/event")
    async createCoupon(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }

    @Put("/event")
    async updateCoupon(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }

    @Delete("/event")
    async deleteCoupon(@Req() req: Request, @Res() res: Response) {
        return res.end();
    }


}
