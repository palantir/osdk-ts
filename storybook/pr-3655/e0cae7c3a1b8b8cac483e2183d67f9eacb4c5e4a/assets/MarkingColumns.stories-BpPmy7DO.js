import{f as n,j as t}from"./iframe-C2hD-Cdm.js";import{O as p}from"./object-table-C28XbJT9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-c63MAXTS.js";import"./Table-Bwnhj_iL.js";import"./index-B4cXpWuA.js";import"./Dialog-C8z4ZFaF.js";import"./cross-Cqxwy79y.js";import"./svgIconContainer-CGPRmzrk.js";import"./useBaseUiId-BKwwY7GA.js";import"./InternalBackdrop-DzZwDlqp.js";import"./composite-DhQe9Wzn.js";import"./index-BdNL6hIt.js";import"./index-B_Qazd4e.js";import"./index-ywsEsPg6.js";import"./useEventCallback-DrHNdcxW.js";import"./SkeletonBar-CFI_uHH_.js";import"./LoadingCell-BEMEELkB.js";import"./ColumnConfigDialog-CWalyA98.js";import"./DraggableList-A-YAvp7H.js";import"./search-Dv0CkM8a.js";import"./Input-hzcxFTOb.js";import"./useControlled-C4rMef_j.js";import"./Button-B5zT1wAH.js";import"./small-cross-Dx85ExFu.js";import"./ActionButton-SgvjmLq9.js";import"./Checkbox-Cu5nqdPr.js";import"./useValueChanged-Bz5zgxpk.js";import"./CollapsiblePanel-CyZfdGo8.js";import"./MultiColumnSortDialog-DPCJcixF.js";import"./MenuTrigger-aOxwj3P_.js";import"./CompositeItem-D2ftems9.js";import"./ToolbarRootContext-CfOk5N7L.js";import"./getDisabledMountTransitionStyles-UWNsboSl.js";import"./getPseudoElementBounds-C6Hs5gxx.js";import"./chevron-down-Bt_3durr.js";import"./index-CsE8gr5m.js";import"./error--JCK9y5k.js";import"./BaseCbacBanner-Bikiys96.js";import"./makeExternalStore-DDCCzAGe.js";import"./Tooltip-DqSCGF72.js";import"./PopoverPopup-HgnrtOyh.js";import"./toNumber-PkHeLdnE.js";import"./useOsdkClient-DEruv0I-.js";import"./tick-DgqypsbN.js";import"./DropdownField-Bjhmcvty.js";import"./withOsdkMetrics-BafAupQO.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
