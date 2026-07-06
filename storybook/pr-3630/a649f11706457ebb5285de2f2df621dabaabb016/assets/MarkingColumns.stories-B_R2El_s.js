import{f as n,j as t}from"./iframe-CrIhlkWG.js";import{O as p}from"./object-table-B-8MVBhX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BdM1hQMI.js";import"./Table-CjK4BWju.js";import"./index-CfEHV_V1.js";import"./Dialog-nx3QISyU.js";import"./cross-Dav_ntOW.js";import"./svgIconContainer--TJe8Z_y.js";import"./useBaseUiId-DWzwKBeJ.js";import"./InternalBackdrop-NWQSC9XE.js";import"./composite-B_Bx_Z-y.js";import"./index-BsENGrJp.js";import"./index-BWUlQoJd.js";import"./index-CXjXMBM2.js";import"./useEventCallback-CLxGsati.js";import"./SkeletonBar-CxklY6sh.js";import"./LoadingCell-ByzWhko9.js";import"./ColumnConfigDialog-DviDPICq.js";import"./DraggableList-A7cA1AzH.js";import"./search-CNHl7oo4.js";import"./Input-DuRR9wbS.js";import"./useControlled-DSBWS2LY.js";import"./Button-CXL1iv3d.js";import"./small-cross-B0Od4AL4.js";import"./ActionButton-00_y0grd.js";import"./Checkbox-BegsN_oI.js";import"./useValueChanged-C5y-LE_V.js";import"./CollapsiblePanel-DqBKl8dI.js";import"./MultiColumnSortDialog-vncruWhz.js";import"./MenuTrigger-Dc6EabhG.js";import"./CompositeItem-BXGodCVh.js";import"./ToolbarRootContext-DKfv93TJ.js";import"./getDisabledMountTransitionStyles-D_UdztkP.js";import"./getPseudoElementBounds-Ba5iLLKq.js";import"./chevron-down-BFPGOAtb.js";import"./index-DqFqCA0c.js";import"./error-Czl3WPi0.js";import"./BaseCbacBanner-LTetyY9Y.js";import"./makeExternalStore-BSphl6MW.js";import"./Tooltip-DIV7LOaq.js";import"./PopoverPopup-BNaBxvfP.js";import"./toNumber-C-0KcCbG.js";import"./useOsdkClient-uUNRD3Rk.js";import"./tick-ZIRDQGxT.js";import"./DropdownField-Ba8sXDLR.js";import"./withOsdkMetrics-QURdURG6.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
