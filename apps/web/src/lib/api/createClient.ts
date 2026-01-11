"use server";

import { default as createOpenapiClient } from "openapi-fetch";
import type { paths } from "./schema";

export async function createClient(
    additionalHeaders: Record<string, string> = {}
) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    return createOpenapiClient<paths>({
        baseUrl,
        headers: {
            ...additionalHeaders,
        },
    });
}
