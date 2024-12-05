function FindProxyForURL(url, host) {
    // Autoriser Aircall et ses sous-domaines
    if (dnsDomainIs(host, "aircall.io") || 
        dnsDomainIs(host, "phone.aircall.io") || 
        dnsDomainIs(host, "id.aircall.io") || 
        dnsDomainIs(host, "internal-api.aircall.io") || 
        dnsDomainIs(host, "users.aircall.io") || 
        shExpMatch(url, "*aircall.io*") || 
        shExpMatch(url, "*phone.aircall.io*") || 
        shExpMatch(url, "*id.aircall.io*") || 
        shExpMatch(url, "*internal-api.aircall.io*") || 
        shExpMatch(url, "*users.aircall.io*")) {
        return "DIRECT";
    }

    // Autoriser HubSpot
    if (dnsDomainIs(host, "hubspot.com") || dnsDomainIs(host, "hubspot.fr") || 
        shExpMatch(url, "*hubspot.com*") || shExpMatch(url, "*hubspot.fr*")) {
        return "DIRECT";
    }

    // Autoriser Google Workspace et services associés
    if (dnsDomainIs(host, "google.com") || dnsDomainIs(host, "googleapis.com") || 
        dnsDomainIs(host, "docs.google.com") || dnsDomainIs(host, "sheets.google.com") || 
        dnsDomainIs(host, "meet.google.com") || dnsDomainIs(host, "drive.google.com") || 
        shExpMatch(url, "*google.com*") || shExpMatch(url, "*googleapis.com*")) {
        return "DIRECT";
    }

    // Autoriser GitHub
    if (dnsDomainIs(host, "github.com") || shExpMatch(url, "*github.com*")) {
        return "DIRECT";
    }

    // Autoriser Roundcube (OVH)
    if (dnsDomainIs(host, "mail.ovh.net") || shExpMatch(url, "*mail.ovh.net*")) {
        return "DIRECT";
    }

    // Autoriser OVH
    if (dnsDomainIs(host, "ovh.com") || shExpMatch(url, "*ovh.com*")) {
        return "DIRECT";
    }

    // Autoriser Slack
    if (dnsDomainIs(host, "slack.com") || shExpMatch(url, "*slack.com*")) {
        return "DIRECT";
    }

    // Autoriser Chatgpt
    if (dnsDomainIs(host, "chatgpt.com") || shExpMatch(url, "*chatgpt.com*")) {
        return "DIRECT";
    }

    // Bloquer tout le reste
    return "PROXY 127.0.0.1:8080"; // Redirige tout sauf les domaines autorisés vers un faux proxy
}

