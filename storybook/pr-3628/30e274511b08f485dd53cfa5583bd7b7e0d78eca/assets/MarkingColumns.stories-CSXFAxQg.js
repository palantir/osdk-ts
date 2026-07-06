import{f as n,j as t}from"./iframe-Ba-c-5nq.js";import{O as p}from"./object-table-IoYea_N_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BztM0zd3.js";import"./Table-8Z3pvXo_.js";import"./index-BZYJXe_K.js";import"./Dialog-CvaKi1L6.js";import"./cross-CbTsl62T.js";import"./svgIconContainer-Dp_15OXU.js";import"./useBaseUiId-SyE10KSM.js";import"./InternalBackdrop-C8pBwysU.js";import"./composite-DO4jkMxx.js";import"./index-BaYnvFXw.js";import"./index-Bk6Q3t8r.js";import"./index-Cdf2T7hI.js";import"./useEventCallback-BaFEet2q.js";import"./SkeletonBar-CTf3M19P.js";import"./LoadingCell-ByypO7WP.js";import"./ColumnConfigDialog-CHVNwQZt.js";import"./DraggableList-BHPqrlou.js";import"./search-DvuavvAU.js";import"./Input-Cn155hgD.js";import"./useControlled-CYFCq3LM.js";import"./Button-BRMRuIkL.js";import"./small-cross-eFwHgs8i.js";import"./ActionButton-nBt0tYFa.js";import"./Checkbox-BK2IfFDd.js";import"./useValueChanged-CBpRbScz.js";import"./CollapsiblePanel-B2z_vtRN.js";import"./MultiColumnSortDialog-D9WzBLeY.js";import"./MenuTrigger-CYzFPAzy.js";import"./CompositeItem-ZAMypIc6.js";import"./ToolbarRootContext-D7cPA4-F.js";import"./getDisabledMountTransitionStyles-CM3pQwk8.js";import"./getPseudoElementBounds-EYIrSnpt.js";import"./chevron-down-CA-mhdyH.js";import"./index-COWKnjzK.js";import"./error-Cz5G3l9G.js";import"./BaseCbacBanner-BZ7TJk1L.js";import"./makeExternalStore-DYqfuTbj.js";import"./Tooltip-G54He5fo.js";import"./PopoverPopup-CeGQxZLW.js";import"./toNumber-rayFZQtK.js";import"./useOsdkClient-BlfjCuWs.js";import"./tick-Dbs6Vgre.js";import"./DropdownField-CY61QNV7.js";import"./withOsdkMetrics-jkrHhrTt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
