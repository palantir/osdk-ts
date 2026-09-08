import{j as i}from"./iframe-CtGIC4wf.js";import{O as p}from"./object-table-BN3z22rO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BX7yvMnS.js";import"./preload-helper-Ch20KRc2.js";import"./Table-Dr92ijU5.js";import"./index-D-8enqIL.js";import"./Dialog-DPt6P-_t.js";import"./cross-7ld4MA3o.js";import"./svgIconContainer-CIwPC-KF.js";import"./useBaseUiId-DmITm_fg.js";import"./InternalBackdrop-C6_oJFVY.js";import"./composite-BpxrOvE9.js";import"./index-DaOQzUZN.js";import"./index-BSpR3dVY.js";import"./index-AbkXWi4D.js";import"./useEventCallback-oTKJ3xMt.js";import"./SkeletonBar--zC5Nde7.js";import"./LoadingCell-CvRX1HDA.js";import"./ColumnConfigDialog-BfcXzIVd.js";import"./DraggableList-Cxcx9nuu.js";import"./search-w1jm1zVn.js";import"./Input-CpszBXLO.js";import"./useControlled-Dn14MKUN.js";import"./Button-Bzw6-RIC.js";import"./small-cross-BW3uw9Pp.js";import"./ActionButton-9nlxbcnf.js";import"./Checkbox-V0KCS8m5.js";import"./useValueChanged-hcUETskz.js";import"./CollapsiblePanel-Bsia-ST0.js";import"./MultiColumnSortDialog-Cvm-2t9m.js";import"./MenuTrigger-tQhUbfmN.js";import"./CompositeItem-Blb9OYTf.js";import"./ToolbarRootContext-u5ji7rvZ.js";import"./getDisabledMountTransitionStyles-GHCQL6h5.js";import"./getPseudoElementBounds-BIuGb1kA.js";import"./chevron-down-kLepJLrY.js";import"./index-CJuiV3p2.js";import"./error-C6MzmjpC.js";import"./BaseCbacBanner-B2lub7wV.js";import"./makeExternalStore-WvYcSVhg.js";import"./Tooltip-BlDgcFqM.js";import"./PopoverPopup-Br8L-Z3H.js";import"./debounce-l8hrNpo8.js";import"./useOsdkClient-MCjUhV1U.js";import"./tick-BOhfL1zL.js";import"./DropdownField-Cfkapk5B.js";import"./isEqual-n6diGMGR.js";import"./withOsdkMetrics-ozl4Wy9n.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
