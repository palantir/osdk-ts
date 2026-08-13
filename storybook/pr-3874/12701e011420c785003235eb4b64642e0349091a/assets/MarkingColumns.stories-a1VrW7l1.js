import{f as p,j as e}from"./iframe-Blz4LoHP.js";import{O as i}from"./object-table-C4GsO2cv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-foE4JgZ2.js";import"./Table-D0p3OMnU.js";import"./index-CUYER3DO.js";import"./Dialog-BXXiVsUS.js";import"./cross-BHEKJ-xu.js";import"./svgIconContainer-BuunOq3e.js";import"./useBaseUiId-UaklEsw9.js";import"./InternalBackdrop-DN42fX-a.js";import"./composite-CXEOluk-.js";import"./index-DpYCY6fP.js";import"./index-D8NTGdmQ.js";import"./index-_-bQl4h5.js";import"./useEventCallback--MWQrumu.js";import"./SkeletonBar-C3xikPhc.js";import"./LoadingCell-Bbk55PmP.js";import"./ColumnConfigDialog-dvAiDUdX.js";import"./DraggableList-pafhfntw.js";import"./search-CWcz5URn.js";import"./Input--2U01S_F.js";import"./useControlled-CnlJbyLP.js";import"./Button-Cv_Vsur6.js";import"./small-cross-4OnN50dl.js";import"./ActionButton-B5NvVbbS.js";import"./Checkbox-DzgcS57R.js";import"./useValueChanged-DUdm1KWZ.js";import"./CollapsiblePanel-DBNydUPu.js";import"./MultiColumnSortDialog-BneKJKoK.js";import"./MenuTrigger-yP6x7n5y.js";import"./CompositeItem-udJn1Dzr.js";import"./ToolbarRootContext-D4Igr_5K.js";import"./getDisabledMountTransitionStyles-CNGduUJp.js";import"./getPseudoElementBounds-CGsoSiym.js";import"./chevron-down-DcvlWZQj.js";import"./index-CttXvCYf.js";import"./error-B_nCzUte.js";import"./BaseCbacBanner-C_JRlpKM.js";import"./makeExternalStore-CAzuqfsN.js";import"./Tooltip-DIjd2FOB.js";import"./PopoverPopup-Dk3e8uy-.js";import"./debounce-X-kCipRL.js";import"./useOsdkClient-C-Xr9PdN.js";import"./tick-DAoIo5QV.js";import"./DropdownField-DhF3yGmk.js";import"./isEqual-DclTeP20.js";import"./withOsdkMetrics-B_mvTTGH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
