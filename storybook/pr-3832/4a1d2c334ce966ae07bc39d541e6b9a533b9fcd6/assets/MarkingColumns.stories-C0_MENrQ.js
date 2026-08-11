import{f as p,j as e}from"./iframe-DK1Bt9lv.js";import{O as i}from"./object-table-BJfc_JiE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ce-wMa_v.js";import"./Table-BvfijykH.js";import"./index-CJSZk4qc.js";import"./Dialog-DeDAzYSk.js";import"./cross-Bx8fvQ0o.js";import"./svgIconContainer-DnjSjGLw.js";import"./useBaseUiId-DcgI8Re9.js";import"./InternalBackdrop-DeJUZl5c.js";import"./composite-IGJfPAlR.js";import"./index-BrXtLi8t.js";import"./index-CNbmxn8b.js";import"./index-DLgHg94v.js";import"./useEventCallback-DsecKjof.js";import"./SkeletonBar-DYCXLh-o.js";import"./LoadingCell-BRKLo6k7.js";import"./ColumnConfigDialog-BmxPhrz9.js";import"./DraggableList-5MSRI83R.js";import"./search-DHCd6J0K.js";import"./Input-AKXtTaZ-.js";import"./useControlled-vdS8rpXB.js";import"./isEqual-DrfEbAtv.js";import"./isObject-CbGGjkoY.js";import"./Button-pHFcucNO.js";import"./ActionButton-Dl2tXDzA.js";import"./Checkbox-CsCjtHTy.js";import"./useValueChanged-CNGxwAjW.js";import"./CollapsiblePanel-mjGJ_uYQ.js";import"./MultiColumnSortDialog-DUErvo2r.js";import"./MenuTrigger-9rcHn7MF.js";import"./CompositeItem-ZQw-TopT.js";import"./ToolbarRootContext-B7RkTGG6.js";import"./getDisabledMountTransitionStyles-1XkDDMjF.js";import"./getPseudoElementBounds-COD7nLet.js";import"./chevron-down-P75F9EWq.js";import"./index-C4v2X0sV.js";import"./error-DuaK5v6b.js";import"./BaseCbacBanner-BrSR8m67.js";import"./makeExternalStore-CwRDfOI3.js";import"./Tooltip-nETMUHwn.js";import"./PopoverPopup-CWfM8YvS.js";import"./toNumber-CgJ7wHM0.js";import"./useOsdkClient-CKcJlW4_.js";import"./tick-Bb3xLDWX.js";import"./DropdownField-rJUVruli.js";import"./withOsdkMetrics-BJBKWdiy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
