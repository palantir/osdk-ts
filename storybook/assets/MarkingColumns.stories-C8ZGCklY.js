import{f as p,j as e}from"./iframe-BNLo1qEo.js";import{O as i}from"./object-table-uts_JE8Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHy_BrAk.js";import"./index-BWXZWlZP.js";import"./Dialog-BLZKv8--.js";import"./cross-BB9vD9ud.js";import"./svgIconContainer-DNenegb-.js";import"./useBaseUiId-LvnHplFk.js";import"./InternalBackdrop-CG66B4oQ.js";import"./composite-c-IzcIQu.js";import"./index-Df3Yy7kp.js";import"./index-BSoYvY0P.js";import"./index-6ubKDyZX.js";import"./useEventCallback-CJ49gR_Z.js";import"./SkeletonBar-DZBhWtFh.js";import"./LoadingCell-CFpCMolU.js";import"./ColumnConfigDialog-QUBGD9Ee.js";import"./DraggableList-CGZQygd2.js";import"./search-qRqfYCrN.js";import"./Input-CQiU0obq.js";import"./useControlled-CcPprz05.js";import"./Button-LEGGZV5y.js";import"./small-cross-Dh5ayvwP.js";import"./ActionButton-BO9JPDLL.js";import"./Checkbox-CfS-mZPL.js";import"./useValueChanged-C0keAUqj.js";import"./CollapsiblePanel-oBM-mKD1.js";import"./MultiColumnSortDialog-C9odBEvr.js";import"./MenuTrigger-B2bl3dj9.js";import"./CompositeItem-CQcPqlHd.js";import"./ToolbarRootContext-_EVP-k89.js";import"./getDisabledMountTransitionStyles-APnNNLZm.js";import"./getPseudoElementBounds-CQ5R3Z25.js";import"./chevron-down-Cc8GiNOO.js";import"./index-2-OS7oEL.js";import"./error-D0RMWaYW.js";import"./BaseCbacBanner-DGhlbh8N.js";import"./makeExternalStore-Bi3yZCYu.js";import"./Tooltip-CN30f2dN.js";import"./PopoverPopup-pMmoGPXE.js";import"./debounce-DQBK7OpX.js";import"./useOsdkClient-uOgjqpaF.js";import"./tick-DLT-1uqo.js";import"./DropdownField-XjPQJ3lB.js";import"./isEqual-56Js2KWE.js";import"./withOsdkMetrics-BI6Ebbvf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
