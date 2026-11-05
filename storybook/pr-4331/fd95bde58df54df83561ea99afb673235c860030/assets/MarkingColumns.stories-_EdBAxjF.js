import{f as p,j as e}from"./iframe-DfKl0JGk.js";import{O as i}from"./object-table-dUfpxSwm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D2qZKtpg.js";import"./Table-CGlr-_aD.js";import"./index-aB099sio.js";import"./Dialog-C1AxpQJF.js";import"./cross-BNEnN7HL.js";import"./svgIconContainer-BAQrNZDY.js";import"./useBaseUiId-BFnbzIXU.js";import"./InternalBackdrop-DQiuVbxP.js";import"./composite-DoivXE_r.js";import"./index-CPvTwKaJ.js";import"./index-Cu8ZN5fR.js";import"./index-CKLNQuck.js";import"./useEventCallback-BPj-zmzp.js";import"./SkeletonBar-C3WAp5HN.js";import"./LoadingCell-Co75bDke.js";import"./ColumnConfigDialog-DLt-N818.js";import"./DraggableList-BmxyglgV.js";import"./search-BwIUQD_S.js";import"./Input-DOLGbI8I.js";import"./useControlled-CuqWKABX.js";import"./Button-B7sS73TJ.js";import"./small-cross-l23fMmT-.js";import"./ActionButton-BwTBHLns.js";import"./Checkbox-CpB2lS1k.js";import"./useValueChanged-BcrLWEfZ.js";import"./CollapsiblePanel-CgKpLYfM.js";import"./MultiColumnSortDialog-C1kscGYQ.js";import"./MenuTrigger-DB-s2Xyj.js";import"./CompositeItem-DCu8K_u-.js";import"./ToolbarRootContext-Djhkt96c.js";import"./getDisabledMountTransitionStyles-CvD_X3uJ.js";import"./getPseudoElementBounds-CiQNVwt7.js";import"./chevron-down-CdRuI-bU.js";import"./index-B1rjjc3Y.js";import"./error-Ci3w5MtL.js";import"./BaseCbacBanner-A-HZBMDm.js";import"./makeExternalStore-CSIEjtLx.js";import"./Tooltip-bZjfkZin.js";import"./isObject-D8Oji8bH.js";import"./debounce-BoOWLf3v.js";import"./useOsdkClient-D-epmGHT.js";import"./tick-Bf5SboOl.js";import"./DropdownField-DWj7vxDR.js";import"./isEqual-Cw-Jmji8.js";import"./_baseIsEqual-DR0ymikg.js";import"./withOsdkMetrics-DiSdxyjG.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
