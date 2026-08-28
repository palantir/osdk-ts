import{f as p,j as e}from"./iframe-6-lsrwMw.js";import{O as i}from"./object-table-BD5fLK_U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Db94U03p.js";import"./Table-CkrRI7-F.js";import"./index-DH_wHqGf.js";import"./Dialog-r2SlhXyP.js";import"./cross-YaAg5Emc.js";import"./svgIconContainer-XYTAu43b.js";import"./useBaseUiId-CL8n1QSk.js";import"./InternalBackdrop-B6K0nBuz.js";import"./composite-49wknnqt.js";import"./index-Bw-N-TJf.js";import"./index-1sUFjhZs.js";import"./index-DzLg0_9K.js";import"./useEventCallback-CfIHiVet.js";import"./SkeletonBar-Cpo0DVFp.js";import"./LoadingCell-Dpvyiyjr.js";import"./ColumnConfigDialog--fXwNZ3n.js";import"./DraggableList-CMebvrw0.js";import"./search-DcT9O0hm.js";import"./Input-DmhHRvF_.js";import"./useControlled-Do4cdAri.js";import"./Button-BajEEQr1.js";import"./small-cross-DrQAtv1a.js";import"./ActionButton-DdMfURgP.js";import"./Checkbox-95Z5M751.js";import"./useValueChanged-9nNSuzsu.js";import"./CollapsiblePanel-BsHL6Fuo.js";import"./MultiColumnSortDialog-PE-F8gRf.js";import"./MenuTrigger-4UQAkATc.js";import"./CompositeItem-B37GUCR2.js";import"./ToolbarRootContext-DZy52B3w.js";import"./getDisabledMountTransitionStyles-DSJQnDkW.js";import"./getPseudoElementBounds-docA_U__.js";import"./chevron-down-CRB-_0Nc.js";import"./index-DfdKE2my.js";import"./error-B3oxwr-6.js";import"./BaseCbacBanner-DwZ57uy4.js";import"./makeExternalStore-7KIsSfAR.js";import"./Tooltip-BeHTL_ss.js";import"./PopoverPopup-Ct_ibkbw.js";import"./debounce-Dbd1txbU.js";import"./useOsdkClient-Ds0tcoZm.js";import"./tick-S3MoWbWh.js";import"./DropdownField-B4-i467w.js";import"./isEqual-DDH6bZop.js";import"./withOsdkMetrics-B8Q-upjJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
