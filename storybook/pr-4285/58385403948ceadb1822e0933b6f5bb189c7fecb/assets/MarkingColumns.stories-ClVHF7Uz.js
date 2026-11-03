import{f as p,j as e}from"./iframe-Do-VpOjh.js";import{O as i}from"./object-table-BwRPkyFs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5MNjctgv.js";import"./Table-DlXnM-uc.js";import"./index-guBT-Q22.js";import"./Dialog-7E7RidgZ.js";import"./cross-ogJb6_71.js";import"./svgIconContainer-Daa0qYJx.js";import"./useBaseUiId-NGuXhXtm.js";import"./InternalBackdrop-CAfbe648.js";import"./composite-XuPIjsZ0.js";import"./index-BPQdlCoY.js";import"./index-Bl0nKd-v.js";import"./index-6QJ451ri.js";import"./useEventCallback-BfN-usbW.js";import"./SkeletonBar-DEQbvDAC.js";import"./LoadingCell-TR-8Cewx.js";import"./ColumnConfigDialog-CZtIpYKX.js";import"./DraggableList-DCsvageq.js";import"./search-CUVFG7hS.js";import"./Input-DBYDuVVL.js";import"./useControlled-Bktt7DnW.js";import"./Button-CyEQqHyS.js";import"./small-cross-BbsWtOmh.js";import"./ActionButton-CGqklm4n.js";import"./Checkbox-X0ByKMK-.js";import"./useValueChanged-BWy_YmP2.js";import"./CollapsiblePanel-DU8jndzx.js";import"./MultiColumnSortDialog-BG5mZIhG.js";import"./MenuTrigger-Bx9xsw3l.js";import"./CompositeItem-tVccsBIo.js";import"./ToolbarRootContext-ABr2rsL3.js";import"./getDisabledMountTransitionStyles-DJ-_H-jY.js";import"./getPseudoElementBounds-Dn4RekYY.js";import"./chevron-down-CEDyHpu0.js";import"./index-BCFomdyL.js";import"./error-CfZglkqO.js";import"./BaseCbacBanner-Bgyzasq9.js";import"./makeExternalStore-C6Ji6_pQ.js";import"./Tooltip-iQ-POIkn.js";import"./PopoverPopup-Bu1yL2u-.js";import"./debounce-BXhlOus3.js";import"./useOsdkClient-ClIl2h3b.js";import"./tick-De1F-M9u.js";import"./DropdownField-Ds_qQON0.js";import"./isEqual-C845QIj_.js";import"./withOsdkMetrics-C1OJVKTR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
