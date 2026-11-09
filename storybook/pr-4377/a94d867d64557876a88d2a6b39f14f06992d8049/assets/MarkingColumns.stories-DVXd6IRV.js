import{f as p,j as e}from"./iframe-BwKzjaO_.js";import{O as i}from"./object-table-CtwO0Cb5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cw3PuEWm.js";import"./Table-D7NzkWze.js";import"./index-jEwj8y1B.js";import"./Dialog-DrkxivyJ.js";import"./cross-1lQqZabN.js";import"./svgIconContainer-BwQ9ehgu.js";import"./useBaseUiId-BGPb7m92.js";import"./InternalBackdrop-DCVAdZPe.js";import"./composite-Az3dyPdd.js";import"./index-Kp1RIk0o.js";import"./index-DSTqBN-p.js";import"./index-4q7PhTeO.js";import"./useEventCallback-DjZC-G9S.js";import"./SkeletonBar-LISMmzYx.js";import"./LoadingCell-1o51Z1Am.js";import"./ColumnConfigDialog-DX9yNz2p.js";import"./DraggableList-kpSIYOzv.js";import"./search-DdHvONrb.js";import"./Input-4hInwvvu.js";import"./useControlled-DYaNtfGY.js";import"./Button-Cz27x8wi.js";import"./small-cross-BWwYEXIu.js";import"./ActionButton-8eBbMlAk.js";import"./Checkbox-DLcp3PlG.js";import"./useValueChanged-m0H_6TBE.js";import"./CollapsiblePanel-D68KQNQi.js";import"./MultiColumnSortDialog-bs1kxzdX.js";import"./MenuTrigger-DMbbUQ5u.js";import"./CompositeItem-Cp7s4593.js";import"./ToolbarRootContext-BtpiBS9l.js";import"./getDisabledMountTransitionStyles-BdphTWCa.js";import"./getPseudoElementBounds-4gbF3_cn.js";import"./chevron-down-BTGBlQFb.js";import"./index-BV1P-O2s.js";import"./error-Nw58INx5.js";import"./BaseCbacBanner-DNDHOrYw.js";import"./makeExternalStore-GJQDziWf.js";import"./Tooltip-Dr8Setpm.js";import"./isObject-CfracQ9h.js";import"./debounce-F8ygRT2p.js";import"./useOsdkClient-DMp68QLo.js";import"./tick-D4wK5tyJ.js";import"./DropdownField-CfFskAQQ.js";import"./isEqual-qYCEMLNC.js";import"./_baseIsEqual-DP6XDtsT.js";import"./withOsdkMetrics-3WubJygy.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
