import{f as p,j as e}from"./iframe-CguRgO1s.js";import{O as i}from"./object-table-DClobAc1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMc7U262.js";import"./Table-DgqZG8yg.js";import"./index-BGS7gDUn.js";import"./Dialog-DrQCiZD0.js";import"./cross-Br0Qm67p.js";import"./svgIconContainer-CLJzNlfz.js";import"./useBaseUiId-B2RjeRps.js";import"./InternalBackdrop-ChJ2KDPv.js";import"./composite-qTi-RAR_.js";import"./index-3k5H_e2z.js";import"./index-But1OdyE.js";import"./index-1mXqmSC_.js";import"./useEventCallback-7pei6QN0.js";import"./SkeletonBar-C9mDcKw7.js";import"./LoadingCell-HaxX9Lad.js";import"./ColumnConfigDialog-Co2PlQSl.js";import"./DraggableList-Bc7B11ei.js";import"./search-DZWqHIsG.js";import"./Input-BbJ-H5cZ.js";import"./useControlled-QGl_Fogg.js";import"./isEqual-DqVS2OMf.js";import"./isObject-BjP6rnQ5.js";import"./Button-BCDQ8FRu.js";import"./ActionButton-DVUeIQz0.js";import"./Checkbox-FKkg598T.js";import"./useValueChanged-BO9nZTVD.js";import"./CollapsiblePanel-C6EUT82b.js";import"./MultiColumnSortDialog-BzaL0aG1.js";import"./MenuTrigger-DekF8dEA.js";import"./CompositeItem-BagBTlO9.js";import"./ToolbarRootContext-BBXfwh82.js";import"./getDisabledMountTransitionStyles-DbdTlOWc.js";import"./getPseudoElementBounds-BZT0R3By.js";import"./chevron-down-BjgaS9xF.js";import"./index-C2kWb54g.js";import"./error-CW261XEm.js";import"./BaseCbacBanner-N5zGLY-T.js";import"./makeExternalStore-DjzIXttj.js";import"./Tooltip-DOX5_Yd2.js";import"./PopoverPopup-Co_6gn5o.js";import"./toNumber-B6NZiykd.js";import"./useOsdkClient-WqhQ7smE.js";import"./tick-l18Y2t-t.js";import"./DropdownField-B1KO5SNX.js";import"./withOsdkMetrics-DNdkJlAo.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
