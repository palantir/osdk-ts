import{f as p,j as e}from"./iframe-_9YlafCr.js";import{O as i}from"./object-table-DUelh5-U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DW3vsqL2.js";import"./index-BfZ7BIaf.js";import"./Dialog-BrV6o91O.js";import"./cross-B125yZV8.js";import"./svgIconContainer--y7ZeGKv.js";import"./useBaseUiId-D-8XVTg2.js";import"./InternalBackdrop-CsGmrjwG.js";import"./composite-B3EEdu-D.js";import"./index-DIog01LX.js";import"./index-DNJvNqQL.js";import"./index-BakLKG99.js";import"./useEventCallback-DJBlLW-f.js";import"./SkeletonBar-CUvmqA7b.js";import"./LoadingCell-DoXNawwV.js";import"./ColumnConfigDialog-B6_4becb.js";import"./DraggableList-EY3fB7NM.js";import"./search-0XIiHjxa.js";import"./Input-B_fnG3Vc.js";import"./useControlled-BdcuaOkM.js";import"./Button-C98CyIMt.js";import"./small-cross-OYYk08nU.js";import"./ActionButton-CUGmDrNW.js";import"./Checkbox-B-HW6x-Y.js";import"./useValueChanged-CBaTlyFq.js";import"./CollapsiblePanel-B3fgQFhP.js";import"./MultiColumnSortDialog-CZ0LbiOr.js";import"./MenuTrigger-BXTZW7uz.js";import"./CompositeItem-DW1q3vob.js";import"./ToolbarRootContext-BvwX_Pt8.js";import"./getDisabledMountTransitionStyles-DZwz930I.js";import"./getPseudoElementBounds-CjjwHwg5.js";import"./chevron-down-DxrxOWhu.js";import"./index-Cj93zZaN.js";import"./error-DDBbGTuS.js";import"./BaseCbacBanner-C9BvCD8Z.js";import"./makeExternalStore-CDyMTORk.js";import"./Tooltip-DinPo1CO.js";import"./isObject-SrfzQbVs.js";import"./debounce-BfdW6jiz.js";import"./useOsdkClient-DugCV1Jh.js";import"./tick-CFfbGJF6.js";import"./DropdownField-ACTuDJFj.js";import"./isEqual-C1L_1N_i.js";import"./_baseIsEqual-BOWedRvE.js";import"./withOsdkMetrics-ASK7qsZD.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
