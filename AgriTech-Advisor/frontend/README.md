# 🌱 AgriSmart Advisor

### AI-Powered Crop Recommendation System

AgriSmart Advisor is an AI-based agricultural advisory system that recommends the most suitable crop based on soil and environmental conditions.

The system takes important agricultural parameters such as Nitrogen (N), Phosphorus (P), Potassium (K), temperature, humidity, soil pH, and rainfall as input. A trained Machine Learning model analyzes these parameters and recommends a suitable crop.

---

## 📌 Problem Statement

Farmers need to select crops that are suitable for the current soil and environmental conditions of their land.

Choosing an unsuitable crop can lead to:

- Lower crop productivity
- Poor utilization of soil nutrients
- Increased production costs
- Water wastage
- Reduced profitability

AgriSmart Advisor provides a data-driven approach to help identify a suitable crop based on available soil and climatic conditions.

---

## 🎯 Objective

The main objective of AgriSmart Advisor is to provide a simple AI-powered crop recommendation system that:

- Analyzes soil nutrient conditions
- Considers environmental conditions
- Uses Machine Learning for crop prediction
- Provides a crop recommendation through a simple web interface
- Helps support data-driven agricultural decisions

---

## 🚀 Key Features

### 🌾 Crop Recommendation

The system recommends a suitable crop based on seven input parameters:

- Nitrogen (N)
- Phosphorus (P)
- Potassium (K)
- Temperature
- Humidity
- Soil pH
- Rainfall

### 🤖 Machine Learning Prediction

A Random Forest Classification model is trained using the crop recommendation dataset.

The trained model is stored as:

```text
crop_model.pkl