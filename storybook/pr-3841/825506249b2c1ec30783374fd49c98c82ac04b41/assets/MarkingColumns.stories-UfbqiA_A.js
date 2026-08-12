import{f as p,j as e}from"./iframe-CMhSXf7u.js";import{O as i}from"./object-table-Mp8InD2l.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Brrs_dmH.js";import"./Table-DklL9Zy6.js";import"./index-D-EqtuMO.js";import"./Dialog-CC0lOn9D.js";import"./cross-CDflrrvD.js";import"./svgIconContainer-BI44O8kK.js";import"./useBaseUiId-DJLmBw3m.js";import"./InternalBackdrop-DM7i7wCP.js";import"./composite-CZ_sbuO7.js";import"./index-e3-NUaQu.js";import"./index-7out07OT.js";import"./index-D1lmcvuc.js";import"./useEventCallback-hoIOXFa_.js";import"./SkeletonBar-BFMS0GW4.js";import"./LoadingCell-DCwYyJZu.js";import"./ColumnConfigDialog-bLJOU6Di.js";import"./DraggableList-CFiryhMG.js";import"./search-D9SDfmhX.js";import"./Input-BdM-mg3J.js";import"./useControlled-Yx4KOLdx.js";import"./isEqual-KbtjeMQV.js";import"./isObject-BuUXoseV.js";import"./Button-CYNxWIo5.js";import"./ActionButton-jy2VWN7r.js";import"./Checkbox-B4EJG7JE.js";import"./useValueChanged-BUNxdFiJ.js";import"./CollapsiblePanel-Dd1M5TG9.js";import"./MultiColumnSortDialog-CFOj4bAs.js";import"./MenuTrigger-CQRFhwW_.js";import"./CompositeItem-B3dhh8ia.js";import"./ToolbarRootContext-Dt3o3mOm.js";import"./getDisabledMountTransitionStyles-2Y8GdGAv.js";import"./getPseudoElementBounds-BmO4MZ3H.js";import"./chevron-down-UD5qoask.js";import"./index-DRucm0b5.js";import"./error-Cia9mwql.js";import"./BaseCbacBanner-bC-IYL-r.js";import"./makeExternalStore-CmWedr43.js";import"./Tooltip-OPdt0l6L.js";import"./PopoverPopup-BxsPUhZJ.js";import"./toNumber-Bv0An-Lw.js";import"./useOsdkClient-v7ltKG8Z.js";import"./tick-lvvqI-zN.js";import"./DropdownField-daOnZPEH.js";import"./withOsdkMetrics-C5gJ204R.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
