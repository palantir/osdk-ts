import{f as p,j as e}from"./iframe-B0W1tjyx.js";import{O as i}from"./object-table-ByW0iRN4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9BNFzYVn.js";import"./Table-CDqAze49.js";import"./index-B0ZI_T4A.js";import"./Dialog-1Hc8hvmW.js";import"./cross-Bvf_hoCy.js";import"./svgIconContainer-JVsHGGQJ.js";import"./useBaseUiId-Dg0EtU88.js";import"./InternalBackdrop-pkhhExjC.js";import"./composite-BvCgECMb.js";import"./index-0JUS0bl9.js";import"./index-D_b8RHzl.js";import"./index-9KlYwXLT.js";import"./useEventCallback-D2l6XFwH.js";import"./SkeletonBar-SdaBCFfG.js";import"./LoadingCell-Cyl597ns.js";import"./ColumnConfigDialog-CEm1F5GG.js";import"./DraggableList-BIlxskkh.js";import"./search-BdvsCHgj.js";import"./Input-CJ9Yoyko.js";import"./useControlled-CFQJO6Op.js";import"./isEqual-kHHHMxlJ.js";import"./isObject-CEG66Ysn.js";import"./Button-CllyD5Fk.js";import"./ActionButton-FCYoe6pd.js";import"./Checkbox-ClP_IzO-.js";import"./useValueChanged-B7WAZ2Po.js";import"./CollapsiblePanel-C1SH974_.js";import"./MultiColumnSortDialog-BUH-mu_E.js";import"./MenuTrigger-DidihynY.js";import"./CompositeItem-B3C1me1o.js";import"./ToolbarRootContext-D6BYbpCQ.js";import"./getDisabledMountTransitionStyles-ClGEvYNq.js";import"./getPseudoElementBounds-S5ZjmQl8.js";import"./chevron-down-BO0Ma7WA.js";import"./index-B26rJ8sm.js";import"./error-hxPE7cUz.js";import"./BaseCbacBanner-BT_ehWB_.js";import"./makeExternalStore-s1PuIN2e.js";import"./Tooltip-ft-HOAV-.js";import"./PopoverPopup-DZUhAEPi.js";import"./toNumber-CjgDMmjI.js";import"./useOsdkClient-BzN2he8l.js";import"./tick-BHbmMwuf.js";import"./DropdownField-D86cVelw.js";import"./withOsdkMetrics-Dl2A3XwS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
