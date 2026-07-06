import{f as n,j as t}from"./iframe-DEgD9mwP.js";import{O as p}from"./object-table-DWHGsQa4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDVA4ssE.js";import"./Table-B0Ydf1g7.js";import"./index-bdJVEOKe.js";import"./Dialog-CgRk9ZuK.js";import"./cross-XtumbLI8.js";import"./svgIconContainer-D_vAAkRY.js";import"./useBaseUiId-CXEqk653.js";import"./InternalBackdrop-Ci9iSWYk.js";import"./composite-uwHeBaDd.js";import"./index-DpvTJa_l.js";import"./index-BWKTLOrJ.js";import"./index-JNn5a7yT.js";import"./useEventCallback-Bu7__RrZ.js";import"./SkeletonBar-D2DQh25v.js";import"./LoadingCell-FIJO5ZkH.js";import"./ColumnConfigDialog-BijruCCC.js";import"./DraggableList-B8flZsp9.js";import"./search-Bj4YLvo-.js";import"./Input-BOIlH6v-.js";import"./useControlled-CWY5C05I.js";import"./Button-DWmScXnL.js";import"./small-cross-DNGTeLFy.js";import"./ActionButton-054Kem6O.js";import"./Checkbox-MXdEYMf4.js";import"./useValueChanged-CUJwzpHy.js";import"./CollapsiblePanel-DBuO1Klk.js";import"./MultiColumnSortDialog-DokCZcFN.js";import"./MenuTrigger-CxXG155M.js";import"./CompositeItem-BLihv9qS.js";import"./ToolbarRootContext-YbsD03ko.js";import"./getDisabledMountTransitionStyles-C-s6M-gX.js";import"./getPseudoElementBounds-5Tpn4JH1.js";import"./chevron-down-Dr67unvz.js";import"./index-WNHw1y1q.js";import"./error-BGBSCHKT.js";import"./BaseCbacBanner-BKxtIXh9.js";import"./makeExternalStore-HdU3nr6h.js";import"./Tooltip-DujpBovE.js";import"./PopoverPopup-CJyr8Qc9.js";import"./toNumber-BJmAzXV4.js";import"./useOsdkClient-CvLihvid.js";import"./tick-Ctk3eypx.js";import"./DropdownField-D-ffzl6n.js";import"./withOsdkMetrics-D0TGCU5y.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
