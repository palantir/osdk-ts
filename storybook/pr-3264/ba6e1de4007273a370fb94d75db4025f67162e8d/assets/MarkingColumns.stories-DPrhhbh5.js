import{f as n,j as t}from"./iframe-CXKHHYLj.js";import{O as p}from"./object-table-C-UwNqvm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVmJRszq.js";import"./Table-W5IIET3m.js";import"./index-CcpRadK6.js";import"./Dialog-CAN554hv.js";import"./cross-DqveAx_d.js";import"./svgIconContainer-CErO790I.js";import"./useBaseUiId-sRSDtUX0.js";import"./InternalBackdrop-BJeEEIis.js";import"./composite-CQ5AwT36.js";import"./index-tIN8Ghiw.js";import"./index-CEcCMYWW.js";import"./index-GQhNXkfW.js";import"./useEventCallback-DE2DORP9.js";import"./SkeletonBar-BmUDjSgF.js";import"./LoadingCell-ClBWMtHS.js";import"./ColumnConfigDialog-BLLIAmXq.js";import"./DraggableList-DkIwYCgF.js";import"./Input-DXCo2306.js";import"./useControlled-DpK_7PC-.js";import"./Button-DG69O4ak.js";import"./small-cross-Cx6Nelda.js";import"./ActionButton-DnwhiAZj.js";import"./Checkbox-CuCRFo8j.js";import"./minus-65RMZA8q.js";import"./useValueChanged-DvUV9gP2.js";import"./caret-down-CI8Lni03.js";import"./CollapsiblePanel-D9Uhp2wb.js";import"./MultiColumnSortDialog-bKEcDhA0.js";import"./MenuTrigger-C5fHUx3p.js";import"./CompositeItem-ByYO2P41.js";import"./ToolbarRootContext-DnSk_TJc.js";import"./getDisabledMountTransitionStyles-xsBoC8uM.js";import"./getPseudoElementBounds-DnNkxRot.js";import"./chevron-down-O_5oUEll.js";import"./index-8EWYRpn4.js";import"./error-XQLskqQi.js";import"./BaseCbacBanner-BWf2SfQb.js";import"./makeExternalStore-BZvbDwgv.js";import"./Tooltip-iuJswzdd.js";import"./PopoverPopup-CjEbdYgG.js";import"./toNumber-Dmq6I6RA.js";import"./useOsdkClient--Rtm53GF.js";import"./DropdownField-Df2KwPRn.js";import"./withOsdkMetrics-BZzkS8BC.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
