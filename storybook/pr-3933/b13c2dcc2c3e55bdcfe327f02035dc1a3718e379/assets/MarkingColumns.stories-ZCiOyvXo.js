import{f as p,j as e}from"./iframe-DJmldxve.js";import{O as i}from"./object-table-Cdj1OBo_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CfPw7BaZ.js";import"./Table-DLbCkB-8.js";import"./index-DD-0dH-p.js";import"./Dialog-d2jWPSNx.js";import"./cross-DmQC9xrL.js";import"./svgIconContainer-P7eEWIUa.js";import"./useBaseUiId-B4pZBY6q.js";import"./InternalBackdrop-CBiQ-iZm.js";import"./composite-CSkjak5h.js";import"./index-lnBxI4J8.js";import"./index-BGy7kKJa.js";import"./index-DHzhHmTz.js";import"./useEventCallback-CBIwa4BF.js";import"./SkeletonBar-B9qAZ7dG.js";import"./LoadingCell-CXGAa_W2.js";import"./ColumnConfigDialog-nF8osFOq.js";import"./DraggableList-BDi3Xc8h.js";import"./search-BDoaiW25.js";import"./Input-DVHmkR4v.js";import"./useControlled-CkquFaFo.js";import"./Button-DseRSSUk.js";import"./small-cross-DLY7Hev3.js";import"./ActionButton-BpeAPNCc.js";import"./Checkbox-DsAo_Msx.js";import"./useValueChanged-D4YcGJ5P.js";import"./CollapsiblePanel-Bi0MtyT6.js";import"./MultiColumnSortDialog-BC3vwMSc.js";import"./MenuTrigger-BIZPL6dI.js";import"./CompositeItem-DHs6pqwB.js";import"./ToolbarRootContext-QKXaQ_-N.js";import"./getDisabledMountTransitionStyles-Dp3LgcOf.js";import"./getPseudoElementBounds-CZjHe1bQ.js";import"./chevron-down-FLohmcIo.js";import"./index-CNroXRNE.js";import"./error-7UB6xqMv.js";import"./BaseCbacBanner-BiJ6rg8v.js";import"./makeExternalStore-D_byBCsj.js";import"./Tooltip-BnjrHWIU.js";import"./PopoverPopup-BUpDQbiA.js";import"./debounce-B2j6j5iZ.js";import"./useOsdkClient-UObDw9yg.js";import"./tick-CGvAH9hc.js";import"./DropdownField-CfZbuNVk.js";import"./isEqual-CCtCZxsR.js";import"./withOsdkMetrics-ChD8F_9J.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
