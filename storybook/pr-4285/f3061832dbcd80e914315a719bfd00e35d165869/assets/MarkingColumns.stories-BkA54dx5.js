import{f as p,j as e}from"./iframe-97p3M09u.js";import{O as i}from"./object-table-D01AYNwF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CxVBxFAW.js";import"./Table-_uA8jK5o.js";import"./index-DVPCIdd3.js";import"./Dialog-beHxH1X-.js";import"./cross-CaR0F6Vj.js";import"./svgIconContainer-BmP4bwRX.js";import"./useBaseUiId-DuQvLNdl.js";import"./InternalBackdrop-DgKNXgWX.js";import"./composite-B7fVO-VQ.js";import"./index-mZLyQtJX.js";import"./index-DxXJGm8P.js";import"./index-WmjPk0xi.js";import"./useEventCallback-DsROmeik.js";import"./SkeletonBar-scZGsopT.js";import"./LoadingCell-BNaB6DR_.js";import"./ColumnConfigDialog-YnquIy3P.js";import"./DraggableList-BrDMHZmf.js";import"./search-C9oUUQa_.js";import"./Input-CM6A8_jN.js";import"./useControlled-BVQhU86y.js";import"./Button-D31kv467.js";import"./small-cross-D6oSifG2.js";import"./ActionButton-Cp3aDaBn.js";import"./Checkbox-Uu7inM8S.js";import"./useValueChanged-DmJ879ms.js";import"./CollapsiblePanel-DfVnlVp0.js";import"./MultiColumnSortDialog-DVSTR6wV.js";import"./MenuTrigger-DSwrR03C.js";import"./CompositeItem-goXUaz1O.js";import"./ToolbarRootContext-BkrLDfAz.js";import"./getDisabledMountTransitionStyles-D7gTNN3D.js";import"./getPseudoElementBounds-C3vtCcOF.js";import"./chevron-down-BW9trwrB.js";import"./index-CpQuftWe.js";import"./error-DutCoEmF.js";import"./BaseCbacBanner-2J4T5KAr.js";import"./makeExternalStore-hGx-yTqS.js";import"./Tooltip-DCQRgWv6.js";import"./PopoverPopup-Cv-T7MGp.js";import"./debounce-byeXsieX.js";import"./useOsdkClient-Db8XiLDB.js";import"./tick-CtNHx9U0.js";import"./DropdownField-CLkxqAQ8.js";import"./isEqual-COZEKq5T.js";import"./withOsdkMetrics-vNphc_NN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
