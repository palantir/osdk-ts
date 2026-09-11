import{f as p,j as e}from"./iframe-CC13kVkc.js";import{O as i}from"./object-table-BoQNsJEO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-iiwGnqeP.js";import"./Table-CUY0THro.js";import"./index-DU2P82bW.js";import"./Dialog-Cl4AcAGv.js";import"./cross-Gw99IDXX.js";import"./svgIconContainer-BM4AiPUS.js";import"./useBaseUiId-HgrihVGX.js";import"./InternalBackdrop-LVRDcyBz.js";import"./composite-CQT3GPGa.js";import"./index-C0gqvA1S.js";import"./index-DWN_AYu3.js";import"./index-CZ_sbyW4.js";import"./useEventCallback-Dzvd6DP5.js";import"./SkeletonBar-CqLQslyN.js";import"./LoadingCell-ZQEvmqLg.js";import"./ColumnConfigDialog-VYNi19lW.js";import"./DraggableList-Ca43qavx.js";import"./search-DATCmuXl.js";import"./Input-B8esvYJ8.js";import"./useControlled-C8Ss_1q9.js";import"./Button-DChBnEps.js";import"./small-cross-ChcGFzGy.js";import"./ActionButton-D0sOWk1d.js";import"./Checkbox-CUTYqxzh.js";import"./useValueChanged-B8UU_UBm.js";import"./CollapsiblePanel-M2FwY9nP.js";import"./MultiColumnSortDialog-BuKMp48F.js";import"./MenuTrigger-DHFrirSL.js";import"./CompositeItem-DZfCHwau.js";import"./ToolbarRootContext-CWcw0hmq.js";import"./getDisabledMountTransitionStyles-qFjzV3aO.js";import"./getPseudoElementBounds-D0x7-dwB.js";import"./chevron-down-SXnOgnm5.js";import"./index-BbGmio58.js";import"./error-C04PUB1J.js";import"./BaseCbacBanner-CEdNT__P.js";import"./makeExternalStore-2iYjMQbd.js";import"./Tooltip-C0FVSqb3.js";import"./PopoverPopup-CH4QvDfI.js";import"./debounce-B0ThbaZi.js";import"./useOsdkClient-C-mmpbXU.js";import"./tick-BfjgS0G2.js";import"./DropdownField-3R-_B0eM.js";import"./isEqual-CFkoNCQV.js";import"./withOsdkMetrics-DYDVQvXv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
