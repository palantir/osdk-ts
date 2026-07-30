import{f as p,j as e}from"./iframe-Do-wqPAG.js";import{O as i}from"./object-table-UJDj7Pip.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DHrLiF_n.js";import"./Table-BZ642NUv.js";import"./index-Cy5rkzVX.js";import"./Dialog-CA5QjSY1.js";import"./cross-CvbnaeZH.js";import"./svgIconContainer-B89O08Vs.js";import"./useBaseUiId-Cgco29RD.js";import"./InternalBackdrop-DAEAk3PQ.js";import"./composite-CTJiCA6q.js";import"./index-DSZYY9yk.js";import"./index-Bs0rsg0r.js";import"./index-Dgbj4Zle.js";import"./useEventCallback-BCn0kh8o.js";import"./SkeletonBar-CgBocCWF.js";import"./LoadingCell-CH8O2fMl.js";import"./ColumnConfigDialog-DnldAJIK.js";import"./DraggableList-Jbf3dttK.js";import"./search-DfQ-5ttz.js";import"./Input-C7FUOEIR.js";import"./useControlled-BtQf2Mdn.js";import"./isEqual-Bx02XkV9.js";import"./isObject-56Ux56Kw.js";import"./Button-B4RKA1pV.js";import"./ActionButton-BP759aJc.js";import"./Checkbox-BwPxHa9w.js";import"./useValueChanged-BVaiV3kA.js";import"./CollapsiblePanel-DaFAODqE.js";import"./MultiColumnSortDialog-DJw8x3NY.js";import"./MenuTrigger-CjUQpjMe.js";import"./CompositeItem-BVuMRAPI.js";import"./ToolbarRootContext-DVSI0mCZ.js";import"./getDisabledMountTransitionStyles-BRGxIDFh.js";import"./getPseudoElementBounds-y3XhV5qP.js";import"./chevron-down-DEIKb6Ni.js";import"./index-DZMhpjfz.js";import"./error-B7QP6y9O.js";import"./BaseCbacBanner-BUyAOuoM.js";import"./makeExternalStore-1XgCgHrd.js";import"./Tooltip-JgW5ULFO.js";import"./PopoverPopup-CNKh6j6z.js";import"./toNumber-DD6BW-qV.js";import"./useOsdkClient-CURfGYsm.js";import"./tick-CxfWNdz3.js";import"./DropdownField-Bs1JY16h.js";import"./withOsdkMetrics-CZzkghnK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
