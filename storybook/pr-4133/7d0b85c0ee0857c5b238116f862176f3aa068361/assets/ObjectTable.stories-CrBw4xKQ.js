import{j as i}from"./iframe-CwfFVXYm.js";import{O as p}from"./object-table-3hjC1a4Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DnOF0gkC.js";import"./preload-helper-B0i1Ccv8.js";import"./Table-CiqC9yT2.js";import"./index-12mUJC8n.js";import"./Dialog-BToK1dJZ.js";import"./cross-vHANk4GA.js";import"./svgIconContainer-CGFZMhJS.js";import"./useBaseUiId-D7i-0lUl.js";import"./InternalBackdrop-DOJpSrKf.js";import"./composite-B35ndqHm.js";import"./index-DNXZoFIr.js";import"./index-D2z71Qsm.js";import"./index-Crk-izdP.js";import"./useEventCallback-YTEY1SDl.js";import"./SkeletonBar-BTELcMSt.js";import"./LoadingCell-oWGhXH5n.js";import"./ColumnConfigDialog-_KnKOWel.js";import"./DraggableList-V2JUX2Gf.js";import"./search-CXyOr2KE.js";import"./Input-B3BLVjbw.js";import"./useControlled-CBv31JWZ.js";import"./Button-BEoayh3H.js";import"./small-cross-Kn0-K05A.js";import"./ActionButton-B9_iyqEc.js";import"./Checkbox-DUi2IRjx.js";import"./useValueChanged-DnLqpX89.js";import"./CollapsiblePanel-shOVr1N_.js";import"./MultiColumnSortDialog-OCs0OixQ.js";import"./MenuTrigger-CDYnPChJ.js";import"./CompositeItem-BPiFovJv.js";import"./ToolbarRootContext-mV67Z_2Q.js";import"./getDisabledMountTransitionStyles-C_Pdyoj5.js";import"./getPseudoElementBounds-nE2iYe28.js";import"./chevron-down-CYWunexi.js";import"./index-DTmUBa4U.js";import"./error-BbOajjO4.js";import"./BaseCbacBanner-CaF6WltH.js";import"./makeExternalStore-D75zw0dv.js";import"./Tooltip-ChZSMVBv.js";import"./PopoverPopup-C1H_pV3d.js";import"./debounce-T3lrOezK.js";import"./useOsdkClient-D4ODTHFx.js";import"./tick-CBvk4wqY.js";import"./DropdownField-B644qOm6.js";import"./isEqual-DxZ23_bo.js";import"./withOsdkMetrics-Ojccrccx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
