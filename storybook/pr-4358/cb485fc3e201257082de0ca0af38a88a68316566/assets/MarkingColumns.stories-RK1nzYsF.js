import{f as p,j as e}from"./iframe-Dm9tPq9-.js";import{O as i}from"./object-table-B2wyECGp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DbanGSn8.js";import"./Table-0jLCAVha.js";import"./index-SudSBJ9d.js";import"./Dialog-BDOz5nRC.js";import"./cross-DovxETch.js";import"./svgIconContainer-DLeOey4i.js";import"./useBaseUiId-Bh3ZKuZJ.js";import"./InternalBackdrop-CQfhuxOD.js";import"./composite-DwLeZJsP.js";import"./index-pwNhYih4.js";import"./index-BEF1L48c.js";import"./index-jJsu7-Bg.js";import"./useEventCallback-D0i4hHrz.js";import"./SkeletonBar-Co2KJNpr.js";import"./LoadingCell-ClA53876.js";import"./ColumnConfigDialog-CCOQZeJ3.js";import"./DraggableList-DmtqR8L7.js";import"./search-DpPE568F.js";import"./Input-1s2rxWuw.js";import"./useControlled-zgk6WMo4.js";import"./Button-D711FISQ.js";import"./small-cross-D1_y47j8.js";import"./ActionButton-BoWHV299.js";import"./Checkbox-BgLuiuwc.js";import"./useValueChanged-T9NupB12.js";import"./CollapsiblePanel-oCJFTmUj.js";import"./MultiColumnSortDialog-DkH22_Rz.js";import"./MenuTrigger-Cfhmo_uS.js";import"./CompositeItem-Brc_cUGL.js";import"./ToolbarRootContext-DattZO7d.js";import"./getDisabledMountTransitionStyles-LF-SO7gC.js";import"./getPseudoElementBounds-bh7QF3ZR.js";import"./chevron-down-COzwHJk7.js";import"./index-BwyOjzrJ.js";import"./error-CX1V2PGn.js";import"./BaseCbacBanner-BSaJ_SWa.js";import"./makeExternalStore-CEHTDEAH.js";import"./Tooltip-Dj98utpN.js";import"./isObject-iDHKARFT.js";import"./debounce-v3DZ4rGU.js";import"./useOsdkClient-DfBdKLO7.js";import"./tick-BuAP4hF8.js";import"./DropdownField-C2nHBICk.js";import"./isEqual-D7o6NFD6.js";import"./_baseIsEqual-CK_tMD84.js";import"./withOsdkMetrics-4sk2cJVp.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
