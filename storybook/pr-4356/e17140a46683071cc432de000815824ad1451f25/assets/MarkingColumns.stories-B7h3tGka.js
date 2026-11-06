import{f as p,j as e}from"./iframe-wBrbDET_.js";import{O as i}from"./object-table-l-msv8K7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DyV1jABv.js";import"./Table-CKmvMShT.js";import"./index-Ncx2k3s4.js";import"./Dialog-AssY6Vhe.js";import"./cross-Df39fOvA.js";import"./svgIconContainer-Ct8cN05_.js";import"./useBaseUiId-eK3I3qsA.js";import"./InternalBackdrop-DejoUS48.js";import"./composite-SIfyViZe.js";import"./index-CHgCkFBn.js";import"./index-CmelBQvM.js";import"./index-D0qJZt22.js";import"./useEventCallback-CqTheTWA.js";import"./SkeletonBar-DyKvxgvp.js";import"./LoadingCell-Astirh1i.js";import"./ColumnConfigDialog-CmwFbY1V.js";import"./DraggableList-DQXh0Mtt.js";import"./search-CoFWb8gE.js";import"./Input-DFbvIuq-.js";import"./useControlled-2_Rn_F3e.js";import"./Button-DtJK54aF.js";import"./small-cross-Dckp6UXX.js";import"./ActionButton-DFvb9baL.js";import"./Checkbox-DSytaUdj.js";import"./useValueChanged-FeK06T4Y.js";import"./CollapsiblePanel-C3k19iJ9.js";import"./MultiColumnSortDialog-DcXb52ih.js";import"./MenuTrigger-D1Zl5Oyi.js";import"./CompositeItem-BNWpWAX_.js";import"./ToolbarRootContext-BxvlpQpy.js";import"./getDisabledMountTransitionStyles-tFuKCJy7.js";import"./getPseudoElementBounds-DXS1RVbT.js";import"./chevron-down-Dz6vupYI.js";import"./index-_TwhdO3w.js";import"./error-lMxpxIBb.js";import"./BaseCbacBanner-DAoL7TRO.js";import"./makeExternalStore-gYwFGl5I.js";import"./Tooltip-sYOln3gS.js";import"./PopoverPopup-B9ZQX_rh.js";import"./debounce-WlMj0UwE.js";import"./useOsdkClient-b3KRZKG8.js";import"./tick-DBtGJBOW.js";import"./DropdownField-zauvOy2L.js";import"./isEqual-DHHl8BCh.js";import"./withOsdkMetrics-mhV8EPst.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
