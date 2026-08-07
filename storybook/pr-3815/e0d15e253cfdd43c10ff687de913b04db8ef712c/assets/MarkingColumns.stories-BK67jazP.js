import{f as p,j as e}from"./iframe-DUMMG66q.js";import{O as i}from"./object-table-y-ty5vb6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFk0oZbE.js";import"./Table-DuC5XDhz.js";import"./index-Cs1y_uJV.js";import"./Dialog-BXqIRIEd.js";import"./cross-elCH4-ly.js";import"./svgIconContainer-4zJcw9JU.js";import"./useBaseUiId-5XWzXM4h.js";import"./InternalBackdrop-Cv0tbTTj.js";import"./composite-DIXGEIwe.js";import"./index-CWiUghgz.js";import"./index-P2xopAr5.js";import"./index-ClgWwO2h.js";import"./useEventCallback-DA-m43ZO.js";import"./SkeletonBar-C_PQdqyM.js";import"./LoadingCell-Ca4K5CJF.js";import"./ColumnConfigDialog-DC4TYUk-.js";import"./DraggableList-D7Zzslrv.js";import"./search-DFdLmLH_.js";import"./Input-BfayLVf4.js";import"./useControlled-Dai2soRW.js";import"./small-cross-D_FPHoDU.js";import"./Button--52y3PBE.js";import"./ActionButton-C0v0p_2K.js";import"./Checkbox-eTZtLuFA.js";import"./useValueChanged-DnY0PIHv.js";import"./CollapsiblePanel-BNzZ-MW5.js";import"./MultiColumnSortDialog-DZm-4-ET.js";import"./MenuTrigger-BrrECu0v.js";import"./CompositeItem-B_iG35wZ.js";import"./ToolbarRootContext-Ct53oQXX.js";import"./getDisabledMountTransitionStyles-SVn-J0rv.js";import"./getPseudoElementBounds-CJ0xpki3.js";import"./chevron-down-B8MX778T.js";import"./index-DwYNByYI.js";import"./error-FWwnFt00.js";import"./BaseCbacBanner-OMOUzt76.js";import"./makeExternalStore-BhIGJmu2.js";import"./Tooltip-CYOxlVMl.js";import"./PopoverPopup-D3jRIBKO.js";import"./Combobox-Bh_PWN3v.js";import"./useOsdkClient-Jw6g4ObF.js";import"./tick-CWsnKL-h.js";import"./DropdownField-sxfK_NXI.js";import"./withOsdkMetrics-CoOA1jkj.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
