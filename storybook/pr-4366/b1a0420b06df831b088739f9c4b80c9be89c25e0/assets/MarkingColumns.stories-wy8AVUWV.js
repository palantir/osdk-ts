import{f as p,j as e}from"./iframe-CNCsodpO.js";import{O as i}from"./object-table-XuAfOsME.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BcSdXRr8.js";import"./Table-Bwb-19Mt.js";import"./index-DZaiIimE.js";import"./Dialog-D6UwLMk_.js";import"./cross-ByI78NKq.js";import"./svgIconContainer-D0BYcghd.js";import"./useBaseUiId-BM8If8HJ.js";import"./InternalBackdrop-DpvX0-2J.js";import"./composite-D-lHYX2y.js";import"./index-JERw882y.js";import"./index-BiV4_PIL.js";import"./index-DnBAC0DA.js";import"./useEventCallback-BC6LGbHR.js";import"./SkeletonBar-CtqMhpLq.js";import"./LoadingCell-USQtKWyS.js";import"./ColumnConfigDialog-Cfc9mSRc.js";import"./DraggableList-e3jVF2rK.js";import"./search-BLGSqUK3.js";import"./Input-DEq1aCXP.js";import"./useControlled-jyzXrKzG.js";import"./Button-DdjGWYgj.js";import"./small-cross-bytaAr9i.js";import"./ActionButton-DJLD6pzf.js";import"./Checkbox-DS6veKru.js";import"./useValueChanged-B79ahhhf.js";import"./CollapsiblePanel-Bey-NPEU.js";import"./MultiColumnSortDialog-B0nX3_Xv.js";import"./MenuTrigger-CSit46lD.js";import"./CompositeItem-CznsiIYk.js";import"./ToolbarRootContext-D2snF5qH.js";import"./getDisabledMountTransitionStyles-CZyt8PVf.js";import"./getPseudoElementBounds-CBt4F6dS.js";import"./chevron-down-QtQgwZHW.js";import"./index-ikLawp9H.js";import"./error-vSyclIj9.js";import"./BaseCbacBanner-CSV7xl3u.js";import"./makeExternalStore-MQ-cLLpt.js";import"./Tooltip-A2wRUbEy.js";import"./isObject-BeJ3unj3.js";import"./debounce-BN80GkFI.js";import"./useOsdkClient-D5sei-fs.js";import"./tick-B29x5y3C.js";import"./DropdownField-ChmGLrin.js";import"./isEqual-CCg3GprE.js";import"./_baseIsEqual-h7eCMjyK.js";import"./withOsdkMetrics-DJIl7LC3.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
