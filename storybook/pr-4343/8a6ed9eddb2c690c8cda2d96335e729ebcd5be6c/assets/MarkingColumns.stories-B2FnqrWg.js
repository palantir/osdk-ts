import{f as p,j as e}from"./iframe-PwAIVm5u.js";import{O as i}from"./object-table-DY849b9y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQv3h1eP.js";import"./Table-DNejCOAN.js";import"./index-Ca_oKjEa.js";import"./Dialog-CeDh1vNg.js";import"./cross-GcEEbHxC.js";import"./svgIconContainer-HsDGQ90M.js";import"./useBaseUiId-BhpsHhZ2.js";import"./InternalBackdrop-CYy1iHZN.js";import"./composite-fUnz6yuB.js";import"./index-RdMLhv4M.js";import"./index-BihfBpP7.js";import"./index-Bviik-9F.js";import"./useEventCallback-Dm32TZ3_.js";import"./SkeletonBar-DN3kNMYz.js";import"./LoadingCell-3Qe48Snu.js";import"./ColumnConfigDialog-DKKYAnhw.js";import"./DraggableList-CRuyA61G.js";import"./search-Nx9kE-Q8.js";import"./Input-CPGzuvOj.js";import"./useControlled-_4ugvpeb.js";import"./Button-VHGYpAX6.js";import"./small-cross-B14kqehl.js";import"./ActionButton-CWjydIzu.js";import"./Checkbox-CQ2TGsAv.js";import"./useValueChanged-CkHl3qLX.js";import"./CollapsiblePanel-C0dv2KPd.js";import"./MultiColumnSortDialog-DIgP8_n1.js";import"./MenuTrigger-B-Ppd0wN.js";import"./CompositeItem-DPCNdhZq.js";import"./ToolbarRootContext-BB_k_Kqj.js";import"./getDisabledMountTransitionStyles-BRie3ZsF.js";import"./getPseudoElementBounds-bZ1W59vq.js";import"./chevron-down-BA5gqzEX.js";import"./index-hThCMCFD.js";import"./error-DMntN0M5.js";import"./BaseCbacBanner-D1NRoB1o.js";import"./makeExternalStore-CqOzjQXJ.js";import"./Tooltip-tjFL-LBL.js";import"./PopoverPopup-sM0UeHOu.js";import"./debounce-C27HzrcV.js";import"./useOsdkClient-PEgelIDi.js";import"./tick-DC7CcLKp.js";import"./DropdownField-C6vsf0E7.js";import"./isEqual-BQTmfRt9.js";import"./withOsdkMetrics-38iXVMUT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
