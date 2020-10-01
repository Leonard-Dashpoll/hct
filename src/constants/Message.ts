export class Message {

    static readonly ROUTE_NOT_FOUND = { status: 404, message: "ROUTE_NOT_FOUND" };

    static readonly MISSING_PARAMETERS = { status: "---", message: "MISSING_PARAMETERS" };
    static readonly MISSING_PERMISSIONS = { status: "---", message: "MISSING_PERMISSIONS" };

    static readonly EVENT_NOT_FOUND = { status: 404, message: "EVENT_NOT_FOUND" };
    static readonly PLACE_NOT_FOUND = { status: 404, message: "PLACE_NOT_FOUND" };

    static readonly PLACE_SUCCESSFULLY_DELETED = { status: 100, message: "PLACE_SUCCESSFULLY_DELETED" };
    static readonly COUPON_SUCCESSFULLY_DELETED = { status: 100, message: "COUPON_SUCCESSFULLY_DELETED" };

}