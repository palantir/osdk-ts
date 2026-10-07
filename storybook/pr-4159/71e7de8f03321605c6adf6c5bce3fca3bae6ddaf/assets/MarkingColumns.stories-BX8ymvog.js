import{f as p,j as e}from"./iframe-CEat60Hp.js";import{O as i}from"./object-table-BCLmmaTi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-LGTzr2gM.js";import"./Table-Bub_W-mz.js";import"./index-DyITJqpd.js";import"./Dialog-DROKoGMC.js";import"./cross-D-uWfUMG.js";import"./svgIconContainer-CN1a-FY8.js";import"./useBaseUiId-ClM_1fTm.js";import"./InternalBackdrop-B4asx7Ai.js";import"./composite-Ce22aUj6.js";import"./index-BKoym7aL.js";import"./index-C_WLSqh0.js";import"./index-DndZj0Gs.js";import"./useEventCallback-BnyMPdTZ.js";import"./SkeletonBar-BrLmTLmg.js";import"./LoadingCell-DXyX9_yJ.js";import"./ColumnConfigDialog-BO4pL0eI.js";import"./DraggableList-Bl_9-C_6.js";import"./search-COfQ1bXD.js";import"./Input-By_gu53Z.js";import"./useControlled-CZHKBSyi.js";import"./Button-CCDq6dgu.js";import"./small-cross-CUzjSNDu.js";import"./ActionButton-B24-6bCU.js";import"./Checkbox-CiKag_ve.js";import"./useValueChanged-CmG-WmUh.js";import"./CollapsiblePanel-BnqmfXh-.js";import"./MultiColumnSortDialog-BiFc0ET9.js";import"./MenuTrigger-CBcFJ7OF.js";import"./CompositeItem-ChZ-XSJC.js";import"./ToolbarRootContext-MdE91PHa.js";import"./getDisabledMountTransitionStyles-BGMhA--N.js";import"./getPseudoElementBounds-Bm7AaELE.js";import"./chevron-down-CbnQEPHn.js";import"./index-DO0PQOk2.js";import"./error-Us6LDG_u.js";import"./BaseCbacBanner-_8RGnGge.js";import"./makeExternalStore-DYDIpdrC.js";import"./Tooltip-DYd7gvd4.js";import"./PopoverPopup-CE6K_Cw0.js";import"./debounce-9GnBlJ2l.js";import"./useOsdkClient-BR1Urz0Q.js";import"./tick-jmlbvTuh.js";import"./DropdownField-dGzl7MKn.js";import"./isEqual-DcvmIx5z.js";import"./withOsdkMetrics-CSdFZ0uc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
