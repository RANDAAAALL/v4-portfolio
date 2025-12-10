import { getClientIP } from "@/lib/helper/get-client-ip";
import { EmailSendingRateLimiter } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest){
    const { pathname } = request.nextUrl;

    // check if its an api route
    if(pathname.startsWith("/api")){
        const ip = getClientIP(request);

        // rate limit for more than 5 requests
        if(pathname.startsWith("/api/send-email")){
            const rateLimit = await EmailSendingRateLimiter.limit(ip);

            if(!rateLimit.success){
                return NextResponse.json(
                    { errorMessage: "Too many request, please try again later."},
                    { status: 429 }
                )
            }
            else {
                return NextResponse.next();
            }
        }
    }
};


export const config = {
    matcher: [
        "/api/:path*"
    ]
}