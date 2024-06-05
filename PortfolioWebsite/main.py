import flask

app = Flask(__name__)

@app.route("/calculator")
def calc():
  return flask.rendertemplate("calculator/index.html")
