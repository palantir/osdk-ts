import{f as p,j as e}from"./iframe-BBjL-F6y.js";import{O as i}from"./object-table-CXgEsSVL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DNVbAuUc.js";import"./Table-ZazoxAIc.js";import"./index-YgwbFw5i.js";import"./Dialog-BS7ILeGP.js";import"./cross-DmliyvQK.js";import"./svgIconContainer-CHtsuizn.js";import"./useBaseUiId-CMNBQkED.js";import"./InternalBackdrop-BLmLXoC_.js";import"./composite-CUtkN34M.js";import"./index-kvFmoSiE.js";import"./index-R2_PcSMY.js";import"./index-CcQENiZT.js";import"./useEventCallback-CtDlrGU2.js";import"./SkeletonBar-Ck_nxwmH.js";import"./LoadingCell-BPP60fFV.js";import"./ColumnConfigDialog-C8dtcxLo.js";import"./DraggableList-1onnzR4p.js";import"./search-DTU0lDb9.js";import"./Input-wfcqgvpx.js";import"./useControlled-B4FriTOA.js";import"./Button-BVwSTECw.js";import"./small-cross-BAdgYS23.js";import"./ActionButton-CMs-ukEC.js";import"./Checkbox-B6nUj6Bc.js";import"./useValueChanged-Br0cAu9s.js";import"./CollapsiblePanel-DBvswhTh.js";import"./MultiColumnSortDialog-D8jxgPqR.js";import"./MenuTrigger-DA08kItI.js";import"./CompositeItem-C0luX3iR.js";import"./ToolbarRootContext-YS97F8pO.js";import"./getDisabledMountTransitionStyles-CeDfIUP4.js";import"./getPseudoElementBounds-DK-NlwaQ.js";import"./chevron-down-6vd3dKBy.js";import"./index-Cc2JD9jP.js";import"./error-CjgVLvJc.js";import"./BaseCbacBanner-Cq6uSAZ4.js";import"./makeExternalStore-D1LPwt7p.js";import"./Tooltip-BT8w1i9z.js";import"./PopoverPopup-OgEMtoaP.js";import"./debounce-C2ZfHN3V.js";import"./useOsdkClient-DkAGOt-l.js";import"./tick-DQggEu_6.js";import"./DropdownField-BzShEg54.js";import"./isEqual-CwEb78fT.js";import"./withOsdkMetrics-B0Y7OQ6I.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
