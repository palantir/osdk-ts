import{f as p,j as e}from"./iframe-CWNCqF8m.js";import{O as i}from"./object-table-CmyQeVnC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CP42LvtG.js";import"./Table-B4WTdSgf.js";import"./index-C_BFGzEW.js";import"./Dialog-CaxPujHQ.js";import"./cross-Gf4Gi1Zs.js";import"./svgIconContainer-BD1yvJod.js";import"./useBaseUiId-Cbti5FZV.js";import"./InternalBackdrop-C7lR6q4Y.js";import"./composite-Bv2UjceH.js";import"./index-Q_B2Rqgi.js";import"./index-BtEMoLG0.js";import"./index-BZ2HMWSK.js";import"./useEventCallback-DBGM7t4z.js";import"./SkeletonBar-qv53td8s.js";import"./LoadingCell--0t_yWqm.js";import"./ColumnConfigDialog-XmKchhKd.js";import"./DraggableList-CZi0zryu.js";import"./search-D8ew1nZH.js";import"./Input-CnULVynl.js";import"./useControlled-COgqWOOu.js";import"./Button-DyTPsUeB.js";import"./small-cross-0qXddkOp.js";import"./ActionButton-CN25wp6X.js";import"./Checkbox-Cjz7OA4J.js";import"./useValueChanged-Bd1tAroA.js";import"./CollapsiblePanel-Djn_6tzS.js";import"./MultiColumnSortDialog-CpvYVBxd.js";import"./MenuTrigger-DxtWj2lZ.js";import"./CompositeItem-Bb-U7Uoq.js";import"./ToolbarRootContext-DH9Y5D6c.js";import"./getDisabledMountTransitionStyles-Jk0dBvhz.js";import"./getPseudoElementBounds-CGw_wpw2.js";import"./chevron-down-CKxmHC3q.js";import"./index-BVR21Q-U.js";import"./error-BFVZCDZ0.js";import"./BaseCbacBanner-DaEPWrNv.js";import"./makeExternalStore-CJVHwj3d.js";import"./Tooltip-BDpg5RtK.js";import"./PopoverPopup-D4_ZYeYA.js";import"./debounce-BZ-57v4W.js";import"./useOsdkClient-GAIR_yvP.js";import"./tick-DYdyuQqX.js";import"./DropdownField-DDTkuItE.js";import"./isEqual-CLdOfzOV.js";import"./withOsdkMetrics-C-RUZtQv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
