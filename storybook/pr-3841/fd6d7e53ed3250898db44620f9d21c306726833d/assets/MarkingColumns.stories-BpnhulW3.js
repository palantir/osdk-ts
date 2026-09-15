import{f as p,j as e}from"./iframe-lPbU9V6o.js";import{O as i}from"./object-table-CIp0ToWc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CfcQGX_H.js";import"./Table-BJV2q72H.js";import"./index-BgY5H93d.js";import"./Dialog-DuRrc0QT.js";import"./cross-1MrZuHJo.js";import"./svgIconContainer-DdnoMbP6.js";import"./useBaseUiId-B5KMMy-h.js";import"./InternalBackdrop-BhwiTjVN.js";import"./composite-COK8eLgF.js";import"./index-D_uPtWn9.js";import"./index-Dw0sPzkR.js";import"./index-BQiDKTAm.js";import"./useEventCallback-CQBa0_96.js";import"./SkeletonBar-BqV2iuqD.js";import"./LoadingCell-lrdD8Ijg.js";import"./ColumnConfigDialog-CkGE76dh.js";import"./DraggableList-Cbah8ZBW.js";import"./search-BpuAyapl.js";import"./Input-Bs12mOix.js";import"./useControlled-DmJZYhoD.js";import"./Button-B8cvgo0T.js";import"./small-cross-BMajOB7A.js";import"./ActionButton-Ct_RY74Q.js";import"./Checkbox-C7E2drHm.js";import"./useValueChanged-D78zyaD8.js";import"./CollapsiblePanel-D3QrSoDf.js";import"./MultiColumnSortDialog-CVIfx6wW.js";import"./MenuTrigger-DLj-E7PY.js";import"./CompositeItem-vBOQ9KDG.js";import"./ToolbarRootContext-CioZEdCf.js";import"./getDisabledMountTransitionStyles-BP3w0PCy.js";import"./getPseudoElementBounds-C_eOrCbl.js";import"./chevron-down-BHa1JvBu.js";import"./index-CKx0DSN2.js";import"./error-Ba94mTx6.js";import"./BaseCbacBanner-B8fuQNun.js";import"./makeExternalStore-CvGEVSlU.js";import"./Tooltip-DX66rpSM.js";import"./PopoverPopup-Bdk46Ceq.js";import"./debounce-Cj3rKq4j.js";import"./useOsdkClient-DdgRVKHN.js";import"./tick-DR2B2bzz.js";import"./DropdownField-C-MLBQws.js";import"./isEqual-B1HSOOeH.js";import"./withOsdkMetrics-CF099yPb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
