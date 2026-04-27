import sys
import joblib
import pandas as pd
import warnings
import os

# 1. SILENCE ALL WARNINGS (Very Important for Node.js)
warnings.filterwarnings("ignore")
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

def predict():
    try:
        # Get the path to the model file
        model_path = os.path.join(os.path.dirname(__file__), 'crop_model.pkl')
        model = joblib.load(model_path)
        
        # 2. Define features exactly as per training
        feature_names = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
        
        # 3. Read inputs from command line arguments
        # sys.argv[1:] picks up: N, P, K, temp, hum, ph, rain
        input_data = [float(x) for x in sys.argv[1:]]
        
        inputs = pd.DataFrame([input_data], columns=feature_names)
        
        # 4. Predict
        prediction = model.predict(inputs)
        
        # 5. PRINT ONLY THE RESULT
        # Node.js reads the LAST line printed to the console
        sys.stdout.write(str(prediction[0]))
        sys.stdout.flush()

    except Exception as e:
        # This will only show up in your terminal for debugging
        sys.stderr.write(str(e))

if __name__ == "__main__":
    predict()