/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true, latedef:true, newcap:true, noarg:true,
regexp:true, undef:true, strict:true, trailing:true, white:true */
/*global X:true, XM:true, XT:true */

(function () {
  "use strict";

  /**
    Synce instance user account to information we have in the `XM.User` record.
    This will create a Postgres user and User Account if required, otherwise
    updates the user account.

    @extends X.Route
    @class
   */
  X.Functor.create({

    handle: function (xtr, session) {
      var params = xtr.get("payload").payload,
        attrs,
        user = XM.User.findOrCreate(params.user) ||
          new XM.User({ id: params.user }),
        org = XM.Organization.findOrCreate(params.organization) ||
          new XM.Organization({ name: params.organization }),
        userOrg,
        K = XM.Model,
        fetchOptions = {},
        query;
        
      fetchOptions.success = function () {
        if (user.getStatus() === K.READY_CLEAN &&
             org.getStatus() === K.READY_CLEAN) {
          userOrg = user.get('organizations').where({name: params.organization})[0];
          
          // The values we will set the user account record to
          attrs = {
            username: userOrg.get("username"),
            group: org.get("group"), // Database role
            active: user.get("isActive"),
            propername: user.get("properName"),
            email: user.get("email")
          };
          
          query = "select xt.user_account_sync($$%@$$)".f(JSON.stringify(attrs));

          xtr.debug("syncUser(): %@".f(query));

          X.database.query(org.get("name"), query, function (err, res) {
            if (err) {
              xtr.error({data: err});
            } else {
              xtr.write({data: res}).close();
            }
          });
        }
      };
      
      // Go get 'em
      user.fetch(fetchOptions);
      org.fetch(fetchOptions);
    },

    handles: "function/syncUser",

    needsSession: true
  });
}());


