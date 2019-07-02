# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd  # to import dataset and manage

# Importing the dataset

dataset = pd.read_csv('Data.csv')

# here country age and salary are independent features and purchased is dependent
# building vector of independent and dependent features

X = dataset.iloc[:, :-1].values
Y = dataset.iloc[:, 3].values

# Taking care of missing data
from sklearn.preprocessing import Imputer
# scikit learn is the library used to take care of the missing data 
imputer = Imputer(missing_values = 'NaN', strategy = 'mean', axis = 0)
# missing data is filled with the help of the mean of all the remaining values
# axis=0 means the mean of the column values
imputer = imputer.fit(X[: , 1:3])
X[: , 1:3] = imputer.transform(X[: , 1:3])

#Encoding Categorical Data

from sklearn.preprocessing import LabelEncoder
labelencoder_X = LabelEncoder()
X[: , 0] = labelencoder_X.fit_transform(X[:,0])

# So that machine does not get confused due to magnitude
# so we make dummy variable
 from sklearn.preprocessing import OneHotEncoder
 onehotencoder = OneHotEncoder(categorical_features = [0])
 X = onehotencoder.fit_transform(X).toarray()
 
# because purchased is a dependent variable so we will just use label encoder
 
labelencoder_Y = LabelEncoder() 
Y = labelencoder_Y.fit_transform(Y)




# Data Splitting
# Split dataset into test set and training set

from sklearn.cross_validation import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X,Y,test_size=0.2, random_state=0)
 
 # test_size + train_size = 1

# feature scaling
# standardisation and normalisation
 
 from sklearn.preprocessing import StandardScaler
 sc_X = StandardScaler()
 X_train = sc_X.fit_transform(X_train)
 X_test = sc_X.fit_transform(X_test)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
