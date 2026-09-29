import{f as p,j as e}from"./iframe-DKYmESdc.js";import{O as i}from"./object-table-BzdfRhLC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D5LE5Idy.js";import"./Table-CZvg9-PS.js";import"./index-DiIAgi_U.js";import"./Dialog-DJCFoWTr.js";import"./cross-yKYTlWK6.js";import"./svgIconContainer-D8ijfEF1.js";import"./useBaseUiId-CdKuMMMb.js";import"./InternalBackdrop-D2B5n5hm.js";import"./composite-DHljAWKo.js";import"./index-Dh-P4ImN.js";import"./index-BEPjmphW.js";import"./index-C6gaZbLL.js";import"./useEventCallback-ClNFTONN.js";import"./SkeletonBar-B4aoYFGC.js";import"./LoadingCell-BA8GKKnf.js";import"./ColumnConfigDialog-B9GK9pIT.js";import"./DraggableList-ChqmULcQ.js";import"./search-B7mMrQlf.js";import"./Input-BxCkIabd.js";import"./useControlled-B4q39qZO.js";import"./Button-DgkmSaF3.js";import"./small-cross-CgLsC0gq.js";import"./ActionButton-BU5G-FGV.js";import"./Checkbox-EdSHZ3e6.js";import"./useValueChanged-UpP8-F1K.js";import"./CollapsiblePanel-rz3tKFdi.js";import"./MultiColumnSortDialog-DVsWttF1.js";import"./MenuTrigger-Cn617Mmm.js";import"./CompositeItem-DhBadV4y.js";import"./ToolbarRootContext-CrwTeoix.js";import"./getDisabledMountTransitionStyles-C2zNLNsa.js";import"./getPseudoElementBounds-CQqlgHcK.js";import"./chevron-down-D1R0n3KO.js";import"./index-CC7Zqv6C.js";import"./error-DPhIreuO.js";import"./BaseCbacBanner-CIktjUa1.js";import"./makeExternalStore-DpXPZl7r.js";import"./Tooltip-CyVgxnxr.js";import"./PopoverPopup-18xMmYUE.js";import"./debounce-DJdertEZ.js";import"./useOsdkClient-D7r4vk7f.js";import"./tick-CfTVfx8m.js";import"./DropdownField-DdjBmbfl.js";import"./isEqual-BukSJ3gf.js";import"./withOsdkMetrics-WG4CGMhx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
