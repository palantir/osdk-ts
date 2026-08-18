import{f as p,j as e}from"./iframe-BK0RufGl.js";import{O as i}from"./object-table-t3beq0jM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1x3XWjh.js";import"./Table-b9fWb8-J.js";import"./index-BC49ZXOf.js";import"./Dialog-CbB9yRpZ.js";import"./cross-fqPA6CW1.js";import"./svgIconContainer-BlFMB5mu.js";import"./useBaseUiId-frLuJhJZ.js";import"./InternalBackdrop-CCU68TOf.js";import"./composite-DlFm6szC.js";import"./index-zkQRtd-f.js";import"./index-DkQ29aQ-.js";import"./index-BGA0Seny.js";import"./useEventCallback-D-WAZtwW.js";import"./SkeletonBar-B3ZfYzgc.js";import"./LoadingCell-CHCWipwZ.js";import"./ColumnConfigDialog-COKkJ2pr.js";import"./DraggableList-CygnTHuy.js";import"./search-DuhXtbsI.js";import"./Input-BEeAXmcy.js";import"./useControlled-unttFX2J.js";import"./Button-DvmwcYmH.js";import"./small-cross-LgLYRP96.js";import"./ActionButton-balBVwMY.js";import"./Checkbox-DTs0zrQe.js";import"./useValueChanged-CepPqKH_.js";import"./CollapsiblePanel-LAagTPh8.js";import"./MultiColumnSortDialog-CC4yow6c.js";import"./MenuTrigger-ByOTJWGh.js";import"./CompositeItem-BbIk1WEG.js";import"./ToolbarRootContext-qtgBfN3j.js";import"./getDisabledMountTransitionStyles-B5ZQPzmi.js";import"./getPseudoElementBounds-CUox1hQw.js";import"./chevron-down-RflKAGzX.js";import"./index-CHiFjEhv.js";import"./error-0TFzhvIK.js";import"./BaseCbacBanner-BLULDpAD.js";import"./makeExternalStore-h_6mTVKe.js";import"./Tooltip-i56DZZjj.js";import"./PopoverPopup-Dmd4Fc1j.js";import"./debounce-Ay-ce3CA.js";import"./useOsdkClient-Bp4Do1pN.js";import"./tick-H75vELII.js";import"./DropdownField-XRnSzaZr.js";import"./isEqual-xJAxAgWV.js";import"./withOsdkMetrics-CflMk9Ld.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
