import{f as n,j as t}from"./iframe-pGfIdeQc.js";import{O as p}from"./object-table-BArKXBO7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CfacRwlT.js";import"./Table-G0vcCb1p.js";import"./index-CStqrya9.js";import"./Dialog-CUTCHWPi.js";import"./cross-n7I6WPV2.js";import"./svgIconContainer-BJ58DwaZ.js";import"./useBaseUiId-Badx_cLW.js";import"./InternalBackdrop-Be4MTCYQ.js";import"./composite-CtokHJrB.js";import"./index-RE0gqYn2.js";import"./index-CHA9YxKQ.js";import"./index-C7qBYqUM.js";import"./useEventCallback-CbWflxtf.js";import"./SkeletonBar-ogDWHeXY.js";import"./LoadingCell-B5czONrt.js";import"./ColumnConfigDialog-ChxQiK8a.js";import"./DraggableList-DGtGQCqK.js";import"./search-AfopOu5Z.js";import"./Input-8V8uS3j5.js";import"./useControlled-PagK95Rv.js";import"./Button-DoGnhWiU.js";import"./small-cross-Ce8ec5G6.js";import"./ActionButton-uLEszX_C.js";import"./Checkbox-88W520q5.js";import"./minus-sTaE8AEC.js";import"./tick-gT5oedKV.js";import"./useValueChanged-NkE5T430.js";import"./caret-down-CYkst58K.js";import"./CollapsiblePanel-COhmQEk_.js";import"./MultiColumnSortDialog-DIFngpLy.js";import"./MenuTrigger-ByEk1qcP.js";import"./CompositeItem-CtOetl_o.js";import"./ToolbarRootContext-D4zIBKav.js";import"./getDisabledMountTransitionStyles-hQU3Asuc.js";import"./getPseudoElementBounds-CFCQXWgd.js";import"./chevron-down-CK2TsFli.js";import"./index-CdDft0m1.js";import"./error-DcgEoChb.js";import"./BaseCbacBanner-CiBXQPYT.js";import"./makeExternalStore-kADLtrD4.js";import"./Tooltip-xorOm9Gb.js";import"./PopoverPopup-CfY8vhJz.js";import"./toNumber-CSS6K2f5.js";import"./useOsdkClient-B2isH-4J.js";import"./DropdownField-_uLQ7QN-.js";import"./withOsdkMetrics-LTIE-KQO.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
