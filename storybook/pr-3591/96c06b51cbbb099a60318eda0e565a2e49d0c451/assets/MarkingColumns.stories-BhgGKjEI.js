import{f as n,j as t}from"./iframe-C7ySVT8o.js";import{O as p}from"./object-table-dZdsA0yv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDkQBTym.js";import"./Table-CHMYumax.js";import"./index-CPF4-L8A.js";import"./Dialog-j1g1zABe.js";import"./cross-4Asy9XGe.js";import"./svgIconContainer-oEr_wdi1.js";import"./useBaseUiId-BQjkdaK-.js";import"./InternalBackdrop-3AhCico8.js";import"./composite-BdnZ_3c5.js";import"./index-uf0-eYVm.js";import"./index--LJ-8KIX.js";import"./index-B_8b9Lsh.js";import"./useEventCallback-9VaMr6HM.js";import"./SkeletonBar-C_tERQRK.js";import"./LoadingCell-y3Y98ABk.js";import"./ColumnConfigDialog-ByschaXD.js";import"./DraggableList-d1ERpiWj.js";import"./search-D-8rX3NU.js";import"./Input-waYfT-p9.js";import"./useControlled-DQYP7F2G.js";import"./Button-C5PI83Nd.js";import"./small-cross-NhkxdYba.js";import"./ActionButton-BLBTcGbs.js";import"./Checkbox-CRXALS7l.js";import"./minus-DV8GyOat.js";import"./tick-Bn8YHkca.js";import"./useValueChanged-g0yMaqN7.js";import"./caret-down-8It5xaps.js";import"./CollapsiblePanel-D__zWz31.js";import"./MultiColumnSortDialog-J-ae2-r5.js";import"./MenuTrigger-CiPPkQTa.js";import"./CompositeItem-Pg_quQBf.js";import"./ToolbarRootContext-PcU21RR5.js";import"./getDisabledMountTransitionStyles-Bhz8TiZP.js";import"./getPseudoElementBounds-BzGKZweA.js";import"./chevron-down-C26vSaih.js";import"./index-_7DZxQKg.js";import"./error-LCGwqRYy.js";import"./BaseCbacBanner-AZE0pJoZ.js";import"./makeExternalStore-BjG2YExf.js";import"./Tooltip-CI9ZQ4II.js";import"./PopoverPopup-B6VoWGpC.js";import"./toNumber-Dnd2kO7h.js";import"./useOsdkClient--WrZo_wi.js";import"./DropdownField-BJYygTgZ.js";import"./withOsdkMetrics-BcN72Bo5.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
