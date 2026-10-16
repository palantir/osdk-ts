import{f as p,j as e}from"./iframe-SdQCyUgp.js";import{O as i}from"./object-table-CorJDmXH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CW3K-5XG.js";import"./Table-CEXXqsEZ.js";import"./index-D3TvMuk-.js";import"./Dialog-CAeBKUuI.js";import"./cross-5HR9Xmh-.js";import"./svgIconContainer-DRjj58Q8.js";import"./useBaseUiId-CBeYQDU3.js";import"./InternalBackdrop-C_eB-9md.js";import"./composite-DgbmPZb7.js";import"./index-Bcc2WdCU.js";import"./index-D0j0DV3h.js";import"./index-DBcsmgnd.js";import"./useEventCallback-CkK2hdI-.js";import"./SkeletonBar-BqRHQ8dJ.js";import"./LoadingCell-Bxkg1Qxk.js";import"./ColumnConfigDialog-BXThY0PP.js";import"./DraggableList-B73KoICc.js";import"./search-DC3bQpgx.js";import"./Input-Dx-qEMGm.js";import"./useControlled-B_XDx7ZC.js";import"./Button-DVBp1SrV.js";import"./small-cross-NBpQZ1gf.js";import"./ActionButton-CwICYRG_.js";import"./Checkbox-CDNxOiiw.js";import"./useValueChanged-DzBSmBuv.js";import"./CollapsiblePanel-DwwGp_PD.js";import"./MultiColumnSortDialog-q2h4FROa.js";import"./MenuTrigger-1AFgbPOt.js";import"./CompositeItem-DAnhs0Iq.js";import"./ToolbarRootContext-CFFUOJKL.js";import"./getDisabledMountTransitionStyles-DSCIpTNj.js";import"./getPseudoElementBounds-CWqSLITa.js";import"./chevron-down-Bqf_32Up.js";import"./index-CqaCF-Lj.js";import"./error-CUc6sGqF.js";import"./BaseCbacBanner-B3p4Si6P.js";import"./makeExternalStore-BjNlV_-Y.js";import"./Tooltip-DmimMIVR.js";import"./PopoverPopup-33EHLoGi.js";import"./debounce-Co2H-TBC.js";import"./useOsdkClient-DlUfDwbC.js";import"./tick-BZ_N3aoo.js";import"./DropdownField-D5iAZq6S.js";import"./isEqual-61N_qsVY.js";import"./withOsdkMetrics-WETF-eLM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
