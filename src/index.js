import React from 'react'
import ReactDOM from 'react-dom'
import GithubRepoCommitViewer from './GithubRepoCommitViewer'
//import App from './App'

import './index.css'

var diffText = `diff --git a/grails-app/services/com/netflix/asgard/FastPropertyService.groovy b/grails-app/services/com/netflix/asgard/FastPropertyService.groovy
index 9ca9fb81..0bc85ac3 100644
--- a/grails-app/services/com/netflix/asgard/FastPropertyService.groovy
+++ b/grails-app/services/com/netflix/asgard/FastPropertyService.groovy
@@ -57,7 +57,12 @@ class FastPropertyService implements CacheInitializer {
                     FastProperty.fromXml(fastPropertyData)
                 }
             } else {
-                throw new ServerException("Failure to fetch fast property list from $/{url}")
+                // throw new ServerException("Failure to fetch fast property list from $/{url}")
+                // This API call no longer works and prevents the app from starting up properly.
+                // CRUD operations for fast pproperties are not used so we are just going to log the error and return an
+                // empty list to the cache.
+                log.warn("Failure to fetch fast property list from $/{url}")
+                return []
             }
         }
         []
@@ -255,6 +260,6 @@ class FastPropertyService implements CacheInitializer {
     private String platformServiceHostAndPort(UserContext userContext) {
         String host = configService.getRegionalPlatformServiceServer(userContext.region)
         String port = configService.platformServicePort
-        (configService.online && host && port) ? "$/{host}:$/{port}" : null
+        ((configService.online || true) && host && port) ? "$/{host}:$/{port}" : null
     }
 }
`

ReactDOM.render(<GithubRepoCommitViewer />, document.getElementById('root'))
//ReactDOM.render(<App diffText={diffText}/>, document.getElementById('root'))
