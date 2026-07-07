import{f as n,j as t}from"./iframe-CDBJBi9y.js";import{O as p}from"./object-table-dNILSnFY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPpjahNM.js";import"./Table-CGH8JZQ1.js";import"./index-2YnGD4P-.js";import"./Dialog-CoXsEMOA.js";import"./cross-sH7tNTxb.js";import"./svgIconContainer-CnFpwshs.js";import"./useBaseUiId-NZoa3elP.js";import"./InternalBackdrop-BG7CACPY.js";import"./composite-CWLOPAC6.js";import"./index-DfA0AXNS.js";import"./index-Cumt9Tsy.js";import"./index-B29kLQYU.js";import"./useEventCallback-C5G-Q4m4.js";import"./SkeletonBar-DBBWyLDy.js";import"./LoadingCell-DHvM12th.js";import"./ColumnConfigDialog-CU9ws2QB.js";import"./DraggableList-ClBvFapn.js";import"./search-DVghM6nk.js";import"./Input-TomMleJD.js";import"./useControlled-Bde8tXyW.js";import"./Button-B0MvZMyN.js";import"./small-cross-ac_1rOKb.js";import"./ActionButton-Bxk9i8wf.js";import"./Checkbox-BkaqJSD2.js";import"./useValueChanged-C0gTsLrA.js";import"./CollapsiblePanel-4j-1CRBs.js";import"./MultiColumnSortDialog-B_rN6h7u.js";import"./MenuTrigger-wj2mZh7j.js";import"./CompositeItem-CxmnoSQk.js";import"./ToolbarRootContext-CGoDLCQp.js";import"./getDisabledMountTransitionStyles-BcdQywUb.js";import"./getPseudoElementBounds-B5OHh1cG.js";import"./chevron-down-BnVvJT4Z.js";import"./index-aO0ncbOX.js";import"./error-B8dmfV4o.js";import"./BaseCbacBanner-s4T-nHP8.js";import"./makeExternalStore-B9IeP5n3.js";import"./Tooltip-CIqTwyBI.js";import"./PopoverPopup-Cmgr95Ut.js";import"./toNumber-Cou7KRnT.js";import"./useOsdkClient-BA0XQsgk.js";import"./tick-Bf5J3LHI.js";import"./DropdownField-BjvahhYu.js";import"./withOsdkMetrics-BVBX6iV3.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
