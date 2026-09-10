import{f as p,j as e}from"./iframe-vupRmrl1.js";import{O as i}from"./object-table-BhZpyXrV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gDtGaGRc.js";import"./Table-BhkPCP2Y.js";import"./index-DyT3w31I.js";import"./Dialog-BkfrMvl2.js";import"./cross-DtkFdwBY.js";import"./svgIconContainer-BMvPRZYr.js";import"./useBaseUiId-BHpjHq0v.js";import"./InternalBackdrop-cx_OFO3C.js";import"./composite-D7MQDgRI.js";import"./index-ByLKmROF.js";import"./index-CNpYqLTE.js";import"./index-F5fjgwJh.js";import"./useEventCallback-DHCVut8W.js";import"./SkeletonBar-xIK3fn_d.js";import"./LoadingCell-Ct0NaKdA.js";import"./ColumnConfigDialog-CTLgRMm4.js";import"./DraggableList-Df9M_FoJ.js";import"./search-DJT3mMGf.js";import"./Input-3k8TfuM7.js";import"./useControlled-DsYwW81O.js";import"./Button-DJ6M6HmU.js";import"./small-cross-buimVDlm.js";import"./ActionButton-Dc8eWvAd.js";import"./Checkbox-D2IGozPx.js";import"./useValueChanged-BYJmb_es.js";import"./CollapsiblePanel-CwbSoIsS.js";import"./MultiColumnSortDialog-D1-IQV-T.js";import"./MenuTrigger-C1lcDrTT.js";import"./CompositeItem-D7w73J8v.js";import"./ToolbarRootContext-C266FSVf.js";import"./getDisabledMountTransitionStyles-CfnsRoCh.js";import"./getPseudoElementBounds-Buq5V0z-.js";import"./chevron-down-LKL_MfU5.js";import"./index-Ko_HwzJV.js";import"./error-Ccrq6RR-.js";import"./BaseCbacBanner-DWSqI5hZ.js";import"./makeExternalStore-D9V5Ayqr.js";import"./Tooltip-BEypgjel.js";import"./PopoverPopup-zyqahA1m.js";import"./debounce-CYhWcO7f.js";import"./useOsdkClient-LWof9usE.js";import"./tick-De0oRo06.js";import"./DropdownField-DSd0Acyw.js";import"./isEqual-JS74y3x-.js";import"./withOsdkMetrics-CfzTocUk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
