import{f as p,j as e}from"./iframe-BTtzWZu6.js";import{O as i}from"./object-table-xOXBCH9q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CW1gXID8.js";import"./Table-BrnOOcC5.js";import"./index-CyGMvcn3.js";import"./Dialog-hG2Nx2ga.js";import"./cross-CPfgu5lR.js";import"./svgIconContainer-D272he4K.js";import"./useBaseUiId-BnTa1Bnl.js";import"./InternalBackdrop-DxQ_W_gP.js";import"./composite-C4r_A0EF.js";import"./index-mRCQXlcJ.js";import"./index-BIhwaVmS.js";import"./index-Yms2JVEO.js";import"./useEventCallback-DRTqn6t5.js";import"./SkeletonBar-fTxq4SzF.js";import"./LoadingCell-5IjaPMMe.js";import"./ColumnConfigDialog-D-n-xLkA.js";import"./DraggableList-BeX-aE3d.js";import"./search-BTZla_o7.js";import"./Input-Cw4l7pni.js";import"./useControlled-Cx6N0n65.js";import"./isEqual-DuHILxCf.js";import"./isObject-DQ-GwuTl.js";import"./Button-CwkymPp-.js";import"./ActionButton-BNaMMQvK.js";import"./Checkbox-B990royF.js";import"./useValueChanged-BUEyi7Ad.js";import"./CollapsiblePanel-CSpuW-zg.js";import"./MultiColumnSortDialog-BqOS-ux5.js";import"./MenuTrigger-DxoJQ0DX.js";import"./CompositeItem-D8Wt2hkZ.js";import"./ToolbarRootContext-CmB9X01m.js";import"./getDisabledMountTransitionStyles-Dbj2jsly.js";import"./getPseudoElementBounds-DYOocShz.js";import"./chevron-down-ZTHlaDsM.js";import"./index-dZArKZlw.js";import"./error-CRr4Qgos.js";import"./BaseCbacBanner-B792w_pJ.js";import"./makeExternalStore-Df1Cn7Z5.js";import"./Tooltip-DhEsJAf3.js";import"./PopoverPopup-D5cCSPjU.js";import"./toNumber-CBI9fOH8.js";import"./useOsdkClient-DVYj3ETt.js";import"./tick-BOBmx-87.js";import"./DropdownField-7e2MPXia.js";import"./withOsdkMetrics-BdrzDzmf.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
