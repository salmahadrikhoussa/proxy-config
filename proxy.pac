
function FindProxyForURL(url, host) {
    // Autoriser Aircall
    if (dnsDomainIs(host, "aircall.io") || shExpMatch(url, "*aircall.io*")) {
        return "DIRECT";
    }

    // Autoriser HubSpot
    if (dnsDomainIs(host, "hubspot.com") || shExpMatch(url, "*hubspot.com*")) {
        return "DIRECT";
    }

    // Autoriser Google Workspace
    if (dnsDomainIs(host, "google.com") || dnsDomainIs(host, "googleapis.com") || 
        shExpMatch(url, "*google.com*") || shExpMatch(url, "*googleapis.com*")) {
        return "DIRECT";
    }

    // Bloquer tout le reste
    return "PROXY 127.0.0.1:8080"; // Redirige tout sauf les domaines autorisés vers un faux proxy
}