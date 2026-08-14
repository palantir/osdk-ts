import{f as p,j as e}from"./iframe-d99A6dy_.js";import{O as i}from"./object-table-C7TY-3bM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BXXDbSLQ.js";import"./Table-CeT-_8Ox.js";import"./index-BvI0aYJU.js";import"./Dialog-C6_bQNum.js";import"./cross-dpi7xDM4.js";import"./svgIconContainer-CQFp9MIY.js";import"./useBaseUiId-DayFylep.js";import"./InternalBackdrop-CxjRJGo6.js";import"./composite-C_nWduZ1.js";import"./index-BipUzWZ7.js";import"./index-DpKUv_nP.js";import"./index-BFHEfbX0.js";import"./useEventCallback-BZIld91o.js";import"./SkeletonBar-DvniVmoI.js";import"./LoadingCell-BYLKl2re.js";import"./ColumnConfigDialog-DmLzPquA.js";import"./DraggableList-CvSkJVI6.js";import"./search-xcjteEAF.js";import"./Input-CwRTaEny.js";import"./useControlled-Res_vZF_.js";import"./Button-Bf5OJd4p.js";import"./small-cross-tWK-qLVG.js";import"./ActionButton-Dve-I_eb.js";import"./Checkbox-CIfmLG1g.js";import"./useValueChanged-EljjLCKw.js";import"./CollapsiblePanel-CahgaKO0.js";import"./MultiColumnSortDialog-CiLqOVe8.js";import"./MenuTrigger-DlcywJGy.js";import"./CompositeItem-CY0DaOXF.js";import"./ToolbarRootContext-BBcTGc1X.js";import"./getDisabledMountTransitionStyles-HxJED5q5.js";import"./getPseudoElementBounds-DVouIeC5.js";import"./chevron-down-CUgj8iAn.js";import"./index-B0OryjOF.js";import"./error-CXkBkCdL.js";import"./BaseCbacBanner-CgJ8nVGX.js";import"./makeExternalStore-CUVJJI81.js";import"./Tooltip-C86asDC4.js";import"./PopoverPopup-FEDh9MTo.js";import"./debounce-BT80FcB7.js";import"./useOsdkClient-BnBrjcrv.js";import"./tick-Cyn0w1xj.js";import"./DropdownField-D4Vkiu6d.js";import"./isEqual-DtfrX9Au.js";import"./withOsdkMetrics-k5Ap-NK7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
