import{f as n,j as t}from"./iframe-BdNbAFle.js";import{O as p}from"./object-table-B8VDRNJQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BjV6E6gx.js";import"./Table-DzdTKJoa.js";import"./index-4fA03-91.js";import"./Dialog-Bqns7Cny.js";import"./cross-BSVbceJM.js";import"./svgIconContainer-Dyrfk8aF.js";import"./useBaseUiId-BGjT-Qmv.js";import"./InternalBackdrop-B4P9pOFD.js";import"./composite-DaC07jrL.js";import"./index-C9KIenbi.js";import"./index-CO-SFKBQ.js";import"./index-Cv9V_OhJ.js";import"./useEventCallback-axbciU-3.js";import"./SkeletonBar-BzG-PT6j.js";import"./LoadingCell-N5Ki9l1v.js";import"./ColumnConfigDialog-CqvfzrT6.js";import"./DraggableList-CwLGIfva.js";import"./search-Bs7peCHA.js";import"./Input-lS_WHl4g.js";import"./useControlled-CBZPBUlo.js";import"./Button-CfUv03Rp.js";import"./small-cross-CutI3SqV.js";import"./ActionButton-DKb0FJWo.js";import"./Checkbox-CbZ9YUjr.js";import"./useValueChanged-C-1RM3yJ.js";import"./CollapsiblePanel-mDwz27Ku.js";import"./MultiColumnSortDialog-nv-VEHdV.js";import"./MenuTrigger-DWHCEwjO.js";import"./CompositeItem-BDhhqbET.js";import"./ToolbarRootContext-Bnpwe4G1.js";import"./getDisabledMountTransitionStyles-Dbwrwhw7.js";import"./getPseudoElementBounds-DcblgtJP.js";import"./chevron-down-B8IA8ZhM.js";import"./index-QBUU6ayA.js";import"./error-D7NvUwWR.js";import"./BaseCbacBanner-B6JH6rjR.js";import"./makeExternalStore-DIquDnN6.js";import"./Tooltip-DsT4W0zu.js";import"./PopoverPopup-DTDkR26u.js";import"./toNumber-B-AY_Nn9.js";import"./useOsdkClient-B7VW7fY5.js";import"./tick-CPtnCvMC.js";import"./DropdownField-BgvYcw1K.js";import"./withOsdkMetrics-DPn6STul.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
