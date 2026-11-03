import{f as p,j as e}from"./iframe-D9CyQ-7D.js";import{O as i}from"./object-table-DO3hxB-o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D5O23N40.js";import"./Table-GRdDa-oK.js";import"./index-DuJGsL9q.js";import"./Dialog-DKCrkoAO.js";import"./cross-BenluPmH.js";import"./svgIconContainer-AOGkHpnu.js";import"./useBaseUiId-D_fLEN6E.js";import"./InternalBackdrop-DeKeGHaG.js";import"./composite-XfhWG8gu.js";import"./index-1c9qBFFa.js";import"./index-AxS2IGOk.js";import"./index-BOD_CvT4.js";import"./useEventCallback-ypal6-pO.js";import"./SkeletonBar-Cv4TXNgc.js";import"./LoadingCell-B6Dj7aLc.js";import"./ColumnConfigDialog-BC-wDrCL.js";import"./DraggableList-DH_wtghe.js";import"./search-DGt86ZvF.js";import"./Input-CmtlVQ4G.js";import"./useControlled-C_-Glr9o.js";import"./Button-BQcwiuJB.js";import"./small-cross-B9cBwOBi.js";import"./ActionButton-BfglUtnD.js";import"./Checkbox-C2wClEH5.js";import"./useValueChanged-CjMx0qik.js";import"./CollapsiblePanel-mjI7efHF.js";import"./MultiColumnSortDialog-CM7ThF2W.js";import"./MenuTrigger-Dy26HhZf.js";import"./CompositeItem-DcIoFALJ.js";import"./ToolbarRootContext-BcdYYsZZ.js";import"./getDisabledMountTransitionStyles-D4n7H05A.js";import"./getPseudoElementBounds-DDgTpPXV.js";import"./chevron-down-CdLJsGpG.js";import"./index-D1YdEA6M.js";import"./error-C3QVKQPv.js";import"./BaseCbacBanner-DTcSoVNL.js";import"./makeExternalStore-tubzd2Ls.js";import"./Tooltip-DYOaLqjU.js";import"./PopoverPopup-B0CqW0hV.js";import"./debounce-Axu-J2_C.js";import"./useOsdkClient-WrTrHCKg.js";import"./tick-BiI5E4yJ.js";import"./DropdownField-GBcl7Wc9.js";import"./isEqual-Zl9340i5.js";import"./withOsdkMetrics-C8sht1w0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
