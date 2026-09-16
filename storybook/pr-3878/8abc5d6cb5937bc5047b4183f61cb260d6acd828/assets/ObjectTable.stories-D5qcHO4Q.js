import{j as i}from"./iframe-BDguHbPD.js";import{O as p}from"./object-table-hdLdDN5o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BS7qBpiH.js";import"./preload-helper-7xLPbKmM.js";import"./Table-CCVoIMnP.js";import"./index-C_5MPolp.js";import"./Dialog-COXLOajc.js";import"./cross-D4TeOGZ-.js";import"./svgIconContainer-Z2Julm7W.js";import"./useBaseUiId-bwbz0VU7.js";import"./InternalBackdrop-CbyyzA6w.js";import"./composite-BsxX_L6c.js";import"./index-BAF4Gh4w.js";import"./index-C7DI1YIp.js";import"./index-hw-WZAqz.js";import"./useEventCallback-C9A8Np9g.js";import"./SkeletonBar-CWFv9FmM.js";import"./LoadingCell-CY-ml6Az.js";import"./ColumnConfigDialog-CgmmapDK.js";import"./DraggableList-C3QCD6_U.js";import"./search-B1yR-f_r.js";import"./Input-CXvy1-u2.js";import"./useControlled-B3aVNzWK.js";import"./Button-D2v8_Tej.js";import"./small-cross-Dj8IgHas.js";import"./ActionButton-BN4Q2839.js";import"./Checkbox-BFou0tTv.js";import"./useValueChanged-Djc2nTS9.js";import"./CollapsiblePanel-DwibqjzF.js";import"./MultiColumnSortDialog-Ctf7BEab.js";import"./MenuTrigger-CTrmgruB.js";import"./CompositeItem-5MkrSg_6.js";import"./ToolbarRootContext-CALlmZI0.js";import"./getDisabledMountTransitionStyles-Cs-VaHPm.js";import"./getPseudoElementBounds-_M_XCnOW.js";import"./chevron-down-CHEXQxiW.js";import"./index-CaXJKsDl.js";import"./error-uqFmDj8x.js";import"./BaseCbacBanner-DyjG9k1J.js";import"./makeExternalStore-COwSJhBY.js";import"./Tooltip-B4VmxO0l.js";import"./PopoverPopup-DbEiKLnC.js";import"./debounce-XLiTuY6-.js";import"./useOsdkClient-ZETqGTvY.js";import"./tick-0fLMSfwX.js";import"./DropdownField-CGRpLszH.js";import"./isEqual-Du2vZJ9T.js";import"./withOsdkMetrics-CLLpRdbv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
