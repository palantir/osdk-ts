import{f as n,j as t}from"./iframe-Bigw6z9E.js";import{O as p}from"./object-table-ntQLz0cr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DqZ4XMTG.js";import"./Table-CrUyRgPn.js";import"./index-Bwh7XEh_.js";import"./Dialog-Cg7u90OX.js";import"./cross-CMV8OFRa.js";import"./svgIconContainer-DxMm7hM2.js";import"./useBaseUiId-BwzTegPX.js";import"./InternalBackdrop-CDRx0_YM.js";import"./composite-DaJz0CaH.js";import"./index-D7kNUBdI.js";import"./index-B3KIyxX6.js";import"./index-nTKsLasn.js";import"./useEventCallback-DTGhEn0u.js";import"./SkeletonBar-nhCTcqUJ.js";import"./LoadingCell-B1VGkuLA.js";import"./ColumnConfigDialog-lDhWhO1a.js";import"./DraggableList-MMtnqG47.js";import"./search-_nztYN-c.js";import"./Input-DlHqY6Bk.js";import"./useControlled-DjLfmPXv.js";import"./Button-DvMvc1bH.js";import"./small-cross-C-t-dbU4.js";import"./ActionButton-D1bjiilM.js";import"./Checkbox-DCoynvv3.js";import"./minus-D8cj3sbs.js";import"./tick-BFdXAv3e.js";import"./useValueChanged-Bj9FoeTS.js";import"./caret-down-TULLe8k2.js";import"./CollapsiblePanel-CN7HpTFe.js";import"./MultiColumnSortDialog-BrlVx1JA.js";import"./MenuTrigger-B8EMdPcL.js";import"./CompositeItem-4dQRD2HU.js";import"./ToolbarRootContext-T02FlUL_.js";import"./getDisabledMountTransitionStyles-Bb2pmQHe.js";import"./getPseudoElementBounds-CcCPJOY8.js";import"./chevron-down-DDOgzvpc.js";import"./index-DQlD6a1l.js";import"./error-DyDq47Qx.js";import"./BaseCbacBanner-04MaIqlS.js";import"./makeExternalStore-oFsjJFEB.js";import"./Tooltip-D7nkKlX8.js";import"./PopoverPopup-DRjuwfOg.js";import"./toNumber-BiS1xS_y.js";import"./useOsdkClient-BWfI688u.js";import"./DropdownField-CZxeS1mn.js";import"./withOsdkMetrics-BArOiklZ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
