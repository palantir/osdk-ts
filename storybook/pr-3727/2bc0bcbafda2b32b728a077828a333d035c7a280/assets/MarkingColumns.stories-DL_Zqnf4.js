import{f as p,j as e}from"./iframe-0rqtpzMT.js";import{O as i}from"./object-table-Cz3d6cZe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C-4TUSMQ.js";import"./Table-CPD5Qdu0.js";import"./index-BkI2yq5W.js";import"./Dialog-BIUze-o4.js";import"./cross-CJIAGxzU.js";import"./svgIconContainer-Cy8TuwcG.js";import"./useBaseUiId-BAMevgqu.js";import"./InternalBackdrop-D2IP-y2h.js";import"./composite-vErU7hi9.js";import"./index-BP9VSl-L.js";import"./index-BG27IzRI.js";import"./index-Ce1cZGPe.js";import"./useEventCallback-BioThUPP.js";import"./SkeletonBar-DAYQdUnn.js";import"./LoadingCell-SEVVEEnE.js";import"./ColumnConfigDialog-CmGZWqIs.js";import"./DraggableList-21ie_-fF.js";import"./search-DRt2tHKM.js";import"./Input-DbYHqXSd.js";import"./useControlled-Bj0iKUJ5.js";import"./isEqual-6k5RWrRD.js";import"./isObject-BojdEPtU.js";import"./Button-BWPtdaY9.js";import"./ActionButton-DtlPIL4m.js";import"./Checkbox-C8mdSx2i.js";import"./useValueChanged-DhKnwWoS.js";import"./CollapsiblePanel-DYhS8ISy.js";import"./MultiColumnSortDialog-BEli9Ysz.js";import"./MenuTrigger-DgXmgsNo.js";import"./CompositeItem-BEzpzojI.js";import"./ToolbarRootContext-C5RokYlI.js";import"./getDisabledMountTransitionStyles-Dk7Hgksp.js";import"./getPseudoElementBounds-z5gFyQuS.js";import"./chevron-down-BqYHuFRP.js";import"./index-2cq3jVVy.js";import"./error-cQ5-x4_F.js";import"./BaseCbacBanner-CfteBbCK.js";import"./makeExternalStore-olQJIU6f.js";import"./Tooltip-BjJLMpJP.js";import"./PopoverPopup-MHUJEvl_.js";import"./toNumber-pnfxMpiK.js";import"./useOsdkClient-CF7NBAgG.js";import"./tick-iyaG4Gbd.js";import"./DropdownField-BORP45DY.js";import"./withOsdkMetrics-B7-f_PGX.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
