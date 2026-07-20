import{f as p,j as e}from"./iframe-Dsqo2Te7.js";import{O as i}from"./object-table-B0HGJYoE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C00VWsW9.js";import"./Table-CMoDx9pP.js";import"./index-CJIEMWbJ.js";import"./Dialog-Cw9EXoZk.js";import"./cross-BBE-eoHs.js";import"./svgIconContainer-BiCW5V8l.js";import"./useBaseUiId-ByGgpH05.js";import"./InternalBackdrop-CQl3ZlNA.js";import"./composite-dCCZG-QB.js";import"./index-d7L08DFU.js";import"./index-BUiXT7C6.js";import"./index-D1DkXvj6.js";import"./useEventCallback-O3yu0Zs7.js";import"./SkeletonBar-BQhEWRkm.js";import"./LoadingCell-DVUIdNXY.js";import"./ColumnConfigDialog-BWlmvw0l.js";import"./DraggableList-Ci2O7Ee1.js";import"./search-DrXmUYNB.js";import"./Input-D052xPpl.js";import"./useControlled-D0ueKSiO.js";import"./isEqual-cNN2Sa1e.js";import"./isObject-EOHsfNuN.js";import"./Button-CLJwxOKS.js";import"./ActionButton-lctsbi_E.js";import"./Checkbox-BKR_YBke.js";import"./useValueChanged-BflBdGS8.js";import"./CollapsiblePanel-CGdzvjnF.js";import"./MultiColumnSortDialog-Bk7ZdgUa.js";import"./MenuTrigger-BjX0hAmP.js";import"./CompositeItem-mCNVQvhZ.js";import"./ToolbarRootContext-BqymNalt.js";import"./getDisabledMountTransitionStyles-C-Did450.js";import"./getPseudoElementBounds-Dh1fwNyK.js";import"./chevron-down-C3JFAOUv.js";import"./index-C_DVuBu-.js";import"./error-Cm_26CfQ.js";import"./BaseCbacBanner-DpEmWdJ8.js";import"./makeExternalStore-DjsQKVpV.js";import"./Tooltip-lD0QkrE2.js";import"./PopoverPopup-C590THOP.js";import"./toNumber-C_qt5dbZ.js";import"./useOsdkClient-D44odvTr.js";import"./tick-DAFy2fx0.js";import"./DropdownField-DUdqrhHb.js";import"./withOsdkMetrics-l-RgHE7X.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
