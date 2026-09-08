import{f as p,j as e}from"./iframe-hmluRZS5.js";import{O as i}from"./object-table-CONt86Aj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DlYZq8_X.js";import"./Table-BgJ9BZ78.js";import"./index-DlmwBpMI.js";import"./Dialog-Dv_N4vZX.js";import"./cross-CF7Ek918.js";import"./svgIconContainer-Cr9UBTnz.js";import"./useBaseUiId-Ce6hVQyf.js";import"./InternalBackdrop-Di9g7CqC.js";import"./composite-Cz3P8fmc.js";import"./index-eMB_Bo_f.js";import"./index-Bc2sNs6_.js";import"./index-BK3acCXu.js";import"./useEventCallback-BdILOtut.js";import"./SkeletonBar-BBfDZCsO.js";import"./LoadingCell-PyopswjO.js";import"./ColumnConfigDialog-Bp9aFBFm.js";import"./DraggableList-UHVJUl4j.js";import"./search-CyNzQTjU.js";import"./Input-uUNDzlAG.js";import"./useControlled-CWtQ2etk.js";import"./Button-UcoIXCLv.js";import"./small-cross-DpGTHJxS.js";import"./ActionButton-BKy_pzqj.js";import"./Checkbox-BySPL-Yn.js";import"./useValueChanged-CzefFM-U.js";import"./CollapsiblePanel-D12S4ZDi.js";import"./MultiColumnSortDialog-D-iCjK2K.js";import"./MenuTrigger-F11Vn7_-.js";import"./CompositeItem-Bger7i4K.js";import"./ToolbarRootContext-BviESwyl.js";import"./getDisabledMountTransitionStyles-DeVJ0eo9.js";import"./getPseudoElementBounds-DrhntXY7.js";import"./chevron-down-BV1ESAvw.js";import"./index-CYwmlkYY.js";import"./error-B495uG_z.js";import"./BaseCbacBanner-Zj8kZ8T9.js";import"./makeExternalStore-DOooQeVW.js";import"./Tooltip-CkY5JgKY.js";import"./PopoverPopup-CFU_wLXE.js";import"./debounce-DA5oIsgA.js";import"./useOsdkClient-CWJVsVp6.js";import"./tick-QOD6m0sZ.js";import"./DropdownField-D2ft0pJb.js";import"./isEqual-DaXwjBhd.js";import"./withOsdkMetrics-BsviGqu5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
