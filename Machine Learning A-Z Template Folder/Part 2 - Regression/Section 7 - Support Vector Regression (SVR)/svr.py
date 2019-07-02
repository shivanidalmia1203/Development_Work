# Support Vector Regression

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

dataset = pd.read_csv('Position_Salaries.csv')
X = dataset.iloc[: , 1:2].values
y = dataset.iloc[: , 2:3].values


# As SVR doesn't include feature scaling
# So we need to do feature scaling in data pre-processing

from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
sc_y = StandardScaler()
X = sc_X.fit_transform(X)
y = sc_y.fit_transform(y)

# As dataset is so small so we donot split it  into training and test set

#  Fitting SVR to dataset
from sklearn.svm import SVR 
regressor = SVR(kernel = 'rbf')
regressor.fit(X,y)

# Predicting Regression results
# Bcz we did feature scaling but now we want the original value
y_pred = sc_y.inverse_transform(regressor.predict(sc_X.transform(np.array([[6.5]]))))

# Visualising Regression results
plt.scatter(X, y, color='red')
plt.plot(X, regressor.predict(X), color='blue')
plt.title('')
plt.xlabel('Position')
plt.ylabel('Salaries')
plt.show()

# For more smoother curve
X_grid = np.arange(min(X),max(X),0.1)
X_grid = X_grid.reshape((len(X_grid),1))
plt.scatter(X, y, color='red')
plt.plot(X_grid, regressor.predict(X_grid), color='blue')
plt.title('Truth Or Bluff (SVR)')
plt.xlabel('Position')
plt.ylabel('Salaries')
plt.show()
