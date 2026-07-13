import{f as n,j as t}from"./iframe-bDs-tfNC.js";import{O as p}from"./object-table-BmVFDcTf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xclCqiG3.js";import"./Table-DS0UiZ9f.js";import"./index-HWGdEnjl.js";import"./Dialog-D8_E-Xph.js";import"./cross-DhXu0fA-.js";import"./svgIconContainer-Ceoa031m.js";import"./useBaseUiId-BsW6v9Vr.js";import"./InternalBackdrop-B_zZhjag.js";import"./composite-J_sH6rAK.js";import"./index-DB45OZsZ.js";import"./index-DwGNv9ID.js";import"./index-hLziORN-.js";import"./useEventCallback-CUJaUeKH.js";import"./SkeletonBar-CUyf1qWr.js";import"./LoadingCell-t-9GgN8y.js";import"./ColumnConfigDialog-DnUa0pm1.js";import"./DraggableList-BG_nrFrl.js";import"./search-tKPO-gQM.js";import"./Input-D-JIo9_F.js";import"./useControlled-9yXOfdlI.js";import"./Button-V5Mt5VaF.js";import"./small-cross-BQkS_aNy.js";import"./ActionButton-Bwn4n_R8.js";import"./Checkbox-CG4zNUwK.js";import"./useValueChanged-CdBwwJx8.js";import"./CollapsiblePanel-CsNlkRMf.js";import"./MultiColumnSortDialog-DiFBpRah.js";import"./MenuTrigger-Cbz__XOL.js";import"./CompositeItem-DOuo9giL.js";import"./ToolbarRootContext-Cg1Bkc79.js";import"./getDisabledMountTransitionStyles-D_ygFnvB.js";import"./getPseudoElementBounds-DwlreRIY.js";import"./chevron-down-MLZfQEBO.js";import"./index-BkpUBsi6.js";import"./error-B04Yj6SO.js";import"./BaseCbacBanner-CZx2KRt_.js";import"./makeExternalStore-DCHiXpf2.js";import"./Tooltip-DK73Vw-E.js";import"./PopoverPopup-DQp7911t.js";import"./toNumber-QcYfZ08k.js";import"./useOsdkClient-CKQAfoqI.js";import"./tick-CQGFDkiR.js";import"./DropdownField-G7UW0SLi.js";import"./withOsdkMetrics-mbQEKI8d.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
