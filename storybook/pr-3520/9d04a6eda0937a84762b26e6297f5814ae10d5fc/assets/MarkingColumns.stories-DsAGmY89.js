import{f as n,j as t}from"./iframe-zaZFzRfc.js";import{O as p}from"./object-table-DRD52G4B.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BPzNZYP4.js";import"./Table-TNo_Q47p.js";import"./index-206m673p.js";import"./Dialog-Dsa8q23y.js";import"./cross-BzMFftPD.js";import"./svgIconContainer-DWecY478.js";import"./useBaseUiId-DM4zAgg1.js";import"./InternalBackdrop-CXY0KDKA.js";import"./composite-dK2sbS7I.js";import"./index-C6Q_9jsy.js";import"./index-Cx8htPoR.js";import"./index-C_cYnIs4.js";import"./useEventCallback-2lb3fnwG.js";import"./SkeletonBar-B0M-tILV.js";import"./LoadingCell-B6PiIWER.js";import"./ColumnConfigDialog-C9M_l9WO.js";import"./DraggableList-BUL9H7-U.js";import"./Input-CiZ-mKk9.js";import"./useControlled-DwrBXiOW.js";import"./Button-CUUXXHZv.js";import"./small-cross-Vu8dUhpM.js";import"./ActionButton-BEoecTjj.js";import"./Checkbox-CtjR5HWw.js";import"./minus-DKEc2O5k.js";import"./useValueChanged-DG1onzcI.js";import"./caret-down-C4LBxkwf.js";import"./CollapsiblePanel-C8AmfGSS.js";import"./MultiColumnSortDialog-Da41PhR3.js";import"./MenuTrigger-BJtqVGrR.js";import"./CompositeItem-Cn6GveHW.js";import"./ToolbarRootContext-BYgKnyX4.js";import"./getDisabledMountTransitionStyles-HHvDI0eF.js";import"./getPseudoElementBounds-ChxbKxGP.js";import"./chevron-down-Ckdvv8cc.js";import"./index-NYjipaEv.js";import"./error-CZMPYbIV.js";import"./BaseCbacBanner-P4I9bNXM.js";import"./makeExternalStore-BO6hILM2.js";import"./Tooltip-Ddno0y-f.js";import"./PopoverPopup-jvjKzzaz.js";import"./toNumber-BHZ4-ABU.js";import"./useOsdkClient-DtnLnmAV.js";import"./DropdownField-Eu2kCUgV.js";import"./withOsdkMetrics-BvOgm0gI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
