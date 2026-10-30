import{f as p,j as e}from"./iframe-BUjiwBf5.js";import{O as i}from"./object-table-T218K9GP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B6c2vp8P.js";import"./Table-BavlU92v.js";import"./index-CKk_335J.js";import"./Dialog-CXOR505b.js";import"./cross-DMwbX_xt.js";import"./svgIconContainer-B-5qucwe.js";import"./useBaseUiId-C7GiG9Zo.js";import"./InternalBackdrop-BzH1HGPT.js";import"./composite-DKWT5B2T.js";import"./index-DQS8f553.js";import"./index-BXREvfES.js";import"./index-DJII1UoI.js";import"./useEventCallback-CMhzkP6E.js";import"./SkeletonBar-Dhr5qRE5.js";import"./LoadingCell-CEsQO4QS.js";import"./ColumnConfigDialog-CtpCcWgp.js";import"./DraggableList-BfbbCqU-.js";import"./search-DWZ7jrir.js";import"./Input-DrlS66iR.js";import"./useControlled-u72cUfPk.js";import"./Button-DdiFhH1O.js";import"./small-cross-SPUOYKUf.js";import"./ActionButton-DU3dAhJf.js";import"./Checkbox-DIykPK3s.js";import"./useValueChanged-CLO0Bb-9.js";import"./CollapsiblePanel-DQj3H5Sg.js";import"./MultiColumnSortDialog-gWJOz4lo.js";import"./MenuTrigger-C3kS5B-X.js";import"./CompositeItem-BuyG-Xnd.js";import"./ToolbarRootContext-Bw5pjQww.js";import"./getDisabledMountTransitionStyles-C5iHJfar.js";import"./getPseudoElementBounds-DtI19hhj.js";import"./chevron-down-BxUE_6XI.js";import"./index-Bh90kKL7.js";import"./error-Dm0kzNQU.js";import"./BaseCbacBanner-D0xcDype.js";import"./makeExternalStore-DQVcY1um.js";import"./Tooltip-D3YkEYkV.js";import"./PopoverPopup-DozBvSpZ.js";import"./debounce-66rESf0W.js";import"./useOsdkClient-CKRo4EpN.js";import"./tick-4j-y4QUt.js";import"./DropdownField-Cb0C-mKV.js";import"./isEqual-whmmFY8e.js";import"./withOsdkMetrics-DPL7FlTV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
