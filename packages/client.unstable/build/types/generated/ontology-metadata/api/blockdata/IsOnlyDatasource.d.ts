/**
* Will only match if there is a single datasource that matches the output type (e.g. a dataset datasource
* with an export dataset, or a restricted view datasource with an export restricted view). In the case of exporting
* an RV datasource as a dataset, use DatasourcePredicate#hasRid instead.
*/
export interface IsOnlyDatasource {}
