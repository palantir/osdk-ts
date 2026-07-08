import{f as n,j as t}from"./iframe-C3M0ibnK.js";import{O as p}from"./object-table-D9JMwwe4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dq3I7SvT.js";import"./Table-84IQLpH3.js";import"./index-ZvOL7lZf.js";import"./Dialog-CjiEi5sN.js";import"./cross-BI4GsqjQ.js";import"./svgIconContainer-DSBQR884.js";import"./useBaseUiId-CYU0Aa4C.js";import"./InternalBackdrop-DkZGTAlN.js";import"./composite-CfxCIp6J.js";import"./index-D_rR43YW.js";import"./index-BiR5IGcB.js";import"./index-DTY7k1sO.js";import"./useEventCallback-DO2EGasC.js";import"./SkeletonBar-DurTd1uq.js";import"./LoadingCell-DcbcManN.js";import"./ColumnConfigDialog-DQnrxcDv.js";import"./DraggableList-CI5Up97b.js";import"./search-Bt4Jbvws.js";import"./Input-BWHvrmva.js";import"./useControlled-CdimtrKj.js";import"./Button-RX9yNhBH.js";import"./small-cross-C7pHjhMx.js";import"./ActionButton-DM1gFNyq.js";import"./Checkbox-DuyDYvpp.js";import"./useValueChanged-UQmINXLm.js";import"./CollapsiblePanel-BkoLCpYZ.js";import"./MultiColumnSortDialog-DR9Elpew.js";import"./MenuTrigger-07y3m-HA.js";import"./CompositeItem-DIOcFwHt.js";import"./ToolbarRootContext-DYEEOqxe.js";import"./getDisabledMountTransitionStyles-DznC3f7m.js";import"./getPseudoElementBounds-KvBbeMQM.js";import"./chevron-down-CAh4KlDn.js";import"./index-BrrzTLea.js";import"./error-AN1MG3rt.js";import"./BaseCbacBanner-Bh4ODgb5.js";import"./makeExternalStore-DxRwCjOF.js";import"./Tooltip-CS3vPVIk.js";import"./PopoverPopup-CiOpO3qb.js";import"./toNumber-B6VrvkIG.js";import"./useOsdkClient-CLik-i61.js";import"./tick--ioFs_19.js";import"./DropdownField-DJ6cZEpR.js";import"./withOsdkMetrics-Cvm9tXEj.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
