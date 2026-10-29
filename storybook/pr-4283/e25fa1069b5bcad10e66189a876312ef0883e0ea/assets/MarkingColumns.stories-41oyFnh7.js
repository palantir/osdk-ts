import{f as p,j as e}from"./iframe-CYk-VOyX.js";import{O as i}from"./object-table-Dlv2NNIH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-SkgcqAwO.js";import"./Table-CcTGCJ8I.js";import"./index-SBfcRZ8A.js";import"./Dialog-BSX3qA9d.js";import"./cross-DMsanrWV.js";import"./svgIconContainer-jVuUMFBU.js";import"./useBaseUiId-DaFkg2Hs.js";import"./InternalBackdrop-Boo6A0xA.js";import"./composite-BKwpvwkR.js";import"./index-C_yRwNB9.js";import"./index-BIIvDw_e.js";import"./index-DPxe0aBZ.js";import"./useEventCallback-BY8DoVsR.js";import"./SkeletonBar-62HfS3Nk.js";import"./LoadingCell-C1ph3ij6.js";import"./ColumnConfigDialog-CngWqElV.js";import"./DraggableList-BPueF49n.js";import"./search-cR64-3Tm.js";import"./Input-D-JL81JO.js";import"./useControlled-C7TGm_r4.js";import"./Button-CExSo-UX.js";import"./small-cross-G7_j2zv8.js";import"./ActionButton-D8hPawwc.js";import"./Checkbox-BYlpXA2o.js";import"./useValueChanged-DrnGNbKP.js";import"./CollapsiblePanel-D0zrAQ08.js";import"./MultiColumnSortDialog-DZEk5xHQ.js";import"./MenuTrigger-CeyAU8Ab.js";import"./CompositeItem-CaDSOm5y.js";import"./ToolbarRootContext--t9DiEt8.js";import"./getDisabledMountTransitionStyles-CPFd5Dgv.js";import"./getPseudoElementBounds-BtB_IhPs.js";import"./chevron-down-Bs06bZ_z.js";import"./index-DHPPBEA9.js";import"./error-zC5vfcSr.js";import"./BaseCbacBanner-BJopHCBa.js";import"./makeExternalStore-B8yIQpmX.js";import"./Tooltip-DygePy8y.js";import"./PopoverPopup-MmB-vCo2.js";import"./debounce-BLRPrO6Z.js";import"./useOsdkClient-CpgQqUq5.js";import"./tick-sF3dW88A.js";import"./DropdownField-B-M_qxJL.js";import"./isEqual-DTmc0HEa.js";import"./withOsdkMetrics-BJbglULT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
