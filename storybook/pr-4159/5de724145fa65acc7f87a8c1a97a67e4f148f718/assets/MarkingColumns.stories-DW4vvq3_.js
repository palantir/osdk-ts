import{f as p,j as e}from"./iframe-BkonaQ0V.js";import{O as i}from"./object-table-DQRry3AB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-wgqeRAml.js";import"./Table-B7e1ZhoA.js";import"./index-CygiEJb6.js";import"./Dialog-DBnPtZV1.js";import"./cross-CkDGtOaH.js";import"./svgIconContainer-B_Cau1X9.js";import"./useBaseUiId-DnbkQC4-.js";import"./InternalBackdrop-Cih9MBeb.js";import"./composite-CFHemZO9.js";import"./index-CBL-z8ep.js";import"./index-ct3tIu0S.js";import"./index-CpL6Ija4.js";import"./useEventCallback-B9xx7Ssa.js";import"./SkeletonBar-BnNg27Cz.js";import"./LoadingCell-Dhy8klPf.js";import"./ColumnConfigDialog-D9SM7fc_.js";import"./DraggableList-CYtRZi8h.js";import"./search-J0YUGWpH.js";import"./Input-BP09pCNP.js";import"./useControlled-DJSj5exZ.js";import"./Button-uS_BewGO.js";import"./small-cross-Ds0-Yg5S.js";import"./ActionButton-CMP6VOQi.js";import"./Checkbox-BtZ_gIR0.js";import"./useValueChanged-BRpmqW3_.js";import"./CollapsiblePanel-r9bycGf3.js";import"./MultiColumnSortDialog-B9pEUzuv.js";import"./MenuTrigger-4ZXDXskl.js";import"./CompositeItem-Bl9Mb02l.js";import"./ToolbarRootContext-C3x2oEG2.js";import"./getDisabledMountTransitionStyles-CaY-5WcQ.js";import"./getPseudoElementBounds-CJ3hgKhp.js";import"./chevron-down-BvYaF6aU.js";import"./index-CcaHmPI_.js";import"./error-DnbjG5aU.js";import"./BaseCbacBanner-BiMj7cVS.js";import"./makeExternalStore-CxsJ8F0x.js";import"./Tooltip-BUWMYkhF.js";import"./PopoverPopup-Ck4dFzY0.js";import"./debounce-DpSqLCDy.js";import"./useOsdkClient-BSF82BLH.js";import"./tick-DKukE1zV.js";import"./DropdownField-BXi0zmhU.js";import"./isEqual-CJO4zUtQ.js";import"./withOsdkMetrics-DYHyomoB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
