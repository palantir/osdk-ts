import{f as p,j as e}from"./iframe-BXr8Xp2f.js";import{O as i}from"./object-table-BMJGovFs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-QMSJ2T2z.js";import"./Table-DAHfr45h.js";import"./index-Di1QXXOB.js";import"./Dialog-DNbVrmuy.js";import"./cross-BWStps-6.js";import"./svgIconContainer-DI5sy3Bm.js";import"./useBaseUiId-BnWXJnJX.js";import"./InternalBackdrop-BC2Mb0IP.js";import"./composite-DX-jTCFh.js";import"./index-B1TvT34D.js";import"./index-Bxr4aZil.js";import"./index-DklSHYVg.js";import"./useEventCallback-D_2naMiZ.js";import"./SkeletonBar-BerAdX9-.js";import"./LoadingCell-CnTJTekb.js";import"./ColumnConfigDialog-BxWiOWRh.js";import"./DraggableList-0ExabIJF.js";import"./search-zzPZfnCA.js";import"./Input-C5ZRCR8-.js";import"./useControlled-B8QMfPVX.js";import"./Button-C-QbecBZ.js";import"./small-cross-Bd1moWk7.js";import"./ActionButton-BUgkVL_1.js";import"./Checkbox-CBxZQIwt.js";import"./useValueChanged-91n4n7Az.js";import"./CollapsiblePanel-BcVKiAEP.js";import"./MultiColumnSortDialog-BnlhM_7b.js";import"./MenuTrigger-d7QkVKvu.js";import"./CompositeItem-4cSdCb7D.js";import"./ToolbarRootContext-CF3RFtFR.js";import"./getDisabledMountTransitionStyles-BMa-7_u5.js";import"./getPseudoElementBounds-x4SpAFDI.js";import"./chevron-down-IAwnATnI.js";import"./index-BratHID5.js";import"./error-CCe_KGjt.js";import"./BaseCbacBanner-BX2BB173.js";import"./makeExternalStore-BWoLV1uK.js";import"./Tooltip-CR0agNo_.js";import"./PopoverPopup-6Xu4OLUV.js";import"./debounce-C89iykon.js";import"./useOsdkClient-B7TJU7Dn.js";import"./tick-DbVcYKyy.js";import"./DropdownField-DdBf8ANg.js";import"./isEqual-Bov8yTSB.js";import"./withOsdkMetrics-D8QddkhH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
