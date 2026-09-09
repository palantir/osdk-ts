import{f as p,j as e}from"./iframe-DsCzZXCk.js";import{O as i}from"./object-table-Bi3gkbRH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CXwWoCmC.js";import"./Table-DzAMBcZK.js";import"./index-Ci1-NLXL.js";import"./Dialog-WY8kOd8I.js";import"./cross-nUvl9WFP.js";import"./svgIconContainer-D37GNyYn.js";import"./useBaseUiId-3kQUveob.js";import"./InternalBackdrop-CwQed051.js";import"./composite-DHYMAbDg.js";import"./index-CdAzhd0H.js";import"./index-z1UHak1d.js";import"./index-x55rnuch.js";import"./useEventCallback-BCVvlhOQ.js";import"./SkeletonBar-vf1a1dAS.js";import"./LoadingCell-DrcEWbQQ.js";import"./ColumnConfigDialog-Bthqd0BS.js";import"./DraggableList-Ktye02ex.js";import"./search-Bol42X7R.js";import"./Input-B3Vnu-1d.js";import"./useControlled-DUHKt09G.js";import"./Button-BddFDihs.js";import"./small-cross-CTvq5HsT.js";import"./ActionButton-DD385ZrQ.js";import"./Checkbox-GmGZJnCk.js";import"./useValueChanged-B2VG6ome.js";import"./CollapsiblePanel-xaQ9gFVs.js";import"./MultiColumnSortDialog-CFfB5Mvl.js";import"./MenuTrigger-C6DHAWRk.js";import"./CompositeItem-D3-VN1Pw.js";import"./ToolbarRootContext-CrYLTP3H.js";import"./getDisabledMountTransitionStyles-hsS0T9Gj.js";import"./getPseudoElementBounds-PBZ-34d2.js";import"./chevron-down-Bpd_KI7a.js";import"./index-ClGHa1nk.js";import"./error-BfS-h5nJ.js";import"./BaseCbacBanner-CT9ucVkZ.js";import"./makeExternalStore-BJqmp2PE.js";import"./Tooltip-Vr2SVT2r.js";import"./PopoverPopup-C1a_kqTV.js";import"./debounce-D7PdVnfF.js";import"./useOsdkClient-DNGLR9mN.js";import"./tick-G-bMGJF4.js";import"./DropdownField-CoaNucHE.js";import"./isEqual-B2uZlYTn.js";import"./withOsdkMetrics-rktOS5NE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
