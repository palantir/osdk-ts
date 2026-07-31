import{f as p,j as e}from"./iframe-CeQ9YtV4.js";import{O as i}from"./object-table-BxrQP0cJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-LX8fJrHu.js";import"./Table-BqAJjUeM.js";import"./index--uV_mo53.js";import"./Dialog-k4lSz6IK.js";import"./cross-CmnPk6HR.js";import"./svgIconContainer-GQ1XFBl8.js";import"./useBaseUiId-MCv3qySg.js";import"./InternalBackdrop-BS-OEKdk.js";import"./composite-CeZ8ImGH.js";import"./index-B2gRy6GZ.js";import"./index-CGQM6Os1.js";import"./index-Yx5SIecJ.js";import"./useEventCallback-BtGRXxeV.js";import"./SkeletonBar-N-zsLKaX.js";import"./LoadingCell-BtQaK8Zr.js";import"./ColumnConfigDialog-EoETL9wH.js";import"./DraggableList-kbqdQ0kF.js";import"./search-D3yZFVGs.js";import"./Input-H4BR9uZl.js";import"./useControlled-Cy5Phl1t.js";import"./isEqual-DUgQY7Mu.js";import"./isObject-CS_a61Zd.js";import"./Button-uPcuQ9i2.js";import"./ActionButton-lddM9Wov.js";import"./Checkbox-D5dopIKN.js";import"./useValueChanged-BK8X04Vv.js";import"./CollapsiblePanel-CEweUmgi.js";import"./MultiColumnSortDialog-BZDt7V34.js";import"./MenuTrigger-C3B9uJvo.js";import"./CompositeItem-B8rBXA17.js";import"./ToolbarRootContext-CHRb4C_O.js";import"./getDisabledMountTransitionStyles-CL-pUnsN.js";import"./getPseudoElementBounds-CJ2J4ejo.js";import"./chevron-down-CacDCs_q.js";import"./index-BgMHbt7V.js";import"./error-DsKJBY0C.js";import"./BaseCbacBanner-VDVrikJN.js";import"./makeExternalStore-Vue07-gf.js";import"./Tooltip-BC79QeFs.js";import"./PopoverPopup-9OKXsxO2.js";import"./toNumber-BJy4K-hW.js";import"./useOsdkClient-DJu2PeSo.js";import"./tick-DMp0VIXe.js";import"./DropdownField-_8UThL_X.js";import"./withOsdkMetrics-Cjsqhpmc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
