import{f as p,j as e}from"./iframe-DxvN0M7K.js";import{O as i}from"./object-table-tqCZagOx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xzue2qXM.js";import"./Table-Cdw-5bp-.js";import"./index-DH5yemLr.js";import"./Dialog-Dv18KT1A.js";import"./cross-Jl3VvOEN.js";import"./svgIconContainer-C1vr-TwX.js";import"./useBaseUiId-6JQrMuoN.js";import"./InternalBackdrop-DQMzxTt2.js";import"./composite-BeC4x7c_.js";import"./index-D6YwkaJN.js";import"./index-CGz3Zj9V.js";import"./index-Je9DGe3Q.js";import"./useEventCallback-BarKJY3w.js";import"./SkeletonBar-CSNEJW0Z.js";import"./LoadingCell-CL-i8o3K.js";import"./ColumnConfigDialog-CRLVMU6N.js";import"./DraggableList-CAVKVRtK.js";import"./search-CWcacXbv.js";import"./Input-B5Cdt3Jn.js";import"./useControlled-BsKyqVLJ.js";import"./Button-DeN2HtXI.js";import"./small-cross-loFzvmde.js";import"./ActionButton-DJcBANww.js";import"./Checkbox-CwFAjL8W.js";import"./useValueChanged-znjzpbIG.js";import"./CollapsiblePanel-DcmIoP-V.js";import"./MultiColumnSortDialog-vlUBa-ho.js";import"./MenuTrigger-BYErkqlu.js";import"./CompositeItem-BM5p6vye.js";import"./ToolbarRootContext-8cNXmzWC.js";import"./getDisabledMountTransitionStyles-CQnjWCro.js";import"./getPseudoElementBounds-1Yq4M1ZX.js";import"./chevron-down-B07rpeLd.js";import"./index-CiwVfYV4.js";import"./error-Cr5iHDkF.js";import"./BaseCbacBanner-Cc8KfJds.js";import"./makeExternalStore-BQakVy-m.js";import"./Tooltip-3Unl917J.js";import"./PopoverPopup-D_lg3L_T.js";import"./debounce-HGjeRSVo.js";import"./useOsdkClient-BrNoGZi-.js";import"./tick-C0cXmT53.js";import"./DropdownField-CkxYhY96.js";import"./isEqual--3ZKqA7b.js";import"./withOsdkMetrics-BeV-dE9b.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
