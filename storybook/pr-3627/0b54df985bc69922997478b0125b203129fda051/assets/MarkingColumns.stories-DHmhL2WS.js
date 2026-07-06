import{f as n,j as t}from"./iframe-DSDYvTEX.js";import{O as p}from"./object-table-BnOmDcq-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dr6u7rGJ.js";import"./Table-BBKBsQ4e.js";import"./index-CKBHXcQb.js";import"./Dialog-BFkwReCX.js";import"./cross-BHX4p4QC.js";import"./svgIconContainer-CaL_zwWx.js";import"./useBaseUiId-DgVrhwJn.js";import"./InternalBackdrop-DsUSwo6z.js";import"./composite-Cns0lU92.js";import"./index-CkZ5yLcI.js";import"./index-Dp3mJjdf.js";import"./index-CbVih8Xc.js";import"./useEventCallback-Do7-MM-C.js";import"./SkeletonBar-Dn2iyACH.js";import"./LoadingCell-Cgq1Qha7.js";import"./ColumnConfigDialog-BwuIH7Xk.js";import"./DraggableList-BuPM5nmb.js";import"./search-BFWUu_nA.js";import"./Input-Bmt5Hqa7.js";import"./useControlled-ChBRLApg.js";import"./Button-DF7htwnw.js";import"./small-cross-CNu6ifc6.js";import"./ActionButton-B2lFEozr.js";import"./Checkbox-CjABcjG5.js";import"./useValueChanged-hyo9I-Tu.js";import"./CollapsiblePanel-ChFN48eA.js";import"./MultiColumnSortDialog-CQcjuZQe.js";import"./MenuTrigger-BVBmjPCL.js";import"./CompositeItem-CPTPSi2t.js";import"./ToolbarRootContext-qq8GKlHZ.js";import"./getDisabledMountTransitionStyles-yZFG9QuB.js";import"./getPseudoElementBounds-C3Y6BrcR.js";import"./chevron-down-GVx5IIZz.js";import"./index-DpFZVn8R.js";import"./error-BFJ5FkdZ.js";import"./BaseCbacBanner-DRmsws5V.js";import"./makeExternalStore-C15fAnYJ.js";import"./Tooltip-B5FiPEuP.js";import"./PopoverPopup-CgxRKoHm.js";import"./toNumber-C_VYNVcM.js";import"./useOsdkClient-BJFOClZL.js";import"./tick-Bi-S_VeZ.js";import"./DropdownField-BLxC9rnj.js";import"./withOsdkMetrics-B6_36Jqy.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
