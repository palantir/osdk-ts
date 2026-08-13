import{f as p,j as e}from"./iframe-DPU4dU5t.js";import{O as i}from"./object-table-CYL4n5nH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BfY5BfRw.js";import"./Table-DxksXrgt.js";import"./index-BWZ_jsFd.js";import"./Dialog-D3y20SaV.js";import"./cross-GP91ECu7.js";import"./svgIconContainer-DMEc4fQs.js";import"./useBaseUiId-DL2j5itx.js";import"./InternalBackdrop-CIo_o02W.js";import"./composite-CBPw2eZY.js";import"./index-CQuzS6zi.js";import"./index-BuyWU3Mi.js";import"./index-D14glJLB.js";import"./useEventCallback-DHUcspcy.js";import"./SkeletonBar-BbwbNpqo.js";import"./LoadingCell-VRBagF7F.js";import"./ColumnConfigDialog-DnTFGitq.js";import"./DraggableList-DKWsDlTt.js";import"./search-CWx5rAiq.js";import"./Input-CkOmJ7l-.js";import"./useControlled-7lGv1XpS.js";import"./isEqual-r_BBkpT6.js";import"./isObject-DEhLATs2.js";import"./Button-CHOirzFo.js";import"./ActionButton-D4zxx4Li.js";import"./Checkbox-DBhLhEUm.js";import"./useValueChanged-lfKJ3AhH.js";import"./CollapsiblePanel-DyNQU87X.js";import"./MultiColumnSortDialog-CY8yqai7.js";import"./MenuTrigger-DqHXO7hi.js";import"./CompositeItem-CDOXdB89.js";import"./ToolbarRootContext-DHSfKOeF.js";import"./getDisabledMountTransitionStyles-CJgdQ1n1.js";import"./getPseudoElementBounds-BcmXpxSp.js";import"./chevron-down-CAPpObNP.js";import"./index-AkfEBwJt.js";import"./error-hkPL5XIl.js";import"./BaseCbacBanner-riFku8O-.js";import"./makeExternalStore-GTeGNvOb.js";import"./Tooltip-K5t-yHF7.js";import"./PopoverPopup-B47v2T3R.js";import"./toNumber-CVF7Lzyk.js";import"./useOsdkClient-D5Hs2Xu0.js";import"./tick-C_OcSV--.js";import"./DropdownField-YPok9mq7.js";import"./withOsdkMetrics-DVg-5hEq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
