import{f as n,j as t}from"./iframe-Do3vBBH1.js";import{O as p}from"./object-table-C_-mZ0mw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WWl6MMjA.js";import"./Table-Y8TSZ5On.js";import"./index-D4XSOH2U.js";import"./Dialog-4QbVWOwu.js";import"./cross-CzNKFyiK.js";import"./svgIconContainer-zEvzpv1I.js";import"./useBaseUiId-Gwd5OaJr.js";import"./InternalBackdrop-BFHtccJw.js";import"./composite-BoJByqVd.js";import"./index-C51je7XA.js";import"./index-CyAGruiz.js";import"./index-CGNy0uVR.js";import"./useEventCallback-D_6ERtSX.js";import"./SkeletonBar-CdT7inxH.js";import"./LoadingCell-DASBcxlg.js";import"./ColumnConfigDialog-DpENHDK4.js";import"./DraggableList-C2wWIghe.js";import"./search-D116u91U.js";import"./Input-BSAVQiUZ.js";import"./useControlled-BjoBvq9L.js";import"./Button-Dq2hSSre.js";import"./small-cross-oPpDYPZj.js";import"./ActionButton-BkSXPYLm.js";import"./Checkbox-DYU-toeY.js";import"./useValueChanged-DuY_5O4x.js";import"./CollapsiblePanel-B3JL6Wu5.js";import"./MultiColumnSortDialog-DOKdX4A1.js";import"./MenuTrigger-UCLPYhpA.js";import"./CompositeItem-BetNSwhz.js";import"./ToolbarRootContext-DTzZzepT.js";import"./getDisabledMountTransitionStyles-DxJdQacB.js";import"./getPseudoElementBounds-CND7oyjc.js";import"./chevron-down-DJzCjbbO.js";import"./index-CJOvCuHH.js";import"./error-C5p6E1hc.js";import"./BaseCbacBanner-BB3rZwK2.js";import"./makeExternalStore-C3Bb7It6.js";import"./Tooltip-BsN_Xjmo.js";import"./PopoverPopup-BTYPlJqR.js";import"./toNumber-B2tXTWtm.js";import"./useOsdkClient-Bf5OYL9n.js";import"./tick-Dspm5iuj.js";import"./DropdownField-CcE-tZih.js";import"./withOsdkMetrics-CpxgY9zP.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
