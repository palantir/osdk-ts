import{f as p,j as e}from"./iframe-B6HE8r1l.js";import{O as i}from"./object-table-CQmthn2A.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-EtA7hFCh.js";import"./Table-ZoCfFmSU.js";import"./index-BCMaRUjb.js";import"./Dialog-8hzMdC0R.js";import"./cross-BjZ44SU2.js";import"./svgIconContainer-BsDMjwS6.js";import"./useBaseUiId-BzcE0Rie.js";import"./InternalBackdrop-Cf6OlXBD.js";import"./composite-djF9vkGv.js";import"./index-CJscuqzO.js";import"./index-BkMjc3Zz.js";import"./index-TwSuOpr6.js";import"./useEventCallback-D56Fb_o4.js";import"./SkeletonBar-QShiBHjp.js";import"./LoadingCell--dD9SSBp.js";import"./ColumnConfigDialog-B2et3xG9.js";import"./DraggableList-QMdqQUb1.js";import"./search-CcV-m7jj.js";import"./Input-_s7MN3wC.js";import"./useControlled-D5sOiBif.js";import"./Button-ResaMq3t.js";import"./small-cross-C32KlYhe.js";import"./ActionButton-CWQiMZ6U.js";import"./Checkbox-BNADs0cE.js";import"./useValueChanged-BBXwiEUw.js";import"./CollapsiblePanel-BcHGrGjI.js";import"./MultiColumnSortDialog-BdajWTTd.js";import"./MenuTrigger-C5PNYoaH.js";import"./CompositeItem-DP3Bb3vo.js";import"./ToolbarRootContext-BVpWK1U-.js";import"./getDisabledMountTransitionStyles-BIBkvW7t.js";import"./getPseudoElementBounds-DERUGPbz.js";import"./chevron-down-DKIz5-M-.js";import"./index-CUfD7gtD.js";import"./error-BJZjh9bl.js";import"./BaseCbacBanner-Ba5fFkVb.js";import"./makeExternalStore-C0P5U_f9.js";import"./Tooltip-CJZAX-Va.js";import"./PopoverPopup-BVaD9-3k.js";import"./debounce-CG2SWdkE.js";import"./useOsdkClient-Nacbi_ds.js";import"./tick-B6YXw7V4.js";import"./DropdownField-BFB5iTsi.js";import"./isEqual-CvBjiV-s.js";import"./withOsdkMetrics-OQ6oomXn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
