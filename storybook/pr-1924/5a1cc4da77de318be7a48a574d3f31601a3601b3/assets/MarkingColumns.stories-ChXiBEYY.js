import{f as p,j as e}from"./iframe-DwwwCC6C.js";import{O as i}from"./object-table-DPyHPO17.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CHeXMtL9.js";import"./Table-DMSZMB9x.js";import"./index-Bo0Iv6FV.js";import"./Dialog-CUCjM59r.js";import"./cross-DX-af3rE.js";import"./svgIconContainer-CSoVrkYq.js";import"./useBaseUiId-CZ9XDqRm.js";import"./InternalBackdrop-CtG9Yk_x.js";import"./composite-DfMqq-fG.js";import"./index-BXI3vB4C.js";import"./index-C52ZOjUy.js";import"./index-D_gN4F37.js";import"./useEventCallback-DqP-H7f3.js";import"./SkeletonBar-DbOpLk0i.js";import"./LoadingCell-CCqD1hLo.js";import"./ColumnConfigDialog-BouHnPXW.js";import"./DraggableList-CcSswccG.js";import"./search-BnyzrUJU.js";import"./Input-BhNFMKKD.js";import"./useControlled-BcVv-ZTG.js";import"./isEqual-DZTJuL8t.js";import"./isObject-BjmRrlcS.js";import"./Button-BCCIcLrr.js";import"./ActionButton-BfXEHjES.js";import"./Checkbox-AzAPsSVp.js";import"./useValueChanged-B9wF4oG3.js";import"./CollapsiblePanel-BThdNMuc.js";import"./MultiColumnSortDialog-CtC31J5w.js";import"./MenuTrigger-BVeC_mz2.js";import"./CompositeItem-DAp3hpF7.js";import"./ToolbarRootContext-CaO_OTwi.js";import"./getDisabledMountTransitionStyles-BR9fzpqA.js";import"./getPseudoElementBounds-BJ8H2qr0.js";import"./chevron-down-7IYAudlr.js";import"./index-BxuS-qLp.js";import"./error-B-KG3RMb.js";import"./BaseCbacBanner-BEiFPc_o.js";import"./makeExternalStore-Dx2-l_X3.js";import"./Tooltip-DTdL678B.js";import"./PopoverPopup-jTLGppvT.js";import"./toNumber-B54xZib1.js";import"./useOsdkClient-8ik6ClBo.js";import"./tick-Bg05TusO.js";import"./DropdownField-DHmmjWGf.js";import"./withOsdkMetrics-CL_C78R_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
