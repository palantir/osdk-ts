import{f as p,j as e}from"./iframe-B7lh4g6p.js";import{O as i}from"./object-table-Bkm9lh3W.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bs-nMSmN.js";import"./Table-B_46x3FM.js";import"./index-DEvGhliI.js";import"./Dialog-BzopL0Vi.js";import"./cross-BYT7TYIn.js";import"./svgIconContainer-BNlhaeSZ.js";import"./useBaseUiId-Bb1FrUqT.js";import"./InternalBackdrop-D0lSPPfD.js";import"./composite-Dkx2J5ep.js";import"./index-DhDUpT6q.js";import"./index-DPe8iSwh.js";import"./index-DsIDLdue.js";import"./useEventCallback-CqT8udWU.js";import"./SkeletonBar-BnnPCVvc.js";import"./LoadingCell-DL0oq-Y1.js";import"./ColumnConfigDialog-OUdG8yLN.js";import"./DraggableList-GejUIgG3.js";import"./search-LFDcG9Bw.js";import"./Input-Cv8mC2jD.js";import"./useControlled-CPKeQZ_f.js";import"./Button-Cdt1t7O2.js";import"./small-cross-Q4Mn0c4O.js";import"./ActionButton-vOzY96R-.js";import"./Checkbox-CGscG7J1.js";import"./useValueChanged-BwX_swTd.js";import"./CollapsiblePanel-CSh4ea_Q.js";import"./MultiColumnSortDialog-QKJ7omg5.js";import"./MenuTrigger-BaFbYHCc.js";import"./CompositeItem-DtBwKtoa.js";import"./ToolbarRootContext-oEsqExNC.js";import"./getDisabledMountTransitionStyles-DT79YMLS.js";import"./getPseudoElementBounds-C8FT8HZf.js";import"./chevron-down-B2xEAqn8.js";import"./index-D2-d5N75.js";import"./error-CTtfffuQ.js";import"./BaseCbacBanner-Bm92q348.js";import"./makeExternalStore-DqOv6fSv.js";import"./Tooltip-i5Zb1xth.js";import"./PopoverPopup-BdiLEXnM.js";import"./debounce-BwLH3R9O.js";import"./useOsdkClient-C1-7Io4T.js";import"./tick-xBqsThOV.js";import"./DropdownField-heO63W5v.js";import"./isEqual-B2jZ4Prp.js";import"./withOsdkMetrics-FDsqzYBW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
