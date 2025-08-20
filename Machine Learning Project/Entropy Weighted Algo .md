```py
from scipy.stats import entropy

x = df['vibration1']

# Function to calculate entropy-weighted matrix
num_segments = len(x) // 100
segments = np.array_split(test, num_segments)
    
    # Calculate entropy for each segment
entropies = [abs(1-entropy(segment.value_counts(normalize=True))) for segment in segments]
# Compute weights based on entropy values
weights = np.exp(-np.array(entropies))
weights /= np.sum(weights)  # Normalize weights

# Calculate weighted matrix
weighted_matrix = np.vstack([weights[i] +0* segment.values for i, segment in enumerate(segments)])
    
weighted_matrix
```
