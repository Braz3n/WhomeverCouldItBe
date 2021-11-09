import tornado.ioloop
import tornado.web

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

def make_app():
    app_settings = dict(
        template_path = "templates",
        static_path = "static",
        debug = True
    )
    return tornado.web.Application([
        (r"/", IndexHandler),
    ],
    **app_settings)

if __name__ == "__main__":
    app = make_app()
    app.listen(8898)
    tornado.ioloop.IOLoop.current().start()
