import{f as p,j as e}from"./iframe-GWtObrnm.js";import{O as i}from"./object-table--6l4vffZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BWY60TXQ.js";import"./Table-BQ1zpx0E.js";import"./index-BwNH4hN0.js";import"./Dialog-CI0TQ-8F.js";import"./cross-_OeeVUkl.js";import"./svgIconContainer-C5I--NmN.js";import"./useBaseUiId-B5mFb3Gq.js";import"./InternalBackdrop-BqoliDVa.js";import"./composite-BX2E-JQE.js";import"./index-7rbFwBSi.js";import"./index-srDgigbb.js";import"./index-C9ELI341.js";import"./useEventCallback-DvN5zfj5.js";import"./SkeletonBar-Cqq0MjJu.js";import"./LoadingCell-DMnrFECH.js";import"./ColumnConfigDialog-lED6sxnh.js";import"./DraggableList-Bkow3cL7.js";import"./search-DFtnP2n3.js";import"./Input-DbTcmmlC.js";import"./useControlled-Db3BVUkn.js";import"./Button-D7JIFKo-.js";import"./small-cross-FyI5Yi6m.js";import"./ActionButton-D7UP0pVF.js";import"./Checkbox-Dd_lHm_2.js";import"./useValueChanged-DgPToUuL.js";import"./CollapsiblePanel-D9mWGcC-.js";import"./MultiColumnSortDialog-JawDtGLn.js";import"./MenuTrigger-BP8DmnEO.js";import"./CompositeItem-BEBiorcp.js";import"./ToolbarRootContext-BQ6mFAZw.js";import"./getDisabledMountTransitionStyles-CNOyEiwp.js";import"./getPseudoElementBounds-CgZ6AS5C.js";import"./chevron-down-RsutKJrE.js";import"./index-CTogg8xs.js";import"./error-DkSINVNd.js";import"./BaseCbacBanner-CCMLdPZ7.js";import"./makeExternalStore-DZ29l_q8.js";import"./Tooltip-CIXs1ydu.js";import"./PopoverPopup-CovUEKXy.js";import"./debounce-BWOeh154.js";import"./useOsdkClient-B2mvuLv0.js";import"./tick-DttPsE9p.js";import"./DropdownField-BqSWZGsk.js";import"./isEqual-DI_6kQdr.js";import"./withOsdkMetrics-BdpD7DOf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
