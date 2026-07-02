import{f as n,j as t}from"./iframe-CLDsBV4b.js";import{O as p}from"./object-table-BBaOI620.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ImY-3Tkl.js";import"./Table-BmQN5Y-A.js";import"./index-CVbsMZkU.js";import"./Dialog-VooW0osR.js";import"./cross-uUJOgjDM.js";import"./svgIconContainer-B0-Osyzd.js";import"./useBaseUiId-Dv4KmylI.js";import"./InternalBackdrop-Bi0Cn17P.js";import"./composite-BRMsnUXF.js";import"./index-e4mxTqMP.js";import"./index-EDzrlKGw.js";import"./index-3yi7muqP.js";import"./useEventCallback-vb_eFYsP.js";import"./SkeletonBar-CuEsSadX.js";import"./LoadingCell-BFE3Wkp_.js";import"./ColumnConfigDialog-C77NtgMe.js";import"./DraggableList-D4vXh2l-.js";import"./search-BfVogbzH.js";import"./Input-5UhDKxar.js";import"./useControlled-BH-3hGUj.js";import"./Button--AYZir1z.js";import"./small-cross-C4fwuQnm.js";import"./ActionButton-DYThkUNs.js";import"./Checkbox-O_dXB0mU.js";import"./minus-CtrBneY5.js";import"./tick-COgct8dh.js";import"./useValueChanged-CX86UfPH.js";import"./caret-down-DLyYVH2_.js";import"./CollapsiblePanel-DmjBQiry.js";import"./MultiColumnSortDialog-B9q2BMlX.js";import"./MenuTrigger-Bb-XzFhv.js";import"./CompositeItem-Cfq73WMB.js";import"./ToolbarRootContext-D9bBLRO0.js";import"./getDisabledMountTransitionStyles-DxOrWM_H.js";import"./getPseudoElementBounds-CE6MgU7Y.js";import"./chevron-down-DA1iqkEX.js";import"./index-Dh36Af02.js";import"./error-DKRBPOsK.js";import"./BaseCbacBanner-x2cv7nSI.js";import"./makeExternalStore-CMSaaukK.js";import"./Tooltip-BYAkp0kk.js";import"./PopoverPopup-COhAgGOR.js";import"./toNumber-D0Dmd_cs.js";import"./useOsdkClient-Dwk1AZku.js";import"./DropdownField-D6J-H6c6.js";import"./withOsdkMetrics-lwB191nh.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
