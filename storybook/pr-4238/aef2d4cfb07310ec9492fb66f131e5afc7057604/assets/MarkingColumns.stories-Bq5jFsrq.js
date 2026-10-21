import{f as p,j as e}from"./iframe-CazyyGHD.js";import{O as i}from"./object-table-D2-bxDkP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-MgT8dc0X.js";import"./Table-DL3rssEZ.js";import"./index-Bwh0Qzuq.js";import"./Dialog-BF26qTkP.js";import"./cross-Cm-jIUuV.js";import"./svgIconContainer-D-fln-_9.js";import"./useBaseUiId-_VheOjS_.js";import"./InternalBackdrop-B4za0H0s.js";import"./composite-eyAHIZy6.js";import"./index-oHFfHIzb.js";import"./index-CtTCUyk6.js";import"./index-B5m19dzZ.js";import"./useEventCallback-UNd6PIzw.js";import"./SkeletonBar-B_xaQIaw.js";import"./LoadingCell-C0HWwQql.js";import"./ColumnConfigDialog-bVzUBl6y.js";import"./DraggableList-C9jWvyiI.js";import"./search-CwjMn8PH.js";import"./Input-BqWLM-qJ.js";import"./useControlled-W6MY3ceN.js";import"./Button-ByiOliQr.js";import"./small-cross-DG5C9V4j.js";import"./ActionButton-CY0CRft6.js";import"./Checkbox-CU_5eAW2.js";import"./useValueChanged-DBJ5aULu.js";import"./CollapsiblePanel-Di7CgTfu.js";import"./MultiColumnSortDialog--ev1RyHU.js";import"./MenuTrigger-Bv0F8YkX.js";import"./CompositeItem-rCpLyuDw.js";import"./ToolbarRootContext-Dv2tMkap.js";import"./getDisabledMountTransitionStyles-mlYUDhO6.js";import"./getPseudoElementBounds-9TC7yV4Y.js";import"./chevron-down-C2D_MUNL.js";import"./index-k2L1SHEL.js";import"./error-0vET3H6E.js";import"./BaseCbacBanner-C_L56GIo.js";import"./makeExternalStore-CoBf-2QX.js";import"./Tooltip-IDqRDs0x.js";import"./PopoverPopup-Ctcy6mDh.js";import"./debounce-C5wZ6LH3.js";import"./useOsdkClient-D82r7lVV.js";import"./tick-BlG7e-el.js";import"./DropdownField-C5gHzoJd.js";import"./isEqual-BrBpXSU5.js";import"./withOsdkMetrics-C07As7Qh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
