import{f as p,j as e}from"./iframe-DWfJ7zGz.js";import{O as i}from"./object-table-ifnqVfK_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BLrTx2bV.js";import"./Table-DOkpSLD4.js";import"./index-gWYSOhKn.js";import"./Dialog-Dx95N8v8.js";import"./cross-osdHHFE1.js";import"./svgIconContainer-DSpgm6ur.js";import"./useBaseUiId-R5Nwqwa3.js";import"./InternalBackdrop-D1mFfPjU.js";import"./composite-CRrOsq3D.js";import"./index-CjmeahRK.js";import"./index-B26u0c0l.js";import"./index-SCL8CoE2.js";import"./useEventCallback-Cb-N_Op1.js";import"./SkeletonBar-C6g6-rvc.js";import"./LoadingCell-XgZ7JSq_.js";import"./ColumnConfigDialog-C922l1BR.js";import"./DraggableList-C-LbpFb3.js";import"./search-tI2FUc7S.js";import"./Input-nyG97nhE.js";import"./useControlled-x_cvzMnI.js";import"./Button-D-n8pDY3.js";import"./small-cross-D0wotoyp.js";import"./ActionButton-dHwh91E3.js";import"./Checkbox-B1O25Qci.js";import"./useValueChanged-6sg9t9oG.js";import"./CollapsiblePanel-DvipQVw5.js";import"./MultiColumnSortDialog-HHS7Y2AU.js";import"./MenuTrigger-DzPNPZYw.js";import"./CompositeItem-Db-3OHhb.js";import"./ToolbarRootContext-Dw2-n8FY.js";import"./getDisabledMountTransitionStyles-Ckgs-zFo.js";import"./getPseudoElementBounds-CH6esPuI.js";import"./chevron-down-B0X1iKQC.js";import"./index-1zb5OrbF.js";import"./error-DqCKC8-V.js";import"./BaseCbacBanner-DglM1_JI.js";import"./makeExternalStore-BbdjnJds.js";import"./Tooltip-D5kCXUrq.js";import"./PopoverPopup-DzxcpTZ2.js";import"./debounce-D-xnc5gC.js";import"./useOsdkClient-BrdUMoba.js";import"./tick-B7MxtGy7.js";import"./DropdownField-BX_-W0jL.js";import"./isEqual-Dymixah0.js";import"./withOsdkMetrics-CuePKHJA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
