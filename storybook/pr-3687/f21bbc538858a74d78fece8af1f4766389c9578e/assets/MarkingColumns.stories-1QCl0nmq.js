import{f as p,j as e}from"./iframe-WZlHWuAl.js";import{O as i}from"./object-table-BS2yyFqB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BqNO_kYB.js";import"./Table-DzYUOamN.js";import"./index-0vBrLGcy.js";import"./Dialog-61zk0m-2.js";import"./cross-8Hm1XohM.js";import"./svgIconContainer-B-i_bEns.js";import"./useBaseUiId-BixrlMbu.js";import"./InternalBackdrop-BwdMjQMe.js";import"./composite-B7hu--yZ.js";import"./index-BntjzrUj.js";import"./index-Bdw5YJLj.js";import"./index-DGEXx3lA.js";import"./useEventCallback-DDX_rz7n.js";import"./SkeletonBar-81KCyxnx.js";import"./LoadingCell-PjzYnJ5y.js";import"./ColumnConfigDialog-CXzLWyzJ.js";import"./DraggableList-C1734WlY.js";import"./search-BgC_pDzB.js";import"./Input-dA6DFlkG.js";import"./useControlled-DYsSBYkU.js";import"./isEqual-Qud4ubs9.js";import"./isObject-vLQbU_Zm.js";import"./Button--FVbK81A.js";import"./ActionButton-CCWCa9K1.js";import"./Checkbox-XzRZFc-W.js";import"./useValueChanged-BupysOrS.js";import"./CollapsiblePanel-DTEsxWXa.js";import"./MultiColumnSortDialog-CT0IyEHL.js";import"./MenuTrigger-CfrEf1Q3.js";import"./CompositeItem-CezuKAKD.js";import"./ToolbarRootContext-BAoi7Hqr.js";import"./getDisabledMountTransitionStyles-UJn44PGJ.js";import"./getPseudoElementBounds-ConDPen6.js";import"./chevron-down-YKEUt5BK.js";import"./index-D0Os6pCH.js";import"./error-Dm7h3fk8.js";import"./BaseCbacBanner-DncYBeT4.js";import"./makeExternalStore-otuFfb0r.js";import"./Tooltip-ChWSLUgR.js";import"./PopoverPopup-DQXEljrv.js";import"./toNumber-C9tQGy0i.js";import"./useOsdkClient-DaEGhStw.js";import"./tick-CpCiF0s6.js";import"./DropdownField-BkRnf6XA.js";import"./withOsdkMetrics-ClykSytW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
