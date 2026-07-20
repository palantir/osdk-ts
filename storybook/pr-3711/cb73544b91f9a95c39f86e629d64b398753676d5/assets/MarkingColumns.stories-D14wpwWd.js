import{f as p,j as e}from"./iframe-BeWD4gFl.js";import{O as i}from"./object-table-kxr7lL-h.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dw7qT2Q0.js";import"./Table-CsTZe9mw.js";import"./index-BXKqMrkH.js";import"./Dialog-BB46r7YI.js";import"./cross-D5kvX5ak.js";import"./svgIconContainer-DXjOt0sW.js";import"./useBaseUiId-BGPDWa3G.js";import"./InternalBackdrop-1EHWPanZ.js";import"./composite-nAA0SdpW.js";import"./index-Cl6Uh4EY.js";import"./index-4cN8XWCC.js";import"./index-BocqDfMV.js";import"./useEventCallback-DIsWsmOW.js";import"./SkeletonBar-D_WVZmsa.js";import"./LoadingCell-CtjJSRhl.js";import"./ColumnConfigDialog-6CV6SSHq.js";import"./DraggableList-CfKV8oK8.js";import"./search-CI0bdP3y.js";import"./Input-CAOYmcYS.js";import"./useControlled-Dqdvh-ch.js";import"./isEqual-FD81JcUf.js";import"./isObject-CjHqv28Z.js";import"./Button-CRhC6gUl.js";import"./ActionButton-CLWa40Ck.js";import"./Checkbox-B-pIlebK.js";import"./useValueChanged-CPtjmM5K.js";import"./CollapsiblePanel-CP0YRX0m.js";import"./MultiColumnSortDialog-CS2i_d3d.js";import"./MenuTrigger-DGmhqAjp.js";import"./CompositeItem-B0kK1CX0.js";import"./ToolbarRootContext-D9znTR5H.js";import"./getDisabledMountTransitionStyles-D6tYiR7K.js";import"./getPseudoElementBounds-B8BrzO0t.js";import"./chevron-down-jcoLaz3a.js";import"./index-CAel4vVU.js";import"./error-zP3pcuoR.js";import"./BaseCbacBanner-DL6YwPPT.js";import"./makeExternalStore-C1_YkvoA.js";import"./Tooltip-BytnA-aj.js";import"./PopoverPopup-BWcXlZ32.js";import"./toNumber-CxGch30D.js";import"./useOsdkClient-CUNCiNWK.js";import"./tick-DVsFno1_.js";import"./DropdownField-BBKTkkel.js";import"./withOsdkMetrics-t9e0BscJ.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
