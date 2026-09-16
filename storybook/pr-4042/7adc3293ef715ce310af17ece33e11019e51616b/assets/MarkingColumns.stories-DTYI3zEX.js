import{f as p,j as e}from"./iframe-DyxaUq2K.js";import{O as i}from"./object-table-Cab-U-nF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-RXXcFWVp.js";import"./Table-CVgNjPUz.js";import"./index-04K8kL6p.js";import"./Dialog-C_c6hTP2.js";import"./cross-DlOxrMTv.js";import"./svgIconContainer-Dx_A2X3i.js";import"./useBaseUiId-B2pmxP6_.js";import"./InternalBackdrop-BBHbL8SK.js";import"./composite-DNSc_3T9.js";import"./index-CXKzX9X0.js";import"./index-Df5y4IMk.js";import"./index-DKo2aq1I.js";import"./useEventCallback-D4ZMCqPC.js";import"./SkeletonBar-Bqj4hPxh.js";import"./LoadingCell-CM1lsDQT.js";import"./ColumnConfigDialog-DtG0KRgU.js";import"./DraggableList-BxvnMcL6.js";import"./search-Dqp-f9oD.js";import"./Input-Ci8-51zi.js";import"./useControlled--GslnpxD.js";import"./Button-BJP0lB5I.js";import"./small-cross-DdubBf-L.js";import"./ActionButton-Dzu9roh2.js";import"./Checkbox-KnYOSa4F.js";import"./useValueChanged-vKl7h4vt.js";import"./CollapsiblePanel-BQrErOfm.js";import"./MultiColumnSortDialog-nacG3IFt.js";import"./MenuTrigger-BxwW9Xk8.js";import"./CompositeItem-BKwp9a98.js";import"./ToolbarRootContext-pFU5HeoC.js";import"./getDisabledMountTransitionStyles-CKsY1twY.js";import"./getPseudoElementBounds-BmT1xLZA.js";import"./chevron-down-DiWP7BJ0.js";import"./index-CRzwoc2n.js";import"./error-BkdYgUyU.js";import"./BaseCbacBanner-BIlh-9tP.js";import"./makeExternalStore-DcK2tIHU.js";import"./Tooltip--dIkHBOm.js";import"./PopoverPopup-DXEKH04o.js";import"./debounce-Dhv4Wot5.js";import"./useOsdkClient-NthVmhh7.js";import"./tick-BSn6tzcY.js";import"./DropdownField-7FFksTTF.js";import"./isEqual-DqocYguF.js";import"./withOsdkMetrics-ac55KtkN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
