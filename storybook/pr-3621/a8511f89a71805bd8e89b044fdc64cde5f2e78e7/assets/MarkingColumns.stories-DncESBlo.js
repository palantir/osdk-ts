import{f as n,j as t}from"./iframe-EXlB8Hw6.js";import{O as p}from"./object-table-DFpHAbQb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ClJqTI8x.js";import"./Table-BuaRjT5V.js";import"./index-DB8CD6tO.js";import"./Dialog-8ElmLfnj.js";import"./cross-Sn4ImGfp.js";import"./svgIconContainer-C19VWNJ9.js";import"./useBaseUiId-BYM8-nrE.js";import"./InternalBackdrop-SRz89yuh.js";import"./composite-VJWAxNgE.js";import"./index-BR01vcID.js";import"./index-BjC3rOZD.js";import"./index-CDMps433.js";import"./useEventCallback-DtE9Bgxg.js";import"./SkeletonBar-DrU8uShK.js";import"./LoadingCell-BVW-pYq-.js";import"./ColumnConfigDialog-CqiHAlVa.js";import"./DraggableList-DHJqzFWe.js";import"./search-B3sopoRm.js";import"./Input-DO4sGZbG.js";import"./useControlled-5OO73DFu.js";import"./Button-DSEVwf8U.js";import"./small-cross-CtFi55dg.js";import"./ActionButton-dQY8rEVg.js";import"./Checkbox-DNDDhxzC.js";import"./useValueChanged-BDIcdqzL.js";import"./CollapsiblePanel-DvxLb2kT.js";import"./MultiColumnSortDialog-DqM_0kB5.js";import"./MenuTrigger-CnS_SAiK.js";import"./CompositeItem-LC3PwtMw.js";import"./ToolbarRootContext-DmSWX11M.js";import"./getDisabledMountTransitionStyles-DnzwT8od.js";import"./getPseudoElementBounds-Bc8oeHno.js";import"./chevron-down-DQ9ZolpR.js";import"./index-DkyRNjBs.js";import"./error-Ch7ezjp9.js";import"./BaseCbacBanner-2OCBQrry.js";import"./makeExternalStore-CUi8XUT6.js";import"./Tooltip-BiBjL0tl.js";import"./PopoverPopup-Bc3aL72J.js";import"./toNumber-rIIedPg2.js";import"./useOsdkClient-xzCY9Hhl.js";import"./tick-CEhnCZHh.js";import"./DropdownField-BwSFAhLW.js";import"./withOsdkMetrics-Csf8AqAg.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
