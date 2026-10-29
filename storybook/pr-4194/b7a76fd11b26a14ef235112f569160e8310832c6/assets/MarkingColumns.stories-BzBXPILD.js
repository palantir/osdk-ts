import{f as p,j as e}from"./iframe-DZdi5qVl.js";import{O as i}from"./object-table-Dr3v4Q9V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Uouo8HcN.js";import"./Table-CsSEBtiU.js";import"./index-Bg61eIIa.js";import"./Dialog-Dfj1ftg0.js";import"./cross-B9sTw1kj.js";import"./svgIconContainer-DxhMpPws.js";import"./useBaseUiId-Mz3L6_Ly.js";import"./InternalBackdrop-vWueL81t.js";import"./composite-D3C2nmMl.js";import"./index-CVgHOiGf.js";import"./index-DFxmPpXp.js";import"./index-CK_zKJ7H.js";import"./useEventCallback-CHzTdRmo.js";import"./SkeletonBar-D7h-d6LQ.js";import"./LoadingCell-BrgECPSf.js";import"./ColumnConfigDialog-DmwZm_qS.js";import"./DraggableList-DH_4vMJj.js";import"./search-1yJPrdVL.js";import"./Input-I_C95g_4.js";import"./useControlled-BxMGJ1iI.js";import"./Button-Bc-yRCfH.js";import"./small-cross-DP0jWCcr.js";import"./ActionButton-Dh4c5JV5.js";import"./Checkbox-zPHJVy23.js";import"./useValueChanged-4m8KuuR6.js";import"./CollapsiblePanel-CaTF9gHO.js";import"./MultiColumnSortDialog-CF5fTjri.js";import"./MenuTrigger-BYxKKEja.js";import"./CompositeItem-CidR49nz.js";import"./ToolbarRootContext-CRfH5r80.js";import"./getDisabledMountTransitionStyles-Bgmfz7Hi.js";import"./getPseudoElementBounds-CVv7wXsz.js";import"./chevron-down-DWbMZGTs.js";import"./index-BNarussk.js";import"./error-CzW1HZwX.js";import"./BaseCbacBanner-C7-OfbFz.js";import"./makeExternalStore-COQibzUC.js";import"./Tooltip-CUbiiQ57.js";import"./PopoverPopup-CSHu41HL.js";import"./debounce-BSOX5tNy.js";import"./useOsdkClient-D0sO6BtF.js";import"./tick-CSSMXgbf.js";import"./DropdownField-xv8_ACXP.js";import"./isEqual-B8EeTfoX.js";import"./withOsdkMetrics-CA01Qt6R.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
