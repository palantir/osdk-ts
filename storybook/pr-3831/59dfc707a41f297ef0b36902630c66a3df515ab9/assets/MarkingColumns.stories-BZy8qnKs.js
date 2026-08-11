import{f as p,j as e}from"./iframe-Da5478sC.js";import{O as i}from"./object-table-DtiJO51Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DIyxpJKV.js";import"./Table-CMNOjmkQ.js";import"./index-DNUZO8F_.js";import"./Dialog-DBKDuyse.js";import"./cross-CnU_MB9h.js";import"./svgIconContainer-C6HFRanw.js";import"./useBaseUiId-D_WzVsv0.js";import"./InternalBackdrop-COzQqh_O.js";import"./composite-DnOwfSyn.js";import"./index-BxjGMzYA.js";import"./index-Dg9rFNqX.js";import"./index-BnogVFR6.js";import"./useEventCallback-gkM1vPOl.js";import"./SkeletonBar-DKwwkyqs.js";import"./LoadingCell-CgwHE-u8.js";import"./ColumnConfigDialog-CfPFnbZz.js";import"./DraggableList-CmqONMxF.js";import"./search-CeQH1KSS.js";import"./Input-C8_9EasY.js";import"./useControlled-CbcU3cLx.js";import"./isEqual-flbVqJAh.js";import"./isObject-OhMF8RZ7.js";import"./Button-u_Jmn4Ee.js";import"./ActionButton-CKvKYF4x.js";import"./Checkbox-Dm9tg9z2.js";import"./useValueChanged-D8Ryr8am.js";import"./CollapsiblePanel-BBT7QUlS.js";import"./MultiColumnSortDialog-6FGuFXtY.js";import"./MenuTrigger-DJohB7N6.js";import"./CompositeItem-BYPj8kaj.js";import"./ToolbarRootContext-DU3i--I5.js";import"./getDisabledMountTransitionStyles-DgJLPqi4.js";import"./getPseudoElementBounds-Blt9baCd.js";import"./chevron-down-DDVlB3SF.js";import"./index-2vHiu-ON.js";import"./error-CuOqzkrV.js";import"./BaseCbacBanner-C9AocZ2s.js";import"./makeExternalStore-DxUA_WKV.js";import"./Tooltip-BRr5t85E.js";import"./PopoverPopup-B6NhKGjc.js";import"./toNumber-C4gPlVsP.js";import"./useOsdkClient-BRPJd27D.js";import"./tick-CFs0YPaU.js";import"./DropdownField-CJUYNfrp.js";import"./withOsdkMetrics-BXagX8Z0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
