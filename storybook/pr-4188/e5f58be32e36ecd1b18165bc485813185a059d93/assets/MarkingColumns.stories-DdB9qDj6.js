import{f as p,j as e}from"./iframe-BdamuBSW.js";import{O as i}from"./object-table-Dd8F9MJb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZ9xmEaG.js";import"./Table-BwFliMap.js";import"./index-CzCGUNDu.js";import"./Dialog-BWtAf7yb.js";import"./cross-CLaBWSw6.js";import"./svgIconContainer-CGhkkD0s.js";import"./useBaseUiId-CrCJEUlz.js";import"./InternalBackdrop-CO4Xg4x0.js";import"./composite-Bvo9YAgy.js";import"./index-B5Cmbtjp.js";import"./index-BCh8Pu1q.js";import"./index-FY0Bg0-m.js";import"./useEventCallback-CECLtwpw.js";import"./SkeletonBar-CWjKtAmo.js";import"./LoadingCell-Dx7_fSTs.js";import"./ColumnConfigDialog-CxxEVPe2.js";import"./DraggableList-jE3NYPTZ.js";import"./search-XGjCTgti.js";import"./Input-vUwBhrLX.js";import"./useControlled-D5iM1jy5.js";import"./Button-NcM8hPFP.js";import"./small-cross-ZuHva1xM.js";import"./ActionButton-CcP9PBD9.js";import"./Checkbox-BGJIpafi.js";import"./useValueChanged-DGZ0cM7F.js";import"./CollapsiblePanel-pxD-JLDi.js";import"./MultiColumnSortDialog-Voex3n1E.js";import"./MenuTrigger-BtepaWQu.js";import"./CompositeItem-BuuNoifa.js";import"./ToolbarRootContext-VKjIBJTb.js";import"./getDisabledMountTransitionStyles-BFJq39Vl.js";import"./getPseudoElementBounds-CjHvqmd5.js";import"./chevron-down-BM9a4BBi.js";import"./index-Djo-XrZC.js";import"./error-DKUZpZvu.js";import"./BaseCbacBanner-DPvaJU3n.js";import"./makeExternalStore-DmdygOVW.js";import"./Tooltip-Cv_FqXfC.js";import"./PopoverPopup-DhOu8Gke.js";import"./debounce-2PBdA7WY.js";import"./useOsdkClient-BwzpfxSK.js";import"./tick-BEUPv9hK.js";import"./DropdownField-CK-WBLfS.js";import"./isEqual-CehFsAyc.js";import"./withOsdkMetrics-CSNwlJ-x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
