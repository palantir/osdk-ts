import{f as p,j as e}from"./iframe-D4P7etlB.js";import{O as i}from"./object-table-CmDASLiD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2lPWNQK.js";import"./Table-pBQAdc4d.js";import"./index--jClFyuO.js";import"./Dialog-KLia9iKn.js";import"./cross-2BDiF0Hd.js";import"./svgIconContainer-U5WzETGn.js";import"./useBaseUiId-DvebyHll.js";import"./InternalBackdrop-DGlO_IGy.js";import"./composite-EmCbbtLr.js";import"./index-CryUHWua.js";import"./index-CwQjgJZY.js";import"./index-_8-zIP07.js";import"./useEventCallback-DkNCpCyH.js";import"./SkeletonBar-BO8Ocj6J.js";import"./LoadingCell-Do7dTGvR.js";import"./ColumnConfigDialog-CohusCj_.js";import"./DraggableList-BqyQGRR3.js";import"./search-BeidNAh3.js";import"./Input-qm2XT5j9.js";import"./useControlled-Bt7GOIrD.js";import"./Button-DSmwZlqW.js";import"./small-cross-DTEPBgMK.js";import"./ActionButton-DK6o_d0J.js";import"./Checkbox-DyvnuZ96.js";import"./useValueChanged-cSUG-TZB.js";import"./CollapsiblePanel-rtSyYl_a.js";import"./MultiColumnSortDialog-q1L_KY4V.js";import"./MenuTrigger-DR872eUl.js";import"./CompositeItem-Ca01-11J.js";import"./ToolbarRootContext-BJaSUWck.js";import"./getDisabledMountTransitionStyles-CX4qj900.js";import"./getPseudoElementBounds-hPghm1P1.js";import"./chevron-down-6L8qWnzl.js";import"./index-C2PCEa1N.js";import"./error-BEbiBzi3.js";import"./BaseCbacBanner-O1ctCsiT.js";import"./makeExternalStore-B40swsdd.js";import"./Tooltip-rdRqYy6n.js";import"./isObject-XT_Sb81H.js";import"./debounce-BMR9Ivsx.js";import"./useOsdkClient-CeUx27Wr.js";import"./tick-BK6XBZsH.js";import"./DropdownField-CWcrlvwC.js";import"./isEqual-CO15cxJ9.js";import"./_baseIsEqual-CsrvH1cu.js";import"./withOsdkMetrics-DllWQK_5.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
