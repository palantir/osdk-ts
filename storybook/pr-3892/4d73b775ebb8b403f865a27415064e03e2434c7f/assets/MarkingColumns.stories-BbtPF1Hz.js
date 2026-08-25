import{f as p,j as e}from"./iframe-B0SOl9ZV.js";import{O as i}from"./object-table-BVSXtLSE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHPAddH5.js";import"./Table-BvDS4c0a.js";import"./index-BiNVgaeG.js";import"./Dialog-C9hlGazr.js";import"./cross-EbYogpml.js";import"./svgIconContainer-C62ArtWi.js";import"./useBaseUiId-Cljp77-Q.js";import"./InternalBackdrop-CdRNiUEL.js";import"./composite-Bi62CtsD.js";import"./index-DhnWwm5N.js";import"./index-s1ThTeww.js";import"./index-BGC6gPcW.js";import"./useEventCallback-DhnxrJyA.js";import"./SkeletonBar-DfvXzO1u.js";import"./LoadingCell-FD66O8fh.js";import"./ColumnConfigDialog-nt-WhUk0.js";import"./DraggableList-DLH-URIr.js";import"./search-BOXs6zTK.js";import"./Input-xkP_-geA.js";import"./useControlled-uGEWPr36.js";import"./Button-D1fyFKQB.js";import"./small-cross-CRCr07F7.js";import"./ActionButton-ZDCLmiwx.js";import"./Checkbox-CZzBbIjY.js";import"./useValueChanged-C0D0XVl7.js";import"./CollapsiblePanel-CSF-4VPX.js";import"./MultiColumnSortDialog-BPZP6UX1.js";import"./MenuTrigger-BNFoDht_.js";import"./CompositeItem-CbcwFtua.js";import"./ToolbarRootContext-BztT65HJ.js";import"./getDisabledMountTransitionStyles-DkjU5PNl.js";import"./getPseudoElementBounds-Jb9fY2h-.js";import"./chevron-down-DeS6ZUJh.js";import"./index-BZ0ka-wa.js";import"./error-B-XxEkbd.js";import"./BaseCbacBanner-niCJ2eTF.js";import"./makeExternalStore-BI9SKXsC.js";import"./Tooltip-Be0QnVh0.js";import"./PopoverPopup-CPu-iQjW.js";import"./debounce-DZ5vJTmK.js";import"./useOsdkClient-Cv8DLbFD.js";import"./tick-DxEKvdzo.js";import"./DropdownField-D0dhUGVa.js";import"./isEqual-CP8GwWxC.js";import"./withOsdkMetrics-DL2t3tni.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
