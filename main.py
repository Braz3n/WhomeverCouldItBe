import tornado.ioloop
import tornado.web

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

def make_app(proxy_root):
    app_settings = dict(
        template_path = "templates",
        static_path = proxy_root + "static",
        debug = True
    )
    return tornado.web.Application([
        (r"/", IndexHandler),
    ],
    **app_settings)

if __name__ == "__main__":
    proxy_root = "who/"
    app = make_app(proxy_root)
    app.listen(8898)
    tornado.ioloop.IOLoop.current().start()
