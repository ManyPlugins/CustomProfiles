export const CspPolicies: PolicyMap = {
    "http://localhost:*": ImageAndCssSrc,
    "http://127.0.0.1:*": ImageAndCssSrc,
    "localhost:*": ImageAndCssSrc,
    "127.0.0.1:*": ImageAndCssSrc,

    "*.github.io": ImageAndCssSrc, // GitHub pages, used by most themes
    "github.com": ImageAndCssSrc, // GitHub content (stuff uploaded to markdown forms), used by most themes
    "raw.githubusercontent.com": ImageAndCssSrc, // GitHub raw, used by some themes
    "*.gitlab.io": ImageAndCssSrc, // GitLab pages, used by some themes
    "gitlab.com": ImageAndCssSrc, // GitLab raw, used by some themes
    "*.codeberg.page": ImageAndCssSrc, // Codeberg pages, used by some themes
    "codeberg.org": ImageAndCssSrc, // Codeberg raw, used by some themes

    "*.githack.com": ImageAndCssSrc, // githack (namely raw.githack.com), used by some themes
    "jsdelivr.net": ImageAndCssSrc, // jsDelivr, used by very few themes

    "fonts.googleapis.com": CssSrc, // Google Fonts, used by many themes

    "i.imgur.com": ImageSrc, // Imgur, used by some themes
    "i.ibb.co": ImageSrc, // ImgBB, used by some themes
    "i.pinimg.com": ImageSrc, // Pinterest, used by some themes
    "*.tenor.com": ImageSrc, // Tenor, used by some themes
    "files.catbox.moe": ImageAndCssSrc, // Catbox, used by some themes
    "cdn.pfps.gg": ImageSrc, // Profile pictures, used by CustomProfiles

    "cdn.discordapp.com": ImageAndCssSrc, // Discord CDN, used by Vencord and some themes to load media
    "media.discordapp.net": ImageSrc, // Discord media CDN, possible alternative to Discord CDN

    // CDNs used for some things by Vencord.
    // FIXME: we really should not be using CDNs anymore
    "cdnjs.cloudflare.com": ImageScriptsAndCssSrc,
    "cdn.jsdelivr.net": ImageScriptsAndCssSrc,

    // Function Specific
    "api.github.com": ConnectSrc, // used for updating Vencord itself
    "ws.audioscrobbler.com": ConnectSrc, // Last.fm API
    "translate-pa.googleapis.com": ConnectSrc, // Google Translate API
    "*.vencord.dev": ImageSrc, // VenCloud (api.vencord.dev) and Badges (badges.vencord.dev)
    "manti.vendicated.dev": ImageSrc, // ReviewDB API
    "decor.fieryflames.dev": ConnectSrc, // Decor API
    "ugc.decor.fieryflames.dev": ImageSrc, // Decor CDN
    "sponsor.ajay.app": ConnectSrc, // Dearrow API
    "customprofiles.paragn.lol": ConnectSrc, // CustomProfiles API
    "dearrow-thumb.ajay.app": ImageSrc, // Dearrow Thumbnail CDN
    "usrbg.is-hardly.online": ImageSrc, // USRBG API
    "icons.duckduckgo.com": ImageSrc, // DuckDuckGo Favicon API (Reverse Image Search)
};
