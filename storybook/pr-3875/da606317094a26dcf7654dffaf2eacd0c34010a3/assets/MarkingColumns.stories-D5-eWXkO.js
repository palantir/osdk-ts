import{f as p,j as e}from"./iframe-CVr9LoxM.js";import{O as i}from"./object-table-BAwa8E0X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B3cY2-AW.js";import"./Table-IkqPuQ6B.js";import"./index-Df4Vb_Rg.js";import"./Dialog-Bvfn0Z3y.js";import"./cross-CBN4pK4_.js";import"./svgIconContainer-BVc8zREf.js";import"./useBaseUiId-BgjPqsl9.js";import"./InternalBackdrop-B9YxhYvi.js";import"./composite-CWgHrWA4.js";import"./index-F2yAeMdf.js";import"./index-HRRYB8HE.js";import"./index-DjjNgAfl.js";import"./useEventCallback-B-NY5P9l.js";import"./SkeletonBar-NYup2M2c.js";import"./LoadingCell-DTpfEbFX.js";import"./ColumnConfigDialog-CM1tbYEm.js";import"./DraggableList-CWLH3RMw.js";import"./search-Brj5g3oE.js";import"./Input-BcPZGFIr.js";import"./useControlled-smGAEf-G.js";import"./Button-vPPL3ll8.js";import"./small-cross-DABERClE.js";import"./ActionButton-D0hhWxeW.js";import"./Checkbox-DDyQcp9_.js";import"./useValueChanged-DNfH4ZzU.js";import"./CollapsiblePanel-C0K5tgYw.js";import"./MultiColumnSortDialog-npyZMECM.js";import"./MenuTrigger-5w2KnMTa.js";import"./CompositeItem-B09-p_Fm.js";import"./ToolbarRootContext-CLf2yNEL.js";import"./getDisabledMountTransitionStyles-DmWpyYJT.js";import"./getPseudoElementBounds-CCTtg9pk.js";import"./chevron-down-B0k-btX-.js";import"./index-Clqhcc_a.js";import"./error-BXLmWA6n.js";import"./BaseCbacBanner-C5szwo-7.js";import"./makeExternalStore--O5_5o65.js";import"./Tooltip-BiirjfzW.js";import"./PopoverPopup-DM6VnfOU.js";import"./debounce-BAwOJApV.js";import"./useOsdkClient-DdROgngo.js";import"./tick-Bnn8MQdF.js";import"./DropdownField-CgCH9W6l.js";import"./isEqual-D8JbxFr7.js";import"./withOsdkMetrics-DBLS2NQA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
