import{f as p,j as e}from"./iframe-DFabC9bf.js";import{O as i}from"./object-table-CkSvgxZD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BLxMvu58.js";import"./Table-CnA6SAP4.js";import"./index-DgsFchdG.js";import"./Dialog-BJo6rT1Y.js";import"./cross-ey58JM4H.js";import"./svgIconContainer-CsYtoZH2.js";import"./useBaseUiId-Dxr7oR41.js";import"./InternalBackdrop-C20tnZkX.js";import"./composite-BoRXQVH0.js";import"./index-BHWOd5Tr.js";import"./index-Gxd2oAE6.js";import"./index-B8dgdXG5.js";import"./useEventCallback-Dxsnooid.js";import"./SkeletonBar-DB5TmKcA.js";import"./LoadingCell-DbPuyCqH.js";import"./ColumnConfigDialog-DqfQDf7k.js";import"./DraggableList-BYFQzYt6.js";import"./search-B_WKOos_.js";import"./Input-BZyaCDxG.js";import"./useControlled-B3kUZkdE.js";import"./Button-DIvAKpTN.js";import"./small-cross-C4IRJysc.js";import"./ActionButton-BjOTOAby.js";import"./Checkbox-BY0YL0BC.js";import"./useValueChanged-BLFxNhsm.js";import"./CollapsiblePanel-bxzaQZkR.js";import"./MultiColumnSortDialog-CuxM7pOK.js";import"./MenuTrigger-B-Ap0mFZ.js";import"./CompositeItem-DUW332tM.js";import"./ToolbarRootContext-2AVlTjyA.js";import"./getDisabledMountTransitionStyles-BTShP6Yf.js";import"./getPseudoElementBounds-DqdMi3cO.js";import"./chevron-down-jy1hrUFA.js";import"./index-aUHzwEmK.js";import"./error-f3c_sZgu.js";import"./BaseCbacBanner-BcalAL_E.js";import"./makeExternalStore-D6-6uuSf.js";import"./Tooltip-De3r9uzL.js";import"./PopoverPopup-Dpc77gDV.js";import"./debounce-kIdrhBMS.js";import"./useOsdkClient-qt8uEQ5r.js";import"./tick-DRNk9pjM.js";import"./DropdownField-BmWQkglP.js";import"./isEqual-sHm5R8fg.js";import"./withOsdkMetrics-BCss4ydh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
