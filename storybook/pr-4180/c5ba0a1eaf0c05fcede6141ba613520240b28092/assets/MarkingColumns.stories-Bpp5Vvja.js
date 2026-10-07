import{f as p,j as e}from"./iframe-B0BeHSW3.js";import{O as i}from"./object-table-DdTuxNNY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DAJqEBqZ.js";import"./Table-kE_BvdsI.js";import"./index-fkdnmgoB.js";import"./Dialog-B5C9WyLD.js";import"./cross-ChIXxlFh.js";import"./svgIconContainer-3LirYjxc.js";import"./useBaseUiId-CFx2OXwB.js";import"./InternalBackdrop-xPEFo0aI.js";import"./composite-BKG8TgZ7.js";import"./index-CeseuNBk.js";import"./index-B8qFFoze.js";import"./index-ChyoeDYU.js";import"./useEventCallback-B0c3gcjQ.js";import"./SkeletonBar-C5AffQmv.js";import"./LoadingCell-VUqHb4DV.js";import"./ColumnConfigDialog-CfkbMa1G.js";import"./DraggableList-DnLwSB2K.js";import"./search-Eov1ZRug.js";import"./Input-BhPQq-YU.js";import"./useControlled-Y2VvyFT1.js";import"./Button-CUzfzg16.js";import"./small-cross-GcZN--Q5.js";import"./ActionButton-DWP5wTUe.js";import"./Checkbox-CVXwVKB9.js";import"./useValueChanged-IjvfJjRR.js";import"./CollapsiblePanel-chL21z8S.js";import"./MultiColumnSortDialog-C7qO2RVW.js";import"./MenuTrigger-CJ8xEsSL.js";import"./CompositeItem-CCwjGTNJ.js";import"./ToolbarRootContext-BU8BYZpt.js";import"./getDisabledMountTransitionStyles--mZk6BZS.js";import"./getPseudoElementBounds-B-DwAZaN.js";import"./chevron-down-CIEyD1Re.js";import"./index-Dbl4MtyX.js";import"./error-LXXuPtJW.js";import"./BaseCbacBanner-DgmS4GYo.js";import"./makeExternalStore-CLIh_9sw.js";import"./Tooltip-DNEHwr8p.js";import"./PopoverPopup-DAPZVEwH.js";import"./debounce-DeBplguO.js";import"./useOsdkClient-CYqnm12a.js";import"./tick-cnkBzsXZ.js";import"./DropdownField-BHYbQQp4.js";import"./isEqual-BmLwudnH.js";import"./withOsdkMetrics-CRG9AD3M.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
