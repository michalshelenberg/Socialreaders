"use server";

import { createClient } from "@/lib/api/createClient";
import { components } from "@/lib/api/schema";

export async function signUpUser(
    params: components["schemas"]["SignUpRequest"]
) {
    try {
        const client = await createClient();
        const { data, response } = await client.POST("/api/Auth/signup", {
            body: { ...params },
        });

        if (!response.ok || !data) {
            const status = response.status;
            throw new Error(`Request failed (${String(status)})`);
        }

        return data;
    } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        throw new Error(`signUpUser failed: ${message}`);
    }
}
