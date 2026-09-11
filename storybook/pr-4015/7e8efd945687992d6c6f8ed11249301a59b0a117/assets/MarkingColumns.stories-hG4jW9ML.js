import{f as p,j as e}from"./iframe-B9e47JAt.js";import{O as i}from"./object-table-B3vUriCd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BRB8NOW_.js";import"./Table-moZoz-tl.js";import"./index-C_6xtQCD.js";import"./Dialog-De_UFcHU.js";import"./cross-ymxOUFGj.js";import"./svgIconContainer-dHjn9I5b.js";import"./useBaseUiId-VqyZRI0q.js";import"./InternalBackdrop-Dfj_iS6F.js";import"./composite-BethEnTN.js";import"./index-D_iw6W8D.js";import"./index-BBqzf2o3.js";import"./index-DZGqQgW1.js";import"./useEventCallback-Bg7GLrL9.js";import"./SkeletonBar-BISleUwK.js";import"./LoadingCell-CHpd1JEV.js";import"./ColumnConfigDialog-DTLTAVEi.js";import"./DraggableList-BII7t1lU.js";import"./search-BejwSAXg.js";import"./Input-CPGlOkat.js";import"./useControlled-BBsT5_Nc.js";import"./Button-z2FVGTG2.js";import"./small-cross-DPszHJJB.js";import"./ActionButton-Bfthi2f3.js";import"./Checkbox-t96oYsN4.js";import"./useValueChanged-vvzPWCqc.js";import"./CollapsiblePanel-CcEY7J9b.js";import"./MultiColumnSortDialog-CK2phl-f.js";import"./MenuTrigger-BkF3VMxq.js";import"./CompositeItem-BJasfKU0.js";import"./ToolbarRootContext-DycOOcjn.js";import"./getDisabledMountTransitionStyles-BAlW402o.js";import"./getPseudoElementBounds-BbyW3FZM.js";import"./chevron-down-ChPDwIrO.js";import"./index-DY7BzFjI.js";import"./error-pDyLX5xW.js";import"./BaseCbacBanner-Dmr6f2y2.js";import"./makeExternalStore-CBsYhUmA.js";import"./Tooltip-FBqtZC3b.js";import"./PopoverPopup-Bvuw1Zd4.js";import"./debounce-CUqU57Yl.js";import"./useOsdkClient-D5uYQrdS.js";import"./tick-C3sbvhix.js";import"./DropdownField-rd7rOyCh.js";import"./isEqual-zLwlDRee.js";import"./withOsdkMetrics-CmtdaepB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
