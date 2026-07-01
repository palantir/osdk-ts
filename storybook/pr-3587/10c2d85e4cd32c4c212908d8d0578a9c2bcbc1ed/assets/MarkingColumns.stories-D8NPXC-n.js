import{f as n,j as t}from"./iframe-CRF3sQbb.js";import{O as p}from"./object-table-D6cHspsd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BxvwHE1r.js";import"./Table-CIJNX2me.js";import"./index-C2_vf368.js";import"./Dialog-Boi1ELK4.js";import"./cross-C8iLLnih.js";import"./svgIconContainer-Cwc2mUeQ.js";import"./useBaseUiId-4pUjU83e.js";import"./InternalBackdrop-CGrmlXBz.js";import"./composite-CTZL7J_0.js";import"./index-BX5C1w-G.js";import"./index-qfKuOoTK.js";import"./index-Cb_VaF60.js";import"./useEventCallback-Rj9H7xXw.js";import"./SkeletonBar-fk1RsAxw.js";import"./LoadingCell-B4u932Xq.js";import"./ColumnConfigDialog-C76Rj5PU.js";import"./DraggableList-BVn1aAOS.js";import"./search-CzZCuUmt.js";import"./Input-CpyJIJ7L.js";import"./useControlled-CH6zwWP0.js";import"./Button-BSJkBcDT.js";import"./small-cross-CBK0fAbS.js";import"./ActionButton-BNtnpq1w.js";import"./Checkbox-bke9t5uY.js";import"./minus-BXIDGL63.js";import"./tick-CSEhzziR.js";import"./useValueChanged-6rKfac6A.js";import"./caret-down-cqNItdWt.js";import"./CollapsiblePanel-CFdK4s2S.js";import"./MultiColumnSortDialog-C9cvXBwA.js";import"./MenuTrigger-DWd5d49K.js";import"./CompositeItem-CanDnIqa.js";import"./ToolbarRootContext-DY1zAZAc.js";import"./getDisabledMountTransitionStyles-rFYZMkOx.js";import"./getPseudoElementBounds-vp1YNWc8.js";import"./chevron-down-DwDCfnH2.js";import"./index-BsqUftG_.js";import"./error-DKDaNk4P.js";import"./BaseCbacBanner-CjTyYnfS.js";import"./makeExternalStore-CSyyVcMS.js";import"./Tooltip-CYrIickr.js";import"./PopoverPopup-Bld6bM7N.js";import"./toNumber-Ca4BfG64.js";import"./useOsdkClient-EM9iv25U.js";import"./DropdownField-BxD_4ysY.js";import"./withOsdkMetrics-DvIKwf0F.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
