import{f as p,j as e}from"./iframe-CoDqFtQr.js";import{O as i}from"./object-table-BmBGZThO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmQtlo2-.js";import"./Table-DWcHzG-V.js";import"./index-DEf63PKQ.js";import"./Dialog-Cs_17NaL.js";import"./cross-CnhoIzD9.js";import"./svgIconContainer-KqUQbUEW.js";import"./useBaseUiId-l4Ce-Oes.js";import"./InternalBackdrop-DZoeQnIs.js";import"./composite-CyFYModE.js";import"./index-ZhLzpxX-.js";import"./index-BYn91zFu.js";import"./index-eELGNG8N.js";import"./useEventCallback-B3OhgyVJ.js";import"./SkeletonBar-L8l21dAL.js";import"./LoadingCell-B8dq9CYH.js";import"./ColumnConfigDialog-Db0f33eN.js";import"./DraggableList-C3U59dkH.js";import"./search-Ds5uDEZ1.js";import"./Input-BZ6jwM42.js";import"./useControlled-DH19P8RP.js";import"./Button-CdKky6kN.js";import"./small-cross-DKu8qp5W.js";import"./ActionButton-CWGovcK-.js";import"./Checkbox-C-XCEvn7.js";import"./useValueChanged-PW6Wu233.js";import"./CollapsiblePanel-DWKoNggU.js";import"./MultiColumnSortDialog-l_NYF0ae.js";import"./MenuTrigger-1ra3ZOCO.js";import"./CompositeItem-yz-_V8KW.js";import"./ToolbarRootContext-DUeXrFD2.js";import"./getDisabledMountTransitionStyles-DDMf5lOQ.js";import"./getPseudoElementBounds-Bem6NL1M.js";import"./chevron-down-BoowdlwO.js";import"./index-BQtDLv6q.js";import"./error-pPyGOl1i.js";import"./BaseCbacBanner-DdkNBOcB.js";import"./makeExternalStore-CJioVlys.js";import"./Tooltip-Ck5G824C.js";import"./PopoverPopup-CwQX9C7x.js";import"./debounce-CxxL-CaD.js";import"./useOsdkClient-DPsK-Rb2.js";import"./tick-CexL6eUj.js";import"./DropdownField-CZjYNLnh.js";import"./isEqual-Ca1ADH9J.js";import"./withOsdkMetrics-DlX8mWus.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
