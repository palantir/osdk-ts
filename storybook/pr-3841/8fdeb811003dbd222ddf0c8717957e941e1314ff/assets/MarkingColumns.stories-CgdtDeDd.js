import{f as p,j as e}from"./iframe-DmKkedGZ.js";import{O as i}from"./object-table-DUMEO3IQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-V3mfUD4w.js";import"./Table-CxneBsde.js";import"./index-5w_QhudL.js";import"./Dialog-DJiUSiQQ.js";import"./cross-CpmvhUuW.js";import"./svgIconContainer-DvNCuvEs.js";import"./useBaseUiId-DNfqz0_E.js";import"./InternalBackdrop-D7bVfifz.js";import"./composite-COYZrTxF.js";import"./index-CPiWOVlX.js";import"./index-CNJ8NeHE.js";import"./index-D9KyFoqb.js";import"./useEventCallback-CsLxej8y.js";import"./SkeletonBar-fZ5yiNKx.js";import"./LoadingCell-rPKZhNTr.js";import"./ColumnConfigDialog-DG0GJbFJ.js";import"./DraggableList-BH8H84LN.js";import"./search-xXbvdTMv.js";import"./Input-jwVhWV6R.js";import"./useControlled-DU4z2hem.js";import"./Button-D6JtrfeD.js";import"./small-cross-DvlEqh4P.js";import"./ActionButton-Co1jb0ag.js";import"./Checkbox-CdOwsFry.js";import"./useValueChanged-LDpI-6kA.js";import"./CollapsiblePanel-Boi6zITp.js";import"./MultiColumnSortDialog-BR6lWZGS.js";import"./MenuTrigger-D_YKNDey.js";import"./CompositeItem-D1JLw8xz.js";import"./ToolbarRootContext-DEQXnygN.js";import"./getDisabledMountTransitionStyles-DNkc-xRC.js";import"./getPseudoElementBounds-CijrryJg.js";import"./chevron-down-BfRThbY_.js";import"./index-C25z4X6E.js";import"./error-ByC5dNyY.js";import"./BaseCbacBanner-DTd0cvGG.js";import"./makeExternalStore-EEoAsRvH.js";import"./Tooltip-C62L9zHh.js";import"./PopoverPopup-Bb1qebqW.js";import"./debounce-BZWL05Yy.js";import"./useOsdkClient-BXLUOpZn.js";import"./tick-Ehn2MHYk.js";import"./DropdownField-NmOMpXPV.js";import"./isEqual-CFNDpXJ9.js";import"./withOsdkMetrics-Benbq0c_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
