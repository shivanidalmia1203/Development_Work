#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jun 20 16:28:56 2019

@author: freak
"""

'''
CLASSIFICATION TEMPLATE
'''
# importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# importing the dataset
dataset = pd.read_csv('')
X =  dataset.iloc[:, ].values
y = dataset.iloc[:].values

# Splitting the dataset into training and test set
from sklearn.cross_validation import train_test_split
X_train , X_test , y_train , y_test = train_test_split(X,y,test_size =  0.25,random_state=0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X_train = sc_x.fit_transform(X_train)
X_test = sc_X.fit(X_test)

# Fitting the classifier to the training set


# predicting the results of  the model
y_pred = classifier.predict(X_test)

# Making the confusion matrix
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test , y_pred)

# Visualising the training set results
from matplotlib.colors import ListedColormap
X_set , y_set = X_train , y_train
X1,X2 = np.meshgrid(np.arange(start = X_set[:,0].min()-1 , stop = X_set[:,0].max()+1 , step = 0.01),
                    np.arange(start = X_set[:,1].min()-1 , stop = X_set[:,1].max()+1 , step = 0.01))

plt.contourf(X1 , X2 , classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),
             alpha = 0.75 , cmap = ListedColormap(('red','green')))

plt.xlim(X1.min(),X1.max())
plt.ylim(X2.min(),X2.max())

for i,j in enumerate(np.unique(y_set)):
    plt.scatter(X_set[y_set == j,0] , X_set[y_set == j,1] ,
                c = ListedColormap(('red','green'))(i) , label = j)
plt.title('')
plt.xlabel('')
plt.ylabel('')
plt.legend()
plt.show()

# Visualising the test set results
from matplotlib.colors import ListedColormap
X_set , y_set = X_test , y_test
X1,X2 = np.meshgrid(np.arange(start = X_set[:,0].min()-1 , stop = X_set[:,0].max()+1 , step = 0.01),
                    np.arange(start = X_set[:,1].min()-1 , stop = X_set[:,1].max()+1 , step = 0.01))

plt.contourf(X1 , X2 , classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),
             alpha = 0.75 , cmap = ListedColormap(('red','green')))

plt.xlim(X1.min(),X1.max())
plt.ylim(X2.min(),X2.max())

for i,j in enumerate(np.unique(y_set)):
    plt.scatter(X_set[y_set == j,0] , X_set[y_set == j,1] ,
                c = ListedColormap(('red','green'))(i) , label = j)
plt.title('')
plt.xlabel('')
plt.ylabel('')
plt.legend()
plt.show()











 