/*jshint indent:2, curly:true eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true
white:true*/
/*global XT:true, XM:true, Backbone:true, _:true */

(function () {
  "use strict";

  /**
    @class

    @extends XM.Model
  */
  XM.DatabaseServer = XM.Model.extend({
    /** @scope XM.DatabaseServer.prototype */

    recordType: 'XM.DatabaseServer',

    idAttribute: 'name',

    databaseType: 'global',

    autoFetchId: false

  });

  /**
    @class

    @extends XM.Model
  */
  XM.Datasource = XM.Model.extend({
    /** @scope XM.Datasource.prototype */

    recordType: 'XM.Datasource',

    idAttribute: 'name',

    databaseType: 'global',

    autoFetchId: false

  });

  /**
    @class

    @extends XM.Model
  */
  XM.Extension = XM.Model.extend({
    /** @scope XM.Extension.prototype */

    recordType: 'XM.Extension',

    databaseType: 'global'

  });

  /**
    @class

    @extends XM.Model
  */
  XM.Organization = XM.Model.extend({
    /** @scope XM.Organization.prototype */

    recordType: 'XM.Organization',

    idAttribute: 'name',

    databaseType: 'global',

    autoFetchId: false

  });

  /**
    @class

    @extends XM.Model
  */
  XM.OrganizationExtension = XM.Model.extend({
    /** @scope XM.OrganizationExtension.prototype */

    recordType: 'XM.OrganizationExtension',

    databaseType: 'global'

  });


  /**
    @class

    @extends XM.Model
  */
  XM.Session = XM.Model.extend({
    /** @scope XM.Session.prototype */

    recordType: 'XM.Session',

    idAttribute: 'sid',

    databaseType: 'global',

    autoFetchId: false

  });

  /**
    @class

    @extends XM.Model
  */
  XM.SessionOrganization = XM.Model.extend({
    /** @scope XM.SessionOrganization.prototype */

    recordType: 'XM.SessionOrganization',

    databaseType: 'global'

  });

  /**
    @class

    @extends XM.Model
  */
  XM.User = XM.Model.extend({
    /** @scope XM.User.prototype */

    recordType: 'XM.User',

    autoFetchId: false,

    databaseType: 'global'

  });

  /**
    @class

    @extends XM.Model
  */
  XM.UserOrganization = XM.Model.extend({
    /** @scope XM.UserOrganization.prototype */

    recordType: 'XM.UserOrganization',

    databaseType: 'global'

  });

  /**
    @class

    @extends XM.Model
  */
  XM.GlobalPrivilege = XM.Model.extend(/** @lends XM.GlobalPrivilege.prototype */{

    recordType: 'XM.GlobalPrivilege',

    databaseType: 'global'

  });

  /**
    @class

    @extends XM.Model
  */
  XM.UserGlobalPrivilegeAssignment = XM.Model.extend(/** @lends XM.UserGlobalPrivilegeAssignment.prototype */{

    recordType: 'XM.UserGlobalPrivilegeAssignment',

    databaseType: 'global'

  });

  /**
    @class

    @extends XM.Model
  */
  XM.BiCache = XM.Model.extend(/** @lends XM.BiCache.prototype */{

    recordType: 'XM.BiCache',

    databaseType: 'global',

    idAttribute: 'key'

  });


  // ..........................................................
  // COLLECTIONS
  //

  /**
    @class

    @extends XM.Collection
  */
  XM.DatabaseServerCollection = XM.Collection.extend({
    /** @scope XM.DatabaseServerCollection.prototype */

    model: XM.DatabaseServer

  });

  /**
    @class

    @extends XM.Collection
  */
  XM.DatasourceCollection = XM.Collection.extend({
    /** @scope XM.DatasourceCollection.prototype */

    model: XM.DatabaseServer
  });

  /**
    @class

    @extends XM.Collection
  */
  XM.OrganizationCollection = XM.Collection.extend({
    /** @scope XM.OrganizationCollection.prototype */

    model: XM.Organization

  });

  /**
    @class

    @extends XM.Collection
  */
  XM.SessionCollection = XM.Collection.extend({
    /** @scope XM.SessionCollection.prototype */

    model: XM.Session

  });

  /**
    @class

    @extends XM.Collection
  */
  XM.UserCollection = XM.Collection.extend({
    /** @scope XM.UserCollection.prototype */

    model: XM.User

  });
  /**
    @class

    @extends XM.Collection
  */
  XM.BiCacheCollection = XM.Collection.extend({
    /** @scope XM.BiCacheCollection.prototype */

    model: XM.BiCache

  });
}());
