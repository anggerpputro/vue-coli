import request from "@/utils/request";

export function getAllAkun() {
    return request({
        method: "GET",
        url: "/halo",
    });
}

export function createAkun(data) {
    return request({
        method: "POST",
        url: "/halo",
        data: data
    });
}

export function editAkun(id) {
    return request({
        method: "PUT",
        url: "/halo/" + id,
    });
}

export function deleteAkun(id) {
    return request({
        method: "DELETE",
        url: "/halo/" + id,
    });
}