function injectDeprecationTrialTag() {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'origin-trial';
    meta.content = 'A7UhtfO6oAzEYh/Li1NtOhytsU5dau1qG3Dhe67Yav6xbnjq2hFXwdTh0Y3oViCVCH670pq8AGo3amkJvcZByAYAAACIeyJvcmlnaW4iOiJodHRwczovL2FydGh1cmZ1cm1hbi5naXRodWIuaW86NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==';
    document.head.append(meta);
}