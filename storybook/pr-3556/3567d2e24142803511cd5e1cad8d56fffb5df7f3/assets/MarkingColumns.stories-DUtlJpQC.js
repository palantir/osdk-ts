import{f as n,j as t}from"./iframe-DGo07w8p.js";import{O as p}from"./object-table-BYcOVVRS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Uw55Y6Co.js";import"./Table-B9s8N0Wm.js";import"./index-CiNz-q6a.js";import"./Dialog-CQvWf1OX.js";import"./cross-CkNwX2aH.js";import"./svgIconContainer-DFOet5FR.js";import"./useBaseUiId-yA5slOAd.js";import"./InternalBackdrop-ByJDE2UU.js";import"./composite-lFcGW0lr.js";import"./index-COgZHH-Q.js";import"./index-B9_zeMbg.js";import"./index-C_mGsUgP.js";import"./useEventCallback-CXd1QvES.js";import"./SkeletonBar-CNYKo3oo.js";import"./LoadingCell-wK9r9hoV.js";import"./ColumnConfigDialog-ASPIIknm.js";import"./DraggableList-BQtiLAlB.js";import"./Input-B5rB6lkx.js";import"./useControlled-DxZGBcfU.js";import"./Button-5Q1LlazT.js";import"./small-cross-BuFVZquJ.js";import"./ActionButton-DDB_cedo.js";import"./Checkbox-DGbnbRB6.js";import"./minus-DUUMzs7N.js";import"./useValueChanged-V81s0fMd.js";import"./caret-down-CifCUhdt.js";import"./CollapsiblePanel-BthpRzi6.js";import"./MultiColumnSortDialog-ziLrmxHS.js";import"./MenuTrigger-BdTqy5nA.js";import"./CompositeItem-C4-Z5Srk.js";import"./ToolbarRootContext-B93l1jp6.js";import"./getDisabledMountTransitionStyles-6n4UrhW9.js";import"./getPseudoElementBounds-mqOXsyJJ.js";import"./chevron-down-JfCyh0SF.js";import"./index-luu41Jl3.js";import"./error-BA68o8ir.js";import"./BaseCbacBanner-alU6q_US.js";import"./makeExternalStore-nWmFRsIS.js";import"./Tooltip-CW9nFVMa.js";import"./PopoverPopup-CjCLY6UQ.js";import"./toNumber-CHUHVQaw.js";import"./useOsdkClient-ZVtQ-Mp4.js";import"./DropdownField-BSCZLWNv.js";import"./withOsdkMetrics-CRNSOb-2.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
