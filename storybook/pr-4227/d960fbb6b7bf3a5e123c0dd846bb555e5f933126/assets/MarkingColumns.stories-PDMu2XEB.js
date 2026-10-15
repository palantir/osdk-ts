import{f as p,j as e}from"./iframe-C8jWyiQL.js";import{O as i}from"./object-table-BlbetHme.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D3hrqtKI.js";import"./Table-B34kvLEc.js";import"./index-Ck3WMYCS.js";import"./Dialog-CSPx5HhV.js";import"./cross-Dl8HY39B.js";import"./svgIconContainer-Cl0UVpcd.js";import"./useBaseUiId-C0Hhh4zZ.js";import"./InternalBackdrop-CiK-2PLb.js";import"./composite-VSkp61oJ.js";import"./index-Ch17Lfr0.js";import"./index-p54yret9.js";import"./index-Cd22zSOl.js";import"./useEventCallback-C0LDLFCe.js";import"./SkeletonBar-Bfqg6xhZ.js";import"./LoadingCell-BcraXBGS.js";import"./ColumnConfigDialog-CweTTfeO.js";import"./DraggableList-D8_gI2zQ.js";import"./search-D-ei7hDs.js";import"./Input-BJZD4UWc.js";import"./useControlled-HdEPNqxD.js";import"./Button-3m2yzrh1.js";import"./small-cross-BwCr6L7P.js";import"./ActionButton-9g7J3G0y.js";import"./Checkbox-DIBfRvqq.js";import"./useValueChanged-CoaMZ36h.js";import"./CollapsiblePanel-CwpNijKr.js";import"./MultiColumnSortDialog-XgTPDgaq.js";import"./MenuTrigger-B6oNWJYv.js";import"./CompositeItem-DPPPi3Ly.js";import"./ToolbarRootContext-CKRR356X.js";import"./getDisabledMountTransitionStyles-Rw7QHMBY.js";import"./getPseudoElementBounds-B_4Hsk7I.js";import"./chevron-down-DWvQrpRH.js";import"./index-B-MOYaQO.js";import"./error-DFAsAkKT.js";import"./BaseCbacBanner-g2klUgTP.js";import"./makeExternalStore-CTfzdsJg.js";import"./Tooltip-CYCmH68_.js";import"./PopoverPopup-BswZff0D.js";import"./debounce-C49teRpi.js";import"./useOsdkClient-GeBqIj0g.js";import"./tick-TxqdkZbh.js";import"./DropdownField-a018rFqR.js";import"./isEqual-CyNlFjjd.js";import"./withOsdkMetrics-DXVkLmYC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
