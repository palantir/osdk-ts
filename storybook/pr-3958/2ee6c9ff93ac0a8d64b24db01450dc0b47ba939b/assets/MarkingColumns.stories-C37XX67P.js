import{f as p,j as e}from"./iframe-BE_0juHq.js";import{O as i}from"./object-table-ak3ru7OW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGE0hYRw.js";import"./Table-Wr5ik1U4.js";import"./index-CZ-KL49G.js";import"./Dialog-DWHvidN5.js";import"./cross-CUPzUyHl.js";import"./svgIconContainer-DTm7GTT3.js";import"./useBaseUiId-CyOhG5WV.js";import"./InternalBackdrop-BS79ekQH.js";import"./composite-BMP3afRS.js";import"./index-YpmziLMg.js";import"./index-DPXYEgdz.js";import"./index-Coaj1lHt.js";import"./useEventCallback-uz51Y23w.js";import"./SkeletonBar-CTy64fAf.js";import"./LoadingCell-Z9AAzKS9.js";import"./ColumnConfigDialog-2qzHZsqu.js";import"./DraggableList-DTSHp1Ii.js";import"./search-BJgzsAei.js";import"./Input-eCN9724n.js";import"./useControlled-C0uJcmsm.js";import"./Button-DoRYjZBD.js";import"./small-cross-CZg5giIs.js";import"./ActionButton-BijjX4lr.js";import"./Checkbox-TSfcgPuk.js";import"./useValueChanged-Dso7iA8F.js";import"./CollapsiblePanel-SwrmgAr0.js";import"./MultiColumnSortDialog-DP8lPfib.js";import"./MenuTrigger-vvTXbVH5.js";import"./CompositeItem-CAbmT9yz.js";import"./ToolbarRootContext-Bo_aNGPT.js";import"./getDisabledMountTransitionStyles-DBPmoJix.js";import"./getPseudoElementBounds-DIHB9vsV.js";import"./chevron-down-Cem4vbB0.js";import"./index-CVu1gKpb.js";import"./error-BpU3JwpA.js";import"./BaseCbacBanner-DNS9oBIc.js";import"./makeExternalStore-nfAmPwlH.js";import"./Tooltip-Bs9C1rJp.js";import"./PopoverPopup-DlcEpqfX.js";import"./debounce-Crg_S_Lg.js";import"./useOsdkClient-C3FxVITg.js";import"./tick-FutLlINL.js";import"./DropdownField-Dhkja8wq.js";import"./isEqual-CMnP8-CM.js";import"./withOsdkMetrics-CLNWKIq7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
