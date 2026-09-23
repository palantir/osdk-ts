import{f as p,j as e}from"./iframe-4Ny8APPO.js";import{O as i}from"./object-table-BtuQNkk0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DHWrfsom.js";import"./Table-SlWSGRl1.js";import"./index-BDa5owMw.js";import"./Dialog-Blcy0i-P.js";import"./cross-CeVI-uk1.js";import"./svgIconContainer-CI9V091I.js";import"./useBaseUiId-Cylkv8_6.js";import"./InternalBackdrop-CNPXl5Xz.js";import"./composite-rxIlBuDW.js";import"./index-DZ12fAcl.js";import"./index-C2QpJmDZ.js";import"./index-ZaefoN4K.js";import"./useEventCallback-DATLyuw9.js";import"./SkeletonBar-ByXHMYiN.js";import"./LoadingCell-_SUqlGt6.js";import"./ColumnConfigDialog-BR_l8BNb.js";import"./DraggableList-Ckkvfaos.js";import"./search-DqDmcAMp.js";import"./Input-BJD6b5K7.js";import"./useControlled-CDmZbK63.js";import"./Button-DLJHtyJi.js";import"./small-cross-DU1OkuNU.js";import"./ActionButton-DnZkMncX.js";import"./Checkbox-CtcGgixF.js";import"./useValueChanged-llMKBcc6.js";import"./CollapsiblePanel-DDWqfvdj.js";import"./MultiColumnSortDialog-BlY_gMV9.js";import"./MenuTrigger-DfhtGYzF.js";import"./CompositeItem-BlU9UJGi.js";import"./ToolbarRootContext-4zNRwQbb.js";import"./getDisabledMountTransitionStyles-PyWvPrXs.js";import"./getPseudoElementBounds-B8rT1ff7.js";import"./chevron-down-UQ0goxb7.js";import"./index-BpN3FT8y.js";import"./error-al8La3lG.js";import"./BaseCbacBanner-vi9CfhND.js";import"./makeExternalStore-DpCV1D9e.js";import"./Tooltip-CpfYCKb0.js";import"./PopoverPopup-BfwdSH7F.js";import"./debounce-DergXY_u.js";import"./useOsdkClient-CvNMVACY.js";import"./tick-DqjruMR1.js";import"./DropdownField-B1diitiQ.js";import"./isEqual-DKkbDDqj.js";import"./withOsdkMetrics-CwVVh_LX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
