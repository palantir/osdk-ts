import{f as p,j as e}from"./iframe-Dyt1i0jF.js";import{O as i}from"./object-table-CMFe2Nx8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CkXDm4BP.js";import"./Table-CMAD4Xlh.js";import"./index-DcAXBN3b.js";import"./Dialog-DcLnNXCl.js";import"./cross-S19HD2HE.js";import"./svgIconContainer-D-uDx2T6.js";import"./useBaseUiId-BY0MTYtv.js";import"./InternalBackdrop-Ct7y4f2I.js";import"./composite-BdidWOpb.js";import"./index-mVEsOtEX.js";import"./index-evf_4PQ0.js";import"./index-Clj96-VE.js";import"./useEventCallback-CaEhcjVd.js";import"./SkeletonBar-BaRQ4Qp6.js";import"./LoadingCell-BPNTvkVf.js";import"./ColumnConfigDialog-B47WoFq_.js";import"./DraggableList-Dz1QUu7w.js";import"./search-DVzPLhja.js";import"./Input-Z3F9W9iQ.js";import"./useControlled-DJki7VzO.js";import"./Button-BLyqJRhh.js";import"./small-cross-ChtsozyS.js";import"./ActionButton-0ZkWgmX4.js";import"./Checkbox-BwMT8DRf.js";import"./useValueChanged-JNg-bLTU.js";import"./CollapsiblePanel-Dt3zs3tt.js";import"./MultiColumnSortDialog-Yryx9cTC.js";import"./MenuTrigger-m2_9Nqzx.js";import"./CompositeItem-DJhVVbgA.js";import"./ToolbarRootContext-D-RVnupo.js";import"./getDisabledMountTransitionStyles-tYUqX_NC.js";import"./getPseudoElementBounds-JD4x0OwV.js";import"./chevron-down-w0huiaYQ.js";import"./index-C7QokEBW.js";import"./error-Op_HT_Tg.js";import"./BaseCbacBanner-C4qAY-7h.js";import"./makeExternalStore-tWIcELzA.js";import"./Tooltip-DWHz58xu.js";import"./PopoverPopup-B14CFIKt.js";import"./debounce-0m9xnR-i.js";import"./useOsdkClient-DXGvEoLq.js";import"./tick-jplCSaf2.js";import"./DropdownField-CyPoXxmJ.js";import"./isEqual-CY77IH_d.js";import"./withOsdkMetrics-5wv9ordD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
