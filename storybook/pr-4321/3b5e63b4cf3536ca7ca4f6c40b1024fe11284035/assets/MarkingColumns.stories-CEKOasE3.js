import{f as p,j as e}from"./iframe-DyhO41Rj.js";import{O as i}from"./object-table-CnkMaw8t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIbx8URd.js";import"./Table-DdVB3AgN.js";import"./index-DwI7CQqH.js";import"./Dialog-CNd6Q5dO.js";import"./cross-CrdS3els.js";import"./svgIconContainer-DEkY-HLY.js";import"./useBaseUiId-Bew9-MTU.js";import"./InternalBackdrop-FIq_NBf8.js";import"./composite-Brg7gMZI.js";import"./index-UqD0hRj3.js";import"./index-DR9hE8qy.js";import"./index-EkCVf_dq.js";import"./useEventCallback-7-xYdRK3.js";import"./SkeletonBar-Bpd-j5zt.js";import"./LoadingCell-BvfQZvK_.js";import"./ColumnConfigDialog-e1j5Aaw0.js";import"./DraggableList-CEQggg39.js";import"./search-D8ph0Tmj.js";import"./Input-dlG_yuK1.js";import"./useControlled-BDcMaUKC.js";import"./Button-fa-PaPuc.js";import"./small-cross-DjI62rJX.js";import"./ActionButton-DMioYdTS.js";import"./Checkbox-DUBSVtNO.js";import"./useValueChanged-CMrkkb4b.js";import"./CollapsiblePanel-C9_ojemY.js";import"./MultiColumnSortDialog-Bu_hNZRG.js";import"./MenuTrigger-Du-AWTD8.js";import"./CompositeItem-B1D8TqxB.js";import"./ToolbarRootContext-CekAQhO_.js";import"./getDisabledMountTransitionStyles-DgZyOtdd.js";import"./getPseudoElementBounds-BJc2NM_P.js";import"./chevron-down-D6leDeN-.js";import"./index-DVDXXnZb.js";import"./error-DLjCGmmk.js";import"./BaseCbacBanner-svJHwMB0.js";import"./makeExternalStore-CEyr08K1.js";import"./Tooltip-BFvNQrGe.js";import"./isObject-Bu43GTjb.js";import"./debounce-IRvapgvb.js";import"./useOsdkClient-CaJv5Gl-.js";import"./tick-DgUcKmPU.js";import"./DropdownField-vXp1_pry.js";import"./isEqual-DB1uUQ8K.js";import"./_baseIsEqual-C1rqwiMB.js";import"./withOsdkMetrics-rGISHWN9.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
