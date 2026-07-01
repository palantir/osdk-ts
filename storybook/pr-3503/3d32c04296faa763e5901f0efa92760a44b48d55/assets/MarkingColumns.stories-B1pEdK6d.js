import{f as n,j as t}from"./iframe-DjEgLMAM.js";import{O as p}from"./object-table-CosS6UUS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DBKhXP9g.js";import"./Table-CKUDW4sS.js";import"./index-CLtpJQXX.js";import"./Dialog-Du4xq6Yu.js";import"./cross-BNPbY7gE.js";import"./svgIconContainer-DPeNF_UO.js";import"./useBaseUiId-BXDGWuI9.js";import"./InternalBackdrop-D9cEwsto.js";import"./composite-DVEjK_io.js";import"./index-D3Kghrq9.js";import"./index-dHz_CGkU.js";import"./index-DOqCS51R.js";import"./useEventCallback-DHGFeAXn.js";import"./SkeletonBar-D2r_O6mT.js";import"./LoadingCell-kEpFANUv.js";import"./ColumnConfigDialog-BG4a9MGb.js";import"./DraggableList-BXkqRorB.js";import"./search-Bi5j0QCK.js";import"./Input-bGFjEjrx.js";import"./useControlled-BGAnsKbE.js";import"./Button-DVwb7n6r.js";import"./small-cross-CN7W264h.js";import"./ActionButton-Ckoj7S1n.js";import"./Checkbox-OcCZ0VMp.js";import"./minus-CoGa4U-N.js";import"./tick-D5fsYElO.js";import"./useValueChanged-CPBAOKRR.js";import"./caret-down-D7wsVUN3.js";import"./CollapsiblePanel-Do9zSkRp.js";import"./MultiColumnSortDialog-BOt6dm6C.js";import"./MenuTrigger-6DbC-Mca.js";import"./CompositeItem-arDxfIMH.js";import"./ToolbarRootContext-lfQd9qNq.js";import"./getDisabledMountTransitionStyles-7GowVRvk.js";import"./getPseudoElementBounds-8rzY-lFF.js";import"./chevron-down-2a8AGLFW.js";import"./index-CjAAAxt8.js";import"./error-B6MFoLtV.js";import"./BaseCbacBanner-hd0zYs27.js";import"./makeExternalStore-CNwpHCO5.js";import"./Tooltip-DtcMJE6i.js";import"./PopoverPopup-BKGyFSVw.js";import"./toNumber-DaIaDLwD.js";import"./useOsdkClient-DQVe2lux.js";import"./DropdownField-DtrDTEHr.js";import"./withOsdkMetrics-bSyJUBQf.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
