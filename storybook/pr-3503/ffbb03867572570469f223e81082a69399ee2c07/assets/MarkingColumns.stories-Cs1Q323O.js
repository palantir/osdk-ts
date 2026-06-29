import{f as n,j as t}from"./iframe-f66FgX7Y.js";import{O as p}from"./object-table-GT7kMphb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-raEF4RES.js";import"./Table-C9mhipdi.js";import"./index-DPqglQtc.js";import"./Dialog-BpUid-uw.js";import"./cross-BghbwRkQ.js";import"./svgIconContainer-vQy4jNvU.js";import"./useBaseUiId-D571T0a4.js";import"./InternalBackdrop-xG7fM3E5.js";import"./composite-CJwo4Axb.js";import"./index-njRI7QSI.js";import"./index-CcMjMhdC.js";import"./index-CogHfYbz.js";import"./useEventCallback-YLx7CvSi.js";import"./SkeletonBar-Dxq43_UH.js";import"./LoadingCell-cmSMmmBz.js";import"./ColumnConfigDialog-DGbM8ZqV.js";import"./DraggableList-DIpd3lyk.js";import"./search-B8vnpBH9.js";import"./Input-CAFxf21S.js";import"./useControlled-Bu7YFQSN.js";import"./Button-TDsMSWT0.js";import"./small-cross-BgZgA7uo.js";import"./ActionButton-CnKvj-QN.js";import"./Checkbox-DWK-Zpdt.js";import"./minus-WViEeZnY.js";import"./tick-_Epqbz36.js";import"./useValueChanged-NLJFzexo.js";import"./caret-down-CLEvivYC.js";import"./CollapsiblePanel-DK4MOous.js";import"./MultiColumnSortDialog-BZ1LOXTj.js";import"./MenuTrigger-DuneGM08.js";import"./CompositeItem-QGELHeCS.js";import"./ToolbarRootContext-COAEHk7J.js";import"./getDisabledMountTransitionStyles-DGKnXBN6.js";import"./getPseudoElementBounds-lQcxfzhD.js";import"./chevron-down-DWGAvGlj.js";import"./index-CJK0sv1Y.js";import"./error-CE2K4tlB.js";import"./BaseCbacBanner-BB5mSOAj.js";import"./makeExternalStore-DFbC5eUt.js";import"./Tooltip-C6JnTlmN.js";import"./PopoverPopup-DR5R15sb.js";import"./toNumber-Cbrls7K4.js";import"./useOsdkClient-CmaZUPXx.js";import"./DropdownField-CFxCfSG2.js";import"./withOsdkMetrics-CQB9K5cI.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
