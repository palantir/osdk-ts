import{f as p,j as e}from"./iframe-DexdKsaQ.js";import{O as i}from"./object-table--Xzz2q6z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3HMhfxy.js";import"./Table-0uxJVwjw.js";import"./index-CbLEfBq5.js";import"./Dialog-Bl_IB0gG.js";import"./cross-D_rqjJ8K.js";import"./svgIconContainer-BRMcYWO4.js";import"./useBaseUiId-sMlbFyJU.js";import"./InternalBackdrop-AGxJgsS7.js";import"./composite-BciPM06w.js";import"./index-BqerP4CK.js";import"./index-__d1p36X.js";import"./index-DRMwbFJm.js";import"./useEventCallback-00FuE3yt.js";import"./SkeletonBar-CTo2vf2l.js";import"./LoadingCell-QVcjovzl.js";import"./ColumnConfigDialog-8H_Huj5j.js";import"./DraggableList-IrB-ONqE.js";import"./search-DTk97rWq.js";import"./Input-BuDuHwVf.js";import"./useControlled-DJ_HdD9M.js";import"./Button-Cpyi3piv.js";import"./small-cross-CDaXIpxf.js";import"./ActionButton-5jPmd7jR.js";import"./Checkbox-Cs-cCTFT.js";import"./useValueChanged-CrQ7wcWr.js";import"./CollapsiblePanel-gO76M-DU.js";import"./MultiColumnSortDialog-a4DIDRAh.js";import"./MenuTrigger-DC413XLI.js";import"./CompositeItem-UFfjwpOD.js";import"./ToolbarRootContext-B4sm5nDg.js";import"./getDisabledMountTransitionStyles-ux2ze1bo.js";import"./getPseudoElementBounds-B3DGHAsz.js";import"./chevron-down-CPG2b4DG.js";import"./index-DEkTB2Ut.js";import"./error-mWFE-E3g.js";import"./BaseCbacBanner-B0Bpjetm.js";import"./makeExternalStore-CGnJLW95.js";import"./Tooltip-CXPRVM-4.js";import"./PopoverPopup-Bl0JUMbC.js";import"./debounce-B6TRsFCS.js";import"./useOsdkClient-mkKseWzk.js";import"./tick-D75lzxtW.js";import"./DropdownField-BSrXQuo_.js";import"./isEqual-BYVoFHZi.js";import"./withOsdkMetrics-DPD_IOvo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
