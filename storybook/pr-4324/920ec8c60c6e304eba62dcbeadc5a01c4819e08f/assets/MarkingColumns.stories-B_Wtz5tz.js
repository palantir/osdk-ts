import{f as p,j as e}from"./iframe-9A7AV9Cy.js";import{O as i}from"./object-table-CPJv4BYW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CK_ZcGGF.js";import"./Table-B59cxmyO.js";import"./index-Bkgk7vsR.js";import"./Dialog-Bl9zekAE.js";import"./cross-B7t6TzDw.js";import"./svgIconContainer-CR0pIEyo.js";import"./useBaseUiId-q7QIFNkg.js";import"./InternalBackdrop-CQ3SkFUe.js";import"./composite-CEEJ0vWU.js";import"./index-C7xfgMTV.js";import"./index-BV5cRfRG.js";import"./index--u-sCo5n.js";import"./useEventCallback-DNZWa-fZ.js";import"./SkeletonBar-TosXJUxL.js";import"./LoadingCell-Dumj3M5j.js";import"./ColumnConfigDialog-CBjPf0Hz.js";import"./DraggableList-C57KPCMS.js";import"./search-BWRhS2Qj.js";import"./Input-CCxEn7sH.js";import"./useControlled-DIFFKw6v.js";import"./Button-CKepLiXu.js";import"./small-cross-1ULwRpx5.js";import"./ActionButton-1V5zer9B.js";import"./Checkbox-CnzsJ8SG.js";import"./useValueChanged-kZaWbmaa.js";import"./CollapsiblePanel-CKt0R28j.js";import"./MultiColumnSortDialog-00THcpjd.js";import"./MenuTrigger-BtqQkzdC.js";import"./CompositeItem-DoPsMeEK.js";import"./ToolbarRootContext-DCS282rA.js";import"./getDisabledMountTransitionStyles-_YA1Iepr.js";import"./getPseudoElementBounds-Bq0sNDj9.js";import"./chevron-down-Bi1tvw_Y.js";import"./index-CzE6ZkZ0.js";import"./error-C8bHM7uj.js";import"./BaseCbacBanner-BsVniqSH.js";import"./makeExternalStore-UebcDacP.js";import"./Tooltip-Dfs7CnEh.js";import"./PopoverPopup-hsESB4RR.js";import"./debounce-ADxFBf6q.js";import"./useOsdkClient-C7At4pV9.js";import"./tick-DlLbsS5l.js";import"./DropdownField-CNaJiffx.js";import"./isEqual-DKebV1YP.js";import"./withOsdkMetrics-B5obnKQC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
