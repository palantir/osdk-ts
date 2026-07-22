import{f as p,j as e}from"./iframe-DjtcYyzQ.js";import{O as i}from"./object-table-Cx1-aOJU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHuR451x.js";import"./index-CQV6Rnc6.js";import"./Dialog-y15XJOsn.js";import"./cross-B6N8rLM4.js";import"./svgIconContainer-JU7cmdzA.js";import"./useBaseUiId-kxFdZqtD.js";import"./InternalBackdrop-CpQyJmy1.js";import"./composite-B_imHkJV.js";import"./index-CBxdpb96.js";import"./index-D8ZMhwwx.js";import"./index-C3TnBhfz.js";import"./useEventCallback-6rPOrUpt.js";import"./SkeletonBar-BgTk6Y9n.js";import"./LoadingCell-M9yCnm6K.js";import"./ColumnConfigDialog-BahuG4eK.js";import"./DraggableList-D-6R4oYR.js";import"./search-DFIZPiTI.js";import"./Input-eiOZqsyQ.js";import"./useControlled-DggWxDeY.js";import"./isEqual-CHBEhNJy.js";import"./isObject-BLUbfgBE.js";import"./Button-yoR8DJA2.js";import"./ActionButton-aTqycEsf.js";import"./Checkbox-CKKTGtLY.js";import"./useValueChanged-C91I9lSd.js";import"./CollapsiblePanel-BE0pKmrr.js";import"./MultiColumnSortDialog-BE-Xqeny.js";import"./MenuTrigger-qUgny5m-.js";import"./CompositeItem-pjHtEKS0.js";import"./ToolbarRootContext-DHGJfn9d.js";import"./getDisabledMountTransitionStyles-C83r2vCZ.js";import"./getPseudoElementBounds-D-8MIy1t.js";import"./chevron-down-E7YHgJne.js";import"./index-BGI_7tkx.js";import"./error-DLG18jLw.js";import"./BaseCbacBanner-Be-6Cqba.js";import"./makeExternalStore-CDqT4QNq.js";import"./Tooltip-D6VePCFP.js";import"./PopoverPopup-qaWHhtAH.js";import"./toNumber-ptw9YKMz.js";import"./useOsdkClient-B-T-pdfR.js";import"./tick-DVtbxPft.js";import"./DropdownField-CVFWI8Ck.js";import"./withOsdkMetrics-m3U67gAP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
