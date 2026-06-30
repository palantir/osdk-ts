import{f as n,j as t}from"./iframe-K9uQTvnE.js";import{O as p}from"./object-table-DjLJPuYc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DRtrsWEw.js";import"./Table-aDRehKEy.js";import"./index-BOTWRHfm.js";import"./Dialog-CBUJ4aGx.js";import"./cross-Bz6WZlQ2.js";import"./svgIconContainer-DXVmsq7W.js";import"./useBaseUiId-BrMM6UqQ.js";import"./InternalBackdrop-i_cU5UPM.js";import"./composite-NKL1wxmL.js";import"./index-CvhlEaPX.js";import"./index-CghjAjwe.js";import"./index-CrUBQKj3.js";import"./useEventCallback-CYBuZa43.js";import"./SkeletonBar-CtpS8RiS.js";import"./LoadingCell-DqOLMENz.js";import"./ColumnConfigDialog-ZbRIw1eK.js";import"./DraggableList-Cj58OhCv.js";import"./search-mQER3stZ.js";import"./Input-DL9_8wOq.js";import"./useControlled-B3zUT6Sw.js";import"./Button-CcZ8W5ue.js";import"./small-cross-DaOtKoLb.js";import"./ActionButton-hmyTFlTx.js";import"./Checkbox-DLHjSpoY.js";import"./minus-Dz9wGdOl.js";import"./tick-CwbEpC5L.js";import"./useValueChanged-FsYD_Wv-.js";import"./caret-down-GRSnguIB.js";import"./CollapsiblePanel-DsbC5khh.js";import"./MultiColumnSortDialog-DAs8y5YY.js";import"./MenuTrigger-BiG99jp3.js";import"./CompositeItem-C2VbBnr1.js";import"./ToolbarRootContext-BabJYKcD.js";import"./getDisabledMountTransitionStyles-CyRvRXlH.js";import"./getPseudoElementBounds-Mo3vOjnZ.js";import"./chevron-down-Dt-6eYT2.js";import"./index-Cmly3gq7.js";import"./error-Bij_wXZM.js";import"./BaseCbacBanner-Dtvc4ezR.js";import"./makeExternalStore-BLco9k05.js";import"./Tooltip-BalxAQce.js";import"./PopoverPopup-DjWAFLua.js";import"./toNumber-CAwB5DM1.js";import"./useOsdkClient-CSlcO8sq.js";import"./DropdownField-BdlV8xpG.js";import"./withOsdkMetrics-BLZ2TFDr.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
