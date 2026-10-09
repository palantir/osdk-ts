import{f as p,j as e}from"./iframe-CMfq1HPL.js";import{O as i}from"./object-table-CcCF9xfD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DoN82JnL.js";import"./Table-lnk4PNlm.js";import"./index-ZtSJidyR.js";import"./Dialog-AYBhRi3p.js";import"./cross-DI771Rnq.js";import"./svgIconContainer-BrnRNdI4.js";import"./useBaseUiId-Doagaslz.js";import"./InternalBackdrop-Dc-khzij.js";import"./composite-BMLB8REs.js";import"./index-Cg-_dyYz.js";import"./index-B0zWLnpw.js";import"./index-C4fS6aHe.js";import"./useEventCallback-k47TyR1L.js";import"./SkeletonBar-GGSFl_LP.js";import"./LoadingCell-isd95lGx.js";import"./ColumnConfigDialog-D7hrX442.js";import"./DraggableList-CskXfy2I.js";import"./search-CFS1aLLr.js";import"./Input-DAfCa_F_.js";import"./useControlled-DxbWxp5f.js";import"./Button-D9k27imK.js";import"./small-cross-CdfUGob6.js";import"./ActionButton-r16LsqMr.js";import"./Checkbox-AFR3J6LC.js";import"./useValueChanged-DEnQRlze.js";import"./CollapsiblePanel-DYiqZ6YX.js";import"./MultiColumnSortDialog-D-eE-EbX.js";import"./MenuTrigger-tpx4AhlM.js";import"./CompositeItem-4nYPF74E.js";import"./ToolbarRootContext-DbEzCTeH.js";import"./getDisabledMountTransitionStyles-DqkNlWWo.js";import"./getPseudoElementBounds-CQ5YRcHT.js";import"./chevron-down-BB1rr6dV.js";import"./index-BOBP5vHC.js";import"./error-CdY5cnSm.js";import"./BaseCbacBanner-C_FfohEN.js";import"./makeExternalStore-DbDNXFhx.js";import"./Tooltip-oJ90YrUX.js";import"./PopoverPopup-cKWzGieP.js";import"./debounce-BkXoP2me.js";import"./useOsdkClient-CosiI0hK.js";import"./tick-DhgpUjs3.js";import"./DropdownField-6o7zN8fP.js";import"./isEqual-BFJpHzgw.js";import"./withOsdkMetrics-CzIhdDBm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
