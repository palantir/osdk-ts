import{f as p,j as e}from"./iframe-SRdlKq9b.js";import{O as i}from"./object-table-CojfwMaQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-s1eLnSv0.js";import"./Table-Ck3px7xM.js";import"./index-DD8FCudr.js";import"./Dialog-C_6idqLc.js";import"./cross-CXZKrh1h.js";import"./svgIconContainer-BcXM3VSp.js";import"./useBaseUiId-B4J9k2RX.js";import"./InternalBackdrop-DZ5UfCCc.js";import"./composite-CZ2o_96f.js";import"./index-B4jPuaLR.js";import"./index-Dji29e1U.js";import"./index-Cn9jOaaC.js";import"./useEventCallback-DlExu_x9.js";import"./SkeletonBar-2487SD1x.js";import"./LoadingCell-BO1-xQ-u.js";import"./ColumnConfigDialog-BzKmQdLo.js";import"./DraggableList-Bq9_-0P2.js";import"./search-BIvi-2TY.js";import"./Input-DAJATtsq.js";import"./useControlled-wCYPw1x7.js";import"./Button-D5IcZbYw.js";import"./small-cross-L_-ELWme.js";import"./ActionButton-C63e1YEm.js";import"./Checkbox-DtjMKN4T.js";import"./useValueChanged-BTouMuh0.js";import"./CollapsiblePanel-B-UdhI4G.js";import"./MultiColumnSortDialog-Cvq3CdhN.js";import"./MenuTrigger-BLJI1uk0.js";import"./CompositeItem-CxO1LzKy.js";import"./ToolbarRootContext-D6KNZ6Ak.js";import"./getDisabledMountTransitionStyles-Bgi2j66A.js";import"./getPseudoElementBounds-CJTp5fJ0.js";import"./chevron-down--GHDODIE.js";import"./index-DhMuGg7E.js";import"./error-DFAQrfbx.js";import"./BaseCbacBanner-SCqPc3nk.js";import"./makeExternalStore-gzodh6iV.js";import"./Tooltip-CWTCUjbr.js";import"./PopoverPopup-qEnUheAt.js";import"./debounce-wqarF4Vc.js";import"./useOsdkClient-jZoOvTCC.js";import"./tick-DneUhZ2Q.js";import"./DropdownField-BkOAd7gw.js";import"./isEqual-DV_ZUJF1.js";import"./withOsdkMetrics-jgsXWTD0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
