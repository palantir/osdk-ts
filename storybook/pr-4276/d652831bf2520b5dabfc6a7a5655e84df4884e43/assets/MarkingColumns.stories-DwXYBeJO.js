import{f as p,j as e}from"./iframe-CzBdkE8j.js";import{O as i}from"./object-table-Xx4g3onV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DAcIQxKV.js";import"./Table-BL5aJ5vf.js";import"./index-nrSAC82l.js";import"./Dialog-0yBycXYz.js";import"./cross-DJGmKxbL.js";import"./svgIconContainer-vvQ2H1Kh.js";import"./useBaseUiId-DYoSQlXN.js";import"./InternalBackdrop-BX1TzKYN.js";import"./composite-NGmoik8z.js";import"./index-DxeeQ0ql.js";import"./index-DjEUrq-J.js";import"./index-C1mzUzFI.js";import"./useEventCallback-CE4dkAWk.js";import"./SkeletonBar-CxjV6sy3.js";import"./LoadingCell-9tetKVhd.js";import"./ColumnConfigDialog-6-FrOOaZ.js";import"./DraggableList-Dt-LkUjz.js";import"./search-G4OheDlQ.js";import"./Input-C91PS3np.js";import"./useControlled-CvawZQ67.js";import"./Button-BbinMP78.js";import"./small-cross-BTjUTHgC.js";import"./ActionButton-s9UbQrV0.js";import"./Checkbox-BnDFkLF7.js";import"./useValueChanged-B4Hgf5Tp.js";import"./CollapsiblePanel-Datx7g9u.js";import"./MultiColumnSortDialog-BdKQgwrU.js";import"./MenuTrigger-BPqOoWyQ.js";import"./CompositeItem-6yW-EHF-.js";import"./ToolbarRootContext-B8cFWt1N.js";import"./getDisabledMountTransitionStyles-DVtht9dj.js";import"./getPseudoElementBounds-RzDWICHu.js";import"./chevron-down-BMeIm_My.js";import"./index-BHtlx1SN.js";import"./error-BChTcIQI.js";import"./BaseCbacBanner-CBzuV4Dn.js";import"./makeExternalStore-oT7e1se-.js";import"./Tooltip-kjlyHoV2.js";import"./isObject-Cd8fWrM7.js";import"./debounce-Da2LiWyo.js";import"./useOsdkClient-JXogxqf0.js";import"./tick-bUnIpS28.js";import"./DropdownField-2s0unNiS.js";import"./isEqual-CIxNRX36.js";import"./_baseIsEqual-DcQSHg13.js";import"./withOsdkMetrics-BruKftXq.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
