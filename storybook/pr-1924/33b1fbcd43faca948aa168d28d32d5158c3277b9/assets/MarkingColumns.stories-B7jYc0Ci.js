import{f as n,j as t}from"./iframe-CiXN6Rb7.js";import{O as p}from"./object-table-CIKb1wBd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C-ku1ssL.js";import"./Table-4fBcPoVC.js";import"./index-BOVQhHfc.js";import"./Dialog-DRaTLPku.js";import"./cross-B2R0Y7pu.js";import"./svgIconContainer-BNoMSL-q.js";import"./useBaseUiId-DhqbF7uF.js";import"./InternalBackdrop-DhtV_RvY.js";import"./composite-DvNZ1Icc.js";import"./index-C8266igj.js";import"./index-Dn6kMd0t.js";import"./index-BtZ0neqB.js";import"./useEventCallback-B7PXFVIe.js";import"./SkeletonBar-jsjVj0Sb.js";import"./LoadingCell-uMxOxmsi.js";import"./ColumnConfigDialog-DZbq2yvA.js";import"./DraggableList-Dt_pZtsG.js";import"./search-STEKGZkh.js";import"./Input-Csin5kfK.js";import"./useControlled-BHUaQP_N.js";import"./Button-D1eyqhD7.js";import"./small-cross-BJozEvQa.js";import"./ActionButton-BLNh1UHK.js";import"./Checkbox-DKBWe89z.js";import"./useValueChanged-CL6biBVq.js";import"./CollapsiblePanel-Cmeh3RAf.js";import"./MultiColumnSortDialog-5sGF0iy7.js";import"./MenuTrigger-D4dJlN_S.js";import"./CompositeItem-NTnAxNX4.js";import"./ToolbarRootContext-Rzd-Bgfk.js";import"./getDisabledMountTransitionStyles-BEG6R9mY.js";import"./getPseudoElementBounds-s6RCO5nJ.js";import"./chevron-down-Cl2mbEtn.js";import"./index-DalgX7dU.js";import"./error-DeGXzC9x.js";import"./BaseCbacBanner-D-E1Grr4.js";import"./makeExternalStore-BTybznxs.js";import"./Tooltip-DeHMLUsU.js";import"./PopoverPopup-B2ttA1Hn.js";import"./toNumber-BydbR1Tu.js";import"./useOsdkClient-Bkr3HBLn.js";import"./tick-CgF6etzp.js";import"./DropdownField-DRub4K-3.js";import"./withOsdkMetrics-BeQoUM0s.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
