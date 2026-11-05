import{f as p,j as e}from"./iframe-DfZQ9M6i.js";import{O as i}from"./object-table-BABzrNHh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-E2urLAES.js";import"./Table-Bg05vyrB.js";import"./index-B0k0bEti.js";import"./Dialog-D-zHP0iR.js";import"./cross-BioDKNkS.js";import"./svgIconContainer-eylyBn5f.js";import"./useBaseUiId-Chm1jq62.js";import"./InternalBackdrop-vRXRm5Ri.js";import"./composite-C2Pj8gPK.js";import"./index-DMZF7jCE.js";import"./index-DLq5Bkcx.js";import"./index-BrA1DhLb.js";import"./useEventCallback-CuX5Jevb.js";import"./SkeletonBar-xgByqOHn.js";import"./LoadingCell-I-rE57sz.js";import"./ColumnConfigDialog-1IK2KiyF.js";import"./DraggableList-CdDP_B-e.js";import"./search-g1T2rl--.js";import"./Input-CYJZLefv.js";import"./useControlled-CftsWT9B.js";import"./Button-B2R87CaB.js";import"./small-cross-DlqkxE_Y.js";import"./ActionButton-DWlru8XN.js";import"./Checkbox-Cu7Fqy3D.js";import"./useValueChanged-BssawWRm.js";import"./CollapsiblePanel-DfOA0fLb.js";import"./MultiColumnSortDialog-CzIRJYTz.js";import"./MenuTrigger-CSm448TL.js";import"./CompositeItem-Hd7LuzxE.js";import"./ToolbarRootContext-CfFBsMXS.js";import"./getDisabledMountTransitionStyles-CSW-SIFW.js";import"./getPseudoElementBounds-C9x04IRz.js";import"./chevron-down-tsxmIRBn.js";import"./index-kN-BpEU5.js";import"./error-BTFoLABS.js";import"./BaseCbacBanner-qA1XbymC.js";import"./makeExternalStore-ChnBYuE7.js";import"./Tooltip-BJ0dhB1V.js";import"./PopoverPopup-BcGfAJQo.js";import"./debounce-BFxxFhvU.js";import"./useOsdkClient-BVS0pOON.js";import"./tick-BTiK-OOO.js";import"./DropdownField-cD4Mi-ZJ.js";import"./isEqual-r-L37Ccs.js";import"./withOsdkMetrics-lGVwuAms.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
