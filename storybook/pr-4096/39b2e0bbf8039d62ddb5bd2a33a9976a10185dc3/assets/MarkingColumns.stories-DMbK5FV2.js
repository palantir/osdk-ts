import{f as p,j as e}from"./iframe-UMA_W4zg.js";import{O as i}from"./object-table-BKKDI_ri.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DaWmOC6j.js";import"./Table-BGvWPyfA.js";import"./index-DErLZjti.js";import"./Dialog-BQYk3Xuz.js";import"./cross-uHksr5pp.js";import"./svgIconContainer-9DAz-xsT.js";import"./useBaseUiId-DrNqzCDV.js";import"./InternalBackdrop-Cv-jCIPc.js";import"./composite-cvyf7rpJ.js";import"./index-Dh7ukoT2.js";import"./index-CEcWMbm3.js";import"./index-B3bK0vsc.js";import"./useEventCallback-BylinRJz.js";import"./SkeletonBar-C7upQ1oN.js";import"./LoadingCell-C5zsmtCI.js";import"./ColumnConfigDialog-CkgLU6qt.js";import"./DraggableList-Bpq0lEEU.js";import"./search-DDqiAHNJ.js";import"./Input-B7UvCAbi.js";import"./useControlled-CE_jt1bn.js";import"./Button-CX0KG7k8.js";import"./small-cross-CzUurzMY.js";import"./ActionButton-B7RzNoqN.js";import"./Checkbox-Aalf-Nva.js";import"./useValueChanged-BNApxWdw.js";import"./CollapsiblePanel-CrqQkYc4.js";import"./MultiColumnSortDialog-TIdtig3-.js";import"./MenuTrigger-Ct962EWD.js";import"./CompositeItem-CW8dWwRY.js";import"./ToolbarRootContext-BoABXtXA.js";import"./getDisabledMountTransitionStyles-BxLbi0RQ.js";import"./getPseudoElementBounds-DNHUImXR.js";import"./chevron-down-Bl-z4KIc.js";import"./index-CpBKtjMD.js";import"./error-CSAcfTyc.js";import"./BaseCbacBanner-CMohmlg6.js";import"./makeExternalStore-Cw5EimAG.js";import"./Tooltip-CRExDwDA.js";import"./PopoverPopup-9-F50C0V.js";import"./debounce-DbOnd40f.js";import"./useOsdkClient-DJyPXQs4.js";import"./tick-0wfK4xfn.js";import"./DropdownField-CPG2IfxA.js";import"./isEqual-D8Go71qV.js";import"./withOsdkMetrics-SDJh6Z2p.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
