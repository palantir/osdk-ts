import{f as p,j as e}from"./iframe-Bb3tjC3V.js";import{O as i}from"./object-table-CJS97cBl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CYmQZjB9.js";import"./Table-CSQg68Ow.js";import"./index-BPbQvyfn.js";import"./Dialog-JuKH8eUw.js";import"./cross-CHnMcV43.js";import"./svgIconContainer-Y0lQigj_.js";import"./useBaseUiId-D29cBnlE.js";import"./InternalBackdrop-BUjERfDm.js";import"./composite-C3Rlyybz.js";import"./index-B05qlECy.js";import"./index-BZq7S8i7.js";import"./index-CBbmq_RV.js";import"./useEventCallback-BhnPPuQI.js";import"./SkeletonBar-DLek027G.js";import"./LoadingCell-ZyoIUTH5.js";import"./ColumnConfigDialog-Dv5at7Or.js";import"./DraggableList-BRya9Y_J.js";import"./search-BU45UnDR.js";import"./Input-CpaS_vj-.js";import"./useControlled-CvjI6YFT.js";import"./isEqual-BYbIO0uS.js";import"./isObject-B2IdTXHz.js";import"./Button-nm2pYev7.js";import"./ActionButton-CskzZh5T.js";import"./Checkbox-Dfh8P7YA.js";import"./useValueChanged-CBoYu7DV.js";import"./CollapsiblePanel-IrvBouZy.js";import"./MultiColumnSortDialog-CIoKkXcc.js";import"./MenuTrigger-EHfkiS7C.js";import"./CompositeItem-DvrPK8M7.js";import"./ToolbarRootContext-CDj27CZR.js";import"./getDisabledMountTransitionStyles-CP1Ghi6w.js";import"./getPseudoElementBounds-CjInRXP7.js";import"./chevron-down-DFJ_DLyR.js";import"./index-2qiAvfo5.js";import"./error-Bc8MML6_.js";import"./BaseCbacBanner-BDf2Hlk6.js";import"./makeExternalStore-wfcM5ZfN.js";import"./Tooltip-BanDnfXI.js";import"./PopoverPopup-BZFW-8FX.js";import"./toNumber-vaQeWmta.js";import"./useOsdkClient-nw5v--UU.js";import"./tick-iU3CP0gB.js";import"./DropdownField-AJyY6Cnq.js";import"./withOsdkMetrics-gOeagBA8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
