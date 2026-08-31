import{f as p,j as e}from"./iframe-CZmLz8ZP.js";import{O as i}from"./object-table-tURiphu4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvTMhaTO.js";import"./Table-D5vCd__W.js";import"./index-CAhEgdCZ.js";import"./Dialog-DTRTvxsf.js";import"./cross-BwuwEvtS.js";import"./svgIconContainer-Dqq8-oQ4.js";import"./useBaseUiId-BCYLkR1F.js";import"./InternalBackdrop-CvNifAli.js";import"./composite-BqzE7WbV.js";import"./index-8Ow4xnki.js";import"./index-BTcDhi6R.js";import"./index-CR3UHMh2.js";import"./useEventCallback-hUMvgE-6.js";import"./SkeletonBar-BqJ3WV_V.js";import"./LoadingCell-Bt-HBQJH.js";import"./ColumnConfigDialog-DFQqa886.js";import"./DraggableList-qwBLBySq.js";import"./search-DI3kZ9bs.js";import"./Input-IY6ZJX7E.js";import"./useControlled-BH9r8IuZ.js";import"./Button-D3buvkEb.js";import"./small-cross-D4_v44P4.js";import"./ActionButton-85kQsPr_.js";import"./Checkbox-UF-o2fFY.js";import"./useValueChanged-Cdhwq_au.js";import"./CollapsiblePanel-UuQCKDA5.js";import"./MultiColumnSortDialog-CZkfkUYs.js";import"./MenuTrigger-CUPM2MO5.js";import"./CompositeItem-C7RhivEH.js";import"./ToolbarRootContext-C9PFHMIF.js";import"./getDisabledMountTransitionStyles-CxXxx8m-.js";import"./getPseudoElementBounds-CGaPX9Rs.js";import"./chevron-down-D49DBeyU.js";import"./index-0tShKdJa.js";import"./error-SF1rOjxj.js";import"./BaseCbacBanner-CHu5VYNo.js";import"./makeExternalStore-C3ECuZEf.js";import"./Tooltip-o2rFlVA_.js";import"./PopoverPopup-Bl4kSVcT.js";import"./debounce-CCB4c__K.js";import"./useOsdkClient-TwNF5t3v.js";import"./tick-DrhRfY11.js";import"./DropdownField-i3QfSn95.js";import"./isEqual-DhsO4tE3.js";import"./withOsdkMetrics-rK3p9Fti.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
