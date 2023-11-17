function injectDeprecationTrialTag() {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'origin-trial';
    meta.content = 'A+DgaiIFdB5jrppCEd3H2OFJDiWp4fNw6dDf0DJdF1UHfEPirmw9op9HmOcY/+W4v9/SZn/jfTYwYWKqTsQu1goAAAB7eyJvcmlnaW4iOiJodHRwczovL2dpdGh1Yi5pbzo0NDMiLCJmZWF0dXJlIjoiRGlzYWJsZVRoaXJkUGFydHlTdG9yYWdlUGFydGl0aW9uaW5nIiwiZXhwaXJ5IjoxNzI1NDA3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9';
    document.head.append(meta);
}