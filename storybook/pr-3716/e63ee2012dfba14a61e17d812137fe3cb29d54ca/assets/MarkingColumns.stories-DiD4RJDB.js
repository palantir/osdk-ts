import{f as p,j as e}from"./iframe-1jbFjwiV.js";import{O as i}from"./object-table-DZBc9IUl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDQFdjFD.js";import"./Table-C_dMXnIz.js";import"./index-DrtZOUD6.js";import"./Dialog-BMVsWGMi.js";import"./cross-Bl1j4Wqv.js";import"./svgIconContainer-BZV_aBV9.js";import"./useBaseUiId-BKjYHqRc.js";import"./InternalBackdrop-B1nt4hXd.js";import"./composite-C_OP_X0f.js";import"./index-jEd0VEdG.js";import"./index-CeLprUqR.js";import"./index-CAsisKrM.js";import"./useEventCallback-BhbbY7ZB.js";import"./SkeletonBar-DnzQpZV3.js";import"./LoadingCell-nJ2QoqhW.js";import"./ColumnConfigDialog-BVsSlSRA.js";import"./DraggableList-DsYK8qtZ.js";import"./search-fjW_pUDA.js";import"./Input-CwglRXzQ.js";import"./useControlled-D_GXWtOb.js";import"./isEqual-B1qBzrVP.js";import"./isObject-CQI39Yha.js";import"./Button-BjqCYLqC.js";import"./ActionButton-Do9hQIoV.js";import"./Checkbox-YlqVNjLb.js";import"./useValueChanged-DN_zXLi3.js";import"./CollapsiblePanel-W7x1bVZD.js";import"./MultiColumnSortDialog-BBNkIVqj.js";import"./MenuTrigger-KDqGMAAX.js";import"./CompositeItem-BtXbDyV5.js";import"./ToolbarRootContext-BpBhNPL-.js";import"./getDisabledMountTransitionStyles-DktTLR3G.js";import"./getPseudoElementBounds-D-tKLfAf.js";import"./chevron-down-D5mZ3A2l.js";import"./index-4XSemlsK.js";import"./error-2uW8vzmQ.js";import"./BaseCbacBanner-XdfJYp2i.js";import"./makeExternalStore-DBATKRlp.js";import"./Tooltip-5dUCdvZN.js";import"./PopoverPopup-L5EkKzcv.js";import"./toNumber-KEpIcbR-.js";import"./useOsdkClient-BY7yvIOO.js";import"./tick-C7SI_jPJ.js";import"./DropdownField-DHZIIgcn.js";import"./withOsdkMetrics-C0Xi5TsE.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
