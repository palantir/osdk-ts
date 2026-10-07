import{f as p,j as e}from"./iframe-Dsupwakr.js";import{O as i}from"./object-table-w2-fiDar.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CR7mXLCL.js";import"./Table-BOxk3yVu.js";import"./index-CkpgR3fu.js";import"./Dialog-CmgL-5Qa.js";import"./cross-CWb-HvPA.js";import"./svgIconContainer-C-Aw8Ccc.js";import"./useBaseUiId-DzCfcDkQ.js";import"./InternalBackdrop-TqY-ZmCF.js";import"./composite-HdCWnL8f.js";import"./index-B_g_AMfh.js";import"./index-ChctX4zI.js";import"./index-CkY0X6aD.js";import"./useEventCallback-hg8NIUwU.js";import"./SkeletonBar-CS_2Phj-.js";import"./LoadingCell-DAV-Cnle.js";import"./ColumnConfigDialog-FZLRyMnP.js";import"./DraggableList-BlXMBhwx.js";import"./search-B3WEXmh0.js";import"./Input-C5vpLtnd.js";import"./useControlled-CqadE3GD.js";import"./Button-D1tcxnZe.js";import"./small-cross-lpp9GSO5.js";import"./ActionButton-DFIDoYFE.js";import"./Checkbox-B32Wz5CE.js";import"./useValueChanged-D8HWHRkD.js";import"./CollapsiblePanel-DHvmYoFQ.js";import"./MultiColumnSortDialog-DB5S2PrC.js";import"./MenuTrigger-sLihCRYM.js";import"./CompositeItem-B9L7nJBI.js";import"./ToolbarRootContext-BtvPE-us.js";import"./getDisabledMountTransitionStyles-C4yseyHM.js";import"./getPseudoElementBounds-C9z3taTH.js";import"./chevron-down-CDVIUa1b.js";import"./index-J7JFMYQD.js";import"./error-CLndc-8a.js";import"./BaseCbacBanner-BdKOGSlG.js";import"./makeExternalStore-cmPwX49q.js";import"./Tooltip-CcYrLi8s.js";import"./PopoverPopup-BdZyFeD4.js";import"./debounce-FnFOEK_K.js";import"./useOsdkClient-3MHXKvwo.js";import"./tick-hPempDzT.js";import"./DropdownField-7N09oAJb.js";import"./isEqual-DdnTZVHH.js";import"./withOsdkMetrics-Chrjv6Bf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
