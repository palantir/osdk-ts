import{f as p,j as e}from"./iframe-Bz3hVWPH.js";import{O as i}from"./object-table-Coh6khSe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5WDuSuX.js";import"./Table-vO5Gnq6f.js";import"./index-DByWOMtj.js";import"./Dialog-D4obr35u.js";import"./cross-Fpn0tB3m.js";import"./svgIconContainer-_Jncan05.js";import"./useBaseUiId-dzLz4lPg.js";import"./InternalBackdrop-DSn-b-zD.js";import"./composite-CPnF2lA7.js";import"./index-vogC1DiU.js";import"./index-De0WyPkh.js";import"./index-BIjtRufh.js";import"./useEventCallback-CT17wzJW.js";import"./SkeletonBar-B6lmbx_o.js";import"./LoadingCell-BYZJaKgx.js";import"./ColumnConfigDialog-l5kk5jJ2.js";import"./DraggableList-jBvaIbKs.js";import"./search-Ctah0g8H.js";import"./Input-niPYTtX3.js";import"./useControlled-DOWqxCnV.js";import"./Button-CiU5aFV9.js";import"./small-cross-BzeHldsH.js";import"./ActionButton-OnzJnryN.js";import"./Checkbox-BEY2gbmr.js";import"./useValueChanged-BISvWiN-.js";import"./CollapsiblePanel-jHetj5wz.js";import"./MultiColumnSortDialog-BV0ux_2F.js";import"./MenuTrigger-DBuTjWXZ.js";import"./CompositeItem-dA2LCxOZ.js";import"./ToolbarRootContext-D-xyRBQY.js";import"./getDisabledMountTransitionStyles-BdHWZjt-.js";import"./getPseudoElementBounds-BC_aNtit.js";import"./chevron-down-Bi16AFVJ.js";import"./index-BwGnMyFh.js";import"./error-CQxjkOW_.js";import"./BaseCbacBanner-DsvHyF5N.js";import"./makeExternalStore-BkTXcz9h.js";import"./Tooltip-DfHl7Xwe.js";import"./PopoverPopup-CUtjr2xE.js";import"./debounce-u07EyXLU.js";import"./useOsdkClient-C-ZEaw1j.js";import"./tick-UZyx2gLc.js";import"./DropdownField-CQFrJZV4.js";import"./isEqual-Bw8rh7NU.js";import"./withOsdkMetrics-DIZcYriA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
