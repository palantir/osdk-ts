import{f as p,j as e}from"./iframe-8pDs9AML.js";import{O as i}from"./object-table-sQi6A6Rl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DR90AuyO.js";import"./Table-CStZcXay.js";import"./index-BgxF440z.js";import"./Dialog-C7GzHvnr.js";import"./cross-FlHZ6uvS.js";import"./svgIconContainer-BOUHKa6M.js";import"./useBaseUiId-Y2Bqc82V.js";import"./InternalBackdrop-DMqXw_ve.js";import"./composite-DXO-Xhg7.js";import"./index-gTFJVjv-.js";import"./index-DoNWJbFe.js";import"./useEventCallback-B_8pzo0G.js";import"./SkeletonBar-CuHnw5RE.js";import"./LoadingCell-DSA5FBAS.js";import"./ColumnConfigDialog-B5tce7iz.js";import"./DraggableList-DUNCFL58.js";import"./search-D5muLECQ.js";import"./Input-ClAW_50X.js";import"./useControlled-DjP6n15o.js";import"./Button-DIdY9EdX.js";import"./small-cross-DgbGi55m.js";import"./ActionButton-CIqGiuh_.js";import"./Checkbox-DFjGO5PY.js";import"./useValueChanged-CwdZzKW1.js";import"./CollapsiblePanel-CbmM2mnP.js";import"./MultiColumnSortDialog-DfNP_Ru7.js";import"./MenuTrigger-D_ErSUHZ.js";import"./CompositeItem-B2g2yaWL.js";import"./ToolbarRootContext-BlIr8usp.js";import"./getDisabledMountTransitionStyles-DqLgMH-z.js";import"./getPseudoElementBounds-C8btizZ2.js";import"./chevron-down-Be7tG24a.js";import"./index-BXm3f9eW.js";import"./error-HBrPbPXF.js";import"./BaseCbacBanner-CkXwAJ2q.js";import"./makeExternalStore-B6vEKUuF.js";import"./Tooltip-B6mBrT6t.js";import"./PopoverPopup-DVuRwmdG.js";import"./debounce-DeNQnw9V.js";import"./useOsdkClient-wRikYwpV.js";import"./tick-Bx8QqUf_.js";import"./DropdownField-DnQ0gVMB.js";import"./isEqual-D2vQtZmd.js";import"./withOsdkMetrics-QxEi4RWI.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
