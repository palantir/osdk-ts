import{f as p,j as e}from"./iframe-BawfCu5f.js";import{O as i}from"./object-table-nQNOcilk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dl7iHKQQ.js";import"./Table-C7eH67Y4.js";import"./index-EoQmSMlv.js";import"./Dialog-BxiLOBVr.js";import"./cross-S96n59YZ.js";import"./svgIconContainer-C2ipol2u.js";import"./useBaseUiId-C6crYWZv.js";import"./InternalBackdrop-nZh6Vdn-.js";import"./composite-DJaR8rxc.js";import"./index-BsRqisJt.js";import"./index-BznzXb1r.js";import"./index-DoD4l9cT.js";import"./useEventCallback-jn7RZJ7N.js";import"./SkeletonBar-DSStsJmj.js";import"./LoadingCell-CtC5Zv5q.js";import"./ColumnConfigDialog-DOYanmxU.js";import"./DraggableList-C6q0tPCD.js";import"./search-LrmIhryk.js";import"./Input-B29VtwUA.js";import"./useControlled-CoTq0u9Z.js";import"./isEqual-Cb55HrSt.js";import"./isObject-e154F1ua.js";import"./Button-BjO8QNhj.js";import"./ActionButton-CaPHkZgy.js";import"./Checkbox-Cxv9j7F4.js";import"./useValueChanged-DCiOMCW1.js";import"./CollapsiblePanel-DGDpm6RZ.js";import"./MultiColumnSortDialog-Gh-babnf.js";import"./MenuTrigger-DCk7QL1e.js";import"./CompositeItem-DzHI6BV-.js";import"./ToolbarRootContext-LEvK7epa.js";import"./getDisabledMountTransitionStyles-CuWP_GsO.js";import"./getPseudoElementBounds-DvF4Ho7a.js";import"./chevron-down-DnS9ARE_.js";import"./index-tIdgjXf4.js";import"./error-DJqTF5Ik.js";import"./BaseCbacBanner-B3qnGlTb.js";import"./makeExternalStore-DEJ3bQls.js";import"./Tooltip-BDLZEDZP.js";import"./PopoverPopup-CibmXzcq.js";import"./toNumber-cROz_1f-.js";import"./useOsdkClient-CL27Mb3N.js";import"./tick-Cz0YPlZN.js";import"./DropdownField-D6NrM3Px.js";import"./withOsdkMetrics-CDiwqGfJ.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
