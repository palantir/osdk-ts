import{f as n,j as t}from"./iframe-CKp2GoGt.js";import{O as p}from"./object-table-Du6lkmxE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dwl_2zgn.js";import"./Table-3kaBvTKD.js";import"./index-CV5CMoJy.js";import"./Dialog-D8lqGQIC.js";import"./cross-D_J0Mx2k.js";import"./svgIconContainer-DpbAUHon.js";import"./useBaseUiId-PRbwLdOI.js";import"./InternalBackdrop-C8mEeC4M.js";import"./composite-DgO7Vm35.js";import"./index-DTnX0xVA.js";import"./index-D2il3bQJ.js";import"./index-DaqSnlCi.js";import"./useEventCallback-qi2FYpx0.js";import"./SkeletonBar-CcfQpdnF.js";import"./LoadingCell-HjECyVI8.js";import"./ColumnConfigDialog-DYtSsqIw.js";import"./DraggableList-B4b2GDU_.js";import"./search-DKMjaczW.js";import"./Input-DbTAg51B.js";import"./useControlled-BSjj1z3Z.js";import"./Button-DP3U52Zi.js";import"./small-cross-DZYL8ayJ.js";import"./ActionButton-Ded8nVsd.js";import"./Checkbox-CPm0vsZ_.js";import"./minus-BSnLNkUK.js";import"./tick-C261Gi14.js";import"./useValueChanged-DyeglUlD.js";import"./caret-down-B7HaT8DB.js";import"./CollapsiblePanel-Dnuno03i.js";import"./MultiColumnSortDialog-BkQA2Fmy.js";import"./MenuTrigger-D0kS97P2.js";import"./CompositeItem-BnJJ7eGh.js";import"./ToolbarRootContext-XlMRMSy8.js";import"./getDisabledMountTransitionStyles-BEUnbtJM.js";import"./getPseudoElementBounds-BO_DQhPo.js";import"./chevron-down-BtuHRN8u.js";import"./index-C2jZMrzZ.js";import"./error--DHYcfLX.js";import"./BaseCbacBanner-ZKOEq8Co.js";import"./makeExternalStore-DrdX9QDb.js";import"./Tooltip-CaLvVQqG.js";import"./PopoverPopup-DSBAV4Z3.js";import"./toNumber-DMcK6Iqq.js";import"./useOsdkClient-q25EN3zw.js";import"./DropdownField-BM0exSwW.js";import"./withOsdkMetrics-MWJghJCZ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
