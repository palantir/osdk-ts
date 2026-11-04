import{f as p,j as e}from"./iframe-DrF4uDXw.js";import{O as i}from"./object-table-CM95MaM2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-u_zBXynr.js";import"./Table-kd6lbu9d.js";import"./index-CVI5kV9I.js";import"./Dialog-BrX1t0fv.js";import"./cross-CpHoxb52.js";import"./svgIconContainer-DTs7PmKd.js";import"./useBaseUiId-C9RyiOK8.js";import"./InternalBackdrop-DofvZUsK.js";import"./composite-Bq13iBNY.js";import"./index-BDX0ToeT.js";import"./index-CGWCVoH4.js";import"./index-BnGuicAT.js";import"./useEventCallback-BTghxZoS.js";import"./SkeletonBar-0N9X2Eze.js";import"./LoadingCell-BVuDg30F.js";import"./ColumnConfigDialog--izrLFr-.js";import"./DraggableList-CSNOh3nO.js";import"./search-CELVamy6.js";import"./Input-CdEHyPrX.js";import"./useControlled-CZU-WiQ8.js";import"./Button-YLbQ9ZAy.js";import"./small-cross-CJbFFKn2.js";import"./ActionButton-BLh9uJNd.js";import"./Checkbox-BhjXID7e.js";import"./useValueChanged-zSpMIuHM.js";import"./CollapsiblePanel-C9eazrfz.js";import"./MultiColumnSortDialog-DfEBvsXN.js";import"./MenuTrigger-CAXmNMT1.js";import"./CompositeItem-D46vdXYg.js";import"./ToolbarRootContext-C8VOBVuh.js";import"./getDisabledMountTransitionStyles-BEvFk-mr.js";import"./getPseudoElementBounds-D-ciol2Y.js";import"./chevron-down-DrKAguLe.js";import"./index-DyhoC8yA.js";import"./error-LoVtbcsO.js";import"./BaseCbacBanner-23rij7S2.js";import"./makeExternalStore-DYuKTott.js";import"./Tooltip-cvIFboQ2.js";import"./PopoverPopup-g1OrYGZg.js";import"./debounce-CWgpGISZ.js";import"./useOsdkClient-DIPpS90p.js";import"./tick-DD1ZkEBA.js";import"./DropdownField-D6v5zaPU.js";import"./isEqual-DckClti8.js";import"./withOsdkMetrics-CRS-8bKl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
