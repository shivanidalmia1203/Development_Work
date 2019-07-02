'''
SVMs are used to find the best possible decision boundary
rbf kernel was best in predicting the test set results
'''
#importing the libraries

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

dataset = pd.read_csv('Social_Network_Ads.csv')
X = dataset.iloc[: , [2,3]].values
y = dataset.iloc[: , 4].values

#splitting the dataset into training and test set 
from sklearn.cross_validation import train_test_split
X_train , X_test , y_train , y_test = train_test_split(X , y ,test_size = 0.25 , random_state = 0)

#feature Scaling
from sklearn.preprocessing import StandardScaler
sc_x = StandardScaler()
X_train = sc_x.fit_transform(X_train)
X_test = sc_x.transform(X_test)

#fitting  and training the SVM model to the training set
from sklearn.svm import SVC
classifier = SVC(kernel = '' , random_state = 0)
classifier.fit(X_train , y_train)

# predicting the test results
y_pred = classifier.predict(X_test)

# Confusion matrix
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test , y_pred)
print(cm)

# Visualising the training set results
from matplotlib.colors import ListedColormap
X_set , y_set = X_train , y_train
X1,X2 = np.meshgrid(np.arange(start = X_set[:,0].min()-1 , stop = X_set[:,0].max()+1 , step = 0.01),
                    np.arange(start = X_set[:,1].min()-1 , stop = X_set[:,1].max()+1 , step = 0.01))

plt.contourf(X1 , X2 , classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),
             alpha = 0.75 , cmap = ListedColormap(('mistyrose','lawngreen')))

plt.xlim(X1.min(),X1.max())
plt.ylim(X2.min(),X2.max())

for i,j in enumerate(np.unique(y_set)):
    plt.scatter(X_set[y_set == j,0] , X_set[y_set == j,1] ,
                c = ListedColormap(('darkred','darkgreen'))(i) , label = j)
plt.title('SVM (Training Set)')
plt.xlabel('Age')
plt.ylabel('Estimated Salary')
plt.legend()
plt.show()

# Visualising the test set results
from matplotlib.colors import ListedColormap
X_set , y_set = X_test , y_test
X1,X2 = np.meshgrid(np.arange(start = X_set[:,0].min()-1 , stop = X_set[:,0].max()+1 , step = 0.01),
                    np.arange(start = X_set[:,1].min()-1 , stop = X_set[:,1].max()+1 , step = 0.01))

plt.contourf(X1 , X2 , classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),
             alpha = 0.75 , cmap = ListedColormap(('mistyrose','lawngreen')))

plt.xlim(X1.min(),X1.max())
plt.ylim(X2.min(),X2.max())

for i,j in enumerate(np.unique(y_set)):
    plt.scatter(X_set[y_set == j,0] , X_set[y_set == j,1] ,
                c = ListedColormap(('darkred','darkgreen'))(i) , label = j)
plt.title('SVM (Test Set)')
plt.xlabel('Age')
plt.ylabel('Estimated Salary')
plt.legend()
plt.show()



