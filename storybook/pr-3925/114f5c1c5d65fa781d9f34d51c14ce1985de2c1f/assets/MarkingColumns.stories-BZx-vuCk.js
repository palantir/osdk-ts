import{f as p,j as e}from"./iframe-CuEjl7Uz.js";import{O as i}from"./object-table-BITZzvFk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bnv-TItm.js";import"./Table-CsgrbezX.js";import"./index-BYfl2w_f.js";import"./Dialog-KrYLboQj.js";import"./cross-CXL6d4Nc.js";import"./svgIconContainer-Dd92hyPw.js";import"./useBaseUiId-CvRriR4c.js";import"./InternalBackdrop-DcE5eYzx.js";import"./composite-kFUoCHQq.js";import"./index-Bx0fAKss.js";import"./index-CS1Bngb_.js";import"./index-B3zdRm73.js";import"./useEventCallback-C-EIfkX3.js";import"./SkeletonBar-B2aVF1IS.js";import"./LoadingCell-lVLricku.js";import"./ColumnConfigDialog-B9syA1Pp.js";import"./DraggableList-DR6kSV0E.js";import"./search-3wsQQ4iP.js";import"./Input-ZdxPnrAH.js";import"./useControlled-DBpnwX6L.js";import"./Button-DPfa27EA.js";import"./small-cross-DCrST3c9.js";import"./ActionButton-1-u7iqO6.js";import"./Checkbox-CUFcZVaU.js";import"./useValueChanged-BFSxxbsm.js";import"./CollapsiblePanel-at5Dj9bi.js";import"./MultiColumnSortDialog-BBjEkITd.js";import"./MenuTrigger-B3ks3gjl.js";import"./CompositeItem-BhUbIVeo.js";import"./ToolbarRootContext-BwI8s8FH.js";import"./getDisabledMountTransitionStyles-DoMAwNBT.js";import"./getPseudoElementBounds-DdEyzNDy.js";import"./chevron-down-CP7RGjpz.js";import"./index-DxunnI8U.js";import"./error-NZ5oWKud.js";import"./BaseCbacBanner-TiPMEh07.js";import"./makeExternalStore-oyLiubSi.js";import"./Tooltip-BPjWBB-n.js";import"./PopoverPopup-BpweqeTi.js";import"./debounce-CqTUPdUu.js";import"./useOsdkClient-BeVXJa4E.js";import"./tick-BgOklV5K.js";import"./DropdownField-BIOMSijU.js";import"./isEqual-CLN111pk.js";import"./withOsdkMetrics-B8uWkY4g.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
