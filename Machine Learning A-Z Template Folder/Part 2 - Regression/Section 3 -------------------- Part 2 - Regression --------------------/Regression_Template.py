#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jun  8 11:58:18 2019

@author: freak
"""

# Regression Template

import numpy as np
import matplotlib.pyplot as plt
import pandas as  pd

dataset = pd.read_csv(' ')
X = dataset.iloc[: , ].values
y = dataset.iloc[: , ].values

# Fitting the Regression model to dataset


# Predicting the result of the Regression model
y_pred = regressor.predict()

# Visualising the results of the Regression model
plt.scatter(X , y , color='red')
plt.plot(X , predict(X), color='blue')
plt.xtitle('')
plt.xlabel('')
plt.ylabel('')
plt.show()

# Visualising the results of the Regression model (for high resolution and smoother curve)
X_grid = np.arange(min(X),max(X),0.1)
X_grid = np.reshape(len(X_grid),1)
plt.scatter(X , y , color='red')
plt.plot(X_grid , predict(X_grid), color='blue')
plt.xtitle('')
plt.xlabel('')
plt.ylabel('')
plt.show


 