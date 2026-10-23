import{f as p,j as e}from"./iframe-D07nCh-w.js";import{O as i}from"./object-table-BsFPf6cF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CmcD2_D_.js";import"./Table-BUkXhyz1.js";import"./index-BuDZJHpF.js";import"./Dialog-BqExHdSf.js";import"./cross-CTO9sPn-.js";import"./svgIconContainer-PtRD7k8A.js";import"./useBaseUiId-psA3q1id.js";import"./InternalBackdrop-CoeQ5ndg.js";import"./composite-C9jYcXJr.js";import"./index-BIjdr9-z.js";import"./index-BrNSxG5V.js";import"./index-CeN_u9Sa.js";import"./useEventCallback-BpGNXSJx.js";import"./SkeletonBar-Dpb84ZTI.js";import"./LoadingCell-BIwNmKsO.js";import"./ColumnConfigDialog-CBgEanuv.js";import"./DraggableList-CwS18mwK.js";import"./search-CytW_RDV.js";import"./Input-98CZZbi3.js";import"./useControlled-CXqQNY_F.js";import"./Button-DEuGu2m_.js";import"./small-cross--WdO_ezs.js";import"./ActionButton-BtMU_wua.js";import"./Checkbox-C-8bjav5.js";import"./useValueChanged-C_Y8WMPp.js";import"./CollapsiblePanel-C4kSjDma.js";import"./MultiColumnSortDialog-Tfzuj_KT.js";import"./MenuTrigger-f1OBuoEa.js";import"./CompositeItem-Br0cx3Iq.js";import"./ToolbarRootContext-DqdX595l.js";import"./getDisabledMountTransitionStyles-B1bj1ZX9.js";import"./getPseudoElementBounds-BBf48KpN.js";import"./chevron-down-dIbn2_mD.js";import"./index-a0NtOl0y.js";import"./error-ByDyMI-d.js";import"./BaseCbacBanner-Bvqf0NRj.js";import"./makeExternalStore-D0hTV5Nv.js";import"./Tooltip-CtckguA7.js";import"./PopoverPopup-De9oms5K.js";import"./debounce-CLiKICQw.js";import"./useOsdkClient-Bz66Th9p.js";import"./tick-C06-S_iw.js";import"./DropdownField-DWMnKMar.js";import"./isEqual-BvIrIFjk.js";import"./withOsdkMetrics-BiT0eK7g.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
