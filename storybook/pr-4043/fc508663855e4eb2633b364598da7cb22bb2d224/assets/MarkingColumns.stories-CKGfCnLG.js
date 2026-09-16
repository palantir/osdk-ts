import{f as p,j as e}from"./iframe-DQjaRBUi.js";import{O as i}from"./object-table-HcfFLFjd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B51_55sC.js";import"./Table-DNn5HplO.js";import"./index-a9fHowso.js";import"./Dialog-x-ohr3Xi.js";import"./cross-CzaogkbO.js";import"./svgIconContainer-P1Q9eNRM.js";import"./useBaseUiId-CsxSSmlu.js";import"./InternalBackdrop-CGlx2QtJ.js";import"./composite-h2wwgXba.js";import"./index-4Rz5xHWo.js";import"./index-4wWSGius.js";import"./index-CmZITiK9.js";import"./useEventCallback-NOj49XSF.js";import"./SkeletonBar-kfcTeHsF.js";import"./LoadingCell-BFabjyGm.js";import"./ColumnConfigDialog-DbijqrEN.js";import"./DraggableList-L_mP90gV.js";import"./search-Dh1WJUP1.js";import"./Input-CsAKN6EM.js";import"./useControlled-BLfmFiCd.js";import"./Button-DgMUmpJg.js";import"./small-cross-CFXecDDy.js";import"./ActionButton-DKLUDny4.js";import"./Checkbox-B2EtQtdS.js";import"./useValueChanged-ldsEspGn.js";import"./CollapsiblePanel-COn6Cc5t.js";import"./MultiColumnSortDialog-XY4IVXW6.js";import"./MenuTrigger-8JBd0ZP1.js";import"./CompositeItem-CKeLa0nw.js";import"./ToolbarRootContext-N17gF4sL.js";import"./getDisabledMountTransitionStyles-D9FvhRU-.js";import"./getPseudoElementBounds-BxgEvMoC.js";import"./chevron-down-BCCVuGBy.js";import"./index-T90468VQ.js";import"./error-w3bPHlOX.js";import"./BaseCbacBanner-BBLPrZ9R.js";import"./makeExternalStore-B1bL49mU.js";import"./Tooltip-BfdSll4I.js";import"./PopoverPopup-DROtk8sN.js";import"./debounce-DQESqZVa.js";import"./useOsdkClient-muvg_G4O.js";import"./tick-DrIoKrNo.js";import"./DropdownField-CvsinZmL.js";import"./isEqual-Dw4zfL1A.js";import"./withOsdkMetrics-DnZQS4XI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
