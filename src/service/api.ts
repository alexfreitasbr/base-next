class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}
async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(endpoint, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    /* INTERCEPTAÇÃO GLOBAL */ if (!response.ok) {
      switch (response.status) {
        case 401:
          throw new ApiError("Não autorizado", 401);
        case 404:
          throw new ApiError("Recurso não encontrado", 404);
        case 500:
          throw new ApiError("Erro interno do servidor", 500);
        default:
          throw new ApiError("Erro na requisição", response.status);
      }
    }
    return response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}
export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint),
  post: <T>(endpoint: string, body: unknown) =>
    request<T>(endpoint, { method: "POST", body: JSON.stringify(body) }),
  put: <T>(endpoint: string, body: unknown) =>
    request<T>(endpoint, { method: "PUT", body: JSON.stringify(body) }),
  delete: <T>(endpoint: string) => request<T>(endpoint, { method: "DELETE" }),
};
