import{f as p,j as e}from"./iframe-CK-e_P5n.js";import{O as i}from"./object-table-DhEk3d9R.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CdfmlsWT.js";import"./Table-BsqGsGlo.js";import"./index-D1NbsZsT.js";import"./Dialog-DGPTJcg5.js";import"./cross-DdB0B2DT.js";import"./svgIconContainer-CUe9azR3.js";import"./useBaseUiId-B6Thtd3O.js";import"./InternalBackdrop--jYqCsuV.js";import"./composite-CF-uZGHD.js";import"./index-BmOKXyuk.js";import"./index-BAl9UwQ_.js";import"./index-BI0nF061.js";import"./useEventCallback-DLi0pkHc.js";import"./SkeletonBar-CJ14_0Ym.js";import"./LoadingCell-C3R3Sh3u.js";import"./ColumnConfigDialog-CPUbQB7h.js";import"./DraggableList-CD7OhgBJ.js";import"./search-D8NL3mRl.js";import"./Input-DGmd96_F.js";import"./useControlled-flZbgJml.js";import"./Button-DnxkikPI.js";import"./small-cross-D6eJtQvT.js";import"./ActionButton-2BJhUFRZ.js";import"./Checkbox-CIXQ1R8k.js";import"./useValueChanged-DBUoKfVc.js";import"./CollapsiblePanel-Be9_urdY.js";import"./MultiColumnSortDialog-B4hxLfgp.js";import"./MenuTrigger-D5vobJQ0.js";import"./CompositeItem-BRNQwarA.js";import"./ToolbarRootContext-BzLZyYhL.js";import"./getDisabledMountTransitionStyles-GfO_uBTj.js";import"./getPseudoElementBounds-9YvIcjPC.js";import"./chevron-down-D3RJwgIP.js";import"./index--at66w-A.js";import"./error-BFAdc9Td.js";import"./BaseCbacBanner-D-KqGODx.js";import"./makeExternalStore-Bf6pa7D3.js";import"./Tooltip-RRrzeJA8.js";import"./PopoverPopup-DXgU2mtn.js";import"./debounce-CnX0V1iA.js";import"./useOsdkClient-TQnWVOaJ.js";import"./tick-BVNELgej.js";import"./DropdownField-BncLboR3.js";import"./isEqual-CZA0FnVD.js";import"./withOsdkMetrics-DFjAQMzo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
