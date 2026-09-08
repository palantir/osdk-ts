import{f as p,j as e}from"./iframe-mgqf8OZi.js";import{O as i}from"./object-table-SJgzEJz4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6SQT8UT.js";import"./Table-g7yaJ1L-.js";import"./index-GTfiZUIM.js";import"./Dialog-Dsam8t3K.js";import"./cross-B_dcVm8T.js";import"./svgIconContainer-BQB9e_Z9.js";import"./useBaseUiId-rjNzDssU.js";import"./InternalBackdrop-DVxp9s1p.js";import"./composite-BsXSlU2S.js";import"./index-CgMXMemF.js";import"./index-DsvT80A6.js";import"./index-DJS_p_MX.js";import"./useEventCallback-xpfDomYZ.js";import"./SkeletonBar-CpPJCyI4.js";import"./LoadingCell-Bxhy2pMB.js";import"./ColumnConfigDialog-cORxpJRm.js";import"./DraggableList-DgeGxPXD.js";import"./search-fgyV2px-.js";import"./Input-Cm9G-_vw.js";import"./useControlled-DnmOZ-e1.js";import"./Button-CvdgIKvp.js";import"./small-cross-BNDbkZTe.js";import"./ActionButton-D1kCGHo0.js";import"./Checkbox-COC_tl74.js";import"./useValueChanged-BEUlp8B0.js";import"./CollapsiblePanel-rkq5PuPE.js";import"./MultiColumnSortDialog-6X1v5wAF.js";import"./MenuTrigger-0TxP9vJm.js";import"./CompositeItem-B5XhVs9k.js";import"./ToolbarRootContext-DXjHGJkz.js";import"./getDisabledMountTransitionStyles-CzJH416S.js";import"./getPseudoElementBounds-B5c6Myvw.js";import"./chevron-down-CvP42XCE.js";import"./index-CWWnTRcQ.js";import"./error-5K0NVF3b.js";import"./BaseCbacBanner-BlF52LTx.js";import"./makeExternalStore-BoIB8VtI.js";import"./Tooltip-CD6Ogyv5.js";import"./PopoverPopup-IFfb3EAK.js";import"./debounce-Cs3_KK6g.js";import"./useOsdkClient-CIHn_x5t.js";import"./tick-12a-8qSb.js";import"./DropdownField-BDV4nY7z.js";import"./isEqual-C3RpNQ5t.js";import"./withOsdkMetrics-CrZy2PZ2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
