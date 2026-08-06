import{f as p,j as e}from"./iframe-CwQyvPXr.js";import{O as i}from"./object-table-Dy-Bo_58.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nPWeI9RW.js";import"./Table-BA0jNj6b.js";import"./index-9af34HI7.js";import"./Dialog-_yh7eAvg.js";import"./cross-DVZdLFyf.js";import"./svgIconContainer-CRE1ctgD.js";import"./useBaseUiId-ChwMhbSq.js";import"./InternalBackdrop-C5uicSal.js";import"./composite-DoyUokVD.js";import"./index-DRKHNjEq.js";import"./index-D-pe9IzG.js";import"./index-BF4luIbb.js";import"./useEventCallback-tfQ8eL-s.js";import"./SkeletonBar-6fYrU5JU.js";import"./LoadingCell-Cgpkfnax.js";import"./ColumnConfigDialog-lKxCjS-f.js";import"./DraggableList-CfLEQ4sK.js";import"./search-BlHvZBtL.js";import"./Input-C6MXRUFM.js";import"./useControlled-C8JNZz-A.js";import"./isEqual-Dk7Jbde7.js";import"./isObject-C_uX0ufT.js";import"./Button-B0hT9H_M.js";import"./ActionButton-DF2889v9.js";import"./Checkbox-CpoDk5nv.js";import"./useValueChanged-B95zsXHE.js";import"./CollapsiblePanel-tuFoizxl.js";import"./MultiColumnSortDialog-GwmWKlU6.js";import"./MenuTrigger-Bz9GdCSD.js";import"./CompositeItem-BIC57Pt6.js";import"./ToolbarRootContext-srCRfALr.js";import"./getDisabledMountTransitionStyles-DoYmXnU9.js";import"./getPseudoElementBounds-E0oqKne9.js";import"./chevron-down-CTW1e4Xq.js";import"./index-DAInQTbe.js";import"./error-UdfzbvcV.js";import"./BaseCbacBanner-D91hBeme.js";import"./makeExternalStore-CqNNKoNM.js";import"./Tooltip-CGx4QCB0.js";import"./PopoverPopup-DR2aT0I2.js";import"./toNumber-7VrwKuG0.js";import"./useOsdkClient-UPo08UPI.js";import"./tick-BrKL1Vur.js";import"./DropdownField-s5EpeKso.js";import"./withOsdkMetrics-DIsQZe29.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
