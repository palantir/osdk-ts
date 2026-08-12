import{f as p,j as e}from"./iframe-BAHulxpJ.js";import{O as i}from"./object-table-CNB57-cJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5aV3zbER.js";import"./Table-CxL2p-Va.js";import"./index-BQXofWlU.js";import"./Dialog-B6iU_o4S.js";import"./cross-B9q1-ifJ.js";import"./svgIconContainer-Cm-IMBSr.js";import"./useBaseUiId-4VVoMa3J.js";import"./InternalBackdrop-CRYKoqsR.js";import"./composite-CNE1JcBa.js";import"./index-DoA2rgK3.js";import"./index-WmCUx70V.js";import"./index-C5Lb6-VW.js";import"./useEventCallback-DpFCqp0u.js";import"./SkeletonBar-C0G3PmlI.js";import"./LoadingCell-C0BQjoN8.js";import"./ColumnConfigDialog-BiAKAKR-.js";import"./DraggableList-Y69Q8-LB.js";import"./search-OXklcGGP.js";import"./Input-BrRAx9lQ.js";import"./useControlled-DIFuATpA.js";import"./isEqual-ZCjsuvSA.js";import"./isObject-WPnHXGM7.js";import"./Button-CQQZwN_7.js";import"./ActionButton-BpQl9awy.js";import"./Checkbox-BfpNu74p.js";import"./useValueChanged-CJW4fpp5.js";import"./CollapsiblePanel-CoqkMeOl.js";import"./MultiColumnSortDialog-B8lY0q26.js";import"./MenuTrigger-CB6VXfFB.js";import"./CompositeItem-CzEEDLGh.js";import"./ToolbarRootContext-D5ZmFT_T.js";import"./getDisabledMountTransitionStyles-CoaV92BZ.js";import"./getPseudoElementBounds-4MRkHXcX.js";import"./chevron-down-pYaR9_5X.js";import"./index-B0GpXZaG.js";import"./error-CcsT2Wai.js";import"./BaseCbacBanner-DT8aZfxT.js";import"./makeExternalStore-Cb1RY-_V.js";import"./Tooltip-Tx9hRxwB.js";import"./PopoverPopup-DyAxudiR.js";import"./toNumber-DqdJyyKm.js";import"./useOsdkClient-BAgJREz7.js";import"./tick-BDvW4uz3.js";import"./DropdownField-msHCB7CJ.js";import"./withOsdkMetrics-Bp9A7LOQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
