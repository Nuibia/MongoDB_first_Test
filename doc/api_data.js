define({ "api": [
  {
    "type": "get",
    "url": "/stu",
    "title": "学生模块列表",
    "name": "Add",
    "group": "Stu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageno",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "description": "<p>每页返回条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta",
            "description": "<p>状态码&amp;提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/stu.js",
    "groupTitle": "Stu"
  }
] });
