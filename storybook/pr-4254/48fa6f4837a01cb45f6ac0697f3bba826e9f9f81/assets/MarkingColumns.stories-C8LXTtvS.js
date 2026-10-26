import{f as p,j as e}from"./iframe-B41lgdKN.js";import{O as i}from"./object-table-CmxWLL0B.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DI5m88JW.js";import"./Table-Co7hecY_.js";import"./index-C2q613GL.js";import"./Dialog-CWeVqIwm.js";import"./cross-C9BOtq1y.js";import"./svgIconContainer-D7Eue1ZZ.js";import"./useBaseUiId-BgB3Fx_y.js";import"./InternalBackdrop-BILEvSbn.js";import"./composite-B54UYmeO.js";import"./index-D_IcPDjf.js";import"./index-Cujrcm2-.js";import"./index-DdsQXbay.js";import"./useEventCallback-xWqpVog3.js";import"./SkeletonBar-CGdxBAF7.js";import"./LoadingCell-jbi8AJ8l.js";import"./ColumnConfigDialog-CL5y9Q7l.js";import"./DraggableList-D9UwDPNT.js";import"./search-D5xcli0X.js";import"./Input-C5V0yZmk.js";import"./useControlled-COiD_eR7.js";import"./Button-CLPb2Ul9.js";import"./small-cross-BiIUW-iP.js";import"./ActionButton-BUTqoq-Q.js";import"./Checkbox-B4SrzSIC.js";import"./useValueChanged-uNqrEDBx.js";import"./CollapsiblePanel-m4kdZM0i.js";import"./MultiColumnSortDialog-BGl8Ae1h.js";import"./MenuTrigger-0SMi1Bkm.js";import"./CompositeItem-DKeB6UbW.js";import"./ToolbarRootContext-DaqyENip.js";import"./getDisabledMountTransitionStyles-vQmeQXHd.js";import"./getPseudoElementBounds-S244zxdS.js";import"./chevron-down-DPEakPZ3.js";import"./index-B5Wpr3Nx.js";import"./error-DxQUrNdP.js";import"./BaseCbacBanner-CYN7YaF7.js";import"./makeExternalStore-BkjE2Bfi.js";import"./Tooltip-9yKLS0Jj.js";import"./PopoverPopup-DAEUfrcq.js";import"./debounce-UdAL_ybq.js";import"./useOsdkClient-D00y5DQT.js";import"./tick-jRfkJ3jM.js";import"./DropdownField-BKkvVjBl.js";import"./isEqual-BoLhe-YY.js";import"./withOsdkMetrics-BJYPVZ1i.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
