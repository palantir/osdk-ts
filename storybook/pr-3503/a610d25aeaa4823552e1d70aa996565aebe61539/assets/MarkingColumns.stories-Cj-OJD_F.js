import{f as n,j as t}from"./iframe-Cqd6mCx5.js";import{O as p}from"./object-table-BMi2EYRp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5_FrBjC.js";import"./Table-1XpL-uyj.js";import"./index-Bc7Ez_JZ.js";import"./Dialog-BON1RLkw.js";import"./cross-Dell5WBW.js";import"./svgIconContainer-CsLzM4Jm.js";import"./useBaseUiId-Bw5Nmb77.js";import"./InternalBackdrop-BU7IpAxl.js";import"./composite-CTXTgIc0.js";import"./index-DXPzuDG-.js";import"./index-BC5vzZrt.js";import"./index-CeAncLhm.js";import"./useEventCallback-8LcM4Gq_.js";import"./SkeletonBar-Ba2cKvft.js";import"./LoadingCell-DUGFq4fV.js";import"./ColumnConfigDialog-NkMpJMSB.js";import"./DraggableList-DxQGf9DY.js";import"./search-D11RYUBy.js";import"./Input-B5ce1Scx.js";import"./useControlled-BKiA-CeF.js";import"./Button-ZqD5CzRW.js";import"./small-cross-CeK1ORjO.js";import"./ActionButton-Cg5kA67c.js";import"./Checkbox-BjSyCJs2.js";import"./minus-BrN66yIk.js";import"./tick-ChH3ERfj.js";import"./useValueChanged-n-R4Z2p9.js";import"./caret-down-DkRNnvWd.js";import"./CollapsiblePanel-CqE8t6Jr.js";import"./MultiColumnSortDialog-Bzr6ieQV.js";import"./MenuTrigger-W-jRBjv2.js";import"./CompositeItem-B76PN5h_.js";import"./ToolbarRootContext-LZMATbJl.js";import"./getDisabledMountTransitionStyles-YPQPuR4M.js";import"./getPseudoElementBounds-D2lUqzA4.js";import"./chevron-down-V9smcHcb.js";import"./index-DGq-ecca.js";import"./error-oOsrkcF0.js";import"./BaseCbacBanner-Bxf38lQY.js";import"./makeExternalStore-DAOBxVLP.js";import"./Tooltip-NqmpNX3R.js";import"./PopoverPopup-C4HnrZLb.js";import"./toNumber-D2KQjyzT.js";import"./useOsdkClient-0hJJIrVD.js";import"./DropdownField-2wt7lrbA.js";import"./withOsdkMetrics-CBoaL5hL.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
