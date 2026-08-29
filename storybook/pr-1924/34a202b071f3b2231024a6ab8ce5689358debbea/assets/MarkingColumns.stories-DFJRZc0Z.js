import{f as p,j as e}from"./iframe-TjZyb1bS.js";import{O as i}from"./object-table-BV4MS_q3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6vf5keDo.js";import"./Table-BGNs9QD3.js";import"./index-DO-d5Nhw.js";import"./Dialog-23QYsuiV.js";import"./cross-CcY2Z_E0.js";import"./svgIconContainer-g1t1jdQ-.js";import"./useBaseUiId-Dy5x7CTr.js";import"./InternalBackdrop-CL0l71br.js";import"./composite-B6T__7Xq.js";import"./index-08ELxWRo.js";import"./index-7MMySw2W.js";import"./index-IX_ZzulM.js";import"./useEventCallback-B_jx4L8R.js";import"./SkeletonBar-BN1dFAOr.js";import"./LoadingCell-BAUyVAf6.js";import"./ColumnConfigDialog-x4FXt_HP.js";import"./DraggableList-BNTHvxrB.js";import"./search-EfOYLmyo.js";import"./Input-JrCXDO00.js";import"./useControlled-DPKnbe0H.js";import"./Button-D4RUqMFW.js";import"./small-cross-_-bOsCQr.js";import"./ActionButton-B1ZAyzPy.js";import"./Checkbox-C3YPr4s5.js";import"./useValueChanged-C4PO7ygq.js";import"./CollapsiblePanel-BaMD_OMq.js";import"./MultiColumnSortDialog-C5kaH62z.js";import"./MenuTrigger-DFd2Cz7b.js";import"./CompositeItem-BA7lzU2v.js";import"./ToolbarRootContext-DAXEwoS8.js";import"./getDisabledMountTransitionStyles-DjPnR7Pk.js";import"./getPseudoElementBounds-CK3999ou.js";import"./chevron-down-aFaMKH-b.js";import"./index-ntrV61BC.js";import"./error-Ch19zHJw.js";import"./BaseCbacBanner-TgOhY0Ii.js";import"./makeExternalStore-C8VFKLfw.js";import"./Tooltip-CXH0W3g_.js";import"./PopoverPopup-CFt2P9Dg.js";import"./debounce-C2sRTyHH.js";import"./useOsdkClient-DYOHCNMK.js";import"./tick-zIDdkd7l.js";import"./DropdownField-CBqw0p8h.js";import"./isEqual-DpAq6o8s.js";import"./withOsdkMetrics-C27aqxoK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
