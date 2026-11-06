import{f as p,j as e}from"./iframe-DNO5nHhn.js";import{O as i}from"./object-table-CnuobtBz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DmJRiiyv.js";import"./Table-DaVBUNKS.js";import"./index-B1zYgGoG.js";import"./Dialog-COvaeWHa.js";import"./cross-DkGiXpSw.js";import"./svgIconContainer-CrvnRU9F.js";import"./useBaseUiId-VJjRPmeN.js";import"./InternalBackdrop-DLzfXrnQ.js";import"./composite-BaAus-sy.js";import"./index-DoyQeAs3.js";import"./index-GqFGt6-k.js";import"./index-Ce87FLOS.js";import"./useEventCallback-BOvCXpPp.js";import"./SkeletonBar-CPy14_Pl.js";import"./LoadingCell-DEQP3fso.js";import"./ColumnConfigDialog-Cp1GCMCd.js";import"./DraggableList-DN2DXunz.js";import"./search-D7RgJWVi.js";import"./Input-DLMSp_LN.js";import"./useControlled-DFdql7xi.js";import"./Button-RvpRTGgQ.js";import"./small-cross-BKeeryj7.js";import"./ActionButton-YeYo3Rcp.js";import"./Checkbox-D3YQCgVO.js";import"./useValueChanged-C9nCISHq.js";import"./CollapsiblePanel-BYOXGGhP.js";import"./MultiColumnSortDialog-C5fM365N.js";import"./MenuTrigger-Dfv55hnJ.js";import"./CompositeItem-50twUNd1.js";import"./ToolbarRootContext-XjIA09C4.js";import"./getDisabledMountTransitionStyles-CNFrfHKN.js";import"./getPseudoElementBounds-D5ABxTfB.js";import"./chevron-down-CoqE-c4D.js";import"./index-CXgAIFbB.js";import"./error-BkrZNArB.js";import"./BaseCbacBanner-U_SB8CX2.js";import"./makeExternalStore-BOcAXB1x.js";import"./Tooltip-DQGkuZz9.js";import"./isObject-CUrQ0YWF.js";import"./debounce-Sh9pMPZ4.js";import"./useOsdkClient-BWdcC--S.js";import"./tick-BGglWVfw.js";import"./DropdownField-9n3rWcYS.js";import"./isEqual-BpKTdG-g.js";import"./_baseIsEqual-CjPifIr_.js";import"./withOsdkMetrics-1wr3AqUj.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
