import{f as p,j as e}from"./iframe-BHUFYaIi.js";import{O as i}from"./object-table-BpSuzW6M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-XnuLqDXH.js";import"./Table-CYeOpkhw.js";import"./index-Cv4N1cyr.js";import"./Dialog-Cp13S4Si.js";import"./cross-BOaBzgsR.js";import"./svgIconContainer-BwQXc51L.js";import"./useBaseUiId-MuM6uWGO.js";import"./InternalBackdrop-DUSHaGPj.js";import"./composite-B11uKuMK.js";import"./index-BPIvu6CK.js";import"./index-pncntrbL.js";import"./index-BxDALGli.js";import"./useEventCallback-DlrRREsq.js";import"./SkeletonBar-ij_FTAsS.js";import"./LoadingCell-DptSXl9K.js";import"./ColumnConfigDialog-DjN3HRYd.js";import"./DraggableList-lLbeAFUA.js";import"./search-CLJDIGSY.js";import"./Input-DjWGIh_z.js";import"./useControlled-CDjv9IaU.js";import"./Button-BLcFnS6Y.js";import"./small-cross-D9b89U2o.js";import"./ActionButton-D74MdW_-.js";import"./Checkbox-DyL8kHLu.js";import"./useValueChanged-BY36D3U1.js";import"./CollapsiblePanel-DUF4My8r.js";import"./MultiColumnSortDialog-Tg8SCamW.js";import"./MenuTrigger-B54q71Ab.js";import"./CompositeItem-MMdNYb42.js";import"./ToolbarRootContext-BeFb59Mm.js";import"./getDisabledMountTransitionStyles-Cs7RsEkT.js";import"./getPseudoElementBounds-DtwWcLj3.js";import"./chevron-down-BXEOl8Ri.js";import"./index-CWLFPPbc.js";import"./error-V_uXrOkx.js";import"./BaseCbacBanner-4MO9OZQU.js";import"./makeExternalStore-DlAYw1no.js";import"./Tooltip-CjOEcU2b.js";import"./PopoverPopup-ktlHKRLg.js";import"./debounce-CcDJlsBH.js";import"./useOsdkClient-Dq42XRO4.js";import"./tick-BKcWfYV_.js";import"./DropdownField-6qZcqvj8.js";import"./isEqual-Bx2Ngtz_.js";import"./withOsdkMetrics-D-xlszSM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
