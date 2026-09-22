import{f as p,j as e}from"./iframe-DFjxEBRl.js";import{O as i}from"./object-table-BoxAW6h4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YLQ76DnX.js";import"./Table-BwRlL3aP.js";import"./index-RHDnv4KE.js";import"./Dialog-UrBzw_yg.js";import"./cross-CCUsZu-F.js";import"./svgIconContainer-BJy48zyG.js";import"./useBaseUiId-DHc-L81w.js";import"./InternalBackdrop-C6P7pfbM.js";import"./composite-CbdzgRs5.js";import"./index-Ct3A8526.js";import"./index-C1k9WrZP.js";import"./index-DpB4gLVj.js";import"./useEventCallback-Dsnixxz2.js";import"./SkeletonBar-CnK8k0Bo.js";import"./LoadingCell-aZlJy0Kx.js";import"./ColumnConfigDialog-DK3pRiTd.js";import"./DraggableList-ChJmTziU.js";import"./search-BBZ2n1GL.js";import"./Input-BTdzd0gA.js";import"./useControlled-CQ5aYrLf.js";import"./Button-Del4UdCp.js";import"./small-cross-DqyJwNHG.js";import"./ActionButton-DNxDDubl.js";import"./Checkbox-DyMDK_CU.js";import"./useValueChanged-gLgp5WvO.js";import"./CollapsiblePanel-ByT148KK.js";import"./MultiColumnSortDialog-B4STlqGL.js";import"./MenuTrigger-IEuFxfFB.js";import"./CompositeItem-CAkiPkQz.js";import"./ToolbarRootContext-B6U_uFKg.js";import"./getDisabledMountTransitionStyles-sjb--ufQ.js";import"./getPseudoElementBounds-MBQcfjsr.js";import"./chevron-down-Bha1TG_6.js";import"./index-B9cxXn2y.js";import"./error-WmDbCKs9.js";import"./BaseCbacBanner-wAyBlN0z.js";import"./makeExternalStore-DFJcPXqp.js";import"./Tooltip-DOMen-IA.js";import"./PopoverPopup-BZUXpB4m.js";import"./debounce-vz83BYcu.js";import"./useOsdkClient-DtVD0JhY.js";import"./tick-DJLdpaHq.js";import"./DropdownField-CStCtQro.js";import"./isEqual-C6OL2hQ9.js";import"./withOsdkMetrics-DIfFeIX-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
