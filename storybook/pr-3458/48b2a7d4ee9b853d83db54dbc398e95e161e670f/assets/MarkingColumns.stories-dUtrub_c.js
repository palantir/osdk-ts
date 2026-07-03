import{f as n,j as t}from"./iframe-YWHhVqip.js";import{O as p}from"./object-table-BO0CouFx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHtSD99P.js";import"./Table-DF8ZyPd7.js";import"./index-GgLF4yF5.js";import"./Dialog-BF91CAOl.js";import"./cross-DSRpqlv8.js";import"./svgIconContainer-CfdkJ3B3.js";import"./useBaseUiId-CkP9EQ1J.js";import"./InternalBackdrop-Bir4NyXK.js";import"./composite-4M80XY5p.js";import"./index-CcnVjtCv.js";import"./index-4OqHM49Z.js";import"./index-DNroBFxc.js";import"./useEventCallback-B1jb4kfK.js";import"./SkeletonBar-CksgZbky.js";import"./LoadingCell-DpH9qV2C.js";import"./ColumnConfigDialog-D9kzhwY8.js";import"./DraggableList-B19ehIBL.js";import"./search-DtnjsJj9.js";import"./Input-kjUO2leS.js";import"./useControlled-dlQKsuXD.js";import"./Button-D3XDSFGa.js";import"./small-cross-D_5FxOr6.js";import"./ActionButton-DwoMrcN5.js";import"./Checkbox-CHWq8RG1.js";import"./useValueChanged-mwHkukTI.js";import"./CollapsiblePanel-DMfExe1f.js";import"./MultiColumnSortDialog-cJRKhblQ.js";import"./MenuTrigger-D3UokCRJ.js";import"./CompositeItem-B_lMIbt7.js";import"./ToolbarRootContext-BQBnifgQ.js";import"./getDisabledMountTransitionStyles-A-nCGW1y.js";import"./getPseudoElementBounds-DUM87Mjq.js";import"./chevron-down-B-GnPEb9.js";import"./index-D7j_oXTL.js";import"./error-DOdbHP55.js";import"./BaseCbacBanner-CL3_cR6f.js";import"./makeExternalStore-CPTwDqOW.js";import"./Tooltip-4w_usI7Q.js";import"./PopoverPopup-DaRKawxx.js";import"./toNumber-DGHtFdek.js";import"./useOsdkClient-BCRlIRFq.js";import"./tick-D3ibcD_o.js";import"./DropdownField-CNGrbZSq.js";import"./withOsdkMetrics-BDeesX_p.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
