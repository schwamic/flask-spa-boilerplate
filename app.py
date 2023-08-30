from flask import Flask, render_template, jsonify
import random

# Init
app = Flask(__name__,
            static_folder = "./dist/static", # Statische Files
            template_folder = "./dist") # SPA index.html


# API-Routes
# Prefix `/api`
@app.route('/api/random')
def random_number():
    response = {
        'randomNumber': random.randint(1, 100)
    }
    return jsonify(response)


# Single-Page Konfiguration
# !!! Muss am Ende der Flask-Konfiguration stehen !!!
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # Debug-Modus
    # Wenn das Frontend und das Backend parallel im Dev-Modus laufen,
    # kommt es zu einem CORS-Error, das wird hier entsprechend abgefangen
    if app.debug:
        return requests.get('http://localhost:8080/{}'.format(path)).text
    # Default
    return render_template("index.html")


# Debugger in Debug-Mode aktivieren
if __name__=="__main__":
    app.run(debug=True)
