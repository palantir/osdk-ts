import{f as p,j as e}from"./iframe-CUQ6pW6f.js";import{O as i}from"./object-table-BY2xmCUc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-R0VkCi4m.js";import"./Table-B9k0d-uf.js";import"./index-h-DI9Lrm.js";import"./Dialog-SZ9zV0cP.js";import"./cross-DBScoIN6.js";import"./svgIconContainer-DgxjXUVD.js";import"./useBaseUiId-io2D7EyL.js";import"./InternalBackdrop-DeOAfNuf.js";import"./composite-DVURSZ_Q.js";import"./index-sOt4flAH.js";import"./index-B1pgXqxk.js";import"./index-BwGZQTcg.js";import"./useEventCallback-CBHs8zKc.js";import"./SkeletonBar-BRdyWD8N.js";import"./LoadingCell-GiHphTDn.js";import"./ColumnConfigDialog-BO_mXVOj.js";import"./DraggableList-hV8CyFWc.js";import"./search-NIM10vXd.js";import"./Input-BeRbTOIW.js";import"./useControlled-zbqpEGsi.js";import"./Button-C1Q3ab7J.js";import"./small-cross-IXjjZnoD.js";import"./ActionButton-fmMUa4gl.js";import"./Checkbox-CmojO_tp.js";import"./useValueChanged-DLbw96lb.js";import"./CollapsiblePanel-DptBjV9D.js";import"./MultiColumnSortDialog-R9mxJ5MY.js";import"./MenuTrigger-k5HlBQvB.js";import"./CompositeItem-BFFGDsSt.js";import"./ToolbarRootContext-Bu39Qel7.js";import"./getDisabledMountTransitionStyles-CQIeX0Ub.js";import"./getPseudoElementBounds-Ei-zDx44.js";import"./chevron-down-s1tgkNuZ.js";import"./index-DF9wOV2c.js";import"./error-hc0pOP7n.js";import"./BaseCbacBanner-Dg3AdP8h.js";import"./makeExternalStore-Bm8o0kSK.js";import"./Tooltip-Fo__1c0c.js";import"./PopoverPopup-D70TLWQP.js";import"./debounce-BSpE_UgL.js";import"./useOsdkClient-98hCJrJL.js";import"./tick-Bde80KdX.js";import"./DropdownField-OJ4m5ByP.js";import"./isEqual-DUoNzBVM.js";import"./withOsdkMetrics-C6sVCQ7L.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
