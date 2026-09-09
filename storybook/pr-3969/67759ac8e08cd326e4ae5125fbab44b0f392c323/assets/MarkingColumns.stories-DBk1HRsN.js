import{f as p,j as e}from"./iframe-B3Tmb11O.js";import{O as i}from"./object-table-BCvZmn17.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gakQdOi4.js";import"./Table-DlLJZcDW.js";import"./index-kZbgPBf-.js";import"./Dialog-DXajQC4U.js";import"./cross-C-JhHfM1.js";import"./svgIconContainer-BsQARODV.js";import"./useBaseUiId-Bm-vJATe.js";import"./InternalBackdrop-BOPEQbPn.js";import"./composite-2j3kB3hN.js";import"./index-DfPJChMi.js";import"./index-QmBbQjFR.js";import"./index-e_qtktns.js";import"./useEventCallback-B042jdme.js";import"./SkeletonBar-C_iP2YwF.js";import"./LoadingCell-CM3CyC3m.js";import"./ColumnConfigDialog-Bz076Z86.js";import"./DraggableList-BZjWJwF_.js";import"./search-ZvK9KowR.js";import"./Input-CWGLraK0.js";import"./useControlled-uOco89xC.js";import"./Button-BRlUcQED.js";import"./small-cross-DXMdsdMX.js";import"./ActionButton-BTBAdMJU.js";import"./Checkbox-MCdCcxi7.js";import"./useValueChanged-BchUu2C7.js";import"./CollapsiblePanel-DLuGcKFZ.js";import"./MultiColumnSortDialog-DcdKGjbm.js";import"./MenuTrigger-DKp4zb-V.js";import"./CompositeItem-BKoGSNiO.js";import"./ToolbarRootContext-CqEf4XEU.js";import"./getDisabledMountTransitionStyles-BzgaS7Qg.js";import"./getPseudoElementBounds-DAnTahBd.js";import"./chevron-down-CsQH01fJ.js";import"./index-D4PUZNNP.js";import"./error-DCFU_pHO.js";import"./BaseCbacBanner-CgGJwGzr.js";import"./makeExternalStore-fsIP6Iuw.js";import"./Tooltip-DlikgLh9.js";import"./PopoverPopup-B8BhyguS.js";import"./debounce-CWwSNpvq.js";import"./useOsdkClient-CEGzqg9X.js";import"./tick-Cl-i5oQo.js";import"./DropdownField-T9pQTlKf.js";import"./isEqual-CFaY0btu.js";import"./withOsdkMetrics-BtfS3RDS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
