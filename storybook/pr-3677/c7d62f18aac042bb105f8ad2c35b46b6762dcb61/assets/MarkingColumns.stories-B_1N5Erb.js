import{f as n,j as t}from"./iframe-DD_zVPyH.js";import{O as p}from"./object-table-JAdZOu4S.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3tVYw5k.js";import"./Table-DIFZ8Uba.js";import"./index-CV8rnQll.js";import"./Dialog-DWDs1wVa.js";import"./cross-DMz3hSHv.js";import"./svgIconContainer-Dy9DsSKT.js";import"./useBaseUiId-BCgB4FUp.js";import"./InternalBackdrop-DMUIEgcH.js";import"./composite-Dfzn9W6B.js";import"./index-CZvpBUlr.js";import"./index-D4iQYxTA.js";import"./index-CEiGZ32V.js";import"./useEventCallback-Bi0rodtT.js";import"./SkeletonBar-Dl2Q0Wn7.js";import"./LoadingCell-xDWohKJI.js";import"./ColumnConfigDialog-BhGg9waa.js";import"./DraggableList-WVrY_2P5.js";import"./search-DsagKYBy.js";import"./Input-CT0A1psx.js";import"./useControlled-S61qNiWf.js";import"./Button-CYr4vSHb.js";import"./small-cross-BFS926f4.js";import"./ActionButton-C_odmLt4.js";import"./Checkbox-BERtah9R.js";import"./useValueChanged-BNzQvX80.js";import"./CollapsiblePanel-kfv86N3j.js";import"./MultiColumnSortDialog-CLDKedP8.js";import"./MenuTrigger-BOw5EXLV.js";import"./CompositeItem-aMP4Zzfd.js";import"./ToolbarRootContext-q9XcflU-.js";import"./getDisabledMountTransitionStyles-oIJTT0M6.js";import"./getPseudoElementBounds-C4eOBbKl.js";import"./chevron-down-Caji2Yuh.js";import"./index-CCbJn7f3.js";import"./error-DzSBvb9G.js";import"./BaseCbacBanner-Cg9INklY.js";import"./makeExternalStore-BGwMDnSW.js";import"./Tooltip-_pXvKyNf.js";import"./PopoverPopup-B1-4fSjz.js";import"./toNumber-BGHq0wws.js";import"./useOsdkClient-TVtWP486.js";import"./tick-B-eexi08.js";import"./DropdownField-C4Qpl51V.js";import"./withOsdkMetrics-B4fnFgyi.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
