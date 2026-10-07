import{f as p,j as e}from"./iframe-BMLtitQA.js";import{O as i}from"./object-table-y9i5UT5J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B7zvwNzg.js";import"./Table-DH-wZ72m.js";import"./index-BKoaBi8s.js";import"./Dialog-3laZpvVQ.js";import"./cross-B9AlOyDj.js";import"./svgIconContainer-DG_uvfKl.js";import"./useBaseUiId-Bv7ijZL9.js";import"./InternalBackdrop-CHrkdZLj.js";import"./composite-0pBAMAMm.js";import"./index-1wGhlHyg.js";import"./index-G040djXj.js";import"./index-AqEp1dK7.js";import"./useEventCallback-DBFZ4mZ7.js";import"./SkeletonBar-BrybbI32.js";import"./LoadingCell-C_9ZXwvH.js";import"./ColumnConfigDialog-nYNMKvUs.js";import"./DraggableList-BaEa-CAp.js";import"./search-CINj6xtb.js";import"./Input-D3mEoBXJ.js";import"./useControlled-BSRFoePA.js";import"./Button-eAAIImFA.js";import"./small-cross-Cu-xAWUl.js";import"./ActionButton-BE8P3Fn6.js";import"./Checkbox-BR1FtCPB.js";import"./useValueChanged-3DIww79j.js";import"./CollapsiblePanel-DJu6yMtL.js";import"./MultiColumnSortDialog-llKG8jOZ.js";import"./MenuTrigger-y3laeChq.js";import"./CompositeItem-FfLXXCMg.js";import"./ToolbarRootContext-C3i3QER6.js";import"./getDisabledMountTransitionStyles-CmHRQiW3.js";import"./getPseudoElementBounds-C6QupuvE.js";import"./chevron-down-BmGdKwgH.js";import"./index-Dq5rNNxI.js";import"./error-DwpvxQx3.js";import"./BaseCbacBanner--wPp9JQT.js";import"./makeExternalStore-6yj2j-8e.js";import"./Tooltip-Bk1044gE.js";import"./PopoverPopup-CFeC_ntr.js";import"./debounce-CQ_Rs17S.js";import"./useOsdkClient-DL7Kf8Sx.js";import"./tick-BiexrdJO.js";import"./DropdownField-Dinvefr-.js";import"./isEqual-B25MsUYt.js";import"./withOsdkMetrics-Bco6NPuI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
