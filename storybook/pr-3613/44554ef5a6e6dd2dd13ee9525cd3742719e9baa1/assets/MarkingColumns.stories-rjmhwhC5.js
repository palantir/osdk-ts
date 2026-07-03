import{f as n,j as t}from"./iframe-B0bgem6h.js";import{O as p}from"./object-table-CdCp_d4c.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-o4rus8nx.js";import"./Table-DTdmbJUr.js";import"./index-BzugOSE0.js";import"./Dialog-C7FLVgry.js";import"./cross-DXK8iSTm.js";import"./svgIconContainer-Bn2APD4U.js";import"./useBaseUiId-BEX-u_qo.js";import"./InternalBackdrop-CVJRw8io.js";import"./composite-Bhfze_tK.js";import"./index-D1vRvMhB.js";import"./index-DAy6qlyx.js";import"./index-CFluKFPI.js";import"./useEventCallback-DThgtgCM.js";import"./SkeletonBar-AtDuMz0i.js";import"./LoadingCell-BZpDff42.js";import"./ColumnConfigDialog-DE3seyyw.js";import"./DraggableList-CGXZaElA.js";import"./search-BCSIQ8We.js";import"./Input-DnQOjmUp.js";import"./useControlled-mJi4SfI4.js";import"./Button-BCH-GqBR.js";import"./small-cross-COx5q00i.js";import"./ActionButton-CKKii7pv.js";import"./Checkbox-BZAWTQwn.js";import"./minus-CC09LIbZ.js";import"./tick-bTIYKJK8.js";import"./useValueChanged-5nj3Y2ua.js";import"./caret-down-Dh4NhVGo.js";import"./CollapsiblePanel-vhixv53n.js";import"./MultiColumnSortDialog-0ua65-zx.js";import"./MenuTrigger-2ECycEG4.js";import"./CompositeItem-D6KfO6Fb.js";import"./ToolbarRootContext-Cw7F_jEZ.js";import"./getDisabledMountTransitionStyles-G4l6ht-Y.js";import"./getPseudoElementBounds-BaK6VgJv.js";import"./chevron-down-BmdI0Fmy.js";import"./index-DE414JAH.js";import"./error-D2v1VlU-.js";import"./BaseCbacBanner-Bea6s-PE.js";import"./makeExternalStore-CIzGe6Gc.js";import"./Tooltip-DJHOGQFD.js";import"./PopoverPopup-BhUI6YS5.js";import"./toNumber-Dx3Y0kHh.js";import"./useOsdkClient-BYMyJ1bF.js";import"./DropdownField-BEsiJ8-1.js";import"./withOsdkMetrics-BH3Cbpon.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
