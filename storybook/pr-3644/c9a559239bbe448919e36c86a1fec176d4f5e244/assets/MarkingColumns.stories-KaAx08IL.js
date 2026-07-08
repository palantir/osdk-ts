import{f as n,j as t}from"./iframe-CNpQMLn4.js";import{O as p}from"./object-table-BLyvvP69.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_87hQCI.js";import"./Table-CKHZZnzw.js";import"./index-BW4Yrta1.js";import"./Dialog-DXl2YNfS.js";import"./cross-bz0yJczN.js";import"./svgIconContainer-CnZwy1ol.js";import"./useBaseUiId-BEFeXtqj.js";import"./InternalBackdrop-BQLwxrNi.js";import"./composite-B5aODx_K.js";import"./index-D0GIY8Sw.js";import"./index-70VViFzx.js";import"./index-BBT9LILi.js";import"./useEventCallback-BGD-da8d.js";import"./SkeletonBar-D6_cl42u.js";import"./LoadingCell-bVWxjAtl.js";import"./ColumnConfigDialog-BvR16kpm.js";import"./DraggableList-DpuoXQ6W.js";import"./search-Bx_y_py-.js";import"./Input-D7508Bqz.js";import"./useControlled-CMj4rT22.js";import"./Button-D8MovMyN.js";import"./small-cross-CN0ffCO2.js";import"./ActionButton-BoMyeWAC.js";import"./Checkbox-C-_7-haY.js";import"./useValueChanged-BXu9tyLU.js";import"./CollapsiblePanel-xRmNygeC.js";import"./MultiColumnSortDialog-Bw9DZ-4o.js";import"./MenuTrigger-EJKQTHzr.js";import"./CompositeItem-D_m3Y3KB.js";import"./ToolbarRootContext-wbNwzhh0.js";import"./getDisabledMountTransitionStyles-C7sF7ZwL.js";import"./getPseudoElementBounds-bLBVfMZH.js";import"./chevron-down-CGHvEWCM.js";import"./index-CC55HTqK.js";import"./error-Bvjx_arM.js";import"./BaseCbacBanner-CgL403SW.js";import"./makeExternalStore-RFWAkV3y.js";import"./Tooltip-DfzZgj10.js";import"./PopoverPopup-Dzpvdz4g.js";import"./toNumber-uCR_JiTv.js";import"./useOsdkClient-xCwJ0FHU.js";import"./tick-Bvm63nit.js";import"./DropdownField-Et-bIe8C.js";import"./withOsdkMetrics-BO9xsuqL.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
