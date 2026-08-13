import{f as p,j as e}from"./iframe-BJco-VOi.js";import{O as i}from"./object-table-CZdQQxaf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CC7TVMhJ.js";import"./Table-24cFDvFl.js";import"./index-BYEPosP_.js";import"./Dialog-B0y-HYJx.js";import"./cross-BlvAMq1L.js";import"./svgIconContainer-C_CZzMkw.js";import"./useBaseUiId-BzzLXW_j.js";import"./InternalBackdrop-CsTSVhzv.js";import"./composite-CqNHvWIl.js";import"./index-BplUxlkc.js";import"./index-DDr5B_4i.js";import"./index-DfO8rP6J.js";import"./useEventCallback-ClpNn0Bu.js";import"./SkeletonBar-B56cMCHb.js";import"./LoadingCell-Bv54e49y.js";import"./ColumnConfigDialog-0a64JMFA.js";import"./DraggableList-B4JbVwWc.js";import"./search-DqesndjO.js";import"./Input-DwjxDHpS.js";import"./useControlled-DiTzu7_L.js";import"./Button-DEa2BSVh.js";import"./small-cross-CW2LRHDt.js";import"./ActionButton-DlRmUvNc.js";import"./Checkbox-J8z3vrVX.js";import"./useValueChanged-T1ieS56z.js";import"./CollapsiblePanel-DaNke5cg.js";import"./MultiColumnSortDialog-CVChGFU2.js";import"./MenuTrigger-BF2QncqJ.js";import"./CompositeItem-BmVC2FiX.js";import"./ToolbarRootContext-DIdO-EJM.js";import"./getDisabledMountTransitionStyles-BKDkD37w.js";import"./getPseudoElementBounds-DbEZqPx5.js";import"./chevron-down-CRLaJKXa.js";import"./index-W1FoFTA-.js";import"./error-C3c_rdRU.js";import"./BaseCbacBanner-DdPl_p__.js";import"./makeExternalStore-BcSmY_xV.js";import"./Tooltip-DaE6jUox.js";import"./PopoverPopup-Dgyvxoba.js";import"./toNumber-GPiy_R35.js";import"./useOsdkClient-Du5k__eT.js";import"./tick-LW5ev3iF.js";import"./DropdownField-DmZcznzU.js";import"./withOsdkMetrics-BU9iFrAf.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
