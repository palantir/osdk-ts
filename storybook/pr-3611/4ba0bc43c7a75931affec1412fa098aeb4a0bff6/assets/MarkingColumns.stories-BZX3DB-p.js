import{f as n,j as t}from"./iframe-CzEAcITS.js";import{O as p}from"./object-table-B0LOlsor.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVUrYGcs.js";import"./Table-w2cKC20B.js";import"./index-DidwzLKx.js";import"./Dialog-Bl5_lg7P.js";import"./cross-BEXvhRFN.js";import"./svgIconContainer-BzNHxf01.js";import"./useBaseUiId-Wsui1rDl.js";import"./InternalBackdrop-ClTFry52.js";import"./composite-CGc5OLRr.js";import"./index-CGs03jCU.js";import"./index-CgPz4Is9.js";import"./index-2bdlK153.js";import"./useEventCallback-OoVq4WsO.js";import"./SkeletonBar-CCIytLVy.js";import"./LoadingCell-rKUul0UX.js";import"./ColumnConfigDialog-BXXjOzdY.js";import"./DraggableList-BoABgA9_.js";import"./search-D1GRIozI.js";import"./Input-DsiSoXN8.js";import"./useControlled-n-om19Vg.js";import"./Button-Bjv4-aZR.js";import"./small-cross-BSSbh6QV.js";import"./ActionButton-CywfkP4v.js";import"./Checkbox-Bzk5xgqi.js";import"./useValueChanged-D4jsQj4z.js";import"./CollapsiblePanel-DRnvlK1s.js";import"./MultiColumnSortDialog-NyZ16vD8.js";import"./MenuTrigger-C2i0ZXXu.js";import"./CompositeItem-DRPR7SAg.js";import"./ToolbarRootContext-74w3-zbe.js";import"./getDisabledMountTransitionStyles-De2W-d5J.js";import"./getPseudoElementBounds-DJD_b5cj.js";import"./chevron-down-Ck7FvghV.js";import"./index-BrIngB4d.js";import"./error-Cpn6Ss2N.js";import"./BaseCbacBanner-BGzpKMfY.js";import"./makeExternalStore-8CHn5UYf.js";import"./Tooltip-CqaCChAN.js";import"./PopoverPopup-BWp1Usvg.js";import"./toNumber-ChyvXXR3.js";import"./useOsdkClient-BxOk6qV_.js";import"./tick-Cd_WJp6J.js";import"./DropdownField-Bah2ttzP.js";import"./withOsdkMetrics-Bpkx_Q9E.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
