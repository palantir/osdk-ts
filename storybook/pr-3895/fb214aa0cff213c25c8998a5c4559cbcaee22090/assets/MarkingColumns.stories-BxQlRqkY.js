import{f as p,j as e}from"./iframe-BAIjVGVk.js";import{O as i}from"./object-table-CgRmp_wx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DSHh_idH.js";import"./Table-DDAhnscq.js";import"./index-DXpX7Amm.js";import"./Dialog-DkpHA-m3.js";import"./cross-CMTVeRn5.js";import"./svgIconContainer-CyAzcMHP.js";import"./useBaseUiId-BWufarWX.js";import"./InternalBackdrop-CoKYeuWa.js";import"./composite-QKuz8rbt.js";import"./index-ClU-xGz3.js";import"./index-BsrAu5pi.js";import"./index-QT8bzbR-.js";import"./useEventCallback-CsCnypAM.js";import"./SkeletonBar-Bedjo_IK.js";import"./LoadingCell-15_H8fvU.js";import"./ColumnConfigDialog-CMLYXuJ3.js";import"./DraggableList-2Q7nVhxS.js";import"./search-CuXKgBVi.js";import"./Input-fl6Gg72N.js";import"./useControlled-DuNzm9BZ.js";import"./Button-YDlO7Iev.js";import"./small-cross-DhSNS2sx.js";import"./ActionButton-DTbF0D12.js";import"./Checkbox-B6DnqRZR.js";import"./useValueChanged-bKRsX5KW.js";import"./CollapsiblePanel-pLJveLE6.js";import"./MultiColumnSortDialog-4VLh05pQ.js";import"./MenuTrigger-BIzQg68D.js";import"./CompositeItem-D_qw6hBc.js";import"./ToolbarRootContext-cyL3JijA.js";import"./getDisabledMountTransitionStyles-DBk0gkcA.js";import"./getPseudoElementBounds-B2i1okA0.js";import"./chevron-down-CI5MTTqT.js";import"./index-BI7ItsTy.js";import"./error-BHvGZT3F.js";import"./BaseCbacBanner-BtTwoFWI.js";import"./makeExternalStore-BcjHsE3T.js";import"./Tooltip-DHp42P0G.js";import"./PopoverPopup-34srozDo.js";import"./debounce-DV255FUG.js";import"./useOsdkClient-BGAxcLse.js";import"./tick-CNbryE7H.js";import"./DropdownField-Z7SF_GUg.js";import"./isEqual-CNxzTEUo.js";import"./withOsdkMetrics-bmWg7v3w.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
