import{f as p,j as e}from"./iframe-CzOIzVud.js";import{O as i}from"./object-table-BiaV50TY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CwMKM08Q.js";import"./Table-C1slSHqd.js";import"./index-CTmIGBdU.js";import"./Dialog-DDNGSzjz.js";import"./cross-ChoO-hHZ.js";import"./svgIconContainer-0bhWATaq.js";import"./useBaseUiId-PA6AbvCv.js";import"./InternalBackdrop-8vONEObA.js";import"./composite-CCnWWb1N.js";import"./index-CYHilSIV.js";import"./index-OcnJrvDb.js";import"./index-CeqpJRDR.js";import"./useEventCallback-e2owZAXd.js";import"./SkeletonBar-BM-didmo.js";import"./LoadingCell-GADOyGu6.js";import"./ColumnConfigDialog-DTctQD0N.js";import"./DraggableList-BRQYiX0W.js";import"./search-OylK7gf9.js";import"./Input-C7TpWAR_.js";import"./useControlled-Bl4FNa4w.js";import"./Button-PAMPzLp5.js";import"./small-cross-Cev--Ndg.js";import"./ActionButton-BhhEiGs3.js";import"./Checkbox-C-AKjDp-.js";import"./useValueChanged-DAu4NU-7.js";import"./CollapsiblePanel-Cfd_4ZcG.js";import"./MultiColumnSortDialog-Cgs8kePe.js";import"./MenuTrigger-BflBD4VN.js";import"./CompositeItem-A6EkfQUI.js";import"./ToolbarRootContext-CMaoaTCy.js";import"./getDisabledMountTransitionStyles-Dii4bpI2.js";import"./getPseudoElementBounds-B02vA_g5.js";import"./chevron-down-Cb1symQ7.js";import"./index-BFY6m5n5.js";import"./error-bNK0ajAf.js";import"./BaseCbacBanner-X2T3Xpv6.js";import"./makeExternalStore-BLR6RjGC.js";import"./Tooltip-DObflQ9W.js";import"./PopoverPopup-lEB4hKfS.js";import"./debounce-C1RT7wUt.js";import"./useOsdkClient-Cfr0VwOI.js";import"./tick-sKwgcsDW.js";import"./DropdownField-CImlhZV3.js";import"./isEqual-C17Xnhpn.js";import"./withOsdkMetrics-C2KUxQ8x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
