import{f as p,j as e}from"./iframe-BIP88-50.js";import{O as i}from"./object-table-CNMhMkmH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJkHOWC7.js";import"./Table-CHLtOT8z.js";import"./index-CGkdPPI9.js";import"./Dialog-C0UW6gOW.js";import"./cross-qB-EknTM.js";import"./svgIconContainer-Dz6akIgn.js";import"./useBaseUiId-Cj-jJj6K.js";import"./InternalBackdrop-CftIyHL4.js";import"./composite-BpLHrmIE.js";import"./index-KnvC-9LR.js";import"./index-BrS4cRkH.js";import"./index-B1OlRn7v.js";import"./useEventCallback-BrR1OuJb.js";import"./SkeletonBar-DoCTJFkz.js";import"./LoadingCell-CNzaDi2p.js";import"./ColumnConfigDialog-BLwOeNew.js";import"./DraggableList-DlqvUYF8.js";import"./search-DgaGEvbD.js";import"./Input-DYBooigU.js";import"./useControlled-fuVP_NbG.js";import"./Button-CjK6G0Gi.js";import"./small-cross-BznyWel9.js";import"./ActionButton-DxA4l1EI.js";import"./Checkbox-BMCER6Bk.js";import"./useValueChanged-COmQAw9I.js";import"./CollapsiblePanel-snv-WSy_.js";import"./MultiColumnSortDialog-B5F0EWQk.js";import"./MenuTrigger-nre5v0iQ.js";import"./CompositeItem-CVTunDpb.js";import"./ToolbarRootContext-CRygSzuk.js";import"./getDisabledMountTransitionStyles-DRbULTDE.js";import"./getPseudoElementBounds-DSD11-NM.js";import"./chevron-down-BX7qMt__.js";import"./index-D59kjkiP.js";import"./error-y3-k7YV5.js";import"./BaseCbacBanner-ixNx6GvE.js";import"./makeExternalStore-bK2uAKO3.js";import"./Tooltip-CWDNHqVt.js";import"./isObject-B6TUXASY.js";import"./debounce-DDX1lyuq.js";import"./useOsdkClient-DPupQZW9.js";import"./tick-IXb8pkgs.js";import"./DropdownField-CpHmWmlY.js";import"./isEqual-xme5et3Y.js";import"./_baseIsEqual-OPkKOK_R.js";import"./withOsdkMetrics-YF4jnVsf.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
