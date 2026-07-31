import{f as p,j as e}from"./iframe-Cp41aqP7.js";import{O as i}from"./object-table-BcZ9MPkz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CKuEzbDa.js";import"./index-D0Tljy_b.js";import"./Dialog-iCGALKlw.js";import"./cross-Cbaea3iY.js";import"./svgIconContainer-DVVwszt5.js";import"./useBaseUiId-BVY_Ln8A.js";import"./InternalBackdrop-D515swvl.js";import"./composite-BsDaV1nn.js";import"./index-Dz9kJjLp.js";import"./index-BlcK1Y7H.js";import"./index-BdZhYyGK.js";import"./useEventCallback-DYvwbLkT.js";import"./SkeletonBar-Cv35Aff5.js";import"./LoadingCell-JLc5WJsI.js";import"./ColumnConfigDialog-DDXQ-bRC.js";import"./DraggableList-CUcMak9q.js";import"./search-DHgRsLWA.js";import"./Input-DOfJ9Smz.js";import"./useControlled-BMwYrgu0.js";import"./isEqual-9eKCG8lp.js";import"./isObject-PCeiLxkN.js";import"./Button-C-PrS_MA.js";import"./ActionButton-iDYjuM9T.js";import"./Checkbox-CQD_wAeN.js";import"./useValueChanged-DZwKs37h.js";import"./CollapsiblePanel-DaDqnvsn.js";import"./MultiColumnSortDialog-7r8ph8n9.js";import"./MenuTrigger-DTJFhZYP.js";import"./CompositeItem-DMNMCzbX.js";import"./ToolbarRootContext-glPgGB04.js";import"./getDisabledMountTransitionStyles-DL60Rntb.js";import"./getPseudoElementBounds-D5wcKlQ4.js";import"./chevron-down-BfKEa5Yk.js";import"./index-DfsF6fb0.js";import"./error-Do9MFOLD.js";import"./BaseCbacBanner-DMgWQPMh.js";import"./makeExternalStore-BUN0j2Qi.js";import"./Tooltip-hJT400YE.js";import"./PopoverPopup-DkUx5hSV.js";import"./toNumber-C9KlVl61.js";import"./useOsdkClient-DzbGNXpA.js";import"./tick-UqTH4Lh6.js";import"./DropdownField-D1Wn4cZN.js";import"./withOsdkMetrics-BeNDlcLW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
