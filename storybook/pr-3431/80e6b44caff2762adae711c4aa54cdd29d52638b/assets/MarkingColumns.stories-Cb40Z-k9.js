import{f as n,j as t}from"./iframe-CvPs79pA.js";import{O as p}from"./object-table-DahfuL7j.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BYvbvTSe.js";import"./Table-YYg29KJO.js";import"./index-CZZMqQQM.js";import"./Dialog-sieS6miP.js";import"./cross-D-QZu3nw.js";import"./svgIconContainer-DuVjxTfJ.js";import"./useBaseUiId-CwOWR6bP.js";import"./InternalBackdrop-SGE-ASkE.js";import"./composite-BQOHwsX4.js";import"./index-BAjwyRq-.js";import"./index-w0qLQVs-.js";import"./index-DLIzRAIU.js";import"./useEventCallback-DfHo1YTd.js";import"./SkeletonBar-CRMcaZL2.js";import"./LoadingCell-BqE6KCLu.js";import"./ColumnConfigDialog-B2H1b02k.js";import"./DraggableList-xM9ntInC.js";import"./Input-Cd64BLrM.js";import"./useControlled-Cn5Ys14R.js";import"./Button-DQs_XUgs.js";import"./small-cross-psn_DCqC.js";import"./ActionButton-CITe1YUh.js";import"./Checkbox-6BMw6Bje.js";import"./minus-Dsxc_mvv.js";import"./useValueChanged-Bp_cDgV1.js";import"./caret-down-DTTin54a.js";import"./CollapsiblePanel-B4sKbqE0.js";import"./MultiColumnSortDialog-Bcn0zrPk.js";import"./MenuTrigger-BRbz40Cx.js";import"./CompositeItem-cB9UWaQb.js";import"./ToolbarRootContext-61Eb5oun.js";import"./getDisabledMountTransitionStyles-CeE6uWUe.js";import"./getPseudoElementBounds-CE2XuTyh.js";import"./chevron-down-BrALEFt9.js";import"./index-CDGr7L6u.js";import"./error-3b3BuxXK.js";import"./BaseCbacBanner-B99eg1HE.js";import"./makeExternalStore-6aFoQ98J.js";import"./Tooltip-BNc2Ervm.js";import"./PopoverPopup-UPiHjwfU.js";import"./toNumber-CLOa9XTI.js";import"./useOsdkClient-C6lh6_k9.js";import"./DropdownField-Cw2CbRCO.js";import"./withOsdkMetrics-C-xWfB-i.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
