import{f as p,j as e}from"./iframe-DJpO_6mK.js";import{O as i}from"./object-table-B2dN-LCc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GI-tMhcV.js";import"./Table-Dg3D6S30.js";import"./index-Da0zq60o.js";import"./Dialog-SMe1UAwu.js";import"./cross-7wx910Yp.js";import"./svgIconContainer-BXariDMs.js";import"./useBaseUiId-V4YDTLU-.js";import"./InternalBackdrop-C73rlr0M.js";import"./composite-BF9Swh2Y.js";import"./index-Lks_ei54.js";import"./index-THQXJEcW.js";import"./index-CoNUXFpY.js";import"./useEventCallback-BqBJVn3L.js";import"./SkeletonBar-B9TWtrAf.js";import"./LoadingCell-D0pm2UJs.js";import"./ColumnConfigDialog-BXqg7A2E.js";import"./DraggableList-BupV1NOa.js";import"./search-yqKQokLr.js";import"./Input-DGLD7TKX.js";import"./useControlled-qKe1fmb3.js";import"./Button-CwysH2z4.js";import"./small-cross-BCt-wViZ.js";import"./ActionButton-wdIB-PMi.js";import"./Checkbox-D0UVX6R0.js";import"./useValueChanged-D5XUhKWQ.js";import"./CollapsiblePanel-BI6lLrWz.js";import"./MultiColumnSortDialog-UPP_Mqyi.js";import"./MenuTrigger-FkklsD17.js";import"./CompositeItem-9_63dtCO.js";import"./ToolbarRootContext-BlqCCViI.js";import"./getDisabledMountTransitionStyles-BVq8IuaH.js";import"./getPseudoElementBounds-DvuhtSAs.js";import"./chevron-down-BVx0EdZG.js";import"./index-DplCgUMJ.js";import"./error-xwSiXxIa.js";import"./BaseCbacBanner-lBQW8ZlB.js";import"./makeExternalStore-DoNjT8AE.js";import"./Tooltip-Df3DP3K9.js";import"./PopoverPopup-DsCmiqgE.js";import"./debounce-8z5zliAt.js";import"./useOsdkClient-B5AQFXxh.js";import"./tick-C6jkrubs.js";import"./DropdownField-QCgrRwcb.js";import"./isEqual-CUL7d5KT.js";import"./withOsdkMetrics-CaCBUU14.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
