import{f as p,j as e}from"./iframe-5lzZwYPj.js";import{O as i}from"./object-table-UygSo6Tb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WKlZEuzV.js";import"./Table-CYxs-p7w.js";import"./index-DmpQA2dp.js";import"./Dialog-BL5ngvy_.js";import"./cross-Be5djBeG.js";import"./svgIconContainer-gxAyVnRe.js";import"./useBaseUiId-DfIUF55c.js";import"./InternalBackdrop-CSogwMiw.js";import"./composite-PZIUxoU6.js";import"./index-D7xhtA4Z.js";import"./index-CSotxX4i.js";import"./index-BynFqe0V.js";import"./useEventCallback-DFkI_Wkj.js";import"./SkeletonBar-CZuPbSrW.js";import"./LoadingCell-BOW6pmfZ.js";import"./ColumnConfigDialog-B_3yF-P2.js";import"./DraggableList-DWnYbq_V.js";import"./search-XZcqoY-Q.js";import"./Input-DcJ3J1h2.js";import"./useControlled-DHTN_Qw2.js";import"./Button-bfW4GHY6.js";import"./small-cross-Bb7OStik.js";import"./ActionButton-DgVQ6zLW.js";import"./Checkbox-Bc7vho6e.js";import"./useValueChanged-CtekWBgz.js";import"./CollapsiblePanel-Dc0aGLPo.js";import"./MultiColumnSortDialog-CxFWgp3k.js";import"./MenuTrigger-Bim_vt8i.js";import"./CompositeItem-DJOIGuOW.js";import"./ToolbarRootContext-BU433tXf.js";import"./getDisabledMountTransitionStyles-D1fP0s8e.js";import"./getPseudoElementBounds-B4sKXzPK.js";import"./chevron-down-Djuiqxwk.js";import"./index-Dle2g3lV.js";import"./error-BAoHpMsF.js";import"./BaseCbacBanner-Vc8jap16.js";import"./makeExternalStore-DzXze8D7.js";import"./Tooltip-eiDm927K.js";import"./PopoverPopup-BvZ2qG_8.js";import"./debounce-CCS3RbBn.js";import"./useOsdkClient-i1o2THdE.js";import"./tick-CdsCMYrr.js";import"./DropdownField-CNBl1CJk.js";import"./isEqual-BPkIwUmR.js";import"./withOsdkMetrics-DzXqb59o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
