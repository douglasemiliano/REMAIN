export namespace UrlsEnv {
    export const DEV = "http://localhost:8080/public/";
    export const PROD = "http://remain-ufpb.site:8080/public/"
}


export const SERVER_URL = UrlsEnv.DEV;

export namespace PaginationUrl {
    export const PAGE = "?page="
    export const SIZE = "&size="
    export const SORT = "&sort="
}

export namespace MaterialUrl {
    export const BASE = "material"
    export const BY_AUTHOR = MaterialUrl.BASE + "/author/"
    export const BY_ID = MaterialUrl.BASE + "/"
    export const BY_CATEGORY = MaterialUrl.BASE + "/" + "category" + "/"
    export const APPROVE = MaterialUrl.BASE + "/" + "approve"  + "/"
    export const GET_ALL_APPROVED = MaterialUrl.BASE + "/" + "get" + "/"
}

export namespace CategorylUrl { 
    export const BASE = "category"
    export const BY_ID = CategorylUrl.BASE + "/"
}

export namespace ImageUrl {
    export const BASE = "image"
    export const UPLOAD = "https://upload.gyazo.com/api/upload"
}

export namespace AttatchmentsUrl { 
    export const GET_SERVER = "https://api.gofile.io/getServer"
    export const UPLOAD = "gofile.io/uploadFile"    
}

export namespace AuthUrl{
    export const USER = "user"
    export const SEARCH = "search="
}
