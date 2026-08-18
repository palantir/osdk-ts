import{f as p,j as e}from"./iframe-ZXzoHhiH.js";import{O as i}from"./object-table-h3QVGvVh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DhsFpWsY.js";import"./Table-vQUskrri.js";import"./index-D6JbpjtM.js";import"./Dialog-Cu3J7VAN.js";import"./cross-BDa3Cqh0.js";import"./svgIconContainer-CyxxRlZb.js";import"./useBaseUiId-BEvQDTwS.js";import"./InternalBackdrop-DeqY8UDC.js";import"./composite-DpxxpdsF.js";import"./index-C4EsRBVV.js";import"./index-MwZjXXYU.js";import"./index-1Aj9HnSY.js";import"./useEventCallback-DCkbdGrD.js";import"./SkeletonBar-CHhHpHfc.js";import"./LoadingCell-CirgwqUn.js";import"./ColumnConfigDialog-D2TD4xxN.js";import"./DraggableList-BX3OO3XS.js";import"./search-DoYXdjWJ.js";import"./Input-CwIgSFvy.js";import"./useControlled-BJAlfQKj.js";import"./Button-DhRAKbLo.js";import"./small-cross-DDKBRSHE.js";import"./ActionButton-jSPKUpr6.js";import"./Checkbox-BpZRNZ7x.js";import"./useValueChanged-7gcukUj0.js";import"./CollapsiblePanel-qapOzJSJ.js";import"./MultiColumnSortDialog-Dmhecj6h.js";import"./MenuTrigger-ScWPsEpH.js";import"./CompositeItem-SvjwkO0W.js";import"./ToolbarRootContext-BChHSQ55.js";import"./getDisabledMountTransitionStyles-DIJ5QIdA.js";import"./getPseudoElementBounds-DLAzD5Nx.js";import"./chevron-down-CRmz9PAw.js";import"./index-BgW_HH62.js";import"./error-CcJwbQNy.js";import"./BaseCbacBanner-12BFGArk.js";import"./makeExternalStore-BvyDSClC.js";import"./Tooltip-CM4f-N71.js";import"./PopoverPopup-B2VPWRnQ.js";import"./debounce-BU8o5BOZ.js";import"./useOsdkClient-D2I_PQU2.js";import"./tick-DR-3NIno.js";import"./DropdownField-B6H9-I7k.js";import"./isEqual-D2I2WKSa.js";import"./withOsdkMetrics-rJG37D1j.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
