import{f as p,j as e}from"./iframe-dYZcY_yd.js";import{O as i}from"./object-table-DdgFIgE4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nvTVJuZ0.js";import"./Table-CXRdWy_q.js";import"./index-DdpHHEag.js";import"./Dialog-2Xy4rBeC.js";import"./cross-Dy_Om33n.js";import"./svgIconContainer-d4KiPlL-.js";import"./useBaseUiId-BmHomGuM.js";import"./InternalBackdrop-B7SrXjlM.js";import"./composite-D7xb_xyv.js";import"./index-D1qSefVk.js";import"./index-CTY9EHBj.js";import"./index-YYQZ3ova.js";import"./useEventCallback-DeO715E3.js";import"./SkeletonBar-_1DWBUrN.js";import"./LoadingCell-DQBTbC2i.js";import"./ColumnConfigDialog-MRc2UlrB.js";import"./DraggableList-BwkaMsR8.js";import"./search-CDnnsnvp.js";import"./Input-2gIVp1J7.js";import"./useControlled-BgrYkcgC.js";import"./Button-lcjZj2UQ.js";import"./small-cross-BXDAngmo.js";import"./ActionButton-oKML9K2p.js";import"./Checkbox-BpEaPOBK.js";import"./useValueChanged-RbvDjp5x.js";import"./CollapsiblePanel-B2EqHOMP.js";import"./MultiColumnSortDialog-RXpLq4f3.js";import"./MenuTrigger-CAysan5f.js";import"./CompositeItem-DIIkXBkk.js";import"./ToolbarRootContext-DaQhWJhT.js";import"./getDisabledMountTransitionStyles-CEfeB9r5.js";import"./getPseudoElementBounds-MleGKnPQ.js";import"./chevron-down-DS-zMT_I.js";import"./index-CtGq4PGv.js";import"./error-D1PWFSVl.js";import"./BaseCbacBanner-Dqe3LcXr.js";import"./makeExternalStore-CHw5k_cg.js";import"./Tooltip-NXVN9pAS.js";import"./PopoverPopup-CzPa19Jo.js";import"./debounce-0K7vkP1p.js";import"./useOsdkClient-B_kqpc0H.js";import"./tick-6CBeLfgO.js";import"./DropdownField-BCHipXvA.js";import"./isEqual-Bhfajn7J.js";import"./withOsdkMetrics-7sRD0apQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
