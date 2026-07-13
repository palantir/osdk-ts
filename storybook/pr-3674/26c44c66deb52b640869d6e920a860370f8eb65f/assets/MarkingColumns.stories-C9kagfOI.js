import{f as n,j as t}from"./iframe-DXOx5HZq.js";import{O as p}from"./object-table-DWHGWALl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DbSz4N6m.js";import"./Table-lyWEEIck.js";import"./index-EK_AzR4L.js";import"./Dialog-CXWUTnql.js";import"./cross-CCTYU4u_.js";import"./svgIconContainer-P_tD1vYu.js";import"./useBaseUiId-DlnHJ-y0.js";import"./InternalBackdrop-DNBy7uHU.js";import"./composite-BB7CsduO.js";import"./index-nnnUhGGv.js";import"./index-CnB9T9Ef.js";import"./index-Bf1LSCVg.js";import"./useEventCallback-oknyxmzg.js";import"./SkeletonBar-D0tpSeec.js";import"./LoadingCell-C-P63-hf.js";import"./ColumnConfigDialog-CYCUszfj.js";import"./DraggableList-CDJlzw7T.js";import"./search-C-inAfPu.js";import"./Input-rp4pZDu_.js";import"./useControlled-BbZsH73K.js";import"./Button-ncybMHe1.js";import"./small-cross-O8_ui6Kh.js";import"./ActionButton-E9Opa5GM.js";import"./Checkbox-CcLenn0o.js";import"./useValueChanged-BFSfBGnI.js";import"./CollapsiblePanel-Bb6LM3Gl.js";import"./MultiColumnSortDialog-C0dIG-md.js";import"./MenuTrigger-DN0NNfwD.js";import"./CompositeItem-C2-X6kGH.js";import"./ToolbarRootContext-BwukNo20.js";import"./getDisabledMountTransitionStyles-Bvh45YlX.js";import"./getPseudoElementBounds-CaIEdVAf.js";import"./chevron-down-DZ5gB4N1.js";import"./index-1DyO5HBt.js";import"./error-B7WCIeaP.js";import"./BaseCbacBanner-CHTRC8Ur.js";import"./makeExternalStore-EuHn88-3.js";import"./Tooltip-DXHv1zVd.js";import"./PopoverPopup-D9QzDvR4.js";import"./toNumber-DVmQswSc.js";import"./useOsdkClient-rUlqYlQb.js";import"./tick-CvAo_WHA.js";import"./DropdownField-DTvXAxEi.js";import"./withOsdkMetrics-BbOwOjOj.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
