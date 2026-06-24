import{f as n,j as t}from"./iframe-C_YSZhmb.js";import{O as p}from"./object-table-BeWLesZt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFkJCi6W.js";import"./Table-DjvOOOtR.js";import"./index-DyUa_hup.js";import"./Dialog-A6iJrta7.js";import"./cross-igOYObgS.js";import"./svgIconContainer-CTE7qjnM.js";import"./useBaseUiId-fgj3Ae6R.js";import"./InternalBackdrop-C8EYUF6T.js";import"./composite-Pk8fx26w.js";import"./index-C-7zdHTt.js";import"./index-CEhz685m.js";import"./index-wScR3t62.js";import"./useEventCallback-nia-KkEG.js";import"./SkeletonBar-DLMWhAvF.js";import"./LoadingCell-PN9afJgg.js";import"./ColumnConfigDialog-G2_UPtct.js";import"./DraggableList-CezoHNKn.js";import"./Input-DhsPy4wS.js";import"./useControlled-LPnAy1xv.js";import"./Button-DydXIbfr.js";import"./small-cross-CNyGDtDa.js";import"./ActionButton-D15-yhm6.js";import"./Checkbox-BJIIa-X5.js";import"./minus-CANF-wsy.js";import"./useValueChanged-CKFSWcrz.js";import"./caret-down-WHkMnona.js";import"./CollapsiblePanel-C1Uih0fA.js";import"./MultiColumnSortDialog-WLxeucfn.js";import"./MenuTrigger-DaUL0mX-.js";import"./CompositeItem-DC5HPmsk.js";import"./ToolbarRootContext-DEge2cAE.js";import"./getDisabledMountTransitionStyles-CXRPL9IR.js";import"./getPseudoElementBounds-q0CTFuZu.js";import"./chevron-down-Rf6vyGnV.js";import"./index-7c92J0jc.js";import"./error-CcvjpYUW.js";import"./BaseCbacBanner-jcFRMt8q.js";import"./makeExternalStore-NIpHvH3Y.js";import"./Tooltip-64kFfjAB.js";import"./PopoverPopup-mcOX50dp.js";import"./toNumber-DZw-GLfK.js";import"./useOsdkClient-BfYovfsT.js";import"./DropdownField-CYqCD6C4.js";import"./withOsdkMetrics-BxTDnvSv.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
