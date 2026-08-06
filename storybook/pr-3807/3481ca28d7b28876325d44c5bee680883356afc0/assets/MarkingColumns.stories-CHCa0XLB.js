import{f as p,j as e}from"./iframe-CIDkGdxn.js";import{O as i}from"./object-table-CDvhocFU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQdeEyPy.js";import"./Table-CeTkSjYZ.js";import"./index-BJ5omvkY.js";import"./Dialog-BS3XtVnN.js";import"./cross-DiLX3wCt.js";import"./svgIconContainer-DvFKWRFA.js";import"./useBaseUiId-WZ7ghEOy.js";import"./InternalBackdrop-CCM9B3tL.js";import"./composite-D_D3blZ6.js";import"./index-Bm0NEbpd.js";import"./index-BRU202F9.js";import"./index-DCodQMOy.js";import"./useEventCallback-DYFKStAK.js";import"./SkeletonBar-DLywdHj8.js";import"./LoadingCell-BkbNULS7.js";import"./ColumnConfigDialog-1Pa3efDq.js";import"./DraggableList-CVTfhVx9.js";import"./search-D4KYriyJ.js";import"./Input-D-L1f88H.js";import"./useControlled-CxUQTcdD.js";import"./isEqual-CZm5WjX0.js";import"./small-cross-CqSaUkaj.js";import"./Button-DY2ccd-k.js";import"./ActionButton-k1VAR5BB.js";import"./Checkbox-DGJWvYrt.js";import"./useValueChanged-CtYbXPVR.js";import"./CollapsiblePanel-BnsCPhWJ.js";import"./MultiColumnSortDialog-5Y6Y8h7a.js";import"./MenuTrigger-D33FFHUx.js";import"./CompositeItem-B9naYOTm.js";import"./ToolbarRootContext-B1YU7RoG.js";import"./getDisabledMountTransitionStyles-BdszaF3h.js";import"./getPseudoElementBounds-Cf-uGjWx.js";import"./chevron-down-CvarMxgC.js";import"./index-58UGqHrm.js";import"./error-lvST2j8Q.js";import"./BaseCbacBanner-DUW70VF8.js";import"./makeExternalStore-BYndnrrh.js";import"./Tooltip-BzLx1d6a.js";import"./PopoverPopup-BteXE5Iu.js";import"./Combobox-BKIb61BZ.js";import"./useOsdkClient-BpRqG14V.js";import"./tick-CPPnJemQ.js";import"./DropdownField-DT0ygf3u.js";import"./withOsdkMetrics-CzLaYybz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
