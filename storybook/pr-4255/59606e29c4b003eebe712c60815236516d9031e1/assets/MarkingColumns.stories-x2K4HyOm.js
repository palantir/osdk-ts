import{f as p,j as e}from"./iframe-B_i7Ph77.js";import{O as i}from"./object-table-Dqxg3C0T.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvjJ0SzX.js";import"./Table-DUecyy4E.js";import"./index-COajzjZ8.js";import"./Dialog-Bkf6fLTO.js";import"./cross-r8gHAdxN.js";import"./svgIconContainer-F3PywaHC.js";import"./useBaseUiId-CW69tl4R.js";import"./InternalBackdrop-BWf_EDHi.js";import"./composite-uqQjgKuY.js";import"./index-BfVetZX7.js";import"./index-CKxO46Y-.js";import"./index-ChNkp7Fd.js";import"./useEventCallback-C6UUjjRV.js";import"./SkeletonBar-BE3AUhJe.js";import"./LoadingCell-By6GkYHN.js";import"./ColumnConfigDialog-BImhbnq8.js";import"./DraggableList-CRRNRTpO.js";import"./search-Ci82BY-M.js";import"./Input-Dl5sH1Q7.js";import"./useControlled-CPBNOwGg.js";import"./Button-D37UVdN3.js";import"./small-cross-B6VZzdKR.js";import"./ActionButton-BElQCvpZ.js";import"./Checkbox-BhU4N9_z.js";import"./useValueChanged-BtgVct8c.js";import"./CollapsiblePanel-t-tCNPWx.js";import"./MultiColumnSortDialog-CTqfEDWn.js";import"./MenuTrigger-CY1YIzS_.js";import"./CompositeItem-EZxEWVoS.js";import"./ToolbarRootContext-0-u9G15j.js";import"./getDisabledMountTransitionStyles-1rLXg44K.js";import"./getPseudoElementBounds-aFk6WU6_.js";import"./chevron-down-BOncWiCm.js";import"./index-DvLIeE9l.js";import"./error-DMPOuvoW.js";import"./BaseCbacBanner-DAgiVInW.js";import"./makeExternalStore-Bzou7Lqu.js";import"./Tooltip-geVxKkMd.js";import"./PopoverPopup-DZqF5shI.js";import"./debounce-oLXmJ61g.js";import"./useOsdkClient-DdwrseQe.js";import"./tick-zFsHhUQl.js";import"./DropdownField-DuoCpizZ.js";import"./isEqual-AN1PSN9E.js";import"./withOsdkMetrics-DGIAIiU_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
