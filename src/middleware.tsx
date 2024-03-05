import { NextRequest, NextResponse } from "next/server";
import { LocalStorageKeys } from "./shared/utils/DataTypes/ResponsedataType";

export const middleware = (request: NextRequest) => {
  const path = request.nextUrl.pathname;

  const isPublic = path === "/login" || path === "/signup";

  const token = request.cookies.get(LocalStorageKeys.CURRENT_USER)?.value || "";

  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
};

export const config = {
  matcher: ["/", "/cart", "/products/:path*", "/login", "/signup"],
};
