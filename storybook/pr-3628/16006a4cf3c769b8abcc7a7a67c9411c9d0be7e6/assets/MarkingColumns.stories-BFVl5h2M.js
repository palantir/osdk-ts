import{f as n,j as t}from"./iframe-DAPgzWjn.js";import{O as p}from"./object-table-PNSgCpka.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BEd-4Gka.js";import"./Table-nK2EYcK9.js";import"./index-B2ogQsi-.js";import"./Dialog-CRwklH6h.js";import"./cross-Gte2Vid0.js";import"./svgIconContainer-wLpyQ5j_.js";import"./useBaseUiId-BUnrxJyu.js";import"./InternalBackdrop-nvKmO05O.js";import"./composite-B-nrRoLl.js";import"./index-DDnCWxjC.js";import"./index-CxN7QWX0.js";import"./index-BDL_00zB.js";import"./useEventCallback-C3H-Eigt.js";import"./SkeletonBar-CKc5we7v.js";import"./LoadingCell-DG9ycnO8.js";import"./ColumnConfigDialog-D-ncGeQL.js";import"./DraggableList-CwqhBO88.js";import"./search-DuQ8pGMe.js";import"./Input-CnjW5aH-.js";import"./useControlled-DXipzcSB.js";import"./Button-BLk5IMLy.js";import"./small-cross-TFYFl7uZ.js";import"./ActionButton-CtIWjlx-.js";import"./Checkbox-DP6uvOPQ.js";import"./useValueChanged-BcD_FIJO.js";import"./CollapsiblePanel-CjAWucdJ.js";import"./MultiColumnSortDialog-DQqhKvaE.js";import"./MenuTrigger-BsgZ-MX1.js";import"./CompositeItem-7K2HqypZ.js";import"./ToolbarRootContext-Vn1EeKf6.js";import"./getDisabledMountTransitionStyles-BqMzOrtZ.js";import"./getPseudoElementBounds-DU_pr3Bo.js";import"./chevron-down-B3DiJH7z.js";import"./index-DeazCBtH.js";import"./error-Jqea99yo.js";import"./BaseCbacBanner-vBMC4eyB.js";import"./makeExternalStore-Ifw53jXv.js";import"./Tooltip-CEqufhV5.js";import"./PopoverPopup-BxEhDCqU.js";import"./toNumber-D-Uwr691.js";import"./useOsdkClient-CAFkSTyD.js";import"./tick-BqgpNjyN.js";import"./DropdownField-DmKOmhK7.js";import"./withOsdkMetrics-rekkd109.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
