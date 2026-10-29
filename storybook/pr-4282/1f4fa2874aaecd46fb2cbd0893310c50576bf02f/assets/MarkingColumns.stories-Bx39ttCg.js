import{f as p,j as e}from"./iframe-DuvqzVxr.js";import{O as i}from"./object-table-ACOy5fIY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B8Qd9CCZ.js";import"./Table-t_ayPNbZ.js";import"./index-CAuUDW48.js";import"./Dialog-YTWXeUoK.js";import"./cross-D-jw0QJK.js";import"./svgIconContainer-D3ZSKuHH.js";import"./useBaseUiId-CfATFv1v.js";import"./InternalBackdrop-CLiFzfHC.js";import"./composite-CdnuQNOj.js";import"./index-Bs6MnhUR.js";import"./index-BfNHcsKt.js";import"./index-CmRTjbwa.js";import"./useEventCallback-Db_vpyOg.js";import"./SkeletonBar-BLNTNrn1.js";import"./LoadingCell-CsMzBol1.js";import"./ColumnConfigDialog-DMAc6Z0z.js";import"./DraggableList-C54BtvoC.js";import"./search-BeCT36MA.js";import"./Input-Wm8tLy-0.js";import"./useControlled-DqFDREqa.js";import"./Button-D-ya50CL.js";import"./small-cross-D2srWpyH.js";import"./ActionButton-DXzxj-c5.js";import"./Checkbox-DnX7hc9m.js";import"./useValueChanged-CIvJaurU.js";import"./CollapsiblePanel-Bp6GY39F.js";import"./MultiColumnSortDialog-wNvsXQUr.js";import"./MenuTrigger-Dq_Lo_bz.js";import"./CompositeItem-Dls_a94V.js";import"./ToolbarRootContext-BTKqEH_P.js";import"./getDisabledMountTransitionStyles-D5mHC2vC.js";import"./getPseudoElementBounds-D85lzNV4.js";import"./chevron-down-DD8mUth2.js";import"./index-fBn-5OyE.js";import"./error-BIPDQryL.js";import"./BaseCbacBanner-93_WTKD8.js";import"./makeExternalStore-pWtHUq0J.js";import"./Tooltip-DFnQGaCd.js";import"./PopoverPopup-B1BeyJb-.js";import"./debounce-498a9Eyo.js";import"./useOsdkClient-Da4jyrei.js";import"./tick-CYXQ7A8e.js";import"./DropdownField-CE0ndGls.js";import"./isEqual-ClyUabIX.js";import"./withOsdkMetrics-39xkLVPI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
