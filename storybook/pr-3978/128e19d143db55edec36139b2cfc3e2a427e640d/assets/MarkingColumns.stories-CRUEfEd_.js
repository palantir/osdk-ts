import{f as p,j as e}from"./iframe-Cfa7VV9b.js";import{O as i}from"./object-table-DXBlul32.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNnDmdGh.js";import"./Table-BB0k3bQv.js";import"./index-CH9AmopW.js";import"./Dialog-w0Dm1Fh9.js";import"./cross-BEJbLhxw.js";import"./svgIconContainer-DvY8yHqi.js";import"./useBaseUiId-D_k54qol.js";import"./InternalBackdrop-BVCviyNt.js";import"./composite-CrY-lNuw.js";import"./index-Bv1S_5M0.js";import"./index-TmLVBI9S.js";import"./index-67hxxU-T.js";import"./useEventCallback-K8cd2Fnj.js";import"./SkeletonBar-Bs1-yAkF.js";import"./LoadingCell-Qob4Jpx9.js";import"./ColumnConfigDialog-DTiwSQWS.js";import"./DraggableList-BRn8YBjo.js";import"./search-BwdTmPFq.js";import"./Input-DN8AJK08.js";import"./useControlled-CjWedb3G.js";import"./Button-DTyGlfF4.js";import"./small-cross-C3IJlndA.js";import"./ActionButton-CXudEriw.js";import"./Checkbox-B7Va5HB2.js";import"./useValueChanged-B94bKY6Z.js";import"./CollapsiblePanel-DCPma9to.js";import"./MultiColumnSortDialog-D65ehaZ8.js";import"./MenuTrigger-CXYWTRNk.js";import"./CompositeItem-Hyqz3S2c.js";import"./ToolbarRootContext-b1GByVNw.js";import"./getDisabledMountTransitionStyles-D8GdmpOs.js";import"./getPseudoElementBounds-D_Rk3WjB.js";import"./chevron-down-GlFAnb1p.js";import"./index-DIAXbPaT.js";import"./error-DARJoisr.js";import"./BaseCbacBanner-DHgwbqtn.js";import"./makeExternalStore-CgLbI1f8.js";import"./Tooltip-fzl9DYcK.js";import"./PopoverPopup-BPWYYHWp.js";import"./debounce-BhgPK9RJ.js";import"./useOsdkClient-DHcLBuTj.js";import"./tick-C2d5tvIe.js";import"./DropdownField-s65vbGOa.js";import"./isEqual-BjpIMPRN.js";import"./withOsdkMetrics-D6ZfJzuW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
