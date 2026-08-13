import{f as p,j as e}from"./iframe-C_rZf8VU.js";import{O as i}from"./object-table-CwP_L3yg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDRz06lj.js";import"./Table-DQaGNjjt.js";import"./index-0eoKNTmj.js";import"./Dialog-q1r-7MiE.js";import"./cross-C3Hnu-vp.js";import"./svgIconContainer-DQ_1btmp.js";import"./useBaseUiId-D4-miswd.js";import"./InternalBackdrop-BCxf0-By.js";import"./composite-CvGq7Rf9.js";import"./index-CV71ZL8j.js";import"./index-O2QWzze5.js";import"./index-B_8p8EH4.js";import"./useEventCallback-Dy0HhCrk.js";import"./SkeletonBar-DSYT3zdb.js";import"./LoadingCell-BSsS0iXL.js";import"./ColumnConfigDialog-uqYaCTA0.js";import"./DraggableList-DXpXY8d1.js";import"./search-5vADHBeS.js";import"./Input-B7jGxhwp.js";import"./useControlled-CAVvn1qm.js";import"./Button-DzuEmTO3.js";import"./small-cross-BSHgA079.js";import"./ActionButton-Na4bFdW8.js";import"./Checkbox-C7OL2cgq.js";import"./useValueChanged-BspZn8k7.js";import"./CollapsiblePanel-B5U_WwWE.js";import"./MultiColumnSortDialog-DqBAFtby.js";import"./MenuTrigger-Cg_3KtYd.js";import"./CompositeItem-BHXn5rIh.js";import"./ToolbarRootContext-ncvyqHVi.js";import"./getDisabledMountTransitionStyles-BEDXLny9.js";import"./getPseudoElementBounds-B1jeYaEO.js";import"./chevron-down-A3EFqNUF.js";import"./index-BlIltlDF.js";import"./error-C3qfOBR-.js";import"./BaseCbacBanner-D-ohkDMr.js";import"./makeExternalStore-a58P_dwm.js";import"./Tooltip-CxgKwOqt.js";import"./PopoverPopup-BFRd-H_J.js";import"./debounce-DCq12VV4.js";import"./useOsdkClient-Zp4XTgCz.js";import"./tick-CJhEW7Gm.js";import"./DropdownField-B8sfwSB7.js";import"./isEqual-C1BUS40T.js";import"./withOsdkMetrics-Br1MzUKy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
