# Importing the libraries
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Data Pre-processing
dataset = pd.read_csv('Position_Salaries.csv')
X = dataset.iloc[:,1:2].values #features matrix
y = dataset.iloc[:,2].values  #output vector

# Splitting the dataset 
'''
from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size = 0.2,random_state=0)
'''
# There is no need to split the dataset because of less values
# We want our model to predict non-integral values

# Fitting linear regression to the dataset
from sklearn.linear_model import LinearRegression
lin_reg = LinearRegression() 
lin_reg.fit(X,y)

# Fitting Polynomial regression to the dataset   
from sklearn.preprocessing import PolynomialFeatures
poly_reg = PolynomialFeatures(degree=5)
X_poly = poly_reg.fit_transform(X)
lin_reg2 = LinearRegression()
lin_reg2.fit(X_poly,y)

# Visualising the linear regression results
plt.scatter(X,y,color='red')
plt.plot(X, lin_reg.predict(X), color='blue')
plt.title('Truth Or Bluff (Linear Regression)')
plt.xlabel('Position Level')
plt.ylabel('Salary')
plt.show()

# Visualising the polynomial rgression results
X_grid = np.arange(min(X),max(X),0.1)
X_grid = X_grid.reshape(len(X_grid),1)
# for smooth curves
plt.scatter(X,y,color='red')
plt.plot(X_grid, lin_reg2.predict(poly_reg.fit_transform(X_grid)), color='blue')
plt.title('Truth Or Bluff (Polynomial Regression)')
plt.xlabel('Position Level')
plt.ylabel('Salary')
plt.show()

# Predicting the results of the Linear Regression model
lin_reg.predict(6.5)

# Predicting new results with the Polynomial Regression
lin_reg2.predict(poly_reg.fit_transform(6.5))











