import{f as p,j as e}from"./iframe-De32S9Ga.js";import{O as i}from"./object-table-ChT8KK-b.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CnslaRhg.js";import"./Table-DZ-kSNFz.js";import"./index-Bj_BwatX.js";import"./Dialog-fioS3KUB.js";import"./cross-pDSvbI93.js";import"./svgIconContainer-CTp6Tyc8.js";import"./useBaseUiId-CbRyPa0L.js";import"./InternalBackdrop-BbY0GFNt.js";import"./composite-CbztnelA.js";import"./index-BwFeGDU0.js";import"./index-l7crMfe1.js";import"./index-qO0EUS8_.js";import"./useEventCallback-CDpcFHyr.js";import"./SkeletonBar-BNgaVvZy.js";import"./LoadingCell-_YEnWc0D.js";import"./ColumnConfigDialog-ZFOXQSGd.js";import"./DraggableList-Bfiy6KBe.js";import"./search-098G78gK.js";import"./Input-CEDW6O3n.js";import"./useControlled-NYQbyv_q.js";import"./Button-BDZ6lJNh.js";import"./small-cross-4_JDj4E8.js";import"./ActionButton-ZEMUf8VA.js";import"./Checkbox-DCzYgN4M.js";import"./useValueChanged-DYPi3RG6.js";import"./CollapsiblePanel-COxUzOWS.js";import"./MultiColumnSortDialog-Dn58cXos.js";import"./MenuTrigger-2yPw1UT7.js";import"./CompositeItem-B2LPoskN.js";import"./ToolbarRootContext-CPpFxoM9.js";import"./getDisabledMountTransitionStyles-B3CIL9HP.js";import"./getPseudoElementBounds-nkhrr1nH.js";import"./chevron-down-J7S6Qe54.js";import"./index-B2HMeMAA.js";import"./error-hRM0SKX8.js";import"./BaseCbacBanner-BhFsAW3f.js";import"./makeExternalStore-DEaEiUV0.js";import"./Tooltip-oc-LvP8h.js";import"./PopoverPopup-B5EHLRyL.js";import"./debounce-DZ86C2fz.js";import"./useOsdkClient-DNhQtFKx.js";import"./tick-6GF1bhlu.js";import"./DropdownField-Tnp49b1X.js";import"./isEqual-FRRCTjN8.js";import"./withOsdkMetrics-IZ1C7wJE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
