import{f as p,j as e}from"./iframe-BpjAczHY.js";import{O as i}from"./object-table-CbPG2EbH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-n775iZGy.js";import"./Table-C8bNeHtW.js";import"./index-B865hR58.js";import"./Dialog-C0PdJPQK.js";import"./cross-C6qTQWHW.js";import"./svgIconContainer-C3jJhmpt.js";import"./useBaseUiId-99hOwMJj.js";import"./InternalBackdrop-Nq7KwH4o.js";import"./composite-Dz8fJC5u.js";import"./index-CL2exV6n.js";import"./index-BGlvu2Wm.js";import"./index-DA4_2A10.js";import"./useEventCallback-B6zcZW3p.js";import"./SkeletonBar-BecfrY7r.js";import"./LoadingCell-vBGp6yxc.js";import"./ColumnConfigDialog-CfCkja_H.js";import"./DraggableList-DuvP9j4v.js";import"./search-NVe0lSCh.js";import"./Input-BK2Nmyqv.js";import"./useControlled-DGtH5z0Q.js";import"./Button-Dj8yiv60.js";import"./small-cross-DupO9VP4.js";import"./ActionButton-CRHWpJnS.js";import"./Checkbox-DfWTU0cg.js";import"./useValueChanged-CSF7lu2m.js";import"./CollapsiblePanel-By7EAy8-.js";import"./MultiColumnSortDialog-Ciz1sd7u.js";import"./MenuTrigger-Be270hxZ.js";import"./CompositeItem-DG1i5uV0.js";import"./ToolbarRootContext-BQn0Rtks.js";import"./getDisabledMountTransitionStyles-BgiX7odw.js";import"./getPseudoElementBounds-CCx4Tlrc.js";import"./chevron-down-_ycbe8m1.js";import"./index-DmLzhgLv.js";import"./error-Biwv1K3K.js";import"./BaseCbacBanner-B6WijF8k.js";import"./makeExternalStore-RoIlT1g0.js";import"./Tooltip-VrYqX_Lh.js";import"./PopoverPopup-BxpA88JM.js";import"./debounce-Ds0PQScg.js";import"./useOsdkClient-D0Eek7Y4.js";import"./tick-B4peCy1V.js";import"./DropdownField-BJglwOE0.js";import"./isEqual-D9lvvdTI.js";import"./withOsdkMetrics-C6lIiCV7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
