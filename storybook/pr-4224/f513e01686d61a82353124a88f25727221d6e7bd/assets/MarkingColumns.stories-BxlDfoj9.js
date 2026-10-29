import{f as p,j as e}from"./iframe-niEbczVm.js";import{O as i}from"./object-table-BZaEWIQh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CUjUb6yR.js";import"./Table-L3UWLg70.js";import"./index-BEFpPyEu.js";import"./Dialog-BidNBHDm.js";import"./cross-Bcr8pGuL.js";import"./svgIconContainer-9VsGkNZz.js";import"./useBaseUiId-CH7YIJgS.js";import"./InternalBackdrop-v7weAe9K.js";import"./composite-DGaJRBaQ.js";import"./index-BbiwM5Qu.js";import"./index-elRiCFtu.js";import"./index-BqQiJ2_G.js";import"./useEventCallback-BgYsgH1g.js";import"./SkeletonBar-CkUb_6G3.js";import"./LoadingCell-CykSoP0X.js";import"./ColumnConfigDialog-BzWOjFro.js";import"./DraggableList-BNKFwiq9.js";import"./search-ChyEY49Q.js";import"./Input-B4FHDv-3.js";import"./useControlled-CUyHc-Js.js";import"./Button-CFI_-pRJ.js";import"./small-cross-CjBKsPzJ.js";import"./ActionButton-B8kWvQVe.js";import"./Checkbox-Dx9SDg3Y.js";import"./useValueChanged-DPnKyoXq.js";import"./CollapsiblePanel-DDu9LnWB.js";import"./MultiColumnSortDialog-y51Oiaxo.js";import"./MenuTrigger-C9EVVsoN.js";import"./CompositeItem-CsOBUX0g.js";import"./ToolbarRootContext-BRylS6Aj.js";import"./getDisabledMountTransitionStyles-BJk4B9MV.js";import"./getPseudoElementBounds-KgJkaKhr.js";import"./chevron-down-BBE32uOg.js";import"./index-C_O3jDKw.js";import"./error-mxcJOglh.js";import"./BaseCbacBanner-BDA92KNd.js";import"./makeExternalStore-CCkssviL.js";import"./Tooltip-CcPCpeng.js";import"./PopoverPopup-Dc4OKlIj.js";import"./debounce-BEX_S5I4.js";import"./useOsdkClient-BrHXTXJ2.js";import"./tick-CiAF04hP.js";import"./DropdownField-BnoXJlhp.js";import"./isEqual-BciiG4z6.js";import"./withOsdkMetrics-DWUucJCc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
