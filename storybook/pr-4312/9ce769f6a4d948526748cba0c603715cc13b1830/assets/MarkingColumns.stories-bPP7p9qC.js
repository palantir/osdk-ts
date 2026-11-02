import{f as p,j as e}from"./iframe-Dwa8kb-W.js";import{O as i}from"./object-table-And6XUVx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D2z1vNrl.js";import"./Table-Gl2RZb_7.js";import"./index-DKKHqoz1.js";import"./Dialog-CuOJryCw.js";import"./cross-CIVjhjpG.js";import"./svgIconContainer-C5FqMMES.js";import"./useBaseUiId-Cogt136Y.js";import"./InternalBackdrop-CZlKxJsn.js";import"./composite-BMbUWovQ.js";import"./index-D80Qi5t9.js";import"./index-tbTC1PtM.js";import"./index-Bauiu-f9.js";import"./useEventCallback-CI2Yqilq.js";import"./SkeletonBar-D4uZBgUb.js";import"./LoadingCell-DbJ6kDhU.js";import"./ColumnConfigDialog-BbGOm_Sh.js";import"./DraggableList-BEm1rpxs.js";import"./search-DYLtDscA.js";import"./Input-CTkf375J.js";import"./useControlled-BPd0y_Yh.js";import"./Button-DiDAQlp3.js";import"./small-cross-zptgYJgA.js";import"./ActionButton-BdryvxR5.js";import"./Checkbox-H6Wex56o.js";import"./useValueChanged-c32Z9LOm.js";import"./CollapsiblePanel-MRw3GiAv.js";import"./MultiColumnSortDialog-D1_6Gu4U.js";import"./MenuTrigger-Ceo_giiW.js";import"./CompositeItem-CAP2WO9N.js";import"./ToolbarRootContext-CiNKODrc.js";import"./getDisabledMountTransitionStyles-D3sYmu31.js";import"./getPseudoElementBounds-DWWOgiGX.js";import"./chevron-down-DohnCY6J.js";import"./index-CONAeC1u.js";import"./error-BCJLeCtt.js";import"./BaseCbacBanner-BHHpqku0.js";import"./makeExternalStore-CbJLTcnS.js";import"./Tooltip-BCgSNK3L.js";import"./PopoverPopup-BlCcOTs1.js";import"./debounce-SXfA0_jR.js";import"./useOsdkClient-CG6gK-bj.js";import"./tick-BoSZnUAn.js";import"./DropdownField-C53Ua_IU.js";import"./isEqual-DoRXiZQF.js";import"./withOsdkMetrics-C1tOk5Js.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
