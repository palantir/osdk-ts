import{f as p,j as e}from"./iframe-BaZrwhZx.js";import{O as i}from"./object-table-D3_OLLkg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DnruKc6a.js";import"./Table-29S7j1SD.js";import"./index-D-0PlAzK.js";import"./Dialog-CgLu58Ng.js";import"./cross-DyGYbG0h.js";import"./svgIconContainer-CPS4uDwC.js";import"./useBaseUiId-DP1A1DzF.js";import"./InternalBackdrop-BlVFF9Uk.js";import"./composite-TWu21kAm.js";import"./index-DqDEI7FH.js";import"./index-DPaJCD1i.js";import"./index-1hjhibA2.js";import"./useEventCallback-DleBT0Tw.js";import"./SkeletonBar-cgjN-Dqz.js";import"./LoadingCell-BGDV83Xi.js";import"./ColumnConfigDialog-BAlHt39x.js";import"./DraggableList-BS0v4LuN.js";import"./search-71bjR_1r.js";import"./Input-DobSEfMB.js";import"./useControlled-Dlt0xr8S.js";import"./Button-dH1tlH1-.js";import"./small-cross-Co1EYnRL.js";import"./ActionButton-R0r9xrNl.js";import"./Checkbox-Df3SYGBx.js";import"./useValueChanged-DASMciQb.js";import"./CollapsiblePanel-8fm_d55s.js";import"./MultiColumnSortDialog-DEShEitN.js";import"./MenuTrigger-CqaGYtW4.js";import"./CompositeItem-DSkIv2C1.js";import"./ToolbarRootContext-2JwHwx0i.js";import"./getDisabledMountTransitionStyles-NVGqMnQf.js";import"./getPseudoElementBounds-DgPoZQqw.js";import"./chevron-down-DT4qGbGn.js";import"./index-DF9-_rao.js";import"./error-BGPDkYrO.js";import"./BaseCbacBanner-DMtcNorV.js";import"./makeExternalStore-CILR1JwG.js";import"./Tooltip-DdG1nlz8.js";import"./PopoverPopup-ZXp_dq-B.js";import"./debounce-DnilrV4i.js";import"./useOsdkClient-BjmYpX5h.js";import"./tick-BvP19Wyv.js";import"./DropdownField-B9z89_X7.js";import"./isEqual-BKhwX9Wf.js";import"./withOsdkMetrics-Bcc9SY-J.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
