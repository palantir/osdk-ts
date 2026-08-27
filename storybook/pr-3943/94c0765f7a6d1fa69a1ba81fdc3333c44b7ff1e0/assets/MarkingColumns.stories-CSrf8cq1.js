import{f as p,j as e}from"./iframe-BdjRDCo-.js";import{O as i}from"./object-table-Dtcz12IT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BsLdtZok.js";import"./Table-Cx3axRXr.js";import"./index-47c2OpeK.js";import"./Dialog-DbIFtalD.js";import"./cross-B5GzLpqa.js";import"./svgIconContainer-CQO2iyCb.js";import"./useBaseUiId-D_XUMLa4.js";import"./InternalBackdrop-Wo6tyC9E.js";import"./composite-CKlKqtP8.js";import"./index-DauSPNF0.js";import"./index-C3FIy_al.js";import"./index-Dt84Iv_5.js";import"./useEventCallback-BMnGO4Fm.js";import"./SkeletonBar-B7Prl9lh.js";import"./LoadingCell-DacR6Cx9.js";import"./ColumnConfigDialog-Bup3DQUt.js";import"./DraggableList-akxDFxxW.js";import"./search-C7zMm79O.js";import"./Input-CxfR2yqt.js";import"./useControlled-B8Jz7rQz.js";import"./Button-BL8FosPK.js";import"./small-cross-Hk9lslT7.js";import"./ActionButton-BOzqWsgN.js";import"./Checkbox-DHdCg2eB.js";import"./useValueChanged-BxuwKHYK.js";import"./CollapsiblePanel-DsNgy45u.js";import"./MultiColumnSortDialog-CRXODrkC.js";import"./MenuTrigger-CegzCc63.js";import"./CompositeItem-C9-QWuFp.js";import"./ToolbarRootContext-B-UKwdIZ.js";import"./getDisabledMountTransitionStyles-DqVTgWbQ.js";import"./getPseudoElementBounds-D7e_8qLy.js";import"./chevron-down-CZ95xNZC.js";import"./index-DczRP-BI.js";import"./error-B9XMEbgf.js";import"./BaseCbacBanner-BVWMsn2z.js";import"./makeExternalStore-BzujWOSe.js";import"./Tooltip-BA98EOIH.js";import"./PopoverPopup-BQ8qOJ-A.js";import"./debounce-CDYkNytK.js";import"./useOsdkClient-G0DtmmXL.js";import"./tick-hmoZ_aS5.js";import"./DropdownField-J2qWCChs.js";import"./isEqual-BCmlNN5k.js";import"./withOsdkMetrics-Cd9aI-bB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
