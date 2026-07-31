import{f as p,j as e}from"./iframe-CstWj4ez.js";import{O as i}from"./object-table-D7hvvrF-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BCM2Mrwh.js";import"./Table-Cb3VnGLM.js";import"./index-BKtj_CIh.js";import"./Dialog-B2ZfHIXA.js";import"./cross-6T7z6U36.js";import"./svgIconContainer-BsM_A13O.js";import"./useBaseUiId-DZ_WZ3fx.js";import"./InternalBackdrop-C-LNt-lH.js";import"./composite-BUmYDl_r.js";import"./index-BqvUKCfb.js";import"./index-BQ4WMtZt.js";import"./index-RA07jDgR.js";import"./useEventCallback-Dee24_X-.js";import"./SkeletonBar-C0XxhtHg.js";import"./LoadingCell-DIEG5nbG.js";import"./ColumnConfigDialog-DPUMBc5m.js";import"./DraggableList-u9hTx2SB.js";import"./search-DhbfxSt8.js";import"./Input-oNr1j4J9.js";import"./useControlled-C4IcZtnx.js";import"./isEqual-DfwxU_vW.js";import"./isObject-ChnDkpR1.js";import"./Button-BKds_g4a.js";import"./ActionButton-DxKWF70L.js";import"./Checkbox-C96hH_f4.js";import"./useValueChanged-DBzN32tG.js";import"./CollapsiblePanel-BRIZbe3n.js";import"./MultiColumnSortDialog-bc7y89Mr.js";import"./MenuTrigger-D8OrdQfp.js";import"./CompositeItem-CQRAlint.js";import"./ToolbarRootContext-CozoeZB6.js";import"./getDisabledMountTransitionStyles-D9tKl1ns.js";import"./getPseudoElementBounds-vxrIWz2n.js";import"./chevron-down-CG1jYwFN.js";import"./index-BZ-wGrZ-.js";import"./error-Ddbcc8Kd.js";import"./BaseCbacBanner-DwTii65W.js";import"./makeExternalStore-v46grpUp.js";import"./Tooltip-d_vTBVW5.js";import"./PopoverPopup-fwfs0Gd4.js";import"./toNumber-1ndxpNJ-.js";import"./useOsdkClient-C1tS2z5J.js";import"./tick-CxKwPCHU.js";import"./DropdownField-C26FrhNO.js";import"./withOsdkMetrics-q3McYtTu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
