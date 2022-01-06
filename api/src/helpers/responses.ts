export const errorBuilder = (message: string) => {
    return {
        success: false,
        message,
    };
}

// deno-lint-ignore no-explicit-any
export const successBuilder = (data: any) => {
    return {
        success: true,
        data,
    };
}