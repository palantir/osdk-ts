import{f as n,j as t}from"./iframe-B58nOH3w.js";import{O as p}from"./object-table-DWsqSSWd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-USapLSCa.js";import"./Table-D037DBB5.js";import"./index-DOZq4Nf6.js";import"./Dialog-RwWSuhVa.js";import"./cross-CpiknFZf.js";import"./svgIconContainer-DGWvjRiM.js";import"./useBaseUiId-DIjqosEe.js";import"./InternalBackdrop-DDs16YId.js";import"./composite-BTUagR_l.js";import"./index-BdW4SvKX.js";import"./index-DQfXbhII.js";import"./index-V1nhU3Fc.js";import"./useEventCallback-B6QE5SVK.js";import"./SkeletonBar-y7V3bggD.js";import"./LoadingCell-DG46eC5z.js";import"./ColumnConfigDialog-tI51evL-.js";import"./DraggableList-DUesyqxl.js";import"./search-CCBdM2yc.js";import"./Input-Ky8lOJ0y.js";import"./useControlled-Ci_r0JjH.js";import"./Button-Bn3eOMbk.js";import"./small-cross-8_3qTLSg.js";import"./ActionButton-Cjz_NkpQ.js";import"./Checkbox-DF0HrQVQ.js";import"./useValueChanged-iX_Wfdn7.js";import"./CollapsiblePanel-DMyKd1l7.js";import"./MultiColumnSortDialog-CRKuHULp.js";import"./MenuTrigger-BOP-KhLe.js";import"./CompositeItem-CYpH_Oj6.js";import"./ToolbarRootContext-B3AWpRJU.js";import"./getDisabledMountTransitionStyles-CcIQORoM.js";import"./getPseudoElementBounds-CsPTfnEQ.js";import"./chevron-down-C6W6J5P0.js";import"./index-DZH5jSGD.js";import"./error-H4f42mvW.js";import"./BaseCbacBanner-jY2tvlj6.js";import"./makeExternalStore-BNAkx2eX.js";import"./Tooltip-C-dVVzWA.js";import"./PopoverPopup-BvLhbaW1.js";import"./toNumber-CFnJixVd.js";import"./useOsdkClient-BBahcRDy.js";import"./tick-_-uAmmy5.js";import"./DropdownField-DRhdJBNv.js";import"./withOsdkMetrics-CPjS5Ta7.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
