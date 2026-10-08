import{f as p,j as e}from"./iframe-BQiIs3LK.js";import{O as i}from"./object-table-T4goorN8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dw2jPLDK.js";import"./Table-DseHNMSU.js";import"./index-z86HRZpN.js";import"./Dialog-C4NP9gdP.js";import"./cross-BBOEsUzu.js";import"./svgIconContainer-De2PI1mj.js";import"./useBaseUiId-CLlcPdwB.js";import"./InternalBackdrop-CMbNIGM4.js";import"./composite-CMA2GnO4.js";import"./index-D61lICmk.js";import"./index-zzfNqQm7.js";import"./index-OK0CF_qs.js";import"./useEventCallback-Q6WE3pG5.js";import"./SkeletonBar-BakbpVs6.js";import"./LoadingCell-CAdes-UV.js";import"./ColumnConfigDialog-ANSH7ooC.js";import"./DraggableList-DBzvUx3G.js";import"./search-CwMbCA9x.js";import"./Input-CZoH0d1X.js";import"./useControlled-CUE02bZW.js";import"./Button-mut1rbst.js";import"./small-cross-CG4zdxxi.js";import"./ActionButton-6eqsHTiZ.js";import"./Checkbox-CCoQAGLp.js";import"./useValueChanged-ClDHkrux.js";import"./CollapsiblePanel-C-iaOM6m.js";import"./MultiColumnSortDialog-DJKsNSEv.js";import"./MenuTrigger-CS0F-rlF.js";import"./CompositeItem-B87J6QYh.js";import"./ToolbarRootContext-BJUtIxN4.js";import"./getDisabledMountTransitionStyles-uWkBK1pF.js";import"./getPseudoElementBounds-CjaTZFDC.js";import"./chevron-down-DNRgePmp.js";import"./index-CGjn93Dw.js";import"./error-Cm3qz5vo.js";import"./BaseCbacBanner-M7Tp4sQm.js";import"./makeExternalStore-CZnmcOAZ.js";import"./Tooltip-UKYFeKFX.js";import"./PopoverPopup-D7zJiBr2.js";import"./debounce-ncyQhy3A.js";import"./useOsdkClient-ByCOtk2g.js";import"./tick-BiIYLlxf.js";import"./DropdownField-BpZnmzBW.js";import"./isEqual-CCG3YC-I.js";import"./withOsdkMetrics-CvdPVaRc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
