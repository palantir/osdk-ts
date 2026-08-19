import{f as p,j as e}from"./iframe-Ckg3JDEd.js";import{O as i}from"./object-table-BrOZH1Zz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-KBO4otl1.js";import"./Table-DFCpZK6b.js";import"./index-yOX0clgO.js";import"./Dialog-BC4Dkf0w.js";import"./cross-C_oC8uQT.js";import"./svgIconContainer-DWrcnmPY.js";import"./useBaseUiId-C1nkxB3O.js";import"./InternalBackdrop-Dd9uCagy.js";import"./composite-C5JLlQSZ.js";import"./index-DBijKEQ7.js";import"./index-Hqp5BANx.js";import"./index-DlAr3QJC.js";import"./useEventCallback-x3dAfiZP.js";import"./SkeletonBar-BsemAOal.js";import"./LoadingCell-BUytE7HV.js";import"./ColumnConfigDialog-Koi3iuou.js";import"./DraggableList-b8IKeig4.js";import"./search-CECB0TiM.js";import"./Input-SzB69mKt.js";import"./useControlled-DWTYB9QG.js";import"./Button-BUGWw6kP.js";import"./small-cross-DOG-LnQ0.js";import"./ActionButton-D8GQpai4.js";import"./Checkbox-D6BIw2ha.js";import"./useValueChanged-DmbpCJPt.js";import"./CollapsiblePanel-UtvTJ4vl.js";import"./MultiColumnSortDialog-D8MkzSuj.js";import"./MenuTrigger-BXUGX02t.js";import"./CompositeItem-DVQ8sS88.js";import"./ToolbarRootContext-FvrCx-X9.js";import"./getDisabledMountTransitionStyles-BoIKTWaE.js";import"./getPseudoElementBounds-B6I-gPB0.js";import"./chevron-down-YWSk7uW9.js";import"./index-BZEXsqr4.js";import"./error-CYwbtwGc.js";import"./BaseCbacBanner-DfChN1RI.js";import"./makeExternalStore-DsBbJpT3.js";import"./Tooltip-tAePzXq_.js";import"./PopoverPopup-BAl5YuC0.js";import"./debounce-De4tjBdY.js";import"./useOsdkClient-BXZy7uxb.js";import"./tick-LwXocHnQ.js";import"./DropdownField-sg7lsRX4.js";import"./isEqual-C15s-RPH.js";import"./withOsdkMetrics-DWluRxuk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
