import{f as p,j as e}from"./iframe-Cm8T158U.js";import{O as i}from"./object-table-Cb3Keis5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dg6khx2b.js";import"./Table-DuOLMAs1.js";import"./index-CgyhAk5D.js";import"./Dialog-xyprgOLS.js";import"./cross-DRMZ0Z7-.js";import"./svgIconContainer-CwvpItZa.js";import"./useBaseUiId-DOlC9YEi.js";import"./InternalBackdrop-BGasJMVv.js";import"./composite-BF9l_TFl.js";import"./index-B-f--Lzy.js";import"./index-DBvuzU0Y.js";import"./index-B9yl0hZC.js";import"./useEventCallback-Dlv37ysr.js";import"./SkeletonBar-BQgWCrnN.js";import"./LoadingCell-Ch4zihh6.js";import"./ColumnConfigDialog-DMzj1S3_.js";import"./DraggableList-BxTxZMPB.js";import"./search-C5kq4KUb.js";import"./Input-CwlN5ff_.js";import"./useControlled-2KbdkYL7.js";import"./Button-CDJirsdr.js";import"./small-cross-CuC0UbdT.js";import"./ActionButton-CRZRMee5.js";import"./Checkbox-CKEyXbhH.js";import"./useValueChanged-DPtvyx-N.js";import"./CollapsiblePanel-CQcWGRlg.js";import"./MultiColumnSortDialog-_qM0Xd-W.js";import"./MenuTrigger-DMBZfMn5.js";import"./CompositeItem-DdfovVZg.js";import"./ToolbarRootContext-81tt_rrb.js";import"./getDisabledMountTransitionStyles-FM8gFJSe.js";import"./getPseudoElementBounds-Dy-hiku1.js";import"./chevron-down-CcWrtqn6.js";import"./index-D9OySAXe.js";import"./error-W0yg1EoP.js";import"./BaseCbacBanner-tcWoxYJS.js";import"./makeExternalStore-Bwp5qgF6.js";import"./Tooltip-f6_C30K5.js";import"./PopoverPopup-CIDF2QJi.js";import"./debounce-DlkYXKLI.js";import"./useOsdkClient-D7ijOYA2.js";import"./tick-qL-0oQVk.js";import"./DropdownField-Dl8m0YJt.js";import"./isEqual-D4LaE-Zu.js";import"./withOsdkMetrics-By5xofqX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
