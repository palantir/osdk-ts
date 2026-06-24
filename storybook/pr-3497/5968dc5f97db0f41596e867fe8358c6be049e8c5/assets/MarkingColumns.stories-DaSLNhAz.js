import{f as n,j as t}from"./iframe-BnPm9-Gd.js";import{O as p}from"./object-table-9YPggX2F.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2q10Ncf.js";import"./Table-BhHnI49_.js";import"./index-C0XduHPg.js";import"./Dialog-BSNCF3JX.js";import"./cross-BbGenS0t.js";import"./svgIconContainer-sxMwXzPM.js";import"./useBaseUiId-BpbRJVfP.js";import"./InternalBackdrop-CJ9P_CwP.js";import"./composite-BTOpkBGU.js";import"./index-V93YaStg.js";import"./index-DOgEuVcV.js";import"./index-D6X-lUPI.js";import"./useEventCallback-gP4f0LNy.js";import"./SkeletonBar-BfphOXIE.js";import"./LoadingCell-B4usxFgt.js";import"./ColumnConfigDialog-B2LvBKsS.js";import"./DraggableList-Vr-MJJMt.js";import"./Input-BNViqxVq.js";import"./useControlled-r8Hxy60U.js";import"./Button-6aULWcpF.js";import"./small-cross-B1HFIKeW.js";import"./ActionButton-DIB2qPoL.js";import"./Checkbox-C5av-1-z.js";import"./minus-B4iqSxUI.js";import"./useValueChanged-DW53v8Fq.js";import"./caret-down-Clf6PcMw.js";import"./CollapsiblePanel-G50bgKUz.js";import"./MultiColumnSortDialog-D6C9n74u.js";import"./MenuTrigger-DNU25jly.js";import"./CompositeItem-DI9--lkY.js";import"./ToolbarRootContext-D6e1YCy8.js";import"./getDisabledMountTransitionStyles-Bd4Ux6T2.js";import"./getPseudoElementBounds-CnvXSFG7.js";import"./chevron-down-DWFWwlh2.js";import"./index-DO6QRDRK.js";import"./error-BejtHYXk.js";import"./BaseCbacBanner-DFl-fnWE.js";import"./makeExternalStore-CjqRv2MA.js";import"./Tooltip-GLqZOFZa.js";import"./PopoverPopup-70WHecQZ.js";import"./toNumber-CitvARP8.js";import"./useOsdkClient-BDzdDCAd.js";import"./DropdownField-BrhySjl7.js";import"./withOsdkMetrics-BYawk5Qf.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
