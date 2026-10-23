import{f as p,j as e}from"./iframe-BRcpmwFv.js";import{O as i}from"./object-table-DZ0d4DEr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5eDbs3J.js";import"./Table-Dx5TKSH0.js";import"./index-DK3oZ2G7.js";import"./Dialog-B2N7jv5R.js";import"./cross-C_YRX_a7.js";import"./svgIconContainer-BHIG5g_O.js";import"./useBaseUiId-BZpEg0W8.js";import"./InternalBackdrop-Bi_i6Gge.js";import"./composite-BLjliQ-J.js";import"./index-Droxy6Rm.js";import"./index-BnsjDL9p.js";import"./index-BlWG8r-Q.js";import"./useEventCallback-f3FFz_4C.js";import"./SkeletonBar-CwZnLaIO.js";import"./LoadingCell-OPmY-b4P.js";import"./ColumnConfigDialog-CrEC7igt.js";import"./DraggableList-DNhYzVQv.js";import"./search-DB_eRkJ7.js";import"./Input-DcIPWMXq.js";import"./useControlled-DbOKjk83.js";import"./Button-D8AxOjNK.js";import"./small-cross-DBM2r0BS.js";import"./ActionButton-BnrjjFOh.js";import"./Checkbox-gzFktAj8.js";import"./useValueChanged-DKSrxV4L.js";import"./CollapsiblePanel-BYDCF-xy.js";import"./MultiColumnSortDialog-CdwriShv.js";import"./MenuTrigger-v7hsXSxC.js";import"./CompositeItem-BjOjS-vj.js";import"./ToolbarRootContext-JjbSW9e7.js";import"./getDisabledMountTransitionStyles-D1N43ayV.js";import"./getPseudoElementBounds-C96XcGvW.js";import"./chevron-down-l6tBIHM5.js";import"./index-DqbNsSYI.js";import"./error-b3Z30HbN.js";import"./BaseCbacBanner-BhR8r3av.js";import"./makeExternalStore-CZ91arQK.js";import"./Tooltip-ZcVO_NEa.js";import"./PopoverPopup-Dh05gS4y.js";import"./debounce-DDQyBRU1.js";import"./useOsdkClient-BUSM7w3V.js";import"./tick-DxXZI3bo.js";import"./DropdownField-66rMfkM0.js";import"./isEqual-B89pKhWY.js";import"./withOsdkMetrics-Dwn_FNSW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
