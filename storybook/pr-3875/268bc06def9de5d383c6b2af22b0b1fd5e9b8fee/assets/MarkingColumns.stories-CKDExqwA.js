import{f as p,j as e}from"./iframe-5bssl6VS.js";import{O as i}from"./object-table-BbXBLAoq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHXvjcwa.js";import"./Table-DuplKoEt.js";import"./index-B13HoCGw.js";import"./Dialog-Dagr4xYg.js";import"./cross-DxgHVtzX.js";import"./svgIconContainer-DrtwtWvp.js";import"./useBaseUiId-Dh4eINWl.js";import"./InternalBackdrop-gF6cp71q.js";import"./composite-Btg8TS6e.js";import"./index-BOy4EylD.js";import"./index-nZ8SppMu.js";import"./index-D6UnHnWh.js";import"./useEventCallback-D8RU-Nt1.js";import"./SkeletonBar-jq5pbuMG.js";import"./LoadingCell-BT9Hgziu.js";import"./ColumnConfigDialog-1HCkOSYn.js";import"./DraggableList-DOc9gEAb.js";import"./search-VkpzhyZf.js";import"./Input-Cn-NeA9g.js";import"./useControlled-DiYZsjSM.js";import"./Button-DlzEigHK.js";import"./small-cross-BP7K_1-R.js";import"./ActionButton-WlOudVkr.js";import"./Checkbox-c1OEAWMk.js";import"./useValueChanged-DhkyBG2M.js";import"./CollapsiblePanel-D0mcSh8k.js";import"./MultiColumnSortDialog-EOtasI8f.js";import"./MenuTrigger-B0zTqH6h.js";import"./CompositeItem-BARyggcS.js";import"./ToolbarRootContext-BS1iuPdd.js";import"./getDisabledMountTransitionStyles-BMdgnVVy.js";import"./getPseudoElementBounds-DhRDGSxS.js";import"./chevron-down-CFvJBTG-.js";import"./index-BLEwjvAg.js";import"./error-BGrVIj_t.js";import"./BaseCbacBanner-BnA-PWSg.js";import"./makeExternalStore-BheM4fhK.js";import"./Tooltip-8Z9hfeDS.js";import"./PopoverPopup-BeZaAXer.js";import"./debounce-BgFOafJA.js";import"./useOsdkClient-BTz6SXdT.js";import"./tick-CQ8SUApn.js";import"./DropdownField-BbRynaXk.js";import"./isEqual-leOPEBrs.js";import"./withOsdkMetrics-CZkoO3-I.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
