# Simple Linear Regression

# Data Preprocessing Template

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('Salary_Data.csv')
X = dataset.iloc[:, :-1].values   #matrix of independent variables  -->> Years Of Experience
y = dataset.iloc[:, 1].values     #matrix of dependent variables    -->>  Salary

# Splitting the dataset into the Training set and Test set
from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 1/3, random_state = 0)

# Feature Scaling
"""from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X_train = sc_X.fit_transform(X_train)
X_test = sc_X.transform(X_test)
sc_y = StandardScaler()
y_train = sc_y.fit_transform(y_train)"""

# Fitting simple linear regression model to training set
from sklearn.linear_model import LinearRegression  #(class)
regressor = LinearRegression()  #object of class
regressor.fit(X_train, y_train)

# Predicting the test set result

y_pred = regressor.predict(X_test)

# y_pred will contain the predicted salaries while as y_test contains the original salaries
# So now we compare both the salaries

# visualising the training set results
# Matplotlib library helps in plotting of data
plt.scatter(X_train , y_train, color='red')
# x-axis contains the experience (independent variable)
plt.plot(X_train , regressor.predict(X_train), color="blue") #to plot a straight line 
plt.title('Salary Vs Experience (TRAINING SET)')
plt.xlabel('Years Of Experience')
plt.ylabel('Salary')
plt.show()

# visualising the training set results
plt.scatter(X_test, y_test, color= 'red')
plt.plot(X_train, regressor.predict(X_train) ,color="blue")
plt.title('Salary Vs Experience (TEST SET)')
plt.xlabel('Years Of Experience')
plt.ylabel('Salary')
plt.show()










