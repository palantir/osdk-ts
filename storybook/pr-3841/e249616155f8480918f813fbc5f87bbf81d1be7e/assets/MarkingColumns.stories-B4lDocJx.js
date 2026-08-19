import{f as p,j as e}from"./iframe-B6AkhtVd.js";import{O as i}from"./object-table-5ycu1SBj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DAEdGq6d.js";import"./Table-BlLk-jmR.js";import"./index-C91K9ps7.js";import"./Dialog-DY8gdZzF.js";import"./cross-m6qgDhvT.js";import"./svgIconContainer-BoSGc56J.js";import"./useBaseUiId-D6Pj3rgz.js";import"./InternalBackdrop-C36o_owR.js";import"./composite-BDhvysYg.js";import"./index-CveC20hk.js";import"./index-DS-1BAxQ.js";import"./index-BkcfJqel.js";import"./useEventCallback-BAkDWBWl.js";import"./SkeletonBar-B_sJhz87.js";import"./LoadingCell-CIFbvAcy.js";import"./ColumnConfigDialog-Bv3ie2QA.js";import"./DraggableList-BDAa16px.js";import"./search-CgNZ6jJc.js";import"./Input-DHV2JVjW.js";import"./useControlled-DvrLljgv.js";import"./Button-BWxAZ7YP.js";import"./small-cross-xxpfi0Bj.js";import"./ActionButton-BP9-0q8X.js";import"./Checkbox-Cy2DyjcR.js";import"./useValueChanged-9x7YgLOm.js";import"./CollapsiblePanel-DfmIfBjz.js";import"./MultiColumnSortDialog-C_vviL3T.js";import"./MenuTrigger-CzlQo5mG.js";import"./CompositeItem-BWKOk0A1.js";import"./ToolbarRootContext-DQVGsq2j.js";import"./getDisabledMountTransitionStyles-Cap-YFSs.js";import"./getPseudoElementBounds-CMFI7MrQ.js";import"./chevron-down-CEzkWe0K.js";import"./index-CAFFYM2J.js";import"./error-CIE68Eoj.js";import"./BaseCbacBanner-DzlGGx8L.js";import"./makeExternalStore-MefWcWhA.js";import"./Tooltip-DaBD8ywy.js";import"./PopoverPopup-DP1yRoK-.js";import"./debounce-DNhy8eaI.js";import"./useOsdkClient-DRkf_gGj.js";import"./tick-DyFFxs8l.js";import"./DropdownField-NIRLIRU1.js";import"./isEqual-B9AvV4Np.js";import"./withOsdkMetrics-D2EQ2PwQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
