import{f as p,j as e}from"./iframe-CNvI9eAL.js";import{O as i}from"./object-table-DE0aQxGd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRF54Ery.js";import"./Table-DQba8Id3.js";import"./index-BTFSWIKz.js";import"./Dialog-Cm29-LjC.js";import"./cross--RfUm2YZ.js";import"./svgIconContainer-BBVMgJTA.js";import"./useBaseUiId-CxeAu3mm.js";import"./InternalBackdrop-CHq0uWTI.js";import"./composite-Db3opbub.js";import"./index-V8dSKZeO.js";import"./index-Cvipkoc1.js";import"./index-Deml3Efy.js";import"./useEventCallback-BzDn9UNO.js";import"./SkeletonBar-T6--w0gO.js";import"./LoadingCell-DKTXROx6.js";import"./ColumnConfigDialog-d6w508Un.js";import"./DraggableList-DP6Q3e48.js";import"./search-BesbbJYF.js";import"./Input-CfSk64xN.js";import"./useControlled-pDp_EzUa.js";import"./Button-CfqXNV8N.js";import"./small-cross-BE9CMIjD.js";import"./ActionButton-BBpJXm_V.js";import"./Checkbox-B5V9DxWA.js";import"./useValueChanged-CrRD_2mc.js";import"./CollapsiblePanel-BLod_JW_.js";import"./MultiColumnSortDialog-DIQiqAb7.js";import"./MenuTrigger-DqqaQGBf.js";import"./CompositeItem-aRd3tSux.js";import"./ToolbarRootContext-CTMDQSca.js";import"./getDisabledMountTransitionStyles-4DN3r7zh.js";import"./getPseudoElementBounds-D2n5rcQy.js";import"./chevron-down-DEvcNxOi.js";import"./index-BHMz7Anj.js";import"./error-CG9g-M1f.js";import"./BaseCbacBanner-VkrDpRp7.js";import"./makeExternalStore-DrmCh3vo.js";import"./Tooltip-BBjnREMn.js";import"./PopoverPopup-DGeh8xC_.js";import"./debounce-CkKjOcL_.js";import"./useOsdkClient-C0wuY3lu.js";import"./tick-CpXHS_dg.js";import"./DropdownField-CYdvpVt_.js";import"./isEqual-BGKnxyMw.js";import"./withOsdkMetrics-D4xumH8Q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
