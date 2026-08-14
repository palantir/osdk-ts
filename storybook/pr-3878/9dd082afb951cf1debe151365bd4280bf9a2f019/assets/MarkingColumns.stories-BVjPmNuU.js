import{f as p,j as e}from"./iframe-DOW2bXFs.js";import{O as i}from"./object-table-BNlthN64.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHuniwci.js";import"./Table-BXikgICs.js";import"./index-4oJsk_tB.js";import"./Dialog-CQdhf3N7.js";import"./cross-COlHBJoz.js";import"./svgIconContainer-CT_KO30M.js";import"./useBaseUiId-B_0mQGPv.js";import"./InternalBackdrop-lPwjztDu.js";import"./composite-CqPSq466.js";import"./index-Bn8LPSeX.js";import"./index-GSo9ng3g.js";import"./index-C6M1k-et.js";import"./useEventCallback-B3VaIBrg.js";import"./SkeletonBar-DxdJn7gH.js";import"./LoadingCell-DJ0lzlCl.js";import"./ColumnConfigDialog-C04281-e.js";import"./DraggableList-DStVGJZI.js";import"./search-BWbB-AxZ.js";import"./Input-CSOHEyA0.js";import"./useControlled-NJi6VJOf.js";import"./Button-DZdYaU0k.js";import"./small-cross-iF7SW867.js";import"./ActionButton-CM1odkW5.js";import"./Checkbox-08T_vGQ7.js";import"./useValueChanged-TiwULohc.js";import"./CollapsiblePanel-BALGGoSD.js";import"./MultiColumnSortDialog-BO8WXNUG.js";import"./MenuTrigger-DtqoUMjg.js";import"./CompositeItem-CPRbyJMO.js";import"./ToolbarRootContext-C3gCOQD7.js";import"./getDisabledMountTransitionStyles-D-1ZYwTn.js";import"./getPseudoElementBounds-BdV0GJWh.js";import"./chevron-down-CRcrwjTm.js";import"./index-DPfBrSuZ.js";import"./error-D3fDFL5e.js";import"./BaseCbacBanner-CBDVw-BP.js";import"./makeExternalStore-4Ndi4CXn.js";import"./Tooltip-M05NfHCp.js";import"./PopoverPopup-DgBZbaSS.js";import"./debounce-1fRjCSLx.js";import"./useOsdkClient-BERGKa3D.js";import"./tick-uSlpKgY-.js";import"./DropdownField-C9Cbl0hv.js";import"./isEqual-Dhn6_kDg.js";import"./withOsdkMetrics-XWnXG2iZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
