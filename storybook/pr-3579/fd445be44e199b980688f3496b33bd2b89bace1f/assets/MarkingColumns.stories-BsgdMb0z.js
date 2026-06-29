import{f as n,j as t}from"./iframe-D9n701Ys.js";import{O as p}from"./object-table-BizpJslV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BI_fxZPk.js";import"./Table-CutNVAQx.js";import"./index-CbEzyV1X.js";import"./Dialog-CXLFnIBC.js";import"./cross-BppzrARv.js";import"./svgIconContainer-Cfu6rTke.js";import"./useBaseUiId-C8QNh5qm.js";import"./InternalBackdrop-BwVtWjY3.js";import"./composite-CgbYFNDd.js";import"./index-Do729ms_.js";import"./index-CG4_exb9.js";import"./index-CCuh3nB8.js";import"./useEventCallback-c1E4yQgB.js";import"./SkeletonBar-CFeqcB6X.js";import"./LoadingCell-ClQ2LfUZ.js";import"./ColumnConfigDialog-CDoRnxye.js";import"./DraggableList-Cq1jnUvt.js";import"./search-R5UEkk1x.js";import"./Input-b-ZppXLs.js";import"./useControlled-C1GYaTFT.js";import"./Button-CangFNCI.js";import"./small-cross-CQ7WyUh5.js";import"./ActionButton-DlO2Ifvc.js";import"./Checkbox-CABhA5HZ.js";import"./minus-Dq4-qQQc.js";import"./tick-CTH94ksV.js";import"./useValueChanged-RemNEsBU.js";import"./caret-down-DrLBwqh3.js";import"./CollapsiblePanel-D0CIZbnp.js";import"./MultiColumnSortDialog-ByOYwv0t.js";import"./MenuTrigger-2IeO-3Ty.js";import"./CompositeItem-vO31IQr7.js";import"./ToolbarRootContext-C9daeDPO.js";import"./getDisabledMountTransitionStyles-CQaYc9AQ.js";import"./getPseudoElementBounds-BYR7zSsN.js";import"./chevron-down-DdjyVf3L.js";import"./index-BdxcJaYj.js";import"./error-9wk2xizV.js";import"./BaseCbacBanner-9X4EWrFr.js";import"./makeExternalStore-BZ2jZRf_.js";import"./Tooltip-Ci5C2OIY.js";import"./PopoverPopup-CGHGBGxb.js";import"./toNumber-Sqsr3EvX.js";import"./useOsdkClient-Ctpw2-C5.js";import"./DropdownField-OPL9AZr9.js";import"./withOsdkMetrics-Cunxg9x2.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
