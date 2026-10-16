import{f as p,j as e}from"./iframe-DbS9D_O3.js";import{O as i}from"./object-table-DYoBWSpa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CCKJK0hs.js";import"./Table-D4U-7O05.js";import"./index-DtbYZf2o.js";import"./Dialog-DfBMiG9A.js";import"./cross-D8Acxe7x.js";import"./svgIconContainer-BWtkfvw7.js";import"./useBaseUiId-DGo7w5rM.js";import"./InternalBackdrop-CUaheQ60.js";import"./composite-BVFSknHB.js";import"./index-DjECoGdr.js";import"./index-Cz6dsjwa.js";import"./index-Bo1c5tnJ.js";import"./useEventCallback-Bh0Tbg4X.js";import"./SkeletonBar-C0UKIou7.js";import"./LoadingCell-DXoSJvwg.js";import"./ColumnConfigDialog-LSyN-6-a.js";import"./DraggableList-Bl_hKlJz.js";import"./search-O2b5hRrN.js";import"./Input-BjkhNLJi.js";import"./useControlled-BU_DIXGN.js";import"./Button-CgXhCctb.js";import"./small-cross-CURfx7dD.js";import"./ActionButton-CV3Gtc6x.js";import"./Checkbox-DYEou9Z6.js";import"./useValueChanged-D8jiBEOA.js";import"./CollapsiblePanel-W0IgEcMp.js";import"./MultiColumnSortDialog-Ci9aVGlw.js";import"./MenuTrigger-Cx8VBTJz.js";import"./CompositeItem-CBVEdJrU.js";import"./ToolbarRootContext-DAT__9MO.js";import"./getDisabledMountTransitionStyles-B-ib1OlT.js";import"./getPseudoElementBounds-1TOviJ8v.js";import"./chevron-down-CRHApYO-.js";import"./index-Cn4ErW0D.js";import"./error-RW3dtBbn.js";import"./BaseCbacBanner-DI9iiF5O.js";import"./makeExternalStore-qkyjGCKT.js";import"./Tooltip-DDRYkVBh.js";import"./PopoverPopup-XTmmwdNv.js";import"./debounce-CLlBWcHq.js";import"./useOsdkClient-CkkpSDd5.js";import"./tick-BOzZ-jjE.js";import"./DropdownField-D6cu5JEW.js";import"./isEqual-CNxWTIVQ.js";import"./withOsdkMetrics-COgOpeFu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
