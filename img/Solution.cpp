#include<bits/stdc++.h>
using namespace std ;

#define ll              long long 
#define pb              push_back
#define all(v)          v.begin(),v.end()
#define sz(a)           (ll)a.size()
#define F               first
#define S               second
#define INF             2000000000000000000
#define popcount(x)     __builtin_popcountll(x)
#define pll             pair<ll,ll>
#define pii             pair<int,int>
#define ld              long double

template<typename T, typename U> static inline void amin(T &x, U y){ if(y < x) x = y; }
template<typename T, typename U> static inline void amax(T &x, U y){ if(x < y) x = y; }

#ifdef LOCAL
#define debug(...) debug_out(#__VA_ARGS__, __VA_ARGS__)
#else
#define debug(...) 3000
#endif


int _runtimeTerror_()
{
    int n;
    cin >> n;
    vector<int> dp(n + 1, 1e8);
    vector<vector<int>> divs(n + 1);
    for(int i=1;i<=n;++i) {
        for(int j=2*i;j<=n;j+=i) {
            divs[j].push_back(i);
        }
    }

    dp[0] = 0;
    for(int i=1;i<=n;++i) {
        dp[i] = dp[i - 1] + 1;
        for(int j:divs[i]) {
            amin(dp[i], dp[j] + 4 + 2 * ((i / j) - 1));
        }
    }
    debug(dp);
    cout << dp[n] << "\n";
    return 0;
}

int main()
{
    ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);
    #ifdef runSieve
        sieve();
    #endif
    #ifdef NCR
        initncr();
    #endif
    int TESTS = 1;
    cin >> TESTS;
    for(int i=1;i<=TESTS;++i) {
        cout << "Case #" << i << ": ";
        _runtimeTerror_();
    }
    return 0;
}