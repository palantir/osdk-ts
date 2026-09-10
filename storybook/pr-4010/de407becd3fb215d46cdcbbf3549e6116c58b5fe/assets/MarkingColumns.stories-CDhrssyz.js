import{f as p,j as e}from"./iframe-BlpejkzI.js";import{O as i}from"./object-table-ChJ31fZG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BA1cUfXb.js";import"./Table-PgtqjWX6.js";import"./index-CpPkHQnY.js";import"./Dialog-Doi--yEE.js";import"./cross-DiWsYg3r.js";import"./svgIconContainer-aKnF_69u.js";import"./useBaseUiId-BUVwvBQZ.js";import"./InternalBackdrop-DKB_eEnM.js";import"./composite-CdbN3ck3.js";import"./index-BdLU453s.js";import"./index-DVMy9f1T.js";import"./index-DOZcBLPY.js";import"./useEventCallback-BDK4Z8u2.js";import"./SkeletonBar-XgXRifQ0.js";import"./LoadingCell-BYMft5lE.js";import"./ColumnConfigDialog-mvsnwW1S.js";import"./DraggableList-v9pQbaC3.js";import"./search-IpDNvhGA.js";import"./Input-eoJV0GlP.js";import"./useControlled-CKCXNsan.js";import"./Button-DfGArVBU.js";import"./small-cross-CbD0uJgb.js";import"./ActionButton-mHtuKYOM.js";import"./Checkbox-DBxKcnus.js";import"./useValueChanged-CD7wCe1x.js";import"./CollapsiblePanel-Bxo4k_hM.js";import"./MultiColumnSortDialog-C5OH7rob.js";import"./MenuTrigger-DFA0EQYQ.js";import"./CompositeItem-D29vF932.js";import"./ToolbarRootContext-CBW-R_pU.js";import"./getDisabledMountTransitionStyles-Bq97lFh4.js";import"./getPseudoElementBounds-CclledTt.js";import"./chevron-down-DDoBjNkd.js";import"./index-CKx3u1TT.js";import"./error-CNoirV31.js";import"./BaseCbacBanner-BvjBpfm0.js";import"./makeExternalStore-CmmUlmnz.js";import"./Tooltip-B1OUttcu.js";import"./PopoverPopup-Bm6cnNyX.js";import"./debounce-7JU4VUDc.js";import"./useOsdkClient-CkQ9QpN3.js";import"./tick-_qvOZWIW.js";import"./DropdownField-BsA-cNSp.js";import"./isEqual-BKVrBEvt.js";import"./withOsdkMetrics-CHL30NBG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
