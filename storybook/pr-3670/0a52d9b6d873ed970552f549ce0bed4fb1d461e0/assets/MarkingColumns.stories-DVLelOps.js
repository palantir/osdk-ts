import{f as n,j as t}from"./iframe-DeTIsQxL.js";import{O as p}from"./object-table-DIwXgxvx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CB0krISm.js";import"./Table-DTzqkUCL.js";import"./index-DJCw2I8F.js";import"./Dialog-DCNas4Nc.js";import"./cross-B6qSpTyB.js";import"./svgIconContainer-DRoX0Vsv.js";import"./useBaseUiId-a2IWdv8a.js";import"./InternalBackdrop-BFPkNs4W.js";import"./composite-tRtN087v.js";import"./index--ckDM66E.js";import"./index-CvmIGShp.js";import"./index-BCN4yWiE.js";import"./useEventCallback-DUTs-5xP.js";import"./SkeletonBar-BsR4HtMd.js";import"./LoadingCell-XDI6bJ8H.js";import"./ColumnConfigDialog-BzX0hTdD.js";import"./DraggableList-BtTQtqUK.js";import"./search-aX2fvTHi.js";import"./Input-DfREMPWD.js";import"./useControlled-CVbfP8LM.js";import"./Button-DVNiVWo0.js";import"./small-cross-CkqlP7gE.js";import"./ActionButton-5BFJfe86.js";import"./Checkbox-CBMaCuwd.js";import"./useValueChanged-BsopS9M5.js";import"./CollapsiblePanel-DtgZ1bmI.js";import"./MultiColumnSortDialog-njno2ygP.js";import"./MenuTrigger-B4N6sM1h.js";import"./CompositeItem-DmMZR4gE.js";import"./ToolbarRootContext-5TGYojqS.js";import"./getDisabledMountTransitionStyles-LlQuwNQB.js";import"./getPseudoElementBounds-BHtGaDtw.js";import"./chevron-down-BmmuVHCT.js";import"./index-BG5hwvad.js";import"./error-MuE1w4dN.js";import"./BaseCbacBanner-DXQFXWoP.js";import"./makeExternalStore-D3ohMW2u.js";import"./Tooltip-DcLqWNBa.js";import"./PopoverPopup-vop4NMBe.js";import"./toNumber-CbH6nT6f.js";import"./useOsdkClient-CSfIOgKC.js";import"./tick-DGx8-vvb.js";import"./DropdownField-DHYJGCOH.js";import"./withOsdkMetrics-CUyQGeFt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
