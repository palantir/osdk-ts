import{f as n,j as t}from"./iframe-CaM4X99x.js";import{O as p}from"./object-table-CKzkSqlO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Sj4Ql0mN.js";import"./Table-DN3ZzjUk.js";import"./index-8qI_oH2N.js";import"./Dialog-CKrjHk4W.js";import"./cross-C0i3jESn.js";import"./svgIconContainer-C8BI_VUr.js";import"./useBaseUiId-Cz8ADNpo.js";import"./InternalBackdrop-1umvlOgQ.js";import"./composite-LVHrbq4b.js";import"./index-BeGk-dpa.js";import"./index-cegnn8q1.js";import"./index-DOj70wCW.js";import"./useEventCallback-BKfJLWUi.js";import"./SkeletonBar-CnHcIkTU.js";import"./LoadingCell-DlexT4Y1.js";import"./ColumnConfigDialog-DX3j7S15.js";import"./DraggableList-C7Jn2VKP.js";import"./search-CKrrrESz.js";import"./Input-D1n6OtUk.js";import"./useControlled-Cb7rjJua.js";import"./Button-C5-beAkC.js";import"./small-cross-BfPi0Bfy.js";import"./ActionButton-BM6zQLIo.js";import"./Checkbox-B2rvauNL.js";import"./useValueChanged-4Amcflk5.js";import"./CollapsiblePanel-BvCzc8Vd.js";import"./MultiColumnSortDialog-DygWN-qy.js";import"./MenuTrigger-Db6ZhiHq.js";import"./CompositeItem-B4dq8rqf.js";import"./ToolbarRootContext-B0dPoWux.js";import"./getDisabledMountTransitionStyles-CPt_7nzG.js";import"./getPseudoElementBounds-Bsy-t3N_.js";import"./chevron-down-CaS_fpTc.js";import"./index-BMCgbYm5.js";import"./error-Do1qNI0E.js";import"./BaseCbacBanner-CNAXYJFW.js";import"./makeExternalStore-D6Co5Hsj.js";import"./Tooltip-BgUM39Fq.js";import"./PopoverPopup-16j-rLfE.js";import"./toNumber-QYBJ2wDF.js";import"./useOsdkClient-C9CERFm4.js";import"./tick-DKL3z155.js";import"./DropdownField-C80xhOFN.js";import"./withOsdkMetrics-Dscuj-Zh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
