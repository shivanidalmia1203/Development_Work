# importing the libraries
import numpy as np
import matplotlib as plt
import pandas as pd

# data pre-preocessing
dataset = pd.read_csv('50_Startups.csv')
X = dataset.iloc[:, :-1].values  #independent feature matrix
y = dataset.iloc[: , 4].values  #dependent feature matrix

# Encoding the categorical data
from sklearn.preprocessing import LabelEncoder , OneHotEncoder
labelencoder_X = LabelEncoder()
X[:, 3] = labelencoder_X.fit_transform(X[:,3])
# One hot Encoding
onehotencoder = OneHotEncoder(categorical_features = [3])
X = onehotencoder.fit_transform(X).toarray()

# Avoiding the dummy variable trap
# Although most libraries do it 
# Still we are doing it to be double sure in case if some doesn't do!!
X = X[: , 1:]

# Training and splitting the dataset
from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.2,  random_state=0)

# Fitting multiple regression to training set
from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train,y_train)

# Predicting the test results
y_pred = regressor.predict(X_test)

# Building the optimal model using the backward elimination (fastest method)
# We include only those independent variables which greatly affect the dependent variable
import statsmodels.formula.api as sm
# bcz of the constant b0 and x0=1 we need to add a column of 1s
# So we are appending our matrix to 1's column
# bcz we need 1's column in the begining 
X = np.append(arr=np.ones((50,1)).astype(int), values=X, axis=1)
X_opt = X[: , [0,1,2,3,4,5]]
regressor_OLS = sm.OLS(endog=y , exog= X_opt).fit()
regressor_OLS.summary()
# OLS = Ordinary least square
# now eliminate the column with highest p value 
# Again train the model
# Repeat untill all values are less than significance level
X_opt = X[: , [0,1,3,4,5]]
regressor_OLS = sm.OLS(endog=y , exog= X_opt).fit()
regressor_OLS.summary()  
X_opt = X[: , [0,3,4,5]]
regressor_OLS = sm.OLS(endog=y , exog= X_opt).fit()
regressor_OLS.summary()
X_opt = X[: , [0,3,5]]
regressor_OLS = sm.OLS(endog=y , exog= X_opt).fit()
regressor_OLS.summary()
X_opt = X[: , [0,3]]
regressor_OLS = sm.OLS(endog=y , exog= X_opt).fit()
regressor_OLS.summary()















