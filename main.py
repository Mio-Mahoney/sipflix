from youtube_transcript_api import YouTubeTranscriptApi
from collections import Counter
import re

def get_video_transcript(video_url):
    try:
        # Extract video ID from URL
        video_id = video_url.split('watch?v=')[1]

        # Get transcript
        transcript = YouTubeTranscriptApi.get_transcript(video_id)

        # Get video length by finding the last timestamp + duration
        video_length = transcript[-1]['start'] + transcript[-1]['duration']

        # Join all text entries into one string
        full_transcript = ' '.join(entry['text'] for entry in transcript)

        # Remove patterns like [Music] or [Applause] using regex
        clean_transcript = re.sub(r'\[.*?\]', '', full_transcript)

        # Remove any extra whitespace that might be left
        clean_transcript = ' '.join(clean_transcript.split())

        return [video_length, clean_transcript]

    except Exception as e:
        return f"Error: {str(e)}"


def find_word_by_frequency(transcript, video_length_seconds, target_frequency):
    # Common words to exclude
    common_words = set(['a', 'in'])

    # Convert video length to minutes
    video_length_minutes = video_length_seconds / 60

    # Calculate target total occurrences for the whole video
    target_occurrences = target_frequency * video_length_minutes

    # Clean and split the transcript
    words = re.findall(r'\b\w+\b', transcript.lower())

    # Count word frequencies
    word_counts = Counter(words)

    # Define acceptable margin of error (20% of target)
    margin = target_occurrences * 0.4

    # Find words within acceptable range
    matching_words = []
    for word, count in word_counts.items():
        if ( abs(count - target_occurrences) <= margin):
            matching_words.append((word, count, len(word)))

    if not matching_words:
        # If no uncommon words found, try including common words
        for word, count in word_counts.items():
            if (len(word) > 2 and  # Still exclude very short words
                    abs(count - target_occurrences) <= margin):
                matching_words.append((word, count, len(word)))

    if matching_words:
        # Sort by length (descending) and choose the longest word
        matching_words.sort(key=lambda x: (-x[2], abs(x[1] - target_occurrences)))
        chosen_word = matching_words[0]
        return {
            'word': chosen_word[0],
            'actual_frequency': chosen_word[1] / video_length_minutes,
            'total_occurrences': chosen_word[1]
        }

    return None


# Example usage
video_url = "https://www.youtube.com/watch?v=rGdq4Ra-Zog"
transcript_arr = get_video_transcript(video_url)
target_freq = 10
result = find_word_by_frequency(transcript_arr[1], transcript_arr[0], target_freq)
if result:
    print(f"Word: {result['word']}")
    print(f"Actual frequency: {result['actual_frequency']:.2f} times per minute")
    print(f"Total occurrences: {result['total_occurrences']}")
else:
    print("No words found matching the criteria")