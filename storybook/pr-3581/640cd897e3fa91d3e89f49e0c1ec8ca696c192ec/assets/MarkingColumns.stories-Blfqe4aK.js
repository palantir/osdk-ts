import{f as n,j as t}from"./iframe-zaJlvm-g.js";import{O as p}from"./object-table-Dw8g626g.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0t6R1ee.js";import"./Table-DDsLsAxA.js";import"./index-CWWZPObL.js";import"./Dialog-BvnBd4Iw.js";import"./cross-DUEh2j-2.js";import"./svgIconContainer-Co48vgDE.js";import"./useBaseUiId-C-uUecG4.js";import"./InternalBackdrop-BoGsV-Ip.js";import"./composite-DjzyHNH4.js";import"./index-D1uwh1-2.js";import"./index-CnrbqwrJ.js";import"./index-Dek28qRS.js";import"./useEventCallback-CsQywO0E.js";import"./SkeletonBar-DEj-zvZE.js";import"./LoadingCell-DyRkjy8A.js";import"./ColumnConfigDialog-BEQ_FgX5.js";import"./DraggableList-aeaaN24F.js";import"./search-KM4R92ev.js";import"./Input-CA4HS9Zv.js";import"./useControlled-ypXp9mhF.js";import"./Button-BuBVF9e8.js";import"./small-cross-C_mj9rNK.js";import"./ActionButton-BkvJ4MB0.js";import"./Checkbox-ig_htLE1.js";import"./minus-DbNckBt2.js";import"./tick-SVvdu6yV.js";import"./useValueChanged-CzUT0MG4.js";import"./caret-down-JAJycxwD.js";import"./CollapsiblePanel-DiOZKojt.js";import"./MultiColumnSortDialog-bxG2UEnN.js";import"./MenuTrigger-D9VEitae.js";import"./CompositeItem-BStSAoQl.js";import"./ToolbarRootContext-B7TsEC2Q.js";import"./getDisabledMountTransitionStyles-C4nNraa4.js";import"./getPseudoElementBounds-fAYc4TsA.js";import"./chevron-down-CzFuY56N.js";import"./index-C3ZHtZdJ.js";import"./error-Dd7U7SLW.js";import"./BaseCbacBanner-B3xUo0qo.js";import"./makeExternalStore-CiJecHn6.js";import"./Tooltip-PVOVsGkA.js";import"./PopoverPopup-T7qHpNl4.js";import"./toNumber-CydC1bcL.js";import"./useOsdkClient-BO77gXsc.js";import"./DropdownField-Kje36OY4.js";import"./withOsdkMetrics-C1F_Wwv9.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
