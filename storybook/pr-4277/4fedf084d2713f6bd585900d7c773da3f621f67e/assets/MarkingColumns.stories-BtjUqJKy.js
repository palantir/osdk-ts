import{f as p,j as e}from"./iframe-DFu988a9.js";import{O as i}from"./object-table-bEsZnepU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ct8docw7.js";import"./Table-BrsdB9KA.js";import"./index-DtOhOCRY.js";import"./Dialog-tM8zvQcb.js";import"./cross-CTTF3yR9.js";import"./svgIconContainer-HyV1TJqY.js";import"./useBaseUiId-DfpfcE5B.js";import"./InternalBackdrop-DpxPfaGd.js";import"./composite-CqpVVzkR.js";import"./index-oZKnD5HE.js";import"./index-B1t2YxMt.js";import"./index-CkBJ6EJa.js";import"./useEventCallback-W1QvEMUe.js";import"./SkeletonBar-DjgWC4S2.js";import"./LoadingCell-ddXxCcm9.js";import"./ColumnConfigDialog-DIqFtw19.js";import"./DraggableList-DFuo8Shv.js";import"./search-IsQI8GuL.js";import"./Input-BESoTzvx.js";import"./useControlled-yPSACah0.js";import"./Button-6zqiKmKY.js";import"./small-cross-fz8OFb0W.js";import"./ActionButton-Dzobjq1d.js";import"./Checkbox-BD4Nf9SM.js";import"./useValueChanged-CYbng77M.js";import"./CollapsiblePanel-CpkVrlz9.js";import"./MultiColumnSortDialog-DE9pbNYw.js";import"./MenuTrigger-BpsMCIxo.js";import"./CompositeItem-DmVR8xyg.js";import"./ToolbarRootContext-C15MGeq9.js";import"./getDisabledMountTransitionStyles-C3yZ6yy9.js";import"./getPseudoElementBounds-BIueGgLb.js";import"./chevron-down-NXTIxDJ_.js";import"./index-Dsc2iZcF.js";import"./error-DqAZcTwE.js";import"./BaseCbacBanner-Bfv7AWzP.js";import"./makeExternalStore-D9C8VaXr.js";import"./Tooltip-BTqW7Tma.js";import"./PopoverPopup-CW_pGXjQ.js";import"./debounce-CabyEDng.js";import"./useOsdkClient-D2jZVLbn.js";import"./tick-BR3rer0s.js";import"./DropdownField-CF3gsiae.js";import"./isEqual-CF6RhxlN.js";import"./withOsdkMetrics-BYOAqz11.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
