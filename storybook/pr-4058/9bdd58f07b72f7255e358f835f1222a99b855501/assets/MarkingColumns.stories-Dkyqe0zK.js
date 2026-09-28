import{f as p,j as e}from"./iframe-BoQuj6Ft.js";import{O as i}from"./object-table-GNC1D2ug.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFHoCRfY.js";import"./Table-CDFpwVxP.js";import"./index-B3vkyGje.js";import"./Dialog-DW-h_BPY.js";import"./cross-DIlflA87.js";import"./svgIconContainer-D1Y91RJ2.js";import"./useBaseUiId-DKKiKBjO.js";import"./InternalBackdrop-DgOgxUR-.js";import"./composite-CvoBvof0.js";import"./index-BQDMsvBO.js";import"./index-BUrjWVUX.js";import"./index-DsXJv-A-.js";import"./useEventCallback-DnyNlyEn.js";import"./SkeletonBar-nJu3VKHu.js";import"./LoadingCell-Djs5NpLk.js";import"./ColumnConfigDialog-UHepu_B4.js";import"./DraggableList-Bsl9deDL.js";import"./search-DxfJTzvK.js";import"./Input-BrV6l60a.js";import"./useControlled-DfpvXrbD.js";import"./Button-CVGCG-PX.js";import"./small-cross-PzH5JPQr.js";import"./ActionButton-ZwUOGMpg.js";import"./Checkbox-Caya9tIR.js";import"./useValueChanged-DxKn8kpX.js";import"./CollapsiblePanel-CDq3d3lQ.js";import"./MultiColumnSortDialog-DB1LaGMz.js";import"./MenuTrigger-BheayIBg.js";import"./CompositeItem-DPojjMsZ.js";import"./ToolbarRootContext-Civm9m7-.js";import"./getDisabledMountTransitionStyles-CAOvj7ui.js";import"./getPseudoElementBounds-W6TVi3du.js";import"./chevron-down-DuDBYDyj.js";import"./index-Cye0oCf9.js";import"./error-ovbXz9QM.js";import"./BaseCbacBanner-C7FvseMr.js";import"./makeExternalStore-ILzBw2IP.js";import"./Tooltip-RUFZkZKo.js";import"./PopoverPopup-CtGLWZkC.js";import"./debounce-DKOD7ARd.js";import"./useOsdkClient-BlIU4lOf.js";import"./tick-Cdn4730X.js";import"./DropdownField-B9wcQ97-.js";import"./isEqual-B9kgXbB2.js";import"./withOsdkMetrics-Bww6KylD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
