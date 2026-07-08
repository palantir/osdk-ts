import{f as n,j as t}from"./iframe-DNd3oEu1.js";import{O as p}from"./object-table-CCqH8ClD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BkhphLzz.js";import"./Table-DEehGdH9.js";import"./index-zhrULqdJ.js";import"./Dialog-CSaZIbL-.js";import"./cross-CBGmAvSD.js";import"./svgIconContainer-c_nn8UIB.js";import"./useBaseUiId-xr8gD7t-.js";import"./InternalBackdrop-DUjCFC15.js";import"./composite-DlG9JhR5.js";import"./index--_OvTyQC.js";import"./index-_nbnREgG.js";import"./index-jhPFooSL.js";import"./useEventCallback-WPqLMmlQ.js";import"./SkeletonBar-CPdIE8fy.js";import"./LoadingCell-M2LkFgL4.js";import"./ColumnConfigDialog-J9zzK4EQ.js";import"./DraggableList-EXhSmIOc.js";import"./search-_1Mz--1W.js";import"./Input-BsBr2qPn.js";import"./useControlled-Py1GRmLS.js";import"./Button-C4VEHwmt.js";import"./small-cross-CFxnD4-B.js";import"./ActionButton-B3g_2qtj.js";import"./Checkbox-NciOwjCc.js";import"./useValueChanged-CHRnDDXG.js";import"./CollapsiblePanel-BeRCPbH7.js";import"./MultiColumnSortDialog-DL8K8qlW.js";import"./MenuTrigger-c6TZgHRe.js";import"./CompositeItem-BCVIM9zi.js";import"./ToolbarRootContext-rMH0rm1w.js";import"./getDisabledMountTransitionStyles-BnZs7gdY.js";import"./getPseudoElementBounds-C9PO5eh6.js";import"./chevron-down-DwpCXL8o.js";import"./index-CENbDSjg.js";import"./error-DXBidgeF.js";import"./BaseCbacBanner-B_z9UM9c.js";import"./makeExternalStore-DkiAYWiP.js";import"./Tooltip-Ch7riV-3.js";import"./PopoverPopup-Cf1UikpA.js";import"./toNumber-BWVTTHlk.js";import"./useOsdkClient-BUXJmHa8.js";import"./tick-BFESxHbb.js";import"./DropdownField-DiAGTSFt.js";import"./withOsdkMetrics-DcOj9PWp.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
