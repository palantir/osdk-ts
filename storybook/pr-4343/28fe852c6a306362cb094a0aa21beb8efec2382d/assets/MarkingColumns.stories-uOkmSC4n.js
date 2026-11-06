import{f as p,j as e}from"./iframe-C_zjGY3J.js";import{O as i}from"./object-table-D_a_bNrF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CxQirRCn.js";import"./Table-BmZ3cbF4.js";import"./index-DKxF60He.js";import"./Dialog-BlUCTEGI.js";import"./cross-CQU2s8jh.js";import"./svgIconContainer-D5MQxCYm.js";import"./useBaseUiId-B_8kV6Oo.js";import"./InternalBackdrop-uWsHH71n.js";import"./composite-Cr4kgIEQ.js";import"./index-9SuB44sP.js";import"./index-DHjZHyf_.js";import"./index-DI66YYCT.js";import"./useEventCallback-BQXY3ym0.js";import"./SkeletonBar-Cy9nbF32.js";import"./LoadingCell-ClHyyMra.js";import"./ColumnConfigDialog-CphJnc9v.js";import"./DraggableList-C-oqobil.js";import"./search-BzCll0d5.js";import"./Input-DcJi9KF0.js";import"./useControlled-Cax61rbp.js";import"./Button-CKW0-13G.js";import"./small-cross-CGjWQ0oG.js";import"./ActionButton-C5vJNt5z.js";import"./Checkbox-DfWzx-fE.js";import"./useValueChanged-BYMJHvk0.js";import"./CollapsiblePanel-BDYGizlk.js";import"./MultiColumnSortDialog-B9lziHSh.js";import"./MenuTrigger-CqjyYUeG.js";import"./CompositeItem-LZfgl15E.js";import"./ToolbarRootContext-CDpaEjw6.js";import"./getDisabledMountTransitionStyles-XdJXtecO.js";import"./getPseudoElementBounds-BkxLwt0A.js";import"./chevron-down-DXGDx1Zu.js";import"./index-B0AlpjVO.js";import"./error-D5GOl81y.js";import"./BaseCbacBanner-D9ha1EV-.js";import"./makeExternalStore-UmBMWTEb.js";import"./Tooltip-DApHIikG.js";import"./PopoverPopup-BzhSaZz_.js";import"./debounce-h7EBhWzB.js";import"./useOsdkClient-Y2kyMsP0.js";import"./tick-CL77rkJb.js";import"./DropdownField-CyGzvNY6.js";import"./isEqual-iv7yWJ2R.js";import"./withOsdkMetrics-BNDJqEzp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
