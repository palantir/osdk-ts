import{f as n,j as t}from"./iframe-DyctOA6l.js";import{O as p}from"./object-table-DmnC8mko.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Hp9_ivPU.js";import"./Table-DUPwWYPr.js";import"./index-hFl4FDrt.js";import"./Dialog-RiXfqVDj.js";import"./cross-M72mtqlk.js";import"./svgIconContainer-CVSAJkBs.js";import"./useBaseUiId-DJrUVVEN.js";import"./InternalBackdrop-CIrFiGPx.js";import"./composite-8v2TcOqs.js";import"./index-DGC8bMgO.js";import"./index-CJsnBqAb.js";import"./index-BM442baJ.js";import"./useEventCallback-ZhFKj-cd.js";import"./SkeletonBar-Cq98Owxk.js";import"./LoadingCell-bLZJS6ws.js";import"./ColumnConfigDialog-C-pojHax.js";import"./DraggableList-B3CEFzVj.js";import"./Input-DAuW60bk.js";import"./useControlled-DqfodKtN.js";import"./Button-BejIQsOM.js";import"./small-cross-Bn6b0jVk.js";import"./ActionButton-CaLQqW2J.js";import"./Checkbox-BAqXdZhK.js";import"./minus-B7nOoXYO.js";import"./useValueChanged-DlES-wgk.js";import"./caret-down-BIOo_23p.js";import"./CollapsiblePanel-CRKqx-sA.js";import"./MultiColumnSortDialog-CFy9a7r3.js";import"./MenuTrigger-DnEKfkT-.js";import"./CompositeItem-YO6OnwJw.js";import"./ToolbarRootContext-AtOZ2jqU.js";import"./getDisabledMountTransitionStyles-rdC6I5tQ.js";import"./getPseudoElementBounds-DcfBa1gQ.js";import"./chevron-down-CHKu3yZh.js";import"./index-DGHVsC_g.js";import"./error-BoW7aAjU.js";import"./BaseCbacBanner-D_sdLlOw.js";import"./makeExternalStore-C6aaZ7cr.js";import"./Tooltip-BA6QDE9e.js";import"./PopoverPopup-BkESoGSN.js";import"./toNumber-B4PvTIqb.js";import"./useOsdkClient-DkLE2inu.js";import"./DropdownField-8c1MWtMj.js";import"./withOsdkMetrics-C_AIMTUL.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
