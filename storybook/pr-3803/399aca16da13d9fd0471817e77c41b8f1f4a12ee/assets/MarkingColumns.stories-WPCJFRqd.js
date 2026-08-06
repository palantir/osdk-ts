import{f as p,j as e}from"./iframe-BIPFZdnt.js";import{O as i}from"./object-table-C3Ew3ETh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DULsO4Op.js";import"./Table-CqgE67re.js";import"./index-6cFzeUf5.js";import"./Dialog-CDsBkrX4.js";import"./cross-B2RfYXui.js";import"./svgIconContainer-OcBsH039.js";import"./useBaseUiId-B393kpwA.js";import"./InternalBackdrop-PONnvURB.js";import"./composite-nxEx2m3K.js";import"./index-B2oB8T93.js";import"./index-WnBH7n6a.js";import"./index-Br3v5DWH.js";import"./useEventCallback-Dscbje0V.js";import"./SkeletonBar-DbVyxO5b.js";import"./LoadingCell-BksaunVj.js";import"./ColumnConfigDialog-AIUYrbfs.js";import"./DraggableList-CQbRnG-N.js";import"./search-BgTvK5dn.js";import"./Input-DY9incTR.js";import"./useControlled-dYV3UboW.js";import"./isEqual-B9hIYsbF.js";import"./isObject-DrwUnXlP.js";import"./Button-DvODXE55.js";import"./ActionButton-Dgq0eVpD.js";import"./Checkbox-gAl3Zh-r.js";import"./useValueChanged-BFUbQ0vt.js";import"./CollapsiblePanel-88atgMcL.js";import"./MultiColumnSortDialog-DYXxAhzI.js";import"./MenuTrigger-CF5lnnzD.js";import"./CompositeItem-C9VVNI4z.js";import"./ToolbarRootContext-QEEdrt7Q.js";import"./getDisabledMountTransitionStyles-CuTEhDyu.js";import"./getPseudoElementBounds-BnG6WxCG.js";import"./chevron-down-DgPtyBzm.js";import"./index-BfX4-kUd.js";import"./error-Fv9LpI3F.js";import"./BaseCbacBanner-CAXXbZKG.js";import"./makeExternalStore-DP3axzc1.js";import"./Tooltip-CP5eHo2R.js";import"./PopoverPopup-CeUFsCnB.js";import"./toNumber-DG2bVepK.js";import"./useOsdkClient-CE591Hai.js";import"./tick-DrAlrCM7.js";import"./DropdownField-P2KR5l-Z.js";import"./withOsdkMetrics-nVQK5dsv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
