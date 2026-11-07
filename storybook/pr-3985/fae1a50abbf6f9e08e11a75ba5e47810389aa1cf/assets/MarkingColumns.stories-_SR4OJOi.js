import{f as p,j as e}from"./iframe-DHBngpjq.js";import{O as i}from"./object-table-B-4Z36fW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CDXIiz1j.js";import"./Table-CAt6E8NK.js";import"./index-By-FRoq9.js";import"./Dialog-DTy86Hr1.js";import"./cross-DvvrZ3YV.js";import"./svgIconContainer-BAywG5PI.js";import"./useBaseUiId-CzQMC21v.js";import"./InternalBackdrop-B-hQyGJ7.js";import"./composite-uu2-UFVd.js";import"./index-CTfQVRtO.js";import"./index-DVFITc1l.js";import"./index-DyyHxHFI.js";import"./useEventCallback-CEjVJsJU.js";import"./SkeletonBar-Bx3kLW2f.js";import"./LoadingCell-F_Yvkiqb.js";import"./ColumnConfigDialog-BbX1YfOb.js";import"./DraggableList-CmuSJnA2.js";import"./search-CiPmNh0i.js";import"./Input-Br87LXH7.js";import"./useControlled-BLsTwB3H.js";import"./Button-HCu8xw6G.js";import"./small-cross-D3Sp72qo.js";import"./ActionButton-DvzRdD4b.js";import"./Checkbox-CtcVdKF4.js";import"./useValueChanged-DcmPguL4.js";import"./CollapsiblePanel-BFOnfV46.js";import"./MultiColumnSortDialog-DscDt943.js";import"./MenuTrigger-DFB9LyKR.js";import"./CompositeItem-CbJoHss2.js";import"./ToolbarRootContext-B_eHvjGz.js";import"./getDisabledMountTransitionStyles-BaYxFf8Q.js";import"./getPseudoElementBounds-Cbeakq3j.js";import"./chevron-down-D5Z6pf30.js";import"./index-BTrtZCFe.js";import"./error-CH1gecQ4.js";import"./BaseCbacBanner-Dx1BBmkJ.js";import"./makeExternalStore-CSHIV8LM.js";import"./Tooltip-Cb5l8A2K.js";import"./isObject-BGFfVhib.js";import"./debounce-1_s8xuqw.js";import"./useOsdkClient-BEYvK_M3.js";import"./tick-pBtnCrq_.js";import"./DropdownField-DyD41Pi-.js";import"./isEqual-COgumFBZ.js";import"./_baseIsEqual-t-rM1bL4.js";import"./withOsdkMetrics-DVTP8TQr.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
