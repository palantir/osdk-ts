import{f as p,j as e}from"./iframe-DD9cnFys.js";import{O as i}from"./object-table-mpTeAogY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bu1CQnKL.js";import"./Table-CQS6vAnL.js";import"./index-CnfMn84N.js";import"./Dialog-fUoppMVO.js";import"./cross-_7zlGwns.js";import"./svgIconContainer-BxaZ4skB.js";import"./useBaseUiId-BPJNe1N9.js";import"./InternalBackdrop-DgRQ5o-f.js";import"./composite-CS4z5jOQ.js";import"./index-D-Nkh_eJ.js";import"./index-BSqqb3Ab.js";import"./index-BUerwKFA.js";import"./useEventCallback-BOQfEoG8.js";import"./SkeletonBar-BqO0vMc3.js";import"./LoadingCell-BczuEITl.js";import"./ColumnConfigDialog-BwUJ4deF.js";import"./DraggableList-FsW_oLKu.js";import"./search-Bw9u37nA.js";import"./Input-BTKsKM7k.js";import"./useControlled-AJxb8xEE.js";import"./isEqual-BLxEsJG0.js";import"./isObject-DnbozKkM.js";import"./Button-CIpm3hgo.js";import"./ActionButton-BDjixNRg.js";import"./Checkbox-CW6ztjwn.js";import"./useValueChanged-DXJ6y04V.js";import"./CollapsiblePanel-BkBbrP4e.js";import"./MultiColumnSortDialog-wOGWC21o.js";import"./MenuTrigger-EbVC4t-5.js";import"./CompositeItem-D6ac5Q0X.js";import"./ToolbarRootContext-B4yKvb37.js";import"./getDisabledMountTransitionStyles-cJFM1D32.js";import"./getPseudoElementBounds-C9xA_Cf8.js";import"./chevron-down-BN0W8txx.js";import"./index-CUTzcWww.js";import"./error-CbN-SPes.js";import"./BaseCbacBanner-2XMhE7Bw.js";import"./makeExternalStore-DYPfwRWT.js";import"./Tooltip-FQaQAfIM.js";import"./PopoverPopup-DZ8_WYYu.js";import"./toNumber-FRAg_Pyy.js";import"./useOsdkClient-dFa0cTgA.js";import"./tick-IPZkOIFl.js";import"./DropdownField-txWP4R8G.js";import"./withOsdkMetrics-BVsGKhhQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
