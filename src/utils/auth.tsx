import { jwtDecode } from "jwt-decode";

export type TokenPayload = {
  id: string;
  username: string;
  role: string;
  exp: number;
};

export function getUserFromToken(token: string | null): TokenPayload | null {
  if (!token) return null;
  try {
    const decoded: TokenPayload = jwtDecode(token);
    const now = Date.now() / 1000;
    if (decoded.exp > now) return decoded;
    return null;
  } catch {
    return null;
  }
}
