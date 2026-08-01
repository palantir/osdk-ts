import{f as p,j as e}from"./iframe-D1BrYSgn.js";import{O as i}from"./object-table-Bj9JA1Xc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-x1jfnViK.js";import"./Table-Dqc22tTG.js";import"./index-H1o4gMgc.js";import"./Dialog-CR1UIZo3.js";import"./cross-DKNlp0UL.js";import"./svgIconContainer-CQqlv9TI.js";import"./useBaseUiId-Dvap0bP_.js";import"./InternalBackdrop-DUf4EMeQ.js";import"./composite-D3X73IFC.js";import"./index-BZ-ZbQxZ.js";import"./index-i3VUUG_u.js";import"./index-BJAhCfnS.js";import"./useEventCallback-DIiO76cn.js";import"./SkeletonBar-C60U87_0.js";import"./LoadingCell-DF_FczQR.js";import"./ColumnConfigDialog-ubWDyr1h.js";import"./DraggableList-3I16ODhp.js";import"./search-CwESW8sH.js";import"./Input-C7rXISug.js";import"./useControlled-CefdKsdA.js";import"./isEqual-dQR431dZ.js";import"./isObject-D2ODchoK.js";import"./Button-BqE3w5dA.js";import"./ActionButton-Axn_JdZJ.js";import"./Checkbox-CS2akwig.js";import"./useValueChanged-BEvHhJ0_.js";import"./CollapsiblePanel-aDTeH6iG.js";import"./MultiColumnSortDialog-_IeECp3G.js";import"./MenuTrigger-3WsS15cK.js";import"./CompositeItem-Bb6lkocQ.js";import"./ToolbarRootContext-B-YNIawA.js";import"./getDisabledMountTransitionStyles-OzosozBh.js";import"./getPseudoElementBounds-CtaIpHjM.js";import"./chevron-down-YMA5FLRc.js";import"./index-nPGdI-1b.js";import"./error-Ccjv0zYu.js";import"./BaseCbacBanner-D1FlymIK.js";import"./makeExternalStore-COZpMJn9.js";import"./Tooltip-DQWY4I5i.js";import"./PopoverPopup-Bx9_RsE6.js";import"./toNumber-rHQjPixX.js";import"./useOsdkClient-Bm4EvmOB.js";import"./tick-CCRdabew.js";import"./DropdownField-isqQdDNF.js";import"./withOsdkMetrics-cOiQ1jpU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
