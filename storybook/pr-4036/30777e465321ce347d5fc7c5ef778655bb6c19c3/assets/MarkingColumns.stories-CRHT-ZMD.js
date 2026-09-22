import{f as p,j as e}from"./iframe-8DMGEq06.js";import{O as i}from"./object-table-BsZYmEG3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BjAl-lK2.js";import"./Table-DORoQaHE.js";import"./index-DRq4gjPq.js";import"./Dialog-CNRW78Mx.js";import"./cross-DYaZw4Am.js";import"./svgIconContainer-B8_9Y0Zn.js";import"./useBaseUiId-B2FWNhGQ.js";import"./InternalBackdrop-CWiPG24p.js";import"./composite-CY_QXMLo.js";import"./index-D4LKk0YB.js";import"./index-mbbVtxqA.js";import"./index-Dx7C8aHO.js";import"./useEventCallback-3GlyZw2_.js";import"./SkeletonBar-Dc166Tvt.js";import"./LoadingCell-5wJcQGJ6.js";import"./ColumnConfigDialog--uixhz1y.js";import"./DraggableList-BqW39Lky.js";import"./search-CvifUsIK.js";import"./Input-dydaNapo.js";import"./useControlled-Khc0ddfA.js";import"./Button-CraGbNXA.js";import"./small-cross-CfjvRjN5.js";import"./ActionButton-BmVKHj0Y.js";import"./Checkbox-B-2SdFMj.js";import"./useValueChanged-N306h0K2.js";import"./CollapsiblePanel-BE0AM26B.js";import"./MultiColumnSortDialog-D2g0nz-7.js";import"./MenuTrigger-Byl2G7nz.js";import"./CompositeItem-Bb2gn4Bj.js";import"./ToolbarRootContext-Bepk2A_H.js";import"./getDisabledMountTransitionStyles-Dw-8Jwwa.js";import"./getPseudoElementBounds-C27BHV4s.js";import"./chevron-down-F_95MoSJ.js";import"./index-CsyOcyyy.js";import"./error-CiLZ8SWq.js";import"./BaseCbacBanner-R0l1YhLX.js";import"./makeExternalStore-NZ3mh5Ti.js";import"./Tooltip-CJOrSGc2.js";import"./PopoverPopup-CRsLokny.js";import"./debounce-D_Y9TVaa.js";import"./useOsdkClient-C_eIZF2J.js";import"./tick-IbzJph_T.js";import"./DropdownField-Bu7UETX6.js";import"./isEqual-ChBZ-47I.js";import"./withOsdkMetrics-DCPVCTJZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
