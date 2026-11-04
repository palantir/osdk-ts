import{f as p,j as e}from"./iframe-BdttGBHS.js";import{O as i}from"./object-table-Y0-LmSTW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D52nztRO.js";import"./Table-7aW1jsV9.js";import"./index-fJrMVTua.js";import"./Dialog-CmQpnMcQ.js";import"./cross-B_ladZW0.js";import"./svgIconContainer-d3TxlLsS.js";import"./useBaseUiId-TpOnm0ph.js";import"./InternalBackdrop-BKguS2Kk.js";import"./composite-D2FhvqPV.js";import"./index-DUfIyUAM.js";import"./index-CGhVKo7Q.js";import"./index-_owIjaTD.js";import"./useEventCallback-4P5Ay0yC.js";import"./SkeletonBar-qQ9RfzOd.js";import"./LoadingCell-B-qtd_Ox.js";import"./ColumnConfigDialog-L2W4GnW_.js";import"./DraggableList-D7JjGds3.js";import"./search-SHaXv7OY.js";import"./Input-DYv89jnk.js";import"./useControlled-BCWd1xNc.js";import"./Button-DZ1LePF0.js";import"./small-cross-BJGr41n-.js";import"./ActionButton-Dmk_UwrT.js";import"./Checkbox-mVv099PS.js";import"./useValueChanged-D80KuDSO.js";import"./CollapsiblePanel-C84l9NlQ.js";import"./MultiColumnSortDialog-CKEvegV7.js";import"./MenuTrigger-Dzy_UVZ4.js";import"./CompositeItem-BUi6sRIo.js";import"./ToolbarRootContext-CKT8QuMl.js";import"./getDisabledMountTransitionStyles-B8ZFHD1C.js";import"./getPseudoElementBounds-CrUTQ61q.js";import"./chevron-down-CX5I5Ird.js";import"./index-RDL0QRGf.js";import"./error-CHI3XqLV.js";import"./BaseCbacBanner-CVMZJw73.js";import"./makeExternalStore-Ds9BSHVT.js";import"./Tooltip-Ca055HLw.js";import"./PopoverPopup-DwBF8-Mm.js";import"./debounce-Qe34k2W1.js";import"./useOsdkClient-Bl7ygr-X.js";import"./tick-BLwK45wE.js";import"./DropdownField-C8hF0Jpu.js";import"./isEqual-DVqjVJt3.js";import"./withOsdkMetrics-BQHwLSj1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
