import{f as p,j as e}from"./iframe-B_zRUDuE.js";import{O as i}from"./object-table-Bv64vFep.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CxVJftgz.js";import"./Table-crjZDJuE.js";import"./index-sn9mtHlU.js";import"./Dialog-YgM3zMLP.js";import"./cross-_ERVYG6L.js";import"./svgIconContainer-CxXL_oXh.js";import"./useBaseUiId-8u_jCgH6.js";import"./InternalBackdrop-D-Mc2aWz.js";import"./composite-CiMgDYUm.js";import"./index-o0vWfmid.js";import"./index-DT6FHhAE.js";import"./index-CFIH2_Ln.js";import"./useEventCallback-DXtMhdq9.js";import"./SkeletonBar-_7p8Ae6C.js";import"./LoadingCell-BBr8zF--.js";import"./ColumnConfigDialog-BJtuM6eb.js";import"./DraggableList-BNGFL0c8.js";import"./search-C1xWyvK0.js";import"./Input-Db4KedVJ.js";import"./useControlled-DlwI9PYM.js";import"./Button-CY0tELjq.js";import"./small-cross-CNevPnY1.js";import"./ActionButton-p5CBVKmi.js";import"./Checkbox-COebmtnq.js";import"./useValueChanged-Bj4HpRwM.js";import"./CollapsiblePanel-B55pzrP7.js";import"./MultiColumnSortDialog-DAX7LlwZ.js";import"./MenuTrigger-BYEGdV1Q.js";import"./CompositeItem-LThRFFEu.js";import"./ToolbarRootContext-Bj3x-8aq.js";import"./getDisabledMountTransitionStyles-CIBqTnBJ.js";import"./getPseudoElementBounds-REbqj2aK.js";import"./chevron-down-C87rVGKO.js";import"./index-Cq4s-83z.js";import"./error-Co0vxDqJ.js";import"./BaseCbacBanner-DFepNaLt.js";import"./makeExternalStore-DD9WI4JF.js";import"./Tooltip-D7_c9ORd.js";import"./isObject-BgbyztzY.js";import"./debounce-Bz563Y3c.js";import"./useOsdkClient-DO77RjGc.js";import"./tick-Cso2FHRc.js";import"./DropdownField-U6RE18pq.js";import"./isEqual-DJWYrLXk.js";import"./_baseIsEqual-Z_m_8oSa.js";import"./withOsdkMetrics-DrGnBbgp.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
