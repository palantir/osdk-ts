import{f as n,j as t}from"./iframe-DYNK02I_.js";import{O as p}from"./object-table-HOqSwTEY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVQqxqqG.js";import"./Table-BX68Lw8R.js";import"./index-DgcQGZHo.js";import"./Dialog-DAJmsbZg.js";import"./cross-BtSz2CJ7.js";import"./svgIconContainer-BIw5d8Z1.js";import"./useBaseUiId-DBmz8GTO.js";import"./InternalBackdrop-CuguROyf.js";import"./composite-BN0hmDQN.js";import"./index-BSXskgoy.js";import"./index-BFATeBzZ.js";import"./index-_adbjLmT.js";import"./useEventCallback-8eiGtYmr.js";import"./SkeletonBar-_cpMLDjQ.js";import"./LoadingCell-B4DHzo4C.js";import"./ColumnConfigDialog-BNtCf35a.js";import"./DraggableList-DOoR0K2N.js";import"./search-BrgJCdJ1.js";import"./Input-Hl3VDz84.js";import"./useControlled-C1nCVAdK.js";import"./Button-BIYMuHEo.js";import"./small-cross-Cd1wvMj2.js";import"./ActionButton-AgwSkRNM.js";import"./Checkbox-BDv7IG4W.js";import"./useValueChanged-4qh5N6pQ.js";import"./CollapsiblePanel-BhOo8rJK.js";import"./MultiColumnSortDialog-a1cmmNH9.js";import"./MenuTrigger-DhVqnJSB.js";import"./CompositeItem-DJcjaUR4.js";import"./ToolbarRootContext-dyjJ_3hL.js";import"./getDisabledMountTransitionStyles-BLMIoYSz.js";import"./getPseudoElementBounds-DBl3J9o4.js";import"./chevron-down-CGyUnEQ9.js";import"./index-DO8TnFyt.js";import"./error-DVUpGhgE.js";import"./BaseCbacBanner-BoTJQ41L.js";import"./makeExternalStore-atX7fbPr.js";import"./Tooltip-DYAVFLUz.js";import"./PopoverPopup-Dm2adbf4.js";import"./toNumber-BWVPVyju.js";import"./useOsdkClient-Di52ia0t.js";import"./tick-CFJahENf.js";import"./DropdownField-DvJq0SSj.js";import"./withOsdkMetrics-hkEMtyUb.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
