import{f as p,j as e}from"./iframe-C3gWLFeF.js";import{O as i}from"./object-table-C9jS4D-A.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5WkgH5S.js";import"./Table-7PutLn_O.js";import"./index-zbAiaIKZ.js";import"./Dialog-htHMIiV_.js";import"./cross-OJYwbU-X.js";import"./svgIconContainer-CatKefh0.js";import"./useBaseUiId-u8lDlXG3.js";import"./InternalBackdrop-Cy20o8GG.js";import"./composite-wYiSASeA.js";import"./index-B5sOm2sk.js";import"./index-RpbhQ7R2.js";import"./index-D5sUdKzc.js";import"./useEventCallback-BVsJ2e3U.js";import"./SkeletonBar-DMUqu9HM.js";import"./LoadingCell-DyY2yJ3K.js";import"./ColumnConfigDialog-CGgfMgKc.js";import"./DraggableList-DFgLwxtd.js";import"./search-C7TpUcEG.js";import"./Input-DxK0rYjH.js";import"./useControlled-D4ZhQDM-.js";import"./Button-z5VY6lqA.js";import"./small-cross-Dg9jp1lJ.js";import"./ActionButton-DPsCNtEG.js";import"./Checkbox-Cfd_YyW0.js";import"./useValueChanged-Czd01fGs.js";import"./CollapsiblePanel-DClJfuOE.js";import"./MultiColumnSortDialog-KXkxir9T.js";import"./MenuTrigger-BFueQcjv.js";import"./CompositeItem-aMc0HNV_.js";import"./ToolbarRootContext-CXNAcqNV.js";import"./getDisabledMountTransitionStyles-By20pHy9.js";import"./getPseudoElementBounds-CI4G4fnd.js";import"./chevron-down-C2wXIFgz.js";import"./index-B-Yw7Cy9.js";import"./error-BM64Bzf-.js";import"./BaseCbacBanner-DtP8wzf-.js";import"./makeExternalStore-y3W5E1gl.js";import"./Tooltip-kC1I1FSA.js";import"./PopoverPopup-DH8P3TnQ.js";import"./debounce-BT1KgTVv.js";import"./useOsdkClient-BepgIy04.js";import"./tick-DPtCobgt.js";import"./DropdownField-Cpn2i5fy.js";import"./isEqual-B-ZaIAD2.js";import"./withOsdkMetrics-BIxduPTg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
