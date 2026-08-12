import{f as p,j as e}from"./iframe-BkwEqmSq.js";import{O as i}from"./object-table-TH5w0ohv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-MCr5wq_M.js";import"./Table-XAj1eNJ_.js";import"./index-DVW2Aiqe.js";import"./Dialog-CNJAJjh6.js";import"./cross-B56sfghs.js";import"./svgIconContainer-CB5tgpNi.js";import"./useBaseUiId-CVhcNOwH.js";import"./InternalBackdrop-BW_Fh5ka.js";import"./composite-DEnckzcf.js";import"./index-CcQ72eda.js";import"./index-DRtYq8s7.js";import"./index-R9Q-yxnj.js";import"./useEventCallback-mxsKsguF.js";import"./SkeletonBar-zrDLmD62.js";import"./LoadingCell-CSxVDz4m.js";import"./ColumnConfigDialog-DBfPfDSr.js";import"./DraggableList-2eAIh112.js";import"./search-DHn2yg3a.js";import"./Input-BtbblvMI.js";import"./useControlled-Tz_Ckt-9.js";import"./isEqual-CkRoP2e3.js";import"./isObject-CjPaUCcr.js";import"./Button-BQo7qXQ1.js";import"./ActionButton-B57iWbGd.js";import"./Checkbox-Cv3GRsWI.js";import"./useValueChanged-CO42ZUx-.js";import"./CollapsiblePanel-vCFw-oDK.js";import"./MultiColumnSortDialog-Bzkmnwn_.js";import"./MenuTrigger-kgTyu6wu.js";import"./CompositeItem-B2o5Yurs.js";import"./ToolbarRootContext-Cf2pD7ow.js";import"./getDisabledMountTransitionStyles-CgyOu_YU.js";import"./getPseudoElementBounds-BI5Djy6Y.js";import"./chevron-down-OyX7j9kx.js";import"./index-DOxRJGP0.js";import"./error-BxIC2Wcp.js";import"./BaseCbacBanner-OOsF9RDB.js";import"./makeExternalStore-SZ3-wHy1.js";import"./Tooltip-WAe8FeGa.js";import"./PopoverPopup-7nXi6RKO.js";import"./toNumber-CZtIvmY8.js";import"./useOsdkClient-CUzqemF4.js";import"./tick-D3FOvlN4.js";import"./DropdownField-CWFIhDoe.js";import"./withOsdkMetrics-B6cmau_u.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
