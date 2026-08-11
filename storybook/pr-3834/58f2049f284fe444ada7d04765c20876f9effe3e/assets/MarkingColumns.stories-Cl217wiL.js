import{f as p,j as e}from"./iframe-DlM6B-FB.js";import{O as i}from"./object-table-CWtObA7w.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-u2RLrIGI.js";import"./Table-Ct3IwB6a.js";import"./index-CYQRwdVV.js";import"./Dialog-BJ_2_ABV.js";import"./cross-BZZx8k18.js";import"./svgIconContainer-noCDTri9.js";import"./useBaseUiId-DRE93LYc.js";import"./InternalBackdrop-dxLX1x9n.js";import"./composite-CrTNbjQa.js";import"./index-B0PJMKha.js";import"./index-57kYohf7.js";import"./index-ci9DTaVf.js";import"./useEventCallback-DyRutwG_.js";import"./SkeletonBar-CAOnuNcl.js";import"./LoadingCell-DjcUh_dy.js";import"./ColumnConfigDialog-uNmeZN2x.js";import"./DraggableList-Dbc9mMK6.js";import"./search-BYOBZNp-.js";import"./Input-D_WeNPfg.js";import"./useControlled-CsLIsW3G.js";import"./isEqual-B4P0XCLO.js";import"./isObject-CEMnqBAF.js";import"./Button-A7YjjwPO.js";import"./ActionButton-DM2YiDdT.js";import"./Checkbox-yMFEsdFS.js";import"./useValueChanged-DoAX728p.js";import"./CollapsiblePanel-B4oiENW1.js";import"./MultiColumnSortDialog-DutiDnG3.js";import"./MenuTrigger-CqVn8n34.js";import"./CompositeItem-Btf0WYJg.js";import"./ToolbarRootContext-BiI_JxAm.js";import"./getDisabledMountTransitionStyles-DUy6Xf2g.js";import"./getPseudoElementBounds-CD3YwOAf.js";import"./chevron-down-CsEGKzIn.js";import"./index-BDbD87hK.js";import"./error-DqZBJOa8.js";import"./BaseCbacBanner-DGBNYoyp.js";import"./makeExternalStore-0nWRtaCT.js";import"./Tooltip-DHTNTZjs.js";import"./PopoverPopup-CoUIDpDw.js";import"./toNumber-CVKNIu72.js";import"./useOsdkClient-CiFACcQR.js";import"./tick-_fMD3p21.js";import"./DropdownField-CtlbtoUq.js";import"./withOsdkMetrics-CvYqftk7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
