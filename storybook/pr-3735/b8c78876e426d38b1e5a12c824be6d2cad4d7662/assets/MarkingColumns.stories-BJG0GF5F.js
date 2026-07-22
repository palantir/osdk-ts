import{f as p,j as e}from"./iframe-BRxXnNeA.js";import{O as i}from"./object-table-BWXmHScr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ZwpNBDck.js";import"./Table-DjTRGd0n.js";import"./index-DnUdziE3.js";import"./Dialog-BGn3Kbow.js";import"./cross-p5C9R9_r.js";import"./svgIconContainer-BOuRuwJr.js";import"./useBaseUiId-iHLM7QjT.js";import"./InternalBackdrop-BwZQ0gYG.js";import"./composite-BmCm4IKS.js";import"./index-BMsxRPaK.js";import"./index-V95TsBfL.js";import"./index-DF9ZbJ2O.js";import"./useEventCallback-Dk8Q5KrO.js";import"./SkeletonBar-aCQi_r5v.js";import"./LoadingCell-DwHEwjqu.js";import"./ColumnConfigDialog-CTTwBk2B.js";import"./DraggableList-X9V4ye4K.js";import"./search-DKQ2rHbj.js";import"./Input-CGTuhK0d.js";import"./useControlled-StFrWOwS.js";import"./isEqual-ObeORAz7.js";import"./isObject-GLs1X9xy.js";import"./Button-CLHyeJxI.js";import"./ActionButton-ChbUphi7.js";import"./Checkbox-BWcBAjrk.js";import"./useValueChanged-DWJn24ga.js";import"./CollapsiblePanel-t1PtKIC8.js";import"./MultiColumnSortDialog-BwKtyIja.js";import"./MenuTrigger-o17AnMiN.js";import"./CompositeItem-01NlXsRP.js";import"./ToolbarRootContext-DTrfrJro.js";import"./getDisabledMountTransitionStyles-QcZ-leHz.js";import"./getPseudoElementBounds-Df0V2yLr.js";import"./chevron-down-DBKWZy9U.js";import"./index-CYoRdqfZ.js";import"./error-BFvdxdQn.js";import"./BaseCbacBanner-Dalh-T5O.js";import"./makeExternalStore-DmpDAepm.js";import"./Tooltip-p4FUIbO3.js";import"./PopoverPopup-Bhv815cX.js";import"./toNumber-rktqZQ-g.js";import"./useOsdkClient-CTu4hncc.js";import"./tick-_elaQ7T9.js";import"./DropdownField-DLY5-bws.js";import"./withOsdkMetrics-DEkYj1jo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
