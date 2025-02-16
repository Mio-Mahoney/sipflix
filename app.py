from flask import Flask, request, jsonify
from youtube_transcript_api import YouTubeTranscriptApi
from collections import Counter

app = Flask(__name__)

@app.route('/drunk', methods=['GET'])
def get_words_below_percentile():
    # Retrieve parameters from the request
    video_url = request.args.get('url')
    percentile = int(request.args.get('percentile'))

    

if __name__ == '__main__':
    app.run(debug=True)
