import{f as n,j as t}from"./iframe-MapTAMuV.js";import{O as p}from"./object-table-mLH2B3NU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bwxv4q3m.js";import"./Table-tkRYIo34.js";import"./index-BXlqY_Ht.js";import"./Dialog-CZrn6HWV.js";import"./cross-BGQM6uQp.js";import"./svgIconContainer-BAatIUVW.js";import"./useBaseUiId-DXqAgsNn.js";import"./InternalBackdrop-DDsL0RGl.js";import"./composite-DxCIcjcy.js";import"./index-Bv-lWn6b.js";import"./index-CyuMBXvJ.js";import"./index-D6LeoxYb.js";import"./useEventCallback-DCy74I4n.js";import"./SkeletonBar-BZapkKkZ.js";import"./LoadingCell-B0yQYIOV.js";import"./ColumnConfigDialog-Du409ffk.js";import"./DraggableList-nj67Jma1.js";import"./search-D9RyVW37.js";import"./Input-CaAgir6A.js";import"./useControlled-_7E5IBen.js";import"./Button-qOL4kZMj.js";import"./small-cross-D0asAAis.js";import"./ActionButton-DXVKncsA.js";import"./Checkbox-CuS-WKwT.js";import"./minus-BCN5kMmI.js";import"./tick-DbVKGr7x.js";import"./useValueChanged-z0lIX471.js";import"./caret-down-CSua1rBe.js";import"./CollapsiblePanel-jGjjCHJ-.js";import"./MultiColumnSortDialog-DpupnQS4.js";import"./MenuTrigger-5Y_q_j2d.js";import"./CompositeItem-9XoBCER3.js";import"./ToolbarRootContext-C6nWepe7.js";import"./getDisabledMountTransitionStyles-NFvtT7c8.js";import"./getPseudoElementBounds-2Zw0Nbru.js";import"./chevron-down-CO3DuifO.js";import"./index-CeCTWyl6.js";import"./error-wsU8fpMS.js";import"./BaseCbacBanner-CKsLIEsx.js";import"./makeExternalStore-jRsH3x__.js";import"./Tooltip-CPXziFKq.js";import"./PopoverPopup-BQVdaBhn.js";import"./toNumber-BOwZjpBg.js";import"./useOsdkClient-moNSAod6.js";import"./DropdownField-DhntZXIg.js";import"./withOsdkMetrics-BegQOGzW.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
