import{f as p,j as e}from"./iframe-CNG5tC4E.js";import{O as i}from"./object-table-BOd4bNEI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwzygQFT.js";import"./Table-D74BbjII.js";import"./index-CSa6QMaP.js";import"./Dialog-T-sepZ_N.js";import"./cross-BUDfzWsm.js";import"./svgIconContainer-fYOu3R0h.js";import"./useBaseUiId-UgguMUEz.js";import"./InternalBackdrop-BMt6raWI.js";import"./composite-dppvJbki.js";import"./index-D7WVWh6p.js";import"./index-CdYyMgNT.js";import"./index-Bytqi1Vm.js";import"./useEventCallback-Br9KnRIl.js";import"./SkeletonBar-BY6fJEjv.js";import"./LoadingCell-BTx5sKo1.js";import"./ColumnConfigDialog-Beno6DGI.js";import"./DraggableList-MozURoG1.js";import"./search-B5Nc1pS1.js";import"./Input-60lh5u04.js";import"./useControlled-BH2W_bUS.js";import"./Button-DGS3jG4k.js";import"./small-cross-CIhqDCWy.js";import"./ActionButton-DVkCa7v6.js";import"./Checkbox-DCN4bfky.js";import"./useValueChanged-FvlQ6ZaE.js";import"./CollapsiblePanel-CU8OOO_g.js";import"./MultiColumnSortDialog-tn20GzQf.js";import"./MenuTrigger-LPCA29_L.js";import"./CompositeItem-xBsV_YGf.js";import"./ToolbarRootContext-DSeyjEFW.js";import"./getDisabledMountTransitionStyles-B54BYyIC.js";import"./getPseudoElementBounds-SWuPJwgN.js";import"./chevron-down-C5OyQZRE.js";import"./index-D0ktSt50.js";import"./error-CwmCTB3X.js";import"./BaseCbacBanner-CSBao_aF.js";import"./makeExternalStore-BmYZSn43.js";import"./Tooltip-5ba-iiu0.js";import"./PopoverPopup-D4G6ixdl.js";import"./debounce-BIRiwTpe.js";import"./useOsdkClient-OgKnvKuq.js";import"./tick-Cp6vA-dB.js";import"./DropdownField-CnbohUMi.js";import"./isEqual-DRoNdyQB.js";import"./withOsdkMetrics-DclC6FPN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
