import{f as p,j as e}from"./iframe-C-JZ09HL.js";import{O as i}from"./object-table-eCdmFUXr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Btqf0-MW.js";import"./Table-DMQ_nPm6.js";import"./index-BXkYmYaL.js";import"./Dialog-CWLeV2jh.js";import"./cross-CDvt64dz.js";import"./svgIconContainer-GnFqEV7J.js";import"./useBaseUiId-C6m1fY6X.js";import"./InternalBackdrop-DgDyp4Vo.js";import"./composite-BHrzkL3j.js";import"./index-B9W8VWla.js";import"./index-CWTT4E5c.js";import"./index-DyndQNLM.js";import"./useEventCallback-Is75DRLj.js";import"./SkeletonBar-DHUwfY6j.js";import"./LoadingCell-pQiUA7Bk.js";import"./ColumnConfigDialog-B7EAN3Um.js";import"./DraggableList-CxlXcFDc.js";import"./search-CRF0d4U_.js";import"./Input-9fM_pp7v.js";import"./useControlled-BnCuZsdw.js";import"./Button-DnUlyK7a.js";import"./small-cross-CQkeoWBO.js";import"./ActionButton-8JqznqV-.js";import"./Checkbox-DPup6C7p.js";import"./useValueChanged-hvB4Sogv.js";import"./CollapsiblePanel-BEbz9zc7.js";import"./MultiColumnSortDialog-qFPV76Nw.js";import"./MenuTrigger-C36tHorX.js";import"./CompositeItem-1x61Rlw0.js";import"./ToolbarRootContext-CcljaRm4.js";import"./getDisabledMountTransitionStyles-BaR3xwN0.js";import"./getPseudoElementBounds-DEDKJbcP.js";import"./chevron-down-l-lKjlka.js";import"./index-DKkkLjbn.js";import"./error-jL4dzDGt.js";import"./BaseCbacBanner-CWi2u_SR.js";import"./makeExternalStore-CHVbKC8p.js";import"./Tooltip-By6nOBFb.js";import"./PopoverPopup-tZcqIDwv.js";import"./debounce-DuRZaOgZ.js";import"./useOsdkClient-w30RoI3v.js";import"./tick-BF72g7TU.js";import"./DropdownField-VLHRRTtJ.js";import"./isEqual-D6XdnbH2.js";import"./withOsdkMetrics-Das8js_L.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
