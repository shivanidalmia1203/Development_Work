# Random Forest Regression
'''
ENSEMBLE LEARNING is when we use an algo multiple times or take multiple things
and put them together to make something much more powerful than original.
It is a collection of many decision trees.
'''
'''
Random Forest Algo
1.) Pick any k data point.
2.) Build a decision tree associated to those k data points.
3.) Choose no of trees(N) u want to build and repeat step 1 & 2.
4.) For a new data point make all the (N)decision trees predict the value of y.
    Assign the new data point the average of all the predicted y values.
'''

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('Position_Salaries.csv')
# iloc --> locate
X = dataset.iloc[: , 1:2].values
y = dataset.iloc[: , 2].values

# Fitting the Random Forest Regression Model to the dataset
from sklearn.ensemble import RandomForestRegressor
regressor = RandomForestRegressor(n_estimators = 300, random_state = 0)
# n_estimators --> no of trees 
# increasing no of estimators won't change the no. of steps but just accuracy
regressor.fit(X , y)

# Predicting the  values
y_pred = regressor.predict(6.5)
print(y_pred)

# Visualising the results (For higher Resolution and smooth curve)
X_grid = np.arange(min(X), max(X), 0.01)
X_grid = X_grid.reshape((len(X_grid),1))
plt.scatter(X , y, color='red')
plt.plot(X_grid , regressor.predict(X_grid), color='blue')
plt.title('Truth or Bluff (Random Forest Regression)')
plt.xlabel('Position Level')
plt.ylabel('Salaries')
plt.show()
