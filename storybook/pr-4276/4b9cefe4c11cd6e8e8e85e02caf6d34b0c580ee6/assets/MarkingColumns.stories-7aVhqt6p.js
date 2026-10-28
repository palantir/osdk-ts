import{f as p,j as e}from"./iframe-Dd3-Yl6N.js";import{O as i}from"./object-table-DpU8rOP1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9sTmRJF.js";import"./Table-CJkFrbE4.js";import"./index-BiUH_hpy.js";import"./Dialog-DXHTFgGh.js";import"./cross-Eqzrh4V_.js";import"./svgIconContainer-B7D9nEeV.js";import"./useBaseUiId-CtlPAw8O.js";import"./InternalBackdrop-CmK4_yD0.js";import"./composite-B7_CRtOh.js";import"./index-Dk7mnZge.js";import"./index-CbNEs7cg.js";import"./index-lGfMNjwG.js";import"./useEventCallback-USAjYtY7.js";import"./SkeletonBar-C8vnuUpQ.js";import"./LoadingCell-cNBqiPSl.js";import"./ColumnConfigDialog-DNtdz8t8.js";import"./DraggableList-D0jY9WXX.js";import"./search-uFxQauC9.js";import"./Input-BFjIxR6L.js";import"./useControlled-tZuoOrAX.js";import"./Button-DgI_B-BT.js";import"./small-cross-CrGAYCsL.js";import"./ActionButton-4WW_Bvqo.js";import"./Checkbox-SDQwho6i.js";import"./useValueChanged-XCnKvKXZ.js";import"./CollapsiblePanel-BOoyEJPY.js";import"./MultiColumnSortDialog-BDhw5L_6.js";import"./MenuTrigger-BzJv6k6o.js";import"./CompositeItem-BLXgiCJ0.js";import"./ToolbarRootContext-YQCd6tra.js";import"./getDisabledMountTransitionStyles-BXNmj0yT.js";import"./getPseudoElementBounds-DmW7W9n1.js";import"./chevron-down-COpzwsCU.js";import"./index-D_tBmJ25.js";import"./error-OA8M66y2.js";import"./BaseCbacBanner-CQiUk9d3.js";import"./makeExternalStore-C5CgSHDu.js";import"./Tooltip-B41k5vGI.js";import"./isObject-kZj6fUWz.js";import"./debounce-DKDpCZ3V.js";import"./useOsdkClient-DZ1zIMqw.js";import"./tick-CH9Wrri9.js";import"./DropdownField-Dt4JM_pr.js";import"./isEqual-W7tw2uNy.js";import"./_baseIsEqual-CkzZKYO0.js";import"./withOsdkMetrics-CIN8qa0j.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
