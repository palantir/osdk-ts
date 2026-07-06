import{f as n,j as t}from"./iframe-Cq8p12pn.js";import{O as p}from"./object-table-DO2Uj2OM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6VrGVOb.js";import"./Table-CDLyogDd.js";import"./index-BoLNLxh1.js";import"./Dialog-C8SBakBg.js";import"./cross-D0SuZwgh.js";import"./svgIconContainer-C7H5M-bc.js";import"./useBaseUiId-DId-nqnK.js";import"./InternalBackdrop-CReHhQYk.js";import"./composite-50HOK_25.js";import"./index-Cv6ri_Mz.js";import"./index-CVs7jYhA.js";import"./index-BGvC_gN_.js";import"./useEventCallback-DeXMdc3M.js";import"./SkeletonBar-DxCq90yy.js";import"./LoadingCell-7hFF0C82.js";import"./ColumnConfigDialog-IcJaKkLr.js";import"./DraggableList-Cb2UE6f-.js";import"./search-BqZyb_hQ.js";import"./Input-CAyQf7LH.js";import"./useControlled-BH6TUeMo.js";import"./Button-C5Kr7PxJ.js";import"./small-cross-H7hfSaVs.js";import"./ActionButton-Cj_UmFBS.js";import"./Checkbox-DR_XJlk4.js";import"./useValueChanged-B85f1wl1.js";import"./CollapsiblePanel-C5j8-9sR.js";import"./MultiColumnSortDialog-B7rstUhX.js";import"./MenuTrigger-Yy0PGudD.js";import"./CompositeItem-Bp-emsOc.js";import"./ToolbarRootContext-CnCd_05O.js";import"./getDisabledMountTransitionStyles-Bhkccp50.js";import"./getPseudoElementBounds-CYcZtW05.js";import"./chevron-down-BO42q-Iu.js";import"./index-H2GARTa3.js";import"./error-C1ugyeBb.js";import"./BaseCbacBanner-DEf7PjOj.js";import"./makeExternalStore-Bz9iO7b2.js";import"./Tooltip-DyG7kgPa.js";import"./PopoverPopup-BKii08uR.js";import"./toNumber-2CP_wcnt.js";import"./useOsdkClient-D2uoJ5W6.js";import"./tick-CIEgz24q.js";import"./DropdownField-DOdiJuUL.js";import"./withOsdkMetrics-CH6gwfXz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
