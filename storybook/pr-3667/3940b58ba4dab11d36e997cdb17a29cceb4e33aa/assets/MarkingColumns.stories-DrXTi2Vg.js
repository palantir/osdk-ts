import{f as n,j as t}from"./iframe-CepHi67J.js";import{O as p}from"./object-table-DMcAeM3W.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Boh8KOnZ.js";import"./Table-C87kIBeA.js";import"./index-D2zQwwgG.js";import"./Dialog-qPNnLFJS.js";import"./cross-D3sphJOH.js";import"./svgIconContainer-v7KqiOj2.js";import"./useBaseUiId-CRwmVPlv.js";import"./InternalBackdrop-CWgJEhPg.js";import"./composite-CXReW7-y.js";import"./index-Vl6nnYOc.js";import"./index-BI6mTEho.js";import"./index-DixEuio6.js";import"./useEventCallback-DpV2rOOF.js";import"./SkeletonBar-CCT2KS2E.js";import"./LoadingCell-DopzKK7O.js";import"./ColumnConfigDialog-CrK0PVpJ.js";import"./DraggableList-CfhhXHT3.js";import"./Input-D_U2TTnT.js";import"./useControlled-ChZyk9I4.js";import"./Button-BHwV8nQL.js";import"./small-cross-C1x6WGft.js";import"./ActionButton-vuY0n0Rs.js";import"./Checkbox-CBjc9yGB.js";import"./minus-C4jf66aS.js";import"./useValueChanged-BDzzS8e0.js";import"./caret-down-BJEerc8O.js";import"./CollapsiblePanel-BGMY5riJ.js";import"./MultiColumnSortDialog-DdKWSKK-.js";import"./MenuTrigger-CXWsjGrC.js";import"./CompositeItem-0-aIPG9u.js";import"./ToolbarRootContext-C10u4rHZ.js";import"./getDisabledMountTransitionStyles-CaPrQJhn.js";import"./getPseudoElementBounds-o5Ctbgux.js";import"./chevron-down-8QzSQAjf.js";import"./index-Dc4BZ6ke.js";import"./error-BWGQp9TV.js";import"./BaseCbacBanner-C0H0kRBf.js";import"./makeExternalStore-B9PdwE6C.js";import"./Tooltip-VVr6-nGm.js";import"./PopoverPopup-Ctmj-_C5.js";import"./toNumber-Bj4b_yEh.js";import"./useOsdkClient-CPltrfzI.js";import"./DropdownField-C08HbaL9.js";import"./withOsdkMetrics-BegDobqt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
