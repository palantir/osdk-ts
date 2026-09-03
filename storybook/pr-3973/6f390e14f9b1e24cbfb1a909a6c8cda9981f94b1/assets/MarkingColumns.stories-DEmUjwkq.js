import{f as p,j as e}from"./iframe-Cxs4teez.js";import{O as i}from"./object-table-BfyAEuWs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bd6Vgg8g.js";import"./Table-B1mo_osj.js";import"./index-C3kmvWsS.js";import"./Dialog-C87BIpGH.js";import"./cross-D5j5wcq7.js";import"./svgIconContainer-JiM41EbN.js";import"./useBaseUiId-DWXmNFpC.js";import"./InternalBackdrop-DP9WD5Fk.js";import"./composite-b3NzNsDh.js";import"./index-C7HiqnbK.js";import"./index-WVEl5G15.js";import"./index-B-Om34Y_.js";import"./useEventCallback-CAv6RzeS.js";import"./SkeletonBar-Bleds7Vl.js";import"./LoadingCell-Btu8ADTl.js";import"./ColumnConfigDialog-n3tDAug6.js";import"./DraggableList-C_GhJA9q.js";import"./search-BrqbiSOv.js";import"./Input-BYExG4yH.js";import"./useControlled-Dc-gXlj3.js";import"./Button-B-HuJTwa.js";import"./small-cross-TqcPNZ3o.js";import"./ActionButton-dCm50BWS.js";import"./Checkbox-ByH-RI4p.js";import"./useValueChanged-D29qGbgw.js";import"./CollapsiblePanel-C0e4ATLG.js";import"./MultiColumnSortDialog-DMGRj25k.js";import"./MenuTrigger-Dua7Pz0U.js";import"./CompositeItem-4Ik-gd3d.js";import"./ToolbarRootContext-BD8ceMmu.js";import"./getDisabledMountTransitionStyles-iLI7eNCy.js";import"./getPseudoElementBounds-DE7atGjs.js";import"./chevron-down-DR1MLtBA.js";import"./index-CTzs5x76.js";import"./error-CSDPFrAs.js";import"./BaseCbacBanner-BImE2vA-.js";import"./makeExternalStore-Db6eeeft.js";import"./Tooltip-And-vmyU.js";import"./PopoverPopup-DEvs5olF.js";import"./debounce-BZ5yTYau.js";import"./useOsdkClient-Ba7AvsVH.js";import"./tick-C3Mfhxb_.js";import"./DropdownField-BQN_NaVg.js";import"./isEqual-C_HXGO6S.js";import"./withOsdkMetrics-BMMQ7JDA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
