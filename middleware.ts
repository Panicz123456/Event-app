import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ],
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Match all routes except files and `_next` folder
    '/',
    '/(api|trpc)(.*)',        // Match API and TRPC routes
  ],
};
