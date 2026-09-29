import{f as p,j as e}from"./iframe-CZutwAHo.js";import{O as i}from"./object-table-BbJRuFno.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cn3SJHww.js";import"./Table-B8cgGfQL.js";import"./index-CppgNV0M.js";import"./Dialog-B1VpodKR.js";import"./cross-D02obdgD.js";import"./svgIconContainer-CmX1H1mx.js";import"./useBaseUiId-CtEICjky.js";import"./InternalBackdrop-G99DwSaZ.js";import"./composite-mcUSxhXz.js";import"./index-B50GZKUg.js";import"./index-2k1Tvx5C.js";import"./index-HA6Va8NR.js";import"./useEventCallback-DZshVR4a.js";import"./SkeletonBar-B0Lj-A75.js";import"./LoadingCell-DZJOvAcQ.js";import"./ColumnConfigDialog-Bu4boOIF.js";import"./DraggableList-C-UqdMK0.js";import"./search-C59PF3w9.js";import"./Input-oDj_0Z0d.js";import"./useControlled-DwVRdNhF.js";import"./Button-sSK8eFI-.js";import"./small-cross-CFVLA5Ia.js";import"./ActionButton-axhhg9v5.js";import"./Checkbox-CgMU5S4K.js";import"./useValueChanged-CZKUaGQu.js";import"./CollapsiblePanel-Dsv7xvDY.js";import"./MultiColumnSortDialog-WIJhht9a.js";import"./MenuTrigger-C2muNGYu.js";import"./CompositeItem-DdZNAqnt.js";import"./ToolbarRootContext-FQPAQT5c.js";import"./getDisabledMountTransitionStyles-BZ863oN2.js";import"./getPseudoElementBounds-D34_EoM3.js";import"./chevron-down--5qYG9Xz.js";import"./index-io1wfiP6.js";import"./error-CZtG4Hsy.js";import"./BaseCbacBanner-mfv3mmX8.js";import"./makeExternalStore-CCR0CM05.js";import"./Tooltip-8A2JRkIJ.js";import"./PopoverPopup-CJaw97SK.js";import"./debounce-0IA_cAla.js";import"./useOsdkClient-DgvAplUI.js";import"./tick-Dwj_TbVz.js";import"./DropdownField-CGLxykfT.js";import"./isEqual-CD-t15N1.js";import"./withOsdkMetrics-Bw7lmz7K.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
