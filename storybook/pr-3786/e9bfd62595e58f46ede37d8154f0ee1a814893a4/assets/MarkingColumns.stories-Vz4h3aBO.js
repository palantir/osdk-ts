import{f as p,j as e}from"./iframe-YvYOR2wq.js";import{O as i}from"./object-table-DFp50YJS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CzbLUeKx.js";import"./Table-DgmuGDrA.js";import"./index-Dg2Ua59f.js";import"./Dialog-BOksrRjX.js";import"./cross-DN6PKsRx.js";import"./svgIconContainer-BkbpeeEh.js";import"./useBaseUiId-DIa8CEVr.js";import"./InternalBackdrop-C1_8LOV1.js";import"./composite-BRTo3g9o.js";import"./index-w--EL4PT.js";import"./index-DS0htV8G.js";import"./index-Coel4Jgz.js";import"./useEventCallback-C3JYfwwo.js";import"./SkeletonBar-CMZ34MM-.js";import"./LoadingCell-DRNmp-08.js";import"./ColumnConfigDialog-YczIbXzh.js";import"./DraggableList-kcEMvLS0.js";import"./search-C6slhSf_.js";import"./Input-Au_NktxX.js";import"./useControlled-BaKiUohk.js";import"./isEqual-BT4XKmjn.js";import"./isObject-CGKerAkV.js";import"./Button-yaRm4n4E.js";import"./ActionButton-D3qEnWxR.js";import"./Checkbox-C7KgpzBK.js";import"./useValueChanged-BzhpnMSP.js";import"./CollapsiblePanel-DIz_ZpXy.js";import"./MultiColumnSortDialog-DC7hRVhI.js";import"./MenuTrigger-kYteRUU6.js";import"./CompositeItem-Tos5QYfq.js";import"./ToolbarRootContext-DvVNq82_.js";import"./getDisabledMountTransitionStyles-Bt7RtkHz.js";import"./getPseudoElementBounds-DEObypw2.js";import"./chevron-down-DjeSf-LC.js";import"./index-tjquBYxZ.js";import"./error-BN9FB_kM.js";import"./BaseCbacBanner-pHLTCldx.js";import"./makeExternalStore-Bf2AXbqX.js";import"./Tooltip-DBvEwoA0.js";import"./PopoverPopup-C4rnnz4U.js";import"./toNumber-BlqZmOuH.js";import"./useOsdkClient-DpDEjnV-.js";import"./tick-Df1dDSk-.js";import"./DropdownField-Bty5TdGt.js";import"./withOsdkMetrics-BC7VO-wU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
