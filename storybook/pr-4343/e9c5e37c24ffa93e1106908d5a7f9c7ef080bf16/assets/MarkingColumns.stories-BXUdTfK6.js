import{f as p,j as e}from"./iframe-CMiiEF1b.js";import{O as i}from"./object-table-oQWMyJiq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2rscAx0o.js";import"./Table-DXwxQvdR.js";import"./index-DRZQ1ZuZ.js";import"./Dialog-BGwEB59l.js";import"./cross-DmjzAf0-.js";import"./svgIconContainer-DmZ8fHpX.js";import"./useBaseUiId-EgPXNEt2.js";import"./InternalBackdrop-U0kfyJ5Z.js";import"./composite-DqjfxZG9.js";import"./index-goWiuive.js";import"./index-Dtqd3tNX.js";import"./index-vCHhqi_x.js";import"./useEventCallback-e3py3zZO.js";import"./SkeletonBar-D_pLrG8I.js";import"./LoadingCell-DegLzQmp.js";import"./ColumnConfigDialog-B6kG6pez.js";import"./DraggableList-qXLjxEkd.js";import"./search-0aDkREOD.js";import"./Input-B0ji1_35.js";import"./useControlled-CaNRytWe.js";import"./Button-CDnIVBQ_.js";import"./small-cross-DGkNWAjz.js";import"./ActionButton-B5NjKg_P.js";import"./Checkbox-evxW-yIF.js";import"./useValueChanged-hWOBB7lU.js";import"./CollapsiblePanel-DHD1Piul.js";import"./MultiColumnSortDialog-B7lXp9Me.js";import"./MenuTrigger-yrWPKLRn.js";import"./CompositeItem-D4B_FL8U.js";import"./ToolbarRootContext-UxomdOwp.js";import"./getDisabledMountTransitionStyles-MJ90XzR7.js";import"./getPseudoElementBounds-TefPeSXP.js";import"./chevron-down-BtRtOYI2.js";import"./index-DVpvfzZ8.js";import"./error-IdCbvwbX.js";import"./BaseCbacBanner-klveZ2h3.js";import"./makeExternalStore-BeAQwjdH.js";import"./Tooltip-Dg78gXhb.js";import"./PopoverPopup-DAxHwasP.js";import"./debounce-DhU-bxB_.js";import"./useOsdkClient-DkekLomq.js";import"./tick-CPg-6I2-.js";import"./DropdownField-B_Y4KBs-.js";import"./isEqual-DpDCxrI8.js";import"./withOsdkMetrics-BucKtTdS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
