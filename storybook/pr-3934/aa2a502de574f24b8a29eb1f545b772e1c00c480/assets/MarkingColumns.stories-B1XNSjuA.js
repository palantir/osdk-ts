import{f as p,j as e}from"./iframe-DYuNygDT.js";import{O as i}from"./object-table-BGSywQPX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DNcVOp9p.js";import"./Table-Bd0SIFCS.js";import"./index-Z-VamNUn.js";import"./Dialog-DU71SPyH.js";import"./cross-BAgwegJv.js";import"./svgIconContainer-DW4S_s8v.js";import"./useBaseUiId-BcxI-vr3.js";import"./InternalBackdrop-DzbbdgPK.js";import"./composite-B8-6F05C.js";import"./index-CJc8tiXf.js";import"./index-B54hZF59.js";import"./index-BnKCXvWh.js";import"./useEventCallback-CTNFarTj.js";import"./SkeletonBar-CRx6wyYo.js";import"./LoadingCell-CcdHY3uR.js";import"./ColumnConfigDialog-Cn6RbG_i.js";import"./DraggableList-BREctNVP.js";import"./search-DIPEzkiP.js";import"./Input-CDNL1w7C.js";import"./useControlled-BuiEHDXU.js";import"./Button-BsHu9zTC.js";import"./small-cross-CdaaHxKR.js";import"./ActionButton-5OHeM4Pf.js";import"./Checkbox-C8evdvVx.js";import"./useValueChanged-BXHZKjZ0.js";import"./CollapsiblePanel-CfT5DkwQ.js";import"./MultiColumnSortDialog-zK16g6ZJ.js";import"./MenuTrigger-Oimw98t7.js";import"./CompositeItem-DAdd__ur.js";import"./ToolbarRootContext-BNqu3LLk.js";import"./getDisabledMountTransitionStyles-BLopcKSb.js";import"./getPseudoElementBounds-BZEvyE4s.js";import"./chevron-down-DwRyFZmE.js";import"./index-Bq3G2Qv2.js";import"./error-DXNNzXjG.js";import"./BaseCbacBanner-CuOxMcbL.js";import"./makeExternalStore-BtgLem_Q.js";import"./Tooltip-BoBbTl3T.js";import"./PopoverPopup-CviStnN-.js";import"./debounce-CKSVpS6C.js";import"./useOsdkClient-DT0yAhzW.js";import"./tick-vrNi4Iyx.js";import"./DropdownField-Dcj1OaRe.js";import"./isEqual-Dx3IzvLl.js";import"./withOsdkMetrics-DuapMseQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
