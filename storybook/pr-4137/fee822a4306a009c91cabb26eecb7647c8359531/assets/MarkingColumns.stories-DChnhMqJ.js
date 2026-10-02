import{f as p,j as e}from"./iframe-BYO6buG4.js";import{O as i}from"./object-table-CMkQ3hCP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BghxL7kB.js";import"./Table-DGj5Awqa.js";import"./index-BoyptyOK.js";import"./Dialog-BoT1wOeq.js";import"./cross-Db1-xEOp.js";import"./svgIconContainer-56E6UlaN.js";import"./useBaseUiId-DSjvVVjS.js";import"./InternalBackdrop-idagBMen.js";import"./composite-Od8Flb7p.js";import"./index-CsWBFdKT.js";import"./index-1LA5lE3C.js";import"./index-NS6h_AVZ.js";import"./useEventCallback-mMKXwGEF.js";import"./SkeletonBar-ClyXBwkY.js";import"./LoadingCell-CeWD4vTh.js";import"./ColumnConfigDialog-CWB1DEao.js";import"./DraggableList-D14Tn9Md.js";import"./search-Ci90mlVI.js";import"./Input-T9JgejYL.js";import"./useControlled-Cg_ccIWb.js";import"./Button-DMsIowuw.js";import"./small-cross-FoG8HaIL.js";import"./ActionButton-DqJ5wns_.js";import"./Checkbox-EASZO9QI.js";import"./useValueChanged-CrS2COC5.js";import"./CollapsiblePanel-BZo8Mo6J.js";import"./MultiColumnSortDialog-B7RWVW-u.js";import"./MenuTrigger-BInfiqJ9.js";import"./CompositeItem-CN9f57ba.js";import"./ToolbarRootContext-BKI2aJJ6.js";import"./getDisabledMountTransitionStyles-B-bqpDLb.js";import"./getPseudoElementBounds-BcYivqxs.js";import"./chevron-down-DqQBT-ce.js";import"./index-YNs_4vqy.js";import"./error-DvNb2Jgd.js";import"./BaseCbacBanner-YHQLwqPr.js";import"./makeExternalStore-Cjetkmua.js";import"./Tooltip-DipSBfOt.js";import"./PopoverPopup-DeSSS8K8.js";import"./debounce-BTsoIqCY.js";import"./useOsdkClient-DoQ52jay.js";import"./tick-BkEOGkDA.js";import"./DropdownField-CSPCixRr.js";import"./isEqual-DUs2sxEB.js";import"./withOsdkMetrics-DdFROTWY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
