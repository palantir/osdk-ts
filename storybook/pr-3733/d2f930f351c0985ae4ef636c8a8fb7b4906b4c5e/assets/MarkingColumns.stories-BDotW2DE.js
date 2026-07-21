import{f as n,j as t}from"./iframe-D4qMbcGj.js";import{O as p}from"./object-table-DeUfRRi4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSDUQlJK.js";import"./Table-CN7v2tFp.js";import"./index-DWgFCifq.js";import"./Dialog-CEHWTXN6.js";import"./cross-vCjyxZoC.js";import"./svgIconContainer-DE-ot46s.js";import"./useBaseUiId-BsTEs7Va.js";import"./InternalBackdrop-ENLYsYpb.js";import"./composite-SYDjM7pY.js";import"./index-Dlgd2zdX.js";import"./index-Xv5X3W5u.js";import"./index-DRa3fVl7.js";import"./useEventCallback-xP0YBxzh.js";import"./SkeletonBar-CYhbdW_2.js";import"./LoadingCell-CP_wMx0F.js";import"./ColumnConfigDialog-Bi_e-SDl.js";import"./DraggableList-BXN4FJZ7.js";import"./search-B4XVrJRs.js";import"./Input-B0VsFePU.js";import"./useControlled-B5prv2ni.js";import"./Button-BV1n0jKu.js";import"./small-cross-xTSxduCK.js";import"./ActionButton-chhLszEC.js";import"./Checkbox-DJ93Eq4j.js";import"./useValueChanged-BPlIguRI.js";import"./CollapsiblePanel-BfFjVPbx.js";import"./MultiColumnSortDialog-0dIGbEWk.js";import"./MenuTrigger-ZcL_Ntis.js";import"./CompositeItem-T6umQOp4.js";import"./ToolbarRootContext-BZK5IVau.js";import"./getDisabledMountTransitionStyles-uR85cYyq.js";import"./getPseudoElementBounds-CTU8ZhBi.js";import"./chevron-down-DW4Qr4XU.js";import"./index-BzwyurKM.js";import"./error-C_hHncG1.js";import"./BaseCbacBanner-xDq1Y5qf.js";import"./makeExternalStore-BsIpDqEl.js";import"./Tooltip-CAnpDMre.js";import"./PopoverPopup-B3GizZOM.js";import"./toNumber-BrNJn73K.js";import"./useOsdkClient-DdsTvrqP.js";import"./tick-BNNkH89I.js";import"./DropdownField-DDOFhNcg.js";import"./withOsdkMetrics-fijN6GvD.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
