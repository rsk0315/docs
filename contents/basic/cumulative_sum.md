% 累積和

配列 $a[0\ldots n-1]$ があり，$1 \le j \le m$ に対して以下の値を求めることを考える．
$$ \sum_{i=l_j}^{r_j-1} a_i. $$
これは，愚直に行うと最悪 $O(nm)$ 時間かかる．

このとき，配列 $c[0\ldots n]$ を用意して以下の値を保持しておくとよい．
$$ c_i = \sum_{j=0}^{i-1} a_j. $$
すなわち，$c_i$ は半開区間 $[0, i)$ における総和を持つ．
これは以下の漸化式に基づいて（単純なループで）求めることができる．
- $c_0 = 0$
- $c_i = c_{i-1} + a_{i-1}$ for $0 < i \le n$

これにより，半開区間 $[l_j, r_j)$ の総和を $c_{r_j} - c_{l_j}$ として $O(1)$ 時間で求めることができる．
全体の計算時間は $O(n+m)$ である．