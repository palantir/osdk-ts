import{f as n,j as t}from"./iframe-CrStxEBt.js";import{O as p}from"./object-table-CEd6jLTi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-OXivx5LR.js";import"./Table-B_usf8_t.js";import"./index-BLl2iDe8.js";import"./Dialog-Bk8-uT3T.js";import"./cross-DyLZ40Fh.js";import"./svgIconContainer-j1fWGKcX.js";import"./useBaseUiId-CogM71FT.js";import"./InternalBackdrop-BiwdPM30.js";import"./composite--6YdIqZR.js";import"./index-BNPoFAe0.js";import"./index-CBFzq2qH.js";import"./index-C5De8DnS.js";import"./useEventCallback-9pXLGCxO.js";import"./SkeletonBar-DVsod05x.js";import"./LoadingCell-DtfK7E-1.js";import"./ColumnConfigDialog-4xYWKH2Y.js";import"./DraggableList-BkHhbTVD.js";import"./search-CxSWgc2D.js";import"./Input-DmUxztOr.js";import"./useControlled-CSKZxUDn.js";import"./Button-BeQDA-Bv.js";import"./small-cross-CZNE2D_n.js";import"./ActionButton-DUHVD-2Q.js";import"./Checkbox-CxCa2ZNV.js";import"./useValueChanged-FP7B4hAS.js";import"./CollapsiblePanel-Cr48CIKz.js";import"./MultiColumnSortDialog-8Apbbh2U.js";import"./MenuTrigger-CzwaXdFN.js";import"./CompositeItem-JYp2rF_I.js";import"./ToolbarRootContext-EXBGAu9_.js";import"./getDisabledMountTransitionStyles-CoHP5nQd.js";import"./getPseudoElementBounds-hOe6qsBG.js";import"./chevron-down-B1SYYrKy.js";import"./index-BLZClbzk.js";import"./error-BmWTvM3v.js";import"./BaseCbacBanner-CwKT1YPi.js";import"./makeExternalStore-OHO3xlfT.js";import"./Tooltip-IY4otmQn.js";import"./PopoverPopup-BrTs52PQ.js";import"./toNumber-CWTrEa2S.js";import"./useOsdkClient-NBVox5yl.js";import"./tick-SWHUChbg.js";import"./DropdownField-CfNvk6xw.js";import"./withOsdkMetrics-D0-v26p3.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
