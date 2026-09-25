import{f as p,j as e}from"./iframe-D9Hj5gXP.js";import{O as i}from"./object-table-Bzw1yp1a.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-46igzL0d.js";import"./Table-CMOy0Hhh.js";import"./index-BGKBGloN.js";import"./Dialog-B15eJBe2.js";import"./cross-Q-Rh6Md8.js";import"./svgIconContainer-DUAmOtu_.js";import"./useBaseUiId-B3UGffNT.js";import"./InternalBackdrop-DlA1FKGc.js";import"./composite-aH77Cbrs.js";import"./index-AnDVD4rM.js";import"./index-B3OkYupr.js";import"./index-jowm6RnV.js";import"./useEventCallback-Bwe-RZ2-.js";import"./SkeletonBar-DXV33xVm.js";import"./LoadingCell-DaoSKNPM.js";import"./ColumnConfigDialog-NielXSTy.js";import"./DraggableList-CVNnHbov.js";import"./search-Itm3619L.js";import"./Input-CbGZkwW7.js";import"./useControlled-Bt5_5gUM.js";import"./Button-Djg1VeWx.js";import"./small-cross-C9HLCPSm.js";import"./ActionButton-n9ZfdiZ_.js";import"./Checkbox-V_Hcv-4P.js";import"./useValueChanged-tLVk5hgi.js";import"./CollapsiblePanel-DJVPti5E.js";import"./MultiColumnSortDialog-v5JhTEnu.js";import"./MenuTrigger-BrLf1mzD.js";import"./CompositeItem-DWvpMhCv.js";import"./ToolbarRootContext-D-kNo729.js";import"./getDisabledMountTransitionStyles-nKpBFA9S.js";import"./getPseudoElementBounds-BLiX7v_s.js";import"./chevron-down-CTUGvO1x.js";import"./index-dBvJuZc1.js";import"./error-CBRvRAY4.js";import"./BaseCbacBanner-CXx3HT4t.js";import"./makeExternalStore-BMGSmgu1.js";import"./Tooltip-bqfYO4-a.js";import"./PopoverPopup-CsWrH6rr.js";import"./debounce-DfbGHQI5.js";import"./useOsdkClient-DldD5hq7.js";import"./tick-DjzXnXMl.js";import"./DropdownField-szw3P9fl.js";import"./isEqual-txn9w4tS.js";import"./withOsdkMetrics-CL-J3VAE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
