'use strict';

var invariant2 = require('tiny-invariant');
var typescriptEventTarget = require('typescript-event-target');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var invariant2__default = /*#__PURE__*/_interopDefault(invariant2);

// ../../node_modules/.pnpm/oauth4webapi@2.10.4/node_modules/oauth4webapi/build/index.js
var USER_AGENT;
if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) {
  const NAME = "oauth4webapi";
  const VERSION = "v2.10.4";
  USER_AGENT = `${NAME}/${VERSION}`;
}
function looseInstanceOf(input, expected) {
  if (input == null) {
    return false;
  }
  try {
    return input instanceof expected || Object.getPrototypeOf(input)[Symbol.toStringTag] === expected.prototype[Symbol.toStringTag];
  } catch {
    return false;
  }
}
var clockSkew = Symbol();
var clockTolerance = Symbol();
var customFetch = Symbol();
var useMtlsAlias = Symbol();
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function buf(input) {
  if (typeof input === "string") {
    return encoder.encode(input);
  }
  return decoder.decode(input);
}
var CHUNK_SIZE = 32768;
function encodeBase64Url(input) {
  if (input instanceof ArrayBuffer) {
    input = new Uint8Array(input);
  }
  const arr = [];
  for (let i = 0; i < input.byteLength; i += CHUNK_SIZE) {
    arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
  }
  return btoa(arr.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function decodeBase64Url(input) {
  try {
    const binary = atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  } catch (cause) {
    throw new OPE("The input to be decoded is not correctly encoded.", {
      cause
    });
  }
}
function b64u(input) {
  if (typeof input === "string") {
    return decodeBase64Url(input);
  }
  return encodeBase64Url(input);
}
var LRU = class {
  constructor(maxSize) {
    this.cache = /* @__PURE__ */ new Map();
    this._cache = /* @__PURE__ */ new Map();
    this.maxSize = maxSize;
  }
  get(key) {
    let v = this.cache.get(key);
    if (v) {
      return v;
    }
    if (v = this._cache.get(key)) {
      this.update(key, v);
      return v;
    }
    return undefined;
  }
  has(key) {
    return this.cache.has(key) || this._cache.has(key);
  }
  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.set(key, value);
    } else {
      this.update(key, value);
    }
    return this;
  }
  delete(key) {
    if (this.cache.has(key)) {
      return this.cache.delete(key);
    }
    if (this._cache.has(key)) {
      return this._cache.delete(key);
    }
    return false;
  }
  update(key, value) {
    this.cache.set(key, value);
    if (this.cache.size >= this.maxSize) {
      this._cache = this.cache;
      this.cache = /* @__PURE__ */ new Map();
    }
  }
};
var UnsupportedOperationError = class extends Error {
  constructor(message) {
    super(message ?? "operation not supported");
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
var OperationProcessingError = class extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
var OPE = OperationProcessingError;
var dpopNonces = new LRU(100);
function isCryptoKey(key) {
  return key instanceof CryptoKey;
}
function isPrivateKey(key) {
  return isCryptoKey(key) && key.type === "private";
}
function isPublicKey(key) {
  return isCryptoKey(key) && key.type === "public";
}
function processDpopNonce(response) {
  try {
    const nonce = response.headers.get("dpop-nonce");
    if (nonce) {
      dpopNonces.set(new URL(response.url).origin, nonce);
    }
  } catch {
  }
  return response;
}
function isJsonObject(input) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    return false;
  }
  return true;
}
function prepareHeaders(input) {
  if (looseInstanceOf(input, Headers)) {
    input = Object.fromEntries(input.entries());
  }
  const headers = new Headers(input);
  if (USER_AGENT && !headers.has("user-agent")) {
    headers.set("user-agent", USER_AGENT);
  }
  if (headers.has("authorization")) {
    throw new TypeError('"options.headers" must not include the "authorization" header name');
  }
  if (headers.has("dpop")) {
    throw new TypeError('"options.headers" must not include the "dpop" header name');
  }
  return headers;
}
function signal(value) {
  if (typeof value === "function") {
    value = value();
  }
  if (!(value instanceof AbortSignal)) {
    throw new TypeError('"options.signal" must return or be an instance of AbortSignal');
  }
  return value;
}
function validateString(input) {
  return typeof input === "string" && input.length !== 0;
}
function randomBytes() {
  return b64u(crypto.getRandomValues(new Uint8Array(32)));
}
function generateRandomCodeVerifier() {
  return randomBytes();
}
function generateRandomState() {
  return randomBytes();
}
async function calculatePKCECodeChallenge(codeVerifier) {
  if (!validateString(codeVerifier)) {
    throw new TypeError('"codeVerifier" must be a non-empty string');
  }
  return b64u(await crypto.subtle.digest("SHA-256", buf(codeVerifier)));
}
function getKeyAndKid(input) {
  if (input instanceof CryptoKey) {
    return {
      key: input
    };
  }
  if (!(input?.key instanceof CryptoKey)) {
    return {};
  }
  if (input.kid !== undefined && !validateString(input.kid)) {
    throw new TypeError('"kid" must be a non-empty string');
  }
  return {
    key: input.key,
    kid: input.kid
  };
}
function formUrlEncode(token) {
  return encodeURIComponent(token).replace(/%20/g, "+");
}
function clientSecretBasic(clientId, clientSecret) {
  const username = formUrlEncode(clientId);
  const password = formUrlEncode(clientSecret);
  const credentials = btoa(`${username}:${password}`);
  return `Basic ${credentials}`;
}
function psAlg(key) {
  switch (key.algorithm.hash.name) {
    case "SHA-256":
      return "PS256";
    case "SHA-384":
      return "PS384";
    case "SHA-512":
      return "PS512";
    default:
      throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name");
  }
}
function rsAlg(key) {
  switch (key.algorithm.hash.name) {
    case "SHA-256":
      return "RS256";
    case "SHA-384":
      return "RS384";
    case "SHA-512":
      return "RS512";
    default:
      throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name");
  }
}
function esAlg(key) {
  switch (key.algorithm.namedCurve) {
    case "P-256":
      return "ES256";
    case "P-384":
      return "ES384";
    case "P-521":
      return "ES512";
    default:
      throw new UnsupportedOperationError("unsupported EcKeyAlgorithm namedCurve");
  }
}
function keyToJws(key) {
  switch (key.algorithm.name) {
    case "RSA-PSS":
      return psAlg(key);
    case "RSASSA-PKCS1-v1_5":
      return rsAlg(key);
    case "ECDSA":
      return esAlg(key);
    case "Ed25519":
    case "Ed448":
      return "EdDSA";
    default:
      throw new UnsupportedOperationError("unsupported CryptoKey algorithm name");
  }
}
function getClockSkew(client) {
  const skew = client?.[clockSkew];
  return typeof skew === "number" && Number.isFinite(skew) ? skew : 0;
}
function getClockTolerance(client) {
  const tolerance = client?.[clockTolerance];
  return typeof tolerance === "number" && Number.isFinite(tolerance) && Math.sign(tolerance) !== -1 ? tolerance : 30;
}
function epochTime() {
  return Math.floor(Date.now() / 1e3);
}
function clientAssertion(as, client) {
  const now = epochTime() + getClockSkew(client);
  return {
    jti: randomBytes(),
    aud: [as.issuer, as.token_endpoint],
    exp: now + 60,
    iat: now,
    nbf: now,
    iss: client.client_id,
    sub: client.client_id
  };
}
async function privateKeyJwt(as, client, key, kid) {
  return jwt({
    alg: keyToJws(key),
    kid
  }, clientAssertion(as, client), key);
}
function assertAs(as) {
  if (typeof as !== "object" || as === null) {
    throw new TypeError('"as" must be an object');
  }
  if (!validateString(as.issuer)) {
    throw new TypeError('"as.issuer" property must be a non-empty string');
  }
  return true;
}
function assertClient(client) {
  if (typeof client !== "object" || client === null) {
    throw new TypeError('"client" must be an object');
  }
  if (!validateString(client.client_id)) {
    throw new TypeError('"client.client_id" property must be a non-empty string');
  }
  return true;
}
function assertClientSecret(clientSecret) {
  if (!validateString(clientSecret)) {
    throw new TypeError('"client.client_secret" property must be a non-empty string');
  }
  return clientSecret;
}
function assertNoClientPrivateKey(clientAuthMethod, clientPrivateKey) {
  if (clientPrivateKey !== undefined) {
    throw new TypeError(`"options.clientPrivateKey" property must not be provided when ${clientAuthMethod} client authentication method is used.`);
  }
}
function assertNoClientSecret(clientAuthMethod, clientSecret) {
  if (clientSecret !== undefined) {
    throw new TypeError(`"client.client_secret" property must not be provided when ${clientAuthMethod} client authentication method is used.`);
  }
}
async function clientAuthentication(as, client, body, headers, clientPrivateKey) {
  body.delete("client_secret");
  body.delete("client_assertion_type");
  body.delete("client_assertion");
  switch (client.token_endpoint_auth_method) {
    case undefined:
    case "client_secret_basic": {
      assertNoClientPrivateKey("client_secret_basic", clientPrivateKey);
      headers.set("authorization", clientSecretBasic(client.client_id, assertClientSecret(client.client_secret)));
      break;
    }
    case "client_secret_post": {
      assertNoClientPrivateKey("client_secret_post", clientPrivateKey);
      body.set("client_id", client.client_id);
      body.set("client_secret", assertClientSecret(client.client_secret));
      break;
    }
    case "private_key_jwt": {
      assertNoClientSecret("private_key_jwt", client.client_secret);
      if (clientPrivateKey === undefined) {
        throw new TypeError('"options.clientPrivateKey" must be provided when "client.token_endpoint_auth_method" is "private_key_jwt"');
      }
      const {
        key,
        kid
      } = getKeyAndKid(clientPrivateKey);
      if (!isPrivateKey(key)) {
        throw new TypeError('"options.clientPrivateKey.key" must be a private CryptoKey');
      }
      body.set("client_id", client.client_id);
      body.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
      body.set("client_assertion", await privateKeyJwt(as, client, key, kid));
      break;
    }
    case "tls_client_auth":
    case "self_signed_tls_client_auth":
    case "none": {
      assertNoClientSecret(client.token_endpoint_auth_method, client.client_secret);
      assertNoClientPrivateKey(client.token_endpoint_auth_method, clientPrivateKey);
      body.set("client_id", client.client_id);
      break;
    }
    default:
      throw new UnsupportedOperationError("unsupported client token_endpoint_auth_method");
  }
}
async function jwt(header, claimsSet, key) {
  if (!key.usages.includes("sign")) {
    throw new TypeError('CryptoKey instances used for signing assertions must include "sign" in their "usages"');
  }
  const input = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(claimsSet)))}`;
  const signature = b64u(await crypto.subtle.sign(keyToSubtle(key), key, buf(input)));
  return `${input}.${signature}`;
}
async function dpopProofJwt(headers, options, url, htm, clockSkew2, accessToken) {
  const {
    privateKey,
    publicKey,
    nonce = dpopNonces.get(url.origin)
  } = options;
  if (!isPrivateKey(privateKey)) {
    throw new TypeError('"DPoP.privateKey" must be a private CryptoKey');
  }
  if (!isPublicKey(publicKey)) {
    throw new TypeError('"DPoP.publicKey" must be a public CryptoKey');
  }
  if (nonce !== undefined && !validateString(nonce)) {
    throw new TypeError('"DPoP.nonce" must be a non-empty string or undefined');
  }
  if (!publicKey.extractable) {
    throw new TypeError('"DPoP.publicKey.extractable" must be true');
  }
  const now = epochTime() + clockSkew2;
  const proof = await jwt({
    alg: keyToJws(privateKey),
    typ: "dpop+jwt",
    jwk: await publicJwk(publicKey)
  }, {
    iat: now,
    jti: randomBytes(),
    htm,
    nonce,
    htu: `${url.origin}${url.pathname}`,
    ath: undefined
  }, privateKey);
  headers.set("dpop", proof);
}
var jwkCache;
async function getSetPublicJwkCache(key) {
  const {
    kty,
    e,
    n,
    x,
    y,
    crv
  } = await crypto.subtle.exportKey("jwk", key);
  const jwk = {
    kty,
    e,
    n,
    x,
    y,
    crv
  };
  jwkCache.set(key, jwk);
  return jwk;
}
async function publicJwk(key) {
  jwkCache || (jwkCache = /* @__PURE__ */ new WeakMap());
  return jwkCache.get(key) || getSetPublicJwkCache(key);
}
function validateEndpoint(value, endpoint, options) {
  if (typeof value !== "string") {
    if (options?.[useMtlsAlias]) {
      throw new TypeError(`"as.mtls_endpoint_aliases.${endpoint}" must be a string`);
    }
    throw new TypeError(`"as.${endpoint}" must be a string`);
  }
  return new URL(value);
}
function resolveEndpoint(as, endpoint, options) {
  if (options?.[useMtlsAlias] && as.mtls_endpoint_aliases && endpoint in as.mtls_endpoint_aliases) {
    return validateEndpoint(as.mtls_endpoint_aliases[endpoint], endpoint, options);
  }
  return validateEndpoint(as[endpoint], endpoint);
}
function isOAuth2Error(input) {
  const value = input;
  if (typeof value !== "object" || Array.isArray(value) || value === null) {
    return false;
  }
  return value.error !== undefined;
}
async function authenticatedRequest(as, client, method, url, body, headers, options) {
  await clientAuthentication(as, client, body, headers, options?.clientPrivateKey);
  headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
  return (options?.[customFetch] || fetch)(url.href, {
    body,
    headers: Object.fromEntries(headers.entries()),
    method,
    redirect: "manual",
    signal: options?.signal ? signal(options.signal) : null
  }).then(processDpopNonce);
}
async function tokenEndpointRequest(as, client, grantType, parameters, options) {
  const url = resolveEndpoint(as, "token_endpoint", options);
  parameters.set("grant_type", grantType);
  const headers = prepareHeaders(options?.headers);
  headers.set("accept", "application/json");
  if (options?.DPoP !== undefined) {
    await dpopProofJwt(headers, options.DPoP, url, "POST", getClockSkew(client));
  }
  return authenticatedRequest(as, client, "POST", url, parameters, headers, options);
}
async function refreshTokenGrantRequest(as, client, refreshToken, options) {
  assertAs(as);
  assertClient(client);
  if (!validateString(refreshToken)) {
    throw new TypeError('"refreshToken" must be a non-empty string');
  }
  const parameters = new URLSearchParams(options?.additionalParameters);
  parameters.set("refresh_token", refreshToken);
  return tokenEndpointRequest(as, client, "refresh_token", parameters, options);
}
var idTokenClaims = /* @__PURE__ */ new WeakMap();
async function processGenericAccessTokenResponse(as, client, response, ignoreIdToken = false, ignoreRefreshToken = false) {
  assertAs(as);
  assertClient(client);
  if (!looseInstanceOf(response, Response)) {
    throw new TypeError('"response" must be an instance of Response');
  }
  if (response.status !== 200) {
    let err;
    if (err = await handleOAuthBodyError(response)) {
      return err;
    }
    throw new OPE('"response" is not a conform Token Endpoint response');
  }
  assertReadableResponse(response);
  let json;
  try {
    json = await response.json();
  } catch (cause) {
    throw new OPE('failed to parse "response" body as JSON', {
      cause
    });
  }
  if (!isJsonObject(json)) {
    throw new OPE('"response" body must be a top level object');
  }
  if (!validateString(json.access_token)) {
    throw new OPE('"response" body "access_token" property must be a non-empty string');
  }
  if (!validateString(json.token_type)) {
    throw new OPE('"response" body "token_type" property must be a non-empty string');
  }
  json.token_type = json.token_type.toLowerCase();
  if (json.token_type !== "dpop" && json.token_type !== "bearer") {
    throw new UnsupportedOperationError("unsupported `token_type` value");
  }
  if (json.expires_in !== undefined && (typeof json.expires_in !== "number" || json.expires_in <= 0)) {
    throw new OPE('"response" body "expires_in" property must be a positive number');
  }
  if (!ignoreRefreshToken && json.refresh_token !== undefined && !validateString(json.refresh_token)) {
    throw new OPE('"response" body "refresh_token" property must be a non-empty string');
  }
  if (json.scope !== undefined && typeof json.scope !== "string") {
    throw new OPE('"response" body "scope" property must be a string');
  }
  if (!ignoreIdToken) {
    if (json.id_token !== undefined && !validateString(json.id_token)) {
      throw new OPE('"response" body "id_token" property must be a non-empty string');
    }
    if (json.id_token) {
      const {
        claims
      } = await validateJwt(json.id_token, checkSigningAlgorithm.bind(undefined, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported), noSignatureCheck, getClockSkew(client), getClockTolerance(client)).then(validatePresence.bind(undefined, ["aud", "exp", "iat", "iss", "sub"])).then(validateIssuer.bind(undefined, as.issuer)).then(validateAudience.bind(undefined, client.client_id));
      if (Array.isArray(claims.aud) && claims.aud.length !== 1 && claims.azp !== client.client_id) {
        throw new OPE('unexpected ID Token "azp" (authorized party) claim value');
      }
      if (client.require_auth_time && typeof claims.auth_time !== "number") {
        throw new OPE('unexpected ID Token "auth_time" (authentication time) claim value');
      }
      idTokenClaims.set(json, claims);
    }
  }
  return json;
}
function validateAudience(expected, result) {
  if (Array.isArray(result.claims.aud)) {
    if (!result.claims.aud.includes(expected)) {
      throw new OPE('unexpected JWT "aud" (audience) claim value');
    }
  } else if (result.claims.aud !== expected) {
    throw new OPE('unexpected JWT "aud" (audience) claim value');
  }
  return result;
}
function validateIssuer(expected, result) {
  if (result.claims.iss !== expected) {
    throw new OPE('unexpected JWT "iss" (issuer) claim value');
  }
  return result;
}
var branded = /* @__PURE__ */ new WeakSet();
function brand(searchParams) {
  branded.add(searchParams);
  return searchParams;
}
async function authorizationCodeGrantRequest(as, client, callbackParameters, redirectUri, codeVerifier, options) {
  assertAs(as);
  assertClient(client);
  if (!branded.has(callbackParameters)) {
    throw new TypeError('"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()');
  }
  if (!validateString(redirectUri)) {
    throw new TypeError('"redirectUri" must be a non-empty string');
  }
  if (!validateString(codeVerifier)) {
    throw new TypeError('"codeVerifier" must be a non-empty string');
  }
  const code = getURLSearchParameter(callbackParameters, "code");
  if (!code) {
    throw new OPE('no authorization code in "callbackParameters"');
  }
  const parameters = new URLSearchParams(options?.additionalParameters);
  parameters.set("redirect_uri", redirectUri);
  parameters.set("code_verifier", codeVerifier);
  parameters.set("code", code);
  return tokenEndpointRequest(as, client, "authorization_code", parameters, options);
}
var jwtClaimNames = {
  aud: "audience",
  c_hash: "code hash",
  client_id: "client id",
  exp: "expiration time",
  iat: "issued at",
  iss: "issuer",
  jti: "jwt id",
  nonce: "nonce",
  s_hash: "state hash",
  sub: "subject",
  ath: "access token hash",
  htm: "http method",
  htu: "http uri",
  cnf: "confirmation"
};
function validatePresence(required, result) {
  for (const claim of required) {
    if (result.claims[claim] === undefined) {
      throw new OPE(`JWT "${claim}" (${jwtClaimNames[claim]}) claim missing`);
    }
  }
  return result;
}
async function processAuthorizationCodeOAuth2Response(as, client, response) {
  const result = await processGenericAccessTokenResponse(as, client, response, true);
  if (isOAuth2Error(result)) {
    return result;
  }
  if (result.id_token !== undefined) {
    if (typeof result.id_token === "string" && result.id_token.length) {
      throw new OPE("Unexpected ID Token returned, use processAuthorizationCodeOpenIDResponse() for OpenID Connect callback processing");
    }
    delete result.id_token;
  }
  return result;
}
async function clientCredentialsGrantRequest(as, client, parameters, options) {
  assertAs(as);
  assertClient(client);
  return tokenEndpointRequest(as, client, "client_credentials", new URLSearchParams(parameters), options);
}
async function processClientCredentialsResponse(as, client, response) {
  const result = await processGenericAccessTokenResponse(as, client, response, true, true);
  if (isOAuth2Error(result)) {
    return result;
  }
  return result;
}
async function revocationRequest(as, client, token, options) {
  assertAs(as);
  assertClient(client);
  if (!validateString(token)) {
    throw new TypeError('"token" must be a non-empty string');
  }
  const url = resolveEndpoint(as, "revocation_endpoint", options);
  const body = new URLSearchParams(options?.additionalParameters);
  body.set("token", token);
  const headers = prepareHeaders(options?.headers);
  headers.delete("accept");
  return authenticatedRequest(as, client, "POST", url, body, headers, options);
}
async function processRevocationResponse(response) {
  if (!looseInstanceOf(response, Response)) {
    throw new TypeError('"response" must be an instance of Response');
  }
  if (response.status !== 200) {
    let err;
    if (err = await handleOAuthBodyError(response)) {
      return err;
    }
    throw new OPE('"response" is not a conform Revocation Endpoint response');
  }
  return undefined;
}
function assertReadableResponse(response) {
  if (response.bodyUsed) {
    throw new TypeError('"response" body has been used already');
  }
}
async function handleOAuthBodyError(response) {
  if (response.status > 399 && response.status < 500) {
    assertReadableResponse(response);
    try {
      const json = await response.json();
      if (isJsonObject(json) && typeof json.error === "string" && json.error.length) {
        if (json.error_description !== void 0 && typeof json.error_description !== "string") {
          delete json.error_description;
        }
        if (json.error_uri !== void 0 && typeof json.error_uri !== "string") {
          delete json.error_uri;
        }
        if (json.algs !== void 0 && typeof json.algs !== "string") {
          delete json.algs;
        }
        if (json.scope !== void 0 && typeof json.scope !== "string") {
          delete json.scope;
        }
        return json;
      }
    } catch {
    }
  }
  return undefined;
}
function checkRsaKeyAlgorithm(algorithm) {
  if (typeof algorithm.modulusLength !== "number" || algorithm.modulusLength < 2048) {
    throw new OPE(`${algorithm.name} modulusLength must be at least 2048 bits`);
  }
}
function ecdsaHashName(namedCurve) {
  switch (namedCurve) {
    case "P-256":
      return "SHA-256";
    case "P-384":
      return "SHA-384";
    case "P-521":
      return "SHA-512";
    default:
      throw new UnsupportedOperationError();
  }
}
function keyToSubtle(key) {
  switch (key.algorithm.name) {
    case "ECDSA":
      return {
        name: key.algorithm.name,
        hash: ecdsaHashName(key.algorithm.namedCurve)
      };
    case "RSA-PSS": {
      checkRsaKeyAlgorithm(key.algorithm);
      switch (key.algorithm.hash.name) {
        case "SHA-256":
        case "SHA-384":
        case "SHA-512":
          return {
            name: key.algorithm.name,
            saltLength: parseInt(key.algorithm.hash.name.slice(-3), 10) >> 3
          };
        default:
          throw new UnsupportedOperationError();
      }
    }
    case "RSASSA-PKCS1-v1_5":
      checkRsaKeyAlgorithm(key.algorithm);
      return key.algorithm.name;
    case "Ed448":
    case "Ed25519":
      return key.algorithm.name;
  }
  throw new UnsupportedOperationError();
}
var noSignatureCheck = Symbol();
async function validateJwt(jws, checkAlg, getKey, clockSkew2, clockTolerance2) {
  const {
    0: protectedHeader,
    1: payload,
    2: encodedSignature,
    length
  } = jws.split(".");
  if (length === 5) {
    throw new UnsupportedOperationError("JWE structure JWTs are not supported");
  }
  if (length !== 3) {
    throw new OPE("Invalid JWT");
  }
  let header;
  try {
    header = JSON.parse(buf(b64u(protectedHeader)));
  } catch (cause) {
    throw new OPE("failed to parse JWT Header body as base64url encoded JSON", {
      cause
    });
  }
  if (!isJsonObject(header)) {
    throw new OPE("JWT Header must be a top level object");
  }
  checkAlg(header);
  if (header.crit !== undefined) {
    throw new OPE('unexpected JWT "crit" header parameter');
  }
  const signature = b64u(encodedSignature);
  let key;
  if (getKey !== noSignatureCheck) {
    key = await getKey(header);
    const input = `${protectedHeader}.${payload}`;
    const verified = await crypto.subtle.verify(keyToSubtle(key), key, signature, buf(input));
    if (!verified) {
      throw new OPE("JWT signature verification failed");
    }
  }
  let claims;
  try {
    claims = JSON.parse(buf(b64u(payload)));
  } catch (cause) {
    throw new OPE("failed to parse JWT Payload body as base64url encoded JSON", {
      cause
    });
  }
  if (!isJsonObject(claims)) {
    throw new OPE("JWT Payload must be a top level object");
  }
  const now = epochTime() + clockSkew2;
  if (claims.exp !== undefined) {
    if (typeof claims.exp !== "number") {
      throw new OPE('unexpected JWT "exp" (expiration time) claim type');
    }
    if (claims.exp <= now - clockTolerance2) {
      throw new OPE('unexpected JWT "exp" (expiration time) claim value, timestamp is <= now()');
    }
  }
  if (claims.iat !== undefined) {
    if (typeof claims.iat !== "number") {
      throw new OPE('unexpected JWT "iat" (issued at) claim type');
    }
  }
  if (claims.iss !== undefined) {
    if (typeof claims.iss !== "string") {
      throw new OPE('unexpected JWT "iss" (issuer) claim type');
    }
  }
  if (claims.nbf !== undefined) {
    if (typeof claims.nbf !== "number") {
      throw new OPE('unexpected JWT "nbf" (not before) claim type');
    }
    if (claims.nbf > now + clockTolerance2) {
      throw new OPE('unexpected JWT "nbf" (not before) claim value, timestamp is > now()');
    }
  }
  if (claims.aud !== undefined) {
    if (typeof claims.aud !== "string" && !Array.isArray(claims.aud)) {
      throw new OPE('unexpected JWT "aud" (audience) claim type');
    }
  }
  return {
    header,
    claims,
    signature,
    key
  };
}
function checkSigningAlgorithm(client, issuer, header) {
  if (client !== undefined) {
    if (header.alg !== client) {
      throw new OPE('unexpected JWT "alg" header parameter');
    }
    return;
  }
  if (Array.isArray(issuer)) {
    if (!issuer.includes(header.alg)) {
      throw new OPE('unexpected JWT "alg" header parameter');
    }
    return;
  }
  if (header.alg !== "RS256") {
    throw new OPE('unexpected JWT "alg" header parameter');
  }
}
function getURLSearchParameter(parameters, name) {
  const {
    0: value,
    length
  } = parameters.getAll(name);
  if (length > 1) {
    throw new OPE(`"${name}" parameter must be provided only once`);
  }
  return value;
}
var skipStateCheck = Symbol();
var expectNoState = Symbol();
function validateAuthResponse(as, client, parameters, expectedState) {
  assertAs(as);
  assertClient(client);
  if (parameters instanceof URL) {
    parameters = parameters.searchParams;
  }
  if (!(parameters instanceof URLSearchParams)) {
    throw new TypeError('"parameters" must be an instance of URLSearchParams, or URL');
  }
  if (getURLSearchParameter(parameters, "response")) {
    throw new OPE('"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()');
  }
  const iss = getURLSearchParameter(parameters, "iss");
  const state = getURLSearchParameter(parameters, "state");
  if (!iss && as.authorization_response_iss_parameter_supported) {
    throw new OPE('response parameter "iss" (issuer) missing');
  }
  if (iss && iss !== as.issuer) {
    throw new OPE('unexpected "iss" (issuer) response parameter value');
  }
  switch (expectedState) {
    case undefined:
    case expectNoState:
      if (state !== undefined) {
        throw new OPE('unexpected "state" response parameter encountered');
      }
      break;
    case skipStateCheck:
      break;
    default:
      if (!validateString(expectedState)) {
        throw new OPE('"expectedState" must be a non-empty string');
      }
      if (state === undefined) {
        throw new OPE('response parameter "state" missing');
      }
      if (state !== expectedState) {
        throw new OPE('unexpected "state" response parameter value');
      }
  }
  const error = getURLSearchParameter(parameters, "error");
  if (error) {
    return {
      error,
      error_description: getURLSearchParameter(parameters, "error_description"),
      error_uri: getURLSearchParameter(parameters, "error_uri")
    };
  }
  const id_token = getURLSearchParameter(parameters, "id_token");
  const token = getURLSearchParameter(parameters, "token");
  if (id_token !== undefined || token !== undefined) {
    throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
  }
  return brand(new URLSearchParams(parameters));
}

// src/throwIfError.ts
function throwIfError(result) {
  if (isOAuth2Error(result)) {
    throw new Error(`Failed to get token: ${result.error}`);
  }
  return result;
}

// src/common.ts
var CustomEvent = globalThis.CustomEvent ?? class CustomEvent2 extends Event {
  #detail;
  constructor(type, options) {
    super(type, options);
    this.#detail = options?.detail ?? null;
  }
  get detail() {
    return this.#detail;
  }
};
function localStorageKey(client) {
  return `@osdk/oauth : refresh : ${client.client_id}`;
}
function saveLocal(client, x) {
  globalThis.localStorage?.setItem(localStorageKey(client), JSON.stringify(x));
}
function removeLocal(client) {
  globalThis.localStorage?.removeItem(localStorageKey(client));
}
function readLocal(client) {
  return JSON.parse(
    // MUST `localStorage?` as nodejs does not have localStorage
    globalThis.localStorage?.getItem(localStorageKey(client)) ?? "{}"
  );
}
function saveSession(client, x) {
  globalThis.sessionStorage?.setItem(localStorageKey(client), JSON.stringify(x));
}
function removeSession(client) {
  globalThis.sessionStorage?.removeItem(localStorageKey(client));
}
function readSession(client) {
  return JSON.parse(
    // MUST `sessionStorage?` as nodejs does not have sessionStorage
    globalThis.sessionStorage?.getItem(localStorageKey(client)) ?? "{}"
  );
}
function common(client, as, _signIn, oauthHttpOptions, refresh, refreshTokenMarker) {
  let token;
  const eventTarget = new typescriptEventTarget.TypedEventTarget();
  function makeTokenAndSaveRefresh(resp, type) {
    const {
      refresh_token,
      expires_in,
      access_token
    } = resp;
    !(expires_in != null) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false) : invariant2__default.default(false) : undefined;
    saveLocal(client, {
      refresh_token,
      refreshTokenMarker
    });
    token = {
      refresh_token,
      expires_in,
      access_token,
      expires_at: Date.now() + expires_in * 1e3
    };
    eventTarget.dispatchTypedEvent(type, new CustomEvent(type, {
      detail: token
    }));
    return token;
  }
  let refreshTimeout;
  function rmTimeout() {
    if (refreshTimeout) clearTimeout(refreshTimeout);
  }
  function restartRefreshTimer(evt) {
    if (refresh) {
      rmTimeout();
      refreshTimeout = setTimeout(refresh, evt.detail.expires_in * 1e3 - 60 * 1e3);
    }
  }
  async function signOut() {
    !token ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "not signed in") : invariant2__default.default(false) : undefined;
    const result = await processRevocationResponse(await revocationRequest(as, client, token.access_token, oauthHttpOptions));
    rmTimeout();
    removeLocal(client);
    token = undefined;
    throwIfError(result);
    eventTarget.dispatchTypedEvent("signOut", new Event("signOut"));
  }
  let pendingSignIn;
  async function signIn() {
    if (pendingSignIn) {
      return pendingSignIn;
    }
    try {
      pendingSignIn = _signIn();
      return await pendingSignIn;
    } finally {
      pendingSignIn = undefined;
    }
  }
  eventTarget.addEventListener("signIn", restartRefreshTimer);
  eventTarget.addEventListener("refresh", restartRefreshTimer);
  function getTokenOrUndefined() {
    if (!token || Date.now() >= token.expires_at) {
      return undefined;
    }
    return token?.access_token;
  }
  const getToken = Object.assign(async function getToken2() {
    if (!token || Date.now() >= token.expires_at) {
      token = await signIn();
    }
    return token?.access_token;
  }, {
    signIn,
    refresh,
    signOut,
    rmTimeout,
    getTokenOrUndefined,
    addEventListener: eventTarget.addEventListener.bind(eventTarget),
    removeEventListener: eventTarget.removeEventListener.bind(eventTarget)
  });
  return {
    getToken,
    makeTokenAndSaveRefresh
  };
}
function createAuthorizationServer(ctxPath, url) {
  const issuer = `${new URL(ctxPath, url.endsWith("/") ? url : url + "/")}`;
  return {
    token_endpoint: `${issuer}/api/oauth2/token`,
    authorization_endpoint: `${issuer}/api/oauth2/authorize`,
    revocation_endpoint: `${issuer}/api/oauth2/revoke_token`,
    issuer
  };
}

// src/createConfidentialOauthClient.ts
function createConfidentialOauthClient(client_id, client_secret, url, scopes = ["api:read-data", "api:write-data"], fetchFn = globalThis.fetch, ctxPath = "multipass") {
  const client = {
    client_id,
    client_secret
  };
  const authServer = createAuthorizationServer(ctxPath, url);
  const oauthHttpOptions = {
    [customFetch]: fetchFn
  };
  const {
    getToken,
    makeTokenAndSaveRefresh
  } = common(client, authServer, _signIn, oauthHttpOptions, undefined, undefined);
  async function _signIn() {
    return makeTokenAndSaveRefresh(throwIfError(await processClientCredentialsResponse(authServer, client, await clientCredentialsGrantRequest(authServer, client, new URLSearchParams({
      scope: scopes.join(" ")
    }), oauthHttpOptions))), "signIn");
  }
  return getToken;
}

// ../../node_modules/.pnpm/delay@6.0.0/node_modules/delay/index.js
var createAbortError = () => {
  const error = new Error("Delay aborted");
  error.name = "AbortError";
  return error;
};
var clearMethods = /* @__PURE__ */ new WeakMap();
function createDelay({
  clearTimeout: defaultClear,
  setTimeout: defaultSet
} = {}) {
  return (milliseconds, {
    value,
    signal: signal2
  } = {}) => {
    if (signal2?.aborted) {
      return Promise.reject(createAbortError());
    }
    let timeoutId;
    let settle;
    let rejectFunction;
    const clear = defaultClear ?? clearTimeout;
    const signalListener = () => {
      clear(timeoutId);
      rejectFunction(createAbortError());
    };
    const cleanup = () => {
      if (signal2) {
        signal2.removeEventListener("abort", signalListener);
      }
    };
    const delayPromise = new Promise((resolve, reject) => {
      settle = () => {
        cleanup();
        resolve(value);
      };
      rejectFunction = reject;
      timeoutId = (defaultSet ?? setTimeout)(settle, milliseconds);
    });
    if (signal2) {
      signal2.addEventListener("abort", signalListener, {
        once: true
      });
    }
    clearMethods.set(delayPromise, () => {
      clear(timeoutId);
      timeoutId = null;
      settle();
    });
    return delayPromise;
  };
}
var delay = createDelay();
var delay_default = delay;
function processOptionsAndAssignDefaults(url, redirect_uri, useHistory, loginPage, postLoginPage, scopes, fetchFn, ctxPath) {
  let options = {};
  if (typeof useHistory === "object") {
    !(!loginPage && !postLoginPage && !scopes && !fetchFn && !ctxPath) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "If useHistory is an object, other options should not be provided") : invariant2__default.default(false) : undefined;
    options = useHistory;
  } else {
    options = {
      useHistory,
      loginPage,
      postLoginPage,
      scopes,
      fetchFn,
      ctxPath
    };
  }
  !url ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "url is required") : invariant2__default.default(false) : undefined;
  !redirect_uri ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "redirectUrl is required") : invariant2__default.default(false) : undefined;
  return {
    useHistory: options.useHistory ?? true,
    loginPage: options.loginPage,
    postLoginPage: options.postLoginPage || window.location.toString(),
    scopes: options.scopes ?? ["api:read-data", "api:write-data"],
    fetchFn: options.fetchFn ?? globalThis.fetch,
    ctxPath: options.ctxPath ?? "multipass",
    refreshTokenMarker: options.refreshTokenMarker
  };
}

// src/createPublicOauthClient.ts
function createPublicOauthClient(client_id, url, redirect_uri, useHistory, loginPage, postLoginPage, scopes, fetchFn, ctxPath) {
  let refreshTokenMarker;
  ({
    useHistory,
    loginPage,
    postLoginPage,
    scopes,
    fetchFn,
    ctxPath,
    refreshTokenMarker
  } = processOptionsAndAssignDefaults(url, redirect_uri, useHistory, loginPage, postLoginPage, scopes, fetchFn, ctxPath));
  const client = {
    client_id,
    token_endpoint_auth_method: "none"
  };
  const authServer = createAuthorizationServer(ctxPath, url);
  const oauthHttpOptions = {
    [customFetch]: fetchFn
  };
  const {
    makeTokenAndSaveRefresh,
    getToken
  } = common(client, authServer, _signIn, oauthHttpOptions, maybeRefresh.bind(globalThis, true), refreshTokenMarker);
  const go = async (x) => {
    if (useHistory) {
      window.history.replaceState({}, "", x);
      return;
    } else window.location.assign(x);
    await delay_default(1e3);
    throw new Error("Unable to redirect");
  };
  async function maybeRefresh(expectRefreshToken) {
    const {
      refresh_token,
      refreshTokenMarker: lastRefreshTokenMarker
    } = readLocal(client);
    if (!refresh_token || lastRefreshTokenMarker !== refreshTokenMarker) {
      if (expectRefreshToken) throw new Error("No refresh token found");
      return;
    }
    try {
      const result = makeTokenAndSaveRefresh(throwIfError(await processAuthorizationCodeOAuth2Response(authServer, client, await refreshTokenGrantRequest(authServer, client, refresh_token, oauthHttpOptions))), "refresh");
      if (result && window.location.pathname === new URL(redirect_uri).pathname) {
        const {
          oldUrl
        } = readSession(client);
        void go(oldUrl ?? "/");
      }
      return result;
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("Failed to get OAuth2 refresh token. Removing refresh token", e);
      }
      removeLocal(client);
      if (expectRefreshToken) {
        throw new Error("Could not refresh token");
      }
    }
  }
  async function maybeHandleAuthReturn() {
    const {
      state,
      oldUrl,
      codeVerifier
    } = readSession(client);
    if (!codeVerifier) return;
    try {
      const ret = makeTokenAndSaveRefresh(throwIfError(await processAuthorizationCodeOAuth2Response(authServer, client, await authorizationCodeGrantRequest(authServer, client, throwIfError(validateAuthResponse(authServer, client, new URL(window.location.href), state)), redirect_uri, codeVerifier, oauthHttpOptions))), "signIn");
      void go(oldUrl);
      return ret;
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("Failed to get OAuth2 token using PKCE, removing PKCE and starting a new auth flow", e);
      }
      removeLocal(client);
      removeSession(client);
      throw e;
    }
  }
  const initiateLoginRedirect = async () => {
    if (loginPage && window.location.href !== loginPage && window.location.pathname !== loginPage) {
      saveLocal(client, {});
      saveSession(client, {
        oldUrl: postLoginPage
      });
      await go(loginPage);
      return;
    }
    const state = generateRandomState();
    const codeVerifier = generateRandomCodeVerifier();
    const oldUrl = readSession(client).oldUrl ?? window.location.toString();
    saveLocal(client, {});
    saveSession(client, {
      codeVerifier,
      state,
      oldUrl
    });
    window.location.assign(`${authServer.authorization_endpoint}?${new URLSearchParams({
      client_id,
      response_type: "code",
      state,
      redirect_uri,
      code_challenge: await calculatePKCECodeChallenge(codeVerifier),
      code_challenge_method: "S256",
      scope: ["offline_access", ...scopes].join(" ")
    })}`);
    await delay_default(1e3);
    throw new Error("Unable to redirect");
  };
  async function _signIn() {
    return await maybeRefresh() ?? await maybeHandleAuthReturn() ?? await initiateLoginRedirect();
  }
  return getToken;
}

exports.createConfidentialOauthClient = createConfidentialOauthClient;
exports.createPublicOauthClient = createPublicOauthClient;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map