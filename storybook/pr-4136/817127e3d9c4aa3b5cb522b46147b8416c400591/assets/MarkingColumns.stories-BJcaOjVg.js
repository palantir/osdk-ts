import{f as p,j as e}from"./iframe-DM2lbhq3.js";import{O as i}from"./object-table-BahOgCWX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVlRJCQ4.js";import"./Table-D8aaq1ON.js";import"./index-BxgMbwQW.js";import"./Dialog-D6Sy0Hei.js";import"./cross-C6M-wOmQ.js";import"./svgIconContainer-DawECmqq.js";import"./useBaseUiId-D_FvUqqy.js";import"./InternalBackdrop-hyoEPQMb.js";import"./composite-iccYdnrf.js";import"./index-CCN1yxkK.js";import"./index-Bpwngerd.js";import"./index-BBAnTYss.js";import"./useEventCallback-CKRLND5s.js";import"./SkeletonBar-B2B70iHE.js";import"./LoadingCell-Cpy76GMo.js";import"./ColumnConfigDialog-d9r3q5wS.js";import"./DraggableList-BJxXS1Me.js";import"./search-B5W8bLyf.js";import"./Input-CY0qF8uS.js";import"./useControlled-Ca36YxvC.js";import"./Button-XbpukpvP.js";import"./small-cross-BKA-Ml9N.js";import"./ActionButton-_pm_iS5i.js";import"./Checkbox-CsYoJ4b7.js";import"./useValueChanged-BxW-Xkhx.js";import"./CollapsiblePanel-DpDskcR4.js";import"./MultiColumnSortDialog-D-GYz7Kr.js";import"./MenuTrigger-BKsdj5VU.js";import"./CompositeItem-BFuIVpH0.js";import"./ToolbarRootContext-Bg6hLVB6.js";import"./getDisabledMountTransitionStyles-CcD-BZKR.js";import"./getPseudoElementBounds-CzHg-ye1.js";import"./chevron-down-DyskK5Yf.js";import"./index-BCS5K0iy.js";import"./error-DJU2sF2P.js";import"./BaseCbacBanner-DdVdOUAf.js";import"./makeExternalStore-BiR7BXmk.js";import"./Tooltip-DbczZTzH.js";import"./PopoverPopup-CX9LkjiZ.js";import"./debounce-vAXahSDb.js";import"./useOsdkClient-BLFd6qg6.js";import"./tick-_p_7zkXC.js";import"./DropdownField-d-diOJrZ.js";import"./isEqual-CZuKKajL.js";import"./withOsdkMetrics-URzhtFq2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
