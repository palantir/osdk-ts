import{f as p,j as e}from"./iframe-jCChBqpD.js";import{O as i}from"./object-table-CKx7vRdd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BjtDmjUW.js";import"./Table-BzxaaTkw.js";import"./index-BDYSe5T3.js";import"./Dialog-Cvzcs2Vo.js";import"./cross-BFiMfS60.js";import"./svgIconContainer-V036n2V3.js";import"./useBaseUiId-BgwIkJaa.js";import"./InternalBackdrop-B4keXGQY.js";import"./composite-C4cjwLVl.js";import"./index-DHVDL356.js";import"./index-CzoHWjtt.js";import"./index-DLZ_Dkwd.js";import"./useEventCallback-Ca3owwPd.js";import"./SkeletonBar-CFmITWP2.js";import"./LoadingCell-Cevnx7ko.js";import"./ColumnConfigDialog-DPValkIe.js";import"./DraggableList-POtWMylI.js";import"./search-BXUdOqpE.js";import"./Input-mP6whCaC.js";import"./useControlled-Cy4C8mUF.js";import"./Button-DYAz7KKI.js";import"./small-cross-CAvDrfoI.js";import"./ActionButton-BVjk_BMh.js";import"./Checkbox-C0yLsfQ2.js";import"./useValueChanged-BXkOTGUI.js";import"./CollapsiblePanel-BDGrQUPM.js";import"./MultiColumnSortDialog-Dfy90Vxq.js";import"./MenuTrigger-BDAnLdLA.js";import"./CompositeItem-InY95CWo.js";import"./ToolbarRootContext-BWHl3dWP.js";import"./getDisabledMountTransitionStyles-Bymg6Wrg.js";import"./getPseudoElementBounds-RSwUcFZt.js";import"./chevron-down-FjlLjWzq.js";import"./index-38-6lZvw.js";import"./error-S_2dtwT6.js";import"./BaseCbacBanner-CZkJZTBD.js";import"./makeExternalStore-DZ2_Wte_.js";import"./Tooltip-xlXWqJAV.js";import"./PopoverPopup-ByV2ArYQ.js";import"./debounce-CBlUtCtN.js";import"./useOsdkClient-Bljk_PUl.js";import"./tick-CLtzdCC5.js";import"./DropdownField-mM78F7jp.js";import"./useDebouncedCallback-Qm1Fh51r.js";import"./withOsdkMetrics-CEFSBq5G.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
