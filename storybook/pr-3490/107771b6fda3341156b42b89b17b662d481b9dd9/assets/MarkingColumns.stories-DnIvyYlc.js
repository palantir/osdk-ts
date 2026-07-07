import{f as n,j as t}from"./iframe-dALU4AfQ.js";import{O as p}from"./object-table-CRgot1oN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpS_MLUE.js";import"./Table-DxX7_FKs.js";import"./index-CU3JgPIC.js";import"./Dialog-sODI4xpB.js";import"./cross-BiLh0a3j.js";import"./svgIconContainer-Ddk9fv3a.js";import"./useBaseUiId-CxSApDEB.js";import"./InternalBackdrop-DSDwUnOq.js";import"./composite-BljTWkKn.js";import"./index-C47uLrCj.js";import"./index-CRIU7bSD.js";import"./index-wE22eFgT.js";import"./useEventCallback-BTcfjOcZ.js";import"./SkeletonBar-Bx6kUqmH.js";import"./LoadingCell-tGhaFfBQ.js";import"./ColumnConfigDialog-BdSPDGET.js";import"./DraggableList-BbY3ci1t.js";import"./search-DgiNbGHJ.js";import"./Input-2LvR1YSj.js";import"./useControlled-DivsrGF3.js";import"./Button-CMB_eZJW.js";import"./small-cross-CQS8ZKNx.js";import"./ActionButton-CVmfDqPp.js";import"./Checkbox-jc_T9z_Y.js";import"./useValueChanged-DILrBltJ.js";import"./CollapsiblePanel-D2M9OoP7.js";import"./MultiColumnSortDialog-C9U5MQLf.js";import"./MenuTrigger-DfdxTC2g.js";import"./CompositeItem-BipMqJf_.js";import"./ToolbarRootContext-DIs6dBXc.js";import"./getDisabledMountTransitionStyles-BALGFHQr.js";import"./getPseudoElementBounds-qLmp0Hb7.js";import"./chevron-down-cBiwYKBC.js";import"./index-C23YgWvJ.js";import"./error-Chw1qKWQ.js";import"./BaseCbacBanner-DdicGQQ-.js";import"./makeExternalStore-CbuvJbvB.js";import"./Tooltip-CKnJIDd6.js";import"./PopoverPopup-BPSkzagx.js";import"./toNumber-BWkYL2gR.js";import"./useOsdkClient-sep9eNAT.js";import"./tick-2hyqZH9R.js";import"./DropdownField-146Ny0IY.js";import"./withOsdkMetrics-AFJE7SfI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
