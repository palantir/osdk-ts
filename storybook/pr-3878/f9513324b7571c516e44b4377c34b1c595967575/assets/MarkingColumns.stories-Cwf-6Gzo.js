import{f as p,j as e}from"./iframe-C3HGDapW.js";import{O as i}from"./object-table-CQz3p20b.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dd-r_PP_.js";import"./Table-DFFYj90Y.js";import"./index-CJ776Wah.js";import"./Dialog-ZkfoqNUX.js";import"./cross-D5WvDMJV.js";import"./svgIconContainer-CFN5a8Be.js";import"./useBaseUiId-DDU_oadF.js";import"./InternalBackdrop-Be2xXmYq.js";import"./composite-C0TGio2P.js";import"./index-DQeQgx2N.js";import"./index-BijSJOSI.js";import"./index-CI4EIWpq.js";import"./useEventCallback-Lx0RHoQ3.js";import"./SkeletonBar-vwa0QD39.js";import"./LoadingCell-B_QIsEjI.js";import"./ColumnConfigDialog-Da8NeShu.js";import"./DraggableList-BK2bp82b.js";import"./search-B43uCRp2.js";import"./Input-BSSKD0Yf.js";import"./useControlled-U-IEPHgG.js";import"./Button-D-rdzhRE.js";import"./small-cross-AZq4qJ1d.js";import"./ActionButton-C4HUNn1x.js";import"./Checkbox-D3EvpIya.js";import"./useValueChanged-Dgd9m4pd.js";import"./CollapsiblePanel-BL4COOfP.js";import"./MultiColumnSortDialog-Cceo__Pb.js";import"./MenuTrigger-Cki9aRxB.js";import"./CompositeItem-ug1IBEV3.js";import"./ToolbarRootContext-DquNC5M6.js";import"./getDisabledMountTransitionStyles-C6vvAqBU.js";import"./getPseudoElementBounds-CkAjQIKN.js";import"./chevron-down-DzjGRqJz.js";import"./index-LE1XJX1v.js";import"./error-BHy_Uegk.js";import"./BaseCbacBanner-CcieG2Vc.js";import"./makeExternalStore-CFal4aDF.js";import"./Tooltip-5nh3-0V1.js";import"./PopoverPopup-Cr_rWDbz.js";import"./debounce-KZy00M_V.js";import"./useOsdkClient-CO8K2hWt.js";import"./tick-l_Py6lRO.js";import"./DropdownField-FtuodETP.js";import"./isEqual-C1sHjSdi.js";import"./withOsdkMetrics-TK1FZJZJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
