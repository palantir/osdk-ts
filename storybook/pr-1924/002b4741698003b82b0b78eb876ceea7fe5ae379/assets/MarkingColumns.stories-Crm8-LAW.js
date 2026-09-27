import{f as p,j as e}from"./iframe-Ced8wIim.js";import{O as i}from"./object-table-CWR5TEG9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvnlfMzD.js";import"./Table-C9hx4b9U.js";import"./index-DwlP8Kq2.js";import"./Dialog-Bdr_MjQD.js";import"./cross-C1ezeDDh.js";import"./svgIconContainer-_H4YWiIz.js";import"./useBaseUiId-ZzsV-V0Z.js";import"./InternalBackdrop-BEW1kLJE.js";import"./composite-gyhDmABu.js";import"./index-LDJzIvQD.js";import"./index-Cm78izMo.js";import"./index-tRtnayVT.js";import"./useEventCallback-nDEIaijr.js";import"./SkeletonBar-EYFzh_lb.js";import"./LoadingCell-DPDDugg3.js";import"./ColumnConfigDialog-k7B7ez-f.js";import"./DraggableList-BtLLHXzb.js";import"./search-QSUOXDqi.js";import"./Input-KnIMm_iE.js";import"./useControlled-Bx5lxC0c.js";import"./Button-D2RSl0IU.js";import"./small-cross-CL1fxAVq.js";import"./ActionButton-DrbHFVEC.js";import"./Checkbox-DjpZNu9Z.js";import"./useValueChanged-KRQENGkA.js";import"./CollapsiblePanel-CcL0_Of9.js";import"./MultiColumnSortDialog-DqBVCBrx.js";import"./MenuTrigger-CxCj0ZGe.js";import"./CompositeItem-CKE15s8h.js";import"./ToolbarRootContext-BjCMra_B.js";import"./getDisabledMountTransitionStyles-BYykhR9M.js";import"./getPseudoElementBounds-FBWwExr3.js";import"./chevron-down-DpwNucWD.js";import"./index-mKFRvtOv.js";import"./error-yQjggD5T.js";import"./BaseCbacBanner-CNisjaH5.js";import"./makeExternalStore-Cb-8iveq.js";import"./Tooltip-DT2igpMI.js";import"./PopoverPopup-D6vxVy5_.js";import"./debounce-DSdlDxeH.js";import"./useOsdkClient-DWRmKvFn.js";import"./tick-DgJ5ryvj.js";import"./DropdownField-jydwoQac.js";import"./isEqual-pwdPx3XZ.js";import"./withOsdkMetrics-DKNE68LV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
