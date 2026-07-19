import{f as p,j as e}from"./iframe-BWi3HNRH.js";import{O as i}from"./object-table-qTExE_RQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D2GZnDpI.js";import"./Table-B98h5o3F.js";import"./index--rMqNL7Q.js";import"./Dialog-CWDCP5dP.js";import"./cross-DwoGy8LB.js";import"./svgIconContainer-cZVqqZMn.js";import"./useBaseUiId-P9QQG2vk.js";import"./InternalBackdrop-XNMUEOAs.js";import"./composite-Wj_n_5Bo.js";import"./index-3TFDWhUn.js";import"./index-DcadtDvp.js";import"./index-Dw6RfQtY.js";import"./useEventCallback-DVzJg7_G.js";import"./SkeletonBar-CGe74o2b.js";import"./LoadingCell-CNTapTAB.js";import"./ColumnConfigDialog-_-ubIWSC.js";import"./DraggableList-R9zB9PIZ.js";import"./search-AzEaYAcY.js";import"./Input-BUoU7JC-.js";import"./useControlled-D21_3aQd.js";import"./isEqual-DXSlJtwO.js";import"./isObject-iUeJoaDo.js";import"./Button-C8BF6svu.js";import"./ActionButton-5gu-_peF.js";import"./Checkbox-CZx8pxfk.js";import"./useValueChanged-sQLGV2jU.js";import"./CollapsiblePanel-at6dHEQX.js";import"./MultiColumnSortDialog-CcH45Lga.js";import"./MenuTrigger-B-IGIi24.js";import"./CompositeItem-BjtBCjU9.js";import"./ToolbarRootContext-2-ULyK5I.js";import"./getDisabledMountTransitionStyles-DnJz59Dy.js";import"./getPseudoElementBounds-CCXudOcw.js";import"./chevron-down-Bu9pl3xo.js";import"./index-BzoN-LXM.js";import"./error-DojtEV0y.js";import"./BaseCbacBanner-BDhYwVkb.js";import"./makeExternalStore-DyZMgppU.js";import"./Tooltip-DCnccSRA.js";import"./PopoverPopup-Dd3IySm7.js";import"./toNumber-CTUJiBkP.js";import"./useOsdkClient-CDVkmd86.js";import"./tick-C6W3KEry.js";import"./DropdownField-DEAxv17-.js";import"./withOsdkMetrics-Cux2wN2Y.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
