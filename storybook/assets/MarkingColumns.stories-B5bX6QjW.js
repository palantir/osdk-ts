import{f as n,j as t}from"./iframe-DbF5D9-_.js";import{O as p}from"./object-table-DVEuUJFd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BcWZiWdb.js";import"./index-vNZRhGQ3.js";import"./Dialog-CV4MtVWY.js";import"./cross-DpsL6xSn.js";import"./svgIconContainer-CYL48BhS.js";import"./useBaseUiId-BYKXNZCL.js";import"./InternalBackdrop-DGeqkFMf.js";import"./composite-BvIaIlJz.js";import"./index-C3rOI0HH.js";import"./index-BdoDUFMf.js";import"./index-73Gf1Mr5.js";import"./useEventCallback-CLLwgXb6.js";import"./SkeletonBar-BEDIj7uz.js";import"./LoadingCell-C29DffAw.js";import"./ColumnConfigDialog-x1LHz0M0.js";import"./DraggableList-C85teXY8.js";import"./search-CsGznyHB.js";import"./Input-Cj8VgrV5.js";import"./useControlled-DBlDVYGv.js";import"./Button-faj9AFom.js";import"./small-cross-DnJ1Fm0h.js";import"./ActionButton-X-IJBCsa.js";import"./Checkbox-CHQmdSzP.js";import"./useValueChanged-gj8fTqzv.js";import"./CollapsiblePanel-TFeIMh9a.js";import"./MultiColumnSortDialog-C-IyEb0b.js";import"./MenuTrigger-C4O409te.js";import"./CompositeItem-DXcm1g9b.js";import"./ToolbarRootContext-t3iqgFfl.js";import"./getDisabledMountTransitionStyles-By6jdpM_.js";import"./getPseudoElementBounds-D4mZK0Ym.js";import"./chevron-down-BrDC1vMO.js";import"./index-DHKOapB1.js";import"./error-14LmHoiQ.js";import"./BaseCbacBanner-CiR9H6nC.js";import"./makeExternalStore-Ca1T37Md.js";import"./Tooltip-DmEH5uAl.js";import"./PopoverPopup-Dx29j46W.js";import"./toNumber-BPAoWZSk.js";import"./useOsdkClient-CrGzgnYp.js";import"./tick-B_wPkasy.js";import"./DropdownField-DRxMY5CB.js";import"./withOsdkMetrics-Fcwwb7tB.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
