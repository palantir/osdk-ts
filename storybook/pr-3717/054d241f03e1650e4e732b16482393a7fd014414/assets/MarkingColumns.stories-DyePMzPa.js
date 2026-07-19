import{f as p,j as e}from"./iframe-CGjkWk-y.js";import{O as i}from"./object-table-Ct2ooZud.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWtm6Awl.js";import"./Table-BDTjqzkp.js";import"./index-DpkhLa0o.js";import"./Dialog-CR8XSNjq.js";import"./cross-Z3oKWduX.js";import"./svgIconContainer-C_Ff8kWV.js";import"./useBaseUiId-B4XbiBy4.js";import"./InternalBackdrop-DcXnTWET.js";import"./composite-BLjja7Ya.js";import"./index-BpjKgids.js";import"./index-Rlk1jRSs.js";import"./index-BG229Hff.js";import"./useEventCallback-C0EbWehh.js";import"./SkeletonBar-BJwKxIZS.js";import"./LoadingCell-D50f3gf-.js";import"./ColumnConfigDialog-CH8LkH_R.js";import"./DraggableList-Cfh50tU7.js";import"./search-cLC10ndE.js";import"./Input-DkzCERqQ.js";import"./useControlled-Di7K8oFC.js";import"./isEqual-BPzXIeWu.js";import"./isObject-ufUh2k2W.js";import"./Button-BfPY7-S3.js";import"./ActionButton-lsyUvj8x.js";import"./Checkbox-5FTkBEYK.js";import"./useValueChanged-D-fcFNue.js";import"./CollapsiblePanel-CEd7GAjB.js";import"./MultiColumnSortDialog-Da9phnHg.js";import"./MenuTrigger-Bi0q63zP.js";import"./CompositeItem-DHO8ufWs.js";import"./ToolbarRootContext-DDjooZXe.js";import"./getDisabledMountTransitionStyles-DsLREcDs.js";import"./getPseudoElementBounds-DlBadaGF.js";import"./chevron-down-Bd53qo6B.js";import"./index-BVorMo5r.js";import"./error-C5zhMVu3.js";import"./BaseCbacBanner-B31Dp9ki.js";import"./makeExternalStore-CFxMNbzV.js";import"./Tooltip-B9cPE5dE.js";import"./PopoverPopup-3EAkPoxH.js";import"./toNumber-C1-OaW4Z.js";import"./useOsdkClient-BKcGaqwd.js";import"./tick-XE7jJ8Z2.js";import"./DropdownField-CQG8OB6e.js";import"./withOsdkMetrics-6iHHcUlL.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
