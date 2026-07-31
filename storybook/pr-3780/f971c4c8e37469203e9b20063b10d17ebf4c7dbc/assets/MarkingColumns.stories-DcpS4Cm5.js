import{f as p,j as e}from"./iframe-DNFazLRo.js";import{O as i}from"./object-table-AP66W_DC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CSOKbrIj.js";import"./Table-BxtcZ7E1.js";import"./index-D8TskzeX.js";import"./Dialog-DGcnm95O.js";import"./cross-BIdaAy0r.js";import"./svgIconContainer-D3tpgr1_.js";import"./useBaseUiId-Bk1k55aA.js";import"./InternalBackdrop-DnZfkcan.js";import"./composite-SJWY6A2_.js";import"./index-Bwgkh0sx.js";import"./index-DGsBqEMa.js";import"./index-BUi3Bw9s.js";import"./useEventCallback-CXlnvJZE.js";import"./SkeletonBar-k7Kbv1T8.js";import"./LoadingCell-CF0Hy73G.js";import"./ColumnConfigDialog-sleq7Oeb.js";import"./DraggableList-CITdqsb5.js";import"./search-DafmKbOj.js";import"./Input-Bvkv7SHA.js";import"./useControlled-DqGw_9SJ.js";import"./isEqual-BUIYXWqW.js";import"./isObject-BWn2f4Ek.js";import"./Button-Dx6KadTF.js";import"./ActionButton-pxPx36n-.js";import"./Checkbox-CE6K5_Vj.js";import"./useValueChanged-BJKCNwE7.js";import"./CollapsiblePanel-DBAyJYmf.js";import"./MultiColumnSortDialog-DSv0ZuKM.js";import"./MenuTrigger-ChBkGuXs.js";import"./CompositeItem-f4mP3DUQ.js";import"./ToolbarRootContext-DiLS0IHp.js";import"./getDisabledMountTransitionStyles-D68KY3fK.js";import"./getPseudoElementBounds-B85mJiJQ.js";import"./chevron-down-SokcOk50.js";import"./index-VHSNuB9X.js";import"./error-B_y1x8OC.js";import"./BaseCbacBanner-BhQdxXZj.js";import"./makeExternalStore-Cya9wI0B.js";import"./Tooltip-bF5Tbs8Y.js";import"./PopoverPopup-CMyzTC-L.js";import"./toNumber-BEehHCJx.js";import"./useOsdkClient-DQMaEH14.js";import"./tick-CEHYeeOo.js";import"./DropdownField-CUXNOqAA.js";import"./withOsdkMetrics-Rac-iTvD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
