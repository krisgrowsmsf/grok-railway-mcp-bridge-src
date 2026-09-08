const NAME = "grok-railway-mcp-bridge";
const VER = "1.2.0";
const GQL = "https://backboard.railway.com/graphql/v2";
const GROK = "https://grok.com/connectors-oauth-exchange-code/";
const SCOPES = ["mcp:tools", "mcp:read", "mcp:write", "openid", "offline_access", "profile", "email"];
const ACCESS_TTL = 3600;
const REFRESH_TTL = 2592000;
const CODE_TTL = 300;
const PROTOCOLS = ["2024-11-05", "2025-03-26", "2025-06-18", "2026-07-28"];
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Api-Key, MCP-Session-Id, Mcp-Session-Id, MCP-Protocol-Version, mcp-protocol-version",
  "Access-Control-Expose-Headers": "MCP-Session-Id, Mcp-Session-Id, MCP-Protocol-Version, WWW-Authenticate",
};

export default {
  async fetch(request, env) {
    try { return await handle(request, env); }
    catch (e) { return json({ error: String(e.message || e) }, 500); }
  },
};
