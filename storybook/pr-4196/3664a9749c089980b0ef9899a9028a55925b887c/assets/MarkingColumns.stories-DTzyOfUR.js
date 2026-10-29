import{f as p,j as e}from"./iframe-fQxG4Lg8.js";import{O as i}from"./object-table-BguurVj9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3S-rczw.js";import"./Table-4QPD3ovk.js";import"./index-ltdpE_X9.js";import"./Dialog-CGuuKNT3.js";import"./cross-DCa3-fIn.js";import"./svgIconContainer-DiG6bowi.js";import"./useBaseUiId-BLPigAyn.js";import"./InternalBackdrop-Cf_yJEvo.js";import"./composite-DDCMOEB3.js";import"./index-BJBu7OXz.js";import"./index-B903ktB6.js";import"./index-B1XnrnSa.js";import"./useEventCallback-DIfP3h4k.js";import"./SkeletonBar-wwhzG1v0.js";import"./LoadingCell-DD1q-NbW.js";import"./ColumnConfigDialog-DNzpeOFX.js";import"./DraggableList-BoJNfPWY.js";import"./search-Cty6Jhmh.js";import"./Input-CaYmWuD7.js";import"./useControlled-DqDDQqjZ.js";import"./Button-BifFo4zB.js";import"./small-cross-DndD1mKm.js";import"./ActionButton-9_9jfXoV.js";import"./Checkbox-D1hhimLl.js";import"./useValueChanged-0fxI-YLf.js";import"./CollapsiblePanel-D6URl5lo.js";import"./MultiColumnSortDialog-Dn2xubWh.js";import"./MenuTrigger-nzj5vofY.js";import"./CompositeItem-DICXTkJC.js";import"./ToolbarRootContext-CBJvqLZU.js";import"./getDisabledMountTransitionStyles-BfSk2v82.js";import"./getPseudoElementBounds-DnfsNe5i.js";import"./chevron-down-C1z-grQd.js";import"./index-C-pt0ouP.js";import"./error-DITUlsDB.js";import"./BaseCbacBanner-Ce1kigDa.js";import"./makeExternalStore-bm_X3lw2.js";import"./Tooltip-DuEVyIet.js";import"./PopoverPopup-C4texbP0.js";import"./debounce-Dj_e_6kC.js";import"./useOsdkClient-BlaEh5Bi.js";import"./tick-aJ0nLTgk.js";import"./DropdownField-eogQl421.js";import"./isEqual-D15Ao0tl.js";import"./withOsdkMetrics-M9jqBL_m.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
