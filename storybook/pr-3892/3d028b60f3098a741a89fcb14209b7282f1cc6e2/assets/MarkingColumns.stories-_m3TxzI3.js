import{f as p,j as e}from"./iframe-DRjBmUXS.js";import{O as i}from"./object-table-CCujxvTS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DgOWrW9h.js";import"./Table-DIwzOFSU.js";import"./index-D6qvYW_s.js";import"./Dialog-CjgHm-ts.js";import"./cross-3MnbZVbU.js";import"./svgIconContainer-Bh_w5Xfd.js";import"./useBaseUiId-WS17y9nt.js";import"./InternalBackdrop-Bcffkz1I.js";import"./composite-rGdZym8a.js";import"./index-BCESHM1K.js";import"./index-BOS5xdCe.js";import"./index-DPmkOngm.js";import"./useEventCallback-CWAgAbba.js";import"./SkeletonBar-D8YwKkFm.js";import"./LoadingCell-DCOMCNJj.js";import"./ColumnConfigDialog-8AJxfk8z.js";import"./DraggableList-DavVEhSF.js";import"./search-MPXqFORa.js";import"./Input-CDPW84Vd.js";import"./useControlled-sU745DGU.js";import"./Button-DE-Hu3dt.js";import"./small-cross-bWZnL7uz.js";import"./ActionButton-B1rhz0DA.js";import"./Checkbox-Cb6JSpK5.js";import"./useValueChanged-Dx083Fm3.js";import"./CollapsiblePanel-0e12BKeC.js";import"./MultiColumnSortDialog-BOhzgl61.js";import"./MenuTrigger-CNDXy2T4.js";import"./CompositeItem-Do0rCuoU.js";import"./ToolbarRootContext-Br9U1Q2_.js";import"./getDisabledMountTransitionStyles-BCbQnbBn.js";import"./getPseudoElementBounds-BkSPJz-P.js";import"./chevron-down-CFfBUDSH.js";import"./index-BVJlzR67.js";import"./error-NWnnz2CJ.js";import"./BaseCbacBanner-ClEgVWlR.js";import"./makeExternalStore-BkV80SHH.js";import"./Tooltip-DRP5x062.js";import"./PopoverPopup-CSPtAVJ4.js";import"./debounce-BDfyeiE3.js";import"./useOsdkClient-C1Jd3b7W.js";import"./tick-BlmFJVFO.js";import"./DropdownField-BM-ngSf_.js";import"./isEqual-CmUf4hUZ.js";import"./withOsdkMetrics-BBE1IHfP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
