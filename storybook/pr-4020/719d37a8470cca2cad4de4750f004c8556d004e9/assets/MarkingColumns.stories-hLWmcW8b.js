import{f as p,j as e}from"./iframe-B0400XAV.js";import{O as i}from"./object-table-BZ5Kdgrh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bn7pmSUb.js";import"./Table-BALaECP2.js";import"./index-DZ4vxiLW.js";import"./Dialog-SWkd_Wiv.js";import"./cross-DQqnupWk.js";import"./svgIconContainer-JRfXSFeh.js";import"./useBaseUiId-B9k80gJ8.js";import"./InternalBackdrop-DmO0kWzU.js";import"./composite-BH1fXSiW.js";import"./index-C_9Kpq7B.js";import"./index-2o5KGJI0.js";import"./index-Ej3jcQKp.js";import"./useEventCallback-JQnAZWI3.js";import"./SkeletonBar-DJor0eXp.js";import"./LoadingCell-BOFJCCyC.js";import"./ColumnConfigDialog-d3dN9wSL.js";import"./DraggableList-B_mWzcV5.js";import"./search-BeppLusu.js";import"./Input-BRGSYo1e.js";import"./useControlled-DjWHSFCM.js";import"./Button-YA4JYpq1.js";import"./small-cross-ESv-X2fK.js";import"./ActionButton-BrvBwGrb.js";import"./Checkbox-CJMelRTO.js";import"./useValueChanged-BsB5HN0-.js";import"./CollapsiblePanel-B3Zzdgcc.js";import"./MultiColumnSortDialog-BN_ENW3e.js";import"./MenuTrigger-CKvR1G5L.js";import"./CompositeItem-CoJRCpBo.js";import"./ToolbarRootContext--iPu1vj7.js";import"./getDisabledMountTransitionStyles-CGuB9paQ.js";import"./getPseudoElementBounds-DLMLBgRr.js";import"./chevron-down-CEDiPbvm.js";import"./index-C8DuxpD6.js";import"./error-BZwgl63S.js";import"./BaseCbacBanner-BeF2ijdW.js";import"./makeExternalStore-B2IR-Z_q.js";import"./Tooltip-0d-ScaQ8.js";import"./PopoverPopup-1szLhiqM.js";import"./debounce-D1VOMgMZ.js";import"./useOsdkClient-J40VcFnd.js";import"./tick-DHoO3CIv.js";import"./DropdownField-CdBamLDl.js";import"./isEqual-CdJIThGs.js";import"./withOsdkMetrics-CZrqSehW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
