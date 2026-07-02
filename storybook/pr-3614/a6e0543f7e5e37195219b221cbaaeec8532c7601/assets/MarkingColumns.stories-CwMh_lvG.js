import{f as n,j as t}from"./iframe-Cj5Z4AqU.js";import{O as p}from"./object-table-6uIxD_KI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BpFXxi93.js";import"./Table-IIlfFb3x.js";import"./index-BttBMQiy.js";import"./Dialog-CoFifBIe.js";import"./cross-CgPUg4SZ.js";import"./svgIconContainer-DzEq2oSX.js";import"./useBaseUiId-ji54pTqi.js";import"./InternalBackdrop-D93FbMMN.js";import"./composite-erYjklIE.js";import"./index-DQ9Iarnj.js";import"./index-BEhfv_BD.js";import"./index-CIcJX8VG.js";import"./useEventCallback-DMzJ87iX.js";import"./SkeletonBar-DUoLJxRP.js";import"./LoadingCell-CrDeYqDn.js";import"./ColumnConfigDialog-nkC7c4YJ.js";import"./DraggableList-DMFR0KzR.js";import"./search-zbr17KlE.js";import"./Input-CTSdR7eM.js";import"./useControlled-DAkmZSYx.js";import"./Button-BCPVdu5l.js";import"./small-cross-DPtXu85u.js";import"./ActionButton-DvB4QXGP.js";import"./Checkbox-CcKme-u6.js";import"./minus-wwqamjl9.js";import"./tick-D63Jjs7s.js";import"./useValueChanged-G9OYdqD7.js";import"./caret-down-l2QFwP-5.js";import"./CollapsiblePanel-BeSu_apV.js";import"./MultiColumnSortDialog-DCmKSvhK.js";import"./MenuTrigger-DcJ5uB5E.js";import"./CompositeItem-CbpWqHzA.js";import"./ToolbarRootContext-Bll_v3EE.js";import"./getDisabledMountTransitionStyles-CH3tjnPE.js";import"./getPseudoElementBounds-Dt1LkwZJ.js";import"./chevron-down-B2Fy7XqP.js";import"./index-CuXjmdd-.js";import"./error-D9Z5bw_k.js";import"./BaseCbacBanner-DfjNWDSt.js";import"./makeExternalStore-Dwhp3AyG.js";import"./Tooltip-CAAiIcAa.js";import"./PopoverPopup-4-57PKLi.js";import"./toNumber-CEHfxBzx.js";import"./useOsdkClient-CBCqILG8.js";import"./DropdownField-CI6Qg727.js";import"./withOsdkMetrics-DvaqX-vX.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
