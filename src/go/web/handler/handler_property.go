package handler

import (
	"github.com/jabaraster/webtool"
	"../../model"
	"net/http"
)

func GetAllPropertiesHandler(w http.ResponseWriter, r *http.Request) {
    list := model.GetAllProperties()
    if len(list) == 0 {
        webtool.WriteEmptyArrayJsonResponse(w)
    } else {
        webtool.WriteJsonResponse(list, w)
    }
}
