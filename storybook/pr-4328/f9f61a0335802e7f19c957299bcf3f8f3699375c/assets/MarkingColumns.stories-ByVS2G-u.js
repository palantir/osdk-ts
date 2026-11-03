import{f as p,j as e}from"./iframe-BWanzCtz.js";import{O as i}from"./object-table-CwNOXM7e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DAi-P9Ju.js";import"./Table-BV5-Gg4n.js";import"./index-Cay7iVqb.js";import"./Dialog-BLyGAnT7.js";import"./cross-BVvC7Zca.js";import"./svgIconContainer-DSaD-I6F.js";import"./useBaseUiId-C5dN58Q0.js";import"./InternalBackdrop-TV8p7nHD.js";import"./composite-BafjzlJM.js";import"./index-ChQ5JBSj.js";import"./index-Dt-Mk7jk.js";import"./index-D9z2WP2p.js";import"./useEventCallback-BWB9gGvg.js";import"./SkeletonBar-CYNtPgHh.js";import"./LoadingCell-CuqD0XAT.js";import"./ColumnConfigDialog-DzAHMAUr.js";import"./DraggableList-D1yn9G39.js";import"./search-DRygowk4.js";import"./Input-Bt15IjV-.js";import"./useControlled-OnnNsrqI.js";import"./Button-BAzXvXXK.js";import"./small-cross-CVFLscZG.js";import"./ActionButton-BVuwYTIs.js";import"./Checkbox-ZZCzmUtb.js";import"./useValueChanged-KxYyG3ZS.js";import"./CollapsiblePanel-BgKRL3mk.js";import"./MultiColumnSortDialog-5nGqdLgE.js";import"./MenuTrigger-SRJmVwA-.js";import"./CompositeItem-BcxNHfQK.js";import"./ToolbarRootContext-De0bccAd.js";import"./getDisabledMountTransitionStyles-CvKZ4Y_-.js";import"./getPseudoElementBounds-O3K5JmaN.js";import"./chevron-down-BeOHwgJN.js";import"./index-CqrxIVAp.js";import"./error-CdqtE7bq.js";import"./BaseCbacBanner-B4VASqii.js";import"./makeExternalStore-_zqsQAA7.js";import"./Tooltip-DLH2JBkg.js";import"./PopoverPopup-DgQdAKzP.js";import"./debounce-ChP0u6Gi.js";import"./useOsdkClient-CY0unRSX.js";import"./tick-BXFsjeh2.js";import"./DropdownField-ScfJ-83O.js";import"./isEqual-Dz8uBPxJ.js";import"./withOsdkMetrics-d8l__l47.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
