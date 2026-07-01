import{f as n,j as t}from"./iframe-dVXbPfbW.js";import{O as p}from"./object-table-2AxJs4rn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFr4GPrV.js";import"./Table-BPMEnoqV.js";import"./index-CymBcBUO.js";import"./Dialog-k8pRThzw.js";import"./cross-C_K1F1KB.js";import"./svgIconContainer-DxPEc-Dh.js";import"./useBaseUiId-DkQRwknn.js";import"./InternalBackdrop-BUP4VQDn.js";import"./composite-BS0mYAk9.js";import"./index-CRqtUjTy.js";import"./index-D32At8WP.js";import"./index-DrTNwIQU.js";import"./useEventCallback-G-ePriq4.js";import"./SkeletonBar-BvZQEOhk.js";import"./LoadingCell-D6C_pCCm.js";import"./ColumnConfigDialog-BZNYnqv1.js";import"./DraggableList-RNpoh2B-.js";import"./search-CmnGJ3RM.js";import"./Input-Cg6B84SQ.js";import"./useControlled-B7zIb9rJ.js";import"./Button-Bed55EGq.js";import"./small-cross-CVh1xk-w.js";import"./ActionButton-OrDxCUNF.js";import"./Checkbox-DY2QmYx0.js";import"./minus-D2NQo-N5.js";import"./tick-B6eDNuK7.js";import"./useValueChanged-_w5HUlRo.js";import"./caret-down-DYmu-l7O.js";import"./CollapsiblePanel-D4cpHA4o.js";import"./MultiColumnSortDialog-B_HVE1Py.js";import"./MenuTrigger-CH0SMjgZ.js";import"./CompositeItem-Bb0_tKq-.js";import"./ToolbarRootContext-CLmrqA3G.js";import"./getDisabledMountTransitionStyles-fwloP6uZ.js";import"./getPseudoElementBounds-D7LpqCgB.js";import"./chevron-down-CKo19cp9.js";import"./index-BrJlT82Q.js";import"./error-DHRbgXf-.js";import"./BaseCbacBanner-CTv7S2hA.js";import"./makeExternalStore-D1P93TRJ.js";import"./Tooltip-C2nGCsCl.js";import"./PopoverPopup-Bzf_cc-I.js";import"./toNumber-DB_j65_d.js";import"./useOsdkClient--3-qrhhS.js";import"./DropdownField-BqSrdHxA.js";import"./withOsdkMetrics-D6DNbUwT.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
