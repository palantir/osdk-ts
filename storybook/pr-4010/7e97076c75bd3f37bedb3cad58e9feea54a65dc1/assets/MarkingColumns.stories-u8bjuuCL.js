import{f as p,j as e}from"./iframe-DieBzf9y.js";import{O as i}from"./object-table-CzgcEj7q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nfOhyenq.js";import"./Table-mgmK28yq.js";import"./index-CueLTBHP.js";import"./Dialog-CucEWtTN.js";import"./cross-t6O5j7uz.js";import"./svgIconContainer-C4rlmgrB.js";import"./useBaseUiId-Bxe_lFSq.js";import"./InternalBackdrop-BaJX2BYz.js";import"./composite-BvpzVpYi.js";import"./index-BSQeylJ3.js";import"./index-QupaIjGx.js";import"./index-aUc9Sjup.js";import"./useEventCallback-jKF40GPJ.js";import"./SkeletonBar-Bkw74uaU.js";import"./LoadingCell-Bn1mln2z.js";import"./ColumnConfigDialog-BfTmuxU1.js";import"./DraggableList-BrHzCLgw.js";import"./search-LxBHfv5l.js";import"./Input-Ckaolz8l.js";import"./useControlled-D4dAPTSV.js";import"./Button-C1caW-IN.js";import"./small-cross-jMIhgwaN.js";import"./ActionButton-CYr-60__.js";import"./Checkbox-U1Coys9e.js";import"./useValueChanged-DqTy5Eu1.js";import"./CollapsiblePanel-LFl_eO9r.js";import"./MultiColumnSortDialog-DpV27w9t.js";import"./MenuTrigger-s30URI7X.js";import"./CompositeItem-Bk12yzpP.js";import"./ToolbarRootContext-SW8tVZST.js";import"./getDisabledMountTransitionStyles-DXokCC_W.js";import"./getPseudoElementBounds-D6AwDuKV.js";import"./chevron-down-MpT91KZy.js";import"./index-BvOU7Oie.js";import"./error-BL3TgcOC.js";import"./BaseCbacBanner-D2rM26K6.js";import"./makeExternalStore-Bmuig1mM.js";import"./Tooltip-aV81X3rV.js";import"./PopoverPopup-BZdc9gni.js";import"./debounce-C1gLi99b.js";import"./useOsdkClient-DA_4AswE.js";import"./tick-DDUBOGMn.js";import"./DropdownField-B2xBQaH4.js";import"./isEqual-DMfYGbcT.js";import"./withOsdkMetrics-LkUW4C5C.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
