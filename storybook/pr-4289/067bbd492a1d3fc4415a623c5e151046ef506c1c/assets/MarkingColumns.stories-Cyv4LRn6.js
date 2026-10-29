import{f as p,j as e}from"./iframe-BxJiroe5.js";import{O as i}from"./object-table-w9yz1IDQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLdhLncI.js";import"./Table-CrHDgyUk.js";import"./index-D3_UFpM5.js";import"./Dialog-Bl6vHuaN.js";import"./cross-Bw3wvyRT.js";import"./svgIconContainer-C-ufoPHL.js";import"./useBaseUiId-CsOPh1qV.js";import"./InternalBackdrop-AN7PHPbY.js";import"./composite-BKj-HEYH.js";import"./index-nC3VniDk.js";import"./index-0CUe0U0r.js";import"./index-C_1QgYte.js";import"./useEventCallback-D4kZLjoj.js";import"./SkeletonBar-CGOwo2DD.js";import"./LoadingCell-CvdNH18k.js";import"./ColumnConfigDialog-DOlJ8-4o.js";import"./DraggableList-CD2xfPmV.js";import"./search-JlbJ_F58.js";import"./Input-DEdpGx6f.js";import"./useControlled-DfqnBr2w.js";import"./Button-Bo57TzJg.js";import"./small-cross-CYWa9OHl.js";import"./ActionButton-DQczrpII.js";import"./Checkbox-CePSClb6.js";import"./useValueChanged-Cp5QQiYs.js";import"./CollapsiblePanel-7oLCwys7.js";import"./MultiColumnSortDialog-Cirx4nz-.js";import"./MenuTrigger-VFGNWgnV.js";import"./CompositeItem-BT8yR1a5.js";import"./ToolbarRootContext--suhwR1X.js";import"./getDisabledMountTransitionStyles-DsPFGkAu.js";import"./getPseudoElementBounds-xDGWCFZp.js";import"./chevron-down-DjbhW8-h.js";import"./index-hrPqGcKI.js";import"./error-CmKYwFXp.js";import"./BaseCbacBanner-B2hkiRDH.js";import"./makeExternalStore-CSiVCh7w.js";import"./Tooltip-DMWyzbQ6.js";import"./PopoverPopup-BhS3yPpf.js";import"./debounce-ZBq--l-M.js";import"./useOsdkClient-DDpZHt2c.js";import"./tick-D-qLi4Dk.js";import"./DropdownField-DIb0z1YE.js";import"./isEqual-B9PqxiUA.js";import"./withOsdkMetrics-BDE5PqUj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
