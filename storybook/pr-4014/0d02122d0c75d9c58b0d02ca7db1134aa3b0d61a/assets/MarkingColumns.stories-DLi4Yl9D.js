import{f as p,j as e}from"./iframe-DtoP6UZw.js";import{O as i}from"./object-table-D_3I45zD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFHJtsfx.js";import"./Table-BtMZ3tb4.js";import"./index-By2xjehZ.js";import"./Dialog-DI6oESBL.js";import"./cross-Bz8JPJRT.js";import"./svgIconContainer-DfGYICSx.js";import"./useBaseUiId-C9myCpxn.js";import"./InternalBackdrop-DpFHb2md.js";import"./composite-ZO42S3vI.js";import"./index-CeUVbJds.js";import"./index-D5DGgDMX.js";import"./index-qPBLNpVs.js";import"./useEventCallback-DjN8mM0o.js";import"./SkeletonBar-BvasMIuf.js";import"./LoadingCell-DVmQY3DI.js";import"./ColumnConfigDialog-Bqnkldiu.js";import"./DraggableList-DAiHAfLp.js";import"./search-BGmMu9uk.js";import"./Input-Cj3lDoEk.js";import"./useControlled-CLD2ZIzN.js";import"./Button-MPweKG2u.js";import"./small-cross-CuZnJmiX.js";import"./ActionButton-Q7OU6HgZ.js";import"./Checkbox-CoU6iSAR.js";import"./useValueChanged-DuhnSJjf.js";import"./CollapsiblePanel-Cmkp7L83.js";import"./MultiColumnSortDialog-MmoilBcM.js";import"./MenuTrigger-DRMD-66M.js";import"./CompositeItem-8ApCVdWW.js";import"./ToolbarRootContext-Chftn44K.js";import"./getDisabledMountTransitionStyles-wDP_kl-U.js";import"./getPseudoElementBounds-DVsLrH1i.js";import"./chevron-down-Cp3kMwRT.js";import"./index-D-jbKgqf.js";import"./error-BgO9vMGd.js";import"./BaseCbacBanner-DhhX6HVL.js";import"./makeExternalStore-CFHh14tM.js";import"./Tooltip-D8pj6bCS.js";import"./PopoverPopup-T9050naI.js";import"./debounce-C7WOXlCO.js";import"./useOsdkClient-DBRAdTeM.js";import"./tick-ql6tnj8R.js";import"./DropdownField-nkpjhsB4.js";import"./isEqual-CygTYWpT.js";import"./withOsdkMetrics-BylLLJIu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
