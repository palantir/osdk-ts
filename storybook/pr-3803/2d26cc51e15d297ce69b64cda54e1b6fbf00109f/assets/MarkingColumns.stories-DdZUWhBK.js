import{f as p,j as e}from"./iframe-BHGDbtGe.js";import{O as i}from"./object-table-PLsUGZhh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D5OaizyV.js";import"./Table-qmoBiGzY.js";import"./index-BGbjnL0r.js";import"./Dialog-DBvGyyq5.js";import"./cross-DV8hBvU3.js";import"./svgIconContainer-CZX0yke1.js";import"./useBaseUiId-BxePW4ZZ.js";import"./InternalBackdrop-DcMO0k_5.js";import"./composite-DLWXPmjE.js";import"./index-Q7uht_3R.js";import"./index-DOkphcqk.js";import"./index-CIyc8_0F.js";import"./useEventCallback-D9XTGJn3.js";import"./SkeletonBar-D49d_fWs.js";import"./LoadingCell-BJv2-NGK.js";import"./ColumnConfigDialog-BUcZT3_2.js";import"./DraggableList-D4cXgHW3.js";import"./search-D5NN5dep.js";import"./Input-CI0ds8FO.js";import"./useControlled-CIItNp9c.js";import"./isEqual-DuvxfOEa.js";import"./isObject-DmYI6OMl.js";import"./Button-CWnsWqv5.js";import"./ActionButton-BVvCW9xD.js";import"./Checkbox-CzEGHWa7.js";import"./useValueChanged-BbD1lFs3.js";import"./CollapsiblePanel-Dpzjda5A.js";import"./MultiColumnSortDialog-BhFY8IBd.js";import"./MenuTrigger-8djQiS6H.js";import"./CompositeItem-C05Q1deB.js";import"./ToolbarRootContext-Dd8UM72f.js";import"./getDisabledMountTransitionStyles-B6WkCrv_.js";import"./getPseudoElementBounds-ZMPNX3ba.js";import"./chevron-down-Ddfl__cg.js";import"./index-BIC30L0-.js";import"./error-DTLowD9G.js";import"./BaseCbacBanner-q8yPTdnN.js";import"./makeExternalStore-BcDoXpGE.js";import"./Tooltip-C2epuRfV.js";import"./PopoverPopup-Da7vYhnj.js";import"./toNumber-CbxdLfR-.js";import"./useOsdkClient-Ckca3cDS.js";import"./tick-DA3-zK9O.js";import"./DropdownField-DO_St2lf.js";import"./withOsdkMetrics-BNlgOp0v.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
