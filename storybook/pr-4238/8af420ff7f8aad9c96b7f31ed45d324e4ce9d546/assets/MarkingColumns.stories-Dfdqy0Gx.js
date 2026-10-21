import{f as p,j as e}from"./iframe-D_14QzXp.js";import{O as i}from"./object-table-BtmbLVpt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-COqd9mn5.js";import"./Table-IAu-PnGJ.js";import"./index-dgvA8TZ9.js";import"./Dialog-BDUhGb5s.js";import"./cross-CugZ9ecx.js";import"./svgIconContainer-DLS8mbZw.js";import"./useBaseUiId-CG8eOpE9.js";import"./InternalBackdrop-BYhYbM2Q.js";import"./composite-DPicY4x_.js";import"./index-Df1oZaSN.js";import"./index-Ccw16ZEo.js";import"./index-DHYIK6M_.js";import"./useEventCallback-DVpXlI6n.js";import"./SkeletonBar-CWcGqnRh.js";import"./LoadingCell-DYsyGVFb.js";import"./ColumnConfigDialog-Cnvh6W73.js";import"./DraggableList-BJFxTU3e.js";import"./search-kgDQ-7P8.js";import"./Input-DorH3bhS.js";import"./useControlled-DcIpQ5so.js";import"./Button-emDgWZB-.js";import"./small-cross-65_SY4Sp.js";import"./ActionButton-sw6PFJQG.js";import"./Checkbox-B6c6b4Z_.js";import"./useValueChanged-CZIdWuf_.js";import"./CollapsiblePanel-Dti1PGZr.js";import"./MultiColumnSortDialog-BfsZdYZC.js";import"./MenuTrigger-BTjSaEik.js";import"./CompositeItem-CEQFfLmp.js";import"./ToolbarRootContext-q675nIs9.js";import"./getDisabledMountTransitionStyles-BCowyj6U.js";import"./getPseudoElementBounds-Cxr1AJsy.js";import"./chevron-down-0GDoiAFe.js";import"./index-DY8cgXE9.js";import"./error-3iJhsGJG.js";import"./BaseCbacBanner-CaUloZOx.js";import"./makeExternalStore-C2nXARRC.js";import"./Tooltip-BhEyvTdz.js";import"./PopoverPopup-Bl0qtEmP.js";import"./debounce-B9L9eTna.js";import"./useOsdkClient-8tDFdRkv.js";import"./tick-fofCPZ0i.js";import"./DropdownField-BNL5kW_g.js";import"./isEqual-Diit75gH.js";import"./withOsdkMetrics-CCrpbMke.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
