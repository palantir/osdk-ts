import{f as p,j as e}from"./iframe-BqWWYvNh.js";import{O as i}from"./object-table-D1i_MteR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xbJFiFoV.js";import"./Table-BX-SSoai.js";import"./index-CHmc-CZF.js";import"./Dialog-C-ikag1c.js";import"./cross-BaCDbzQm.js";import"./svgIconContainer-D7PWuspg.js";import"./useBaseUiId-L7xZvVKI.js";import"./InternalBackdrop-BOKLllZf.js";import"./composite-B43hsjOr.js";import"./index-CJAJ6Hem.js";import"./index-UQo3BLiH.js";import"./index-C0RuiYT6.js";import"./useEventCallback-C7SpahXs.js";import"./SkeletonBar-CglVjYVB.js";import"./LoadingCell-DezR9abp.js";import"./ColumnConfigDialog-Loanbrqk.js";import"./DraggableList-DZYCzNct.js";import"./search-BZ-aP0AE.js";import"./Input-CFZ5X7h6.js";import"./useControlled-3vqQ5CZv.js";import"./Button-Drs29Umo.js";import"./small-cross-9yRNchJC.js";import"./ActionButton-CbAlOb7R.js";import"./Checkbox-BTcuEy4-.js";import"./useValueChanged-Bph4xhtR.js";import"./CollapsiblePanel-DwW1Bs6d.js";import"./MultiColumnSortDialog-D6neb_LS.js";import"./MenuTrigger-BXX-G2Zm.js";import"./CompositeItem-CC_bbvNo.js";import"./ToolbarRootContext-DXJ8TGiF.js";import"./getDisabledMountTransitionStyles-gc3ASc_K.js";import"./getPseudoElementBounds-DQIHMp8o.js";import"./chevron-down-DlgsXnWQ.js";import"./index-i_nBIU9X.js";import"./error-B_VRdTx7.js";import"./BaseCbacBanner-DtrJgJpz.js";import"./makeExternalStore-Brum0TCo.js";import"./Tooltip-CbfSD75c.js";import"./PopoverPopup-BOEEd-B9.js";import"./debounce-uF2HrJP8.js";import"./useOsdkClient-HveXGpzo.js";import"./tick-DMZ_0kJh.js";import"./DropdownField-BdVf8YUK.js";import"./isEqual-D6LwsQsu.js";import"./withOsdkMetrics-BbVO6-6g.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
