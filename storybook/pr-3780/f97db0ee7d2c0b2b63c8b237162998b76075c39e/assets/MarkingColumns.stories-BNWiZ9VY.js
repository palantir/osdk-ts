import{f as p,j as e}from"./iframe-BQKQTmXB.js";import{O as i}from"./object-table-DxzaGByH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpY65_Qx.js";import"./Table-CS7xRIyW.js";import"./index-BAgavFcN.js";import"./Dialog-DjuaQgnL.js";import"./cross-BbeReS0g.js";import"./svgIconContainer-s1izGso1.js";import"./useBaseUiId-D4SYKib3.js";import"./InternalBackdrop-DOuWLN2E.js";import"./composite-BB13Acp8.js";import"./index-DW4OjGFj.js";import"./index-DOiTTslB.js";import"./index-DtlmBYgM.js";import"./useEventCallback-jzD9VSkj.js";import"./SkeletonBar-CHr63-jY.js";import"./LoadingCell-BcWecsrO.js";import"./ColumnConfigDialog-B16mvlsW.js";import"./DraggableList-DRDlkfg0.js";import"./search-C5fONMO5.js";import"./Input-BvQQtcuT.js";import"./useControlled-C-CBJQhx.js";import"./Button-DY1Aghm3.js";import"./small-cross-DRGYN-SH.js";import"./ActionButton-BXjwvh-b.js";import"./Checkbox-B0mnHjoi.js";import"./useValueChanged-aOvOP-Fs.js";import"./CollapsiblePanel-BmP8oKEK.js";import"./MultiColumnSortDialog-DH7Tz3SM.js";import"./MenuTrigger-Dlse7q-R.js";import"./CompositeItem-BvDVmAAl.js";import"./ToolbarRootContext-C9Gx_t9N.js";import"./getDisabledMountTransitionStyles-DnQGFrBG.js";import"./getPseudoElementBounds-D05yaNHB.js";import"./chevron-down-D5kmZbrP.js";import"./index-GsxlN7I4.js";import"./error-dE1POcw9.js";import"./BaseCbacBanner-Bc66uD5M.js";import"./makeExternalStore-g6QM0BRI.js";import"./Tooltip-BNCx0jB1.js";import"./PopoverPopup-DXEOdufz.js";import"./debounce-eoEcRIUs.js";import"./useOsdkClient-CM8jZA73.js";import"./tick-CNB2_64c.js";import"./DropdownField-DG4-GpYq.js";import"./isEqual-CSKA3c_k.js";import"./withOsdkMetrics-DsblZkp9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
