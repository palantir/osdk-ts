import{j as i}from"./iframe-DbFztG_g.js";import{O as p}from"./object-table-DakC0UvK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DnWUIVAn.js";import"./preload-helper-5yPlXN3h.js";import"./Table-DXhvFm28.js";import"./index-BNGbb9rK.js";import"./Dialog-q53uo3YQ.js";import"./cross-DGv6zSaG.js";import"./svgIconContainer-BS_91pYI.js";import"./useBaseUiId-BJNUcsKi.js";import"./InternalBackdrop-CURYnF5m.js";import"./composite-DmkJ6YWF.js";import"./index-CjeOPmmS.js";import"./index-DUEaSppR.js";import"./index-B0uGE4ks.js";import"./useEventCallback-F0l_MlCv.js";import"./SkeletonBar-D8SjsLKR.js";import"./LoadingCell-Cj4TVOF3.js";import"./ColumnConfigDialog-Dn26_iFA.js";import"./DraggableList-C3mC8XZq.js";import"./search-BDnZaHng.js";import"./Input-C-K2OOHO.js";import"./useControlled-CtpQZwRP.js";import"./Button-UBStgghd.js";import"./small-cross-CiVArRcv.js";import"./ActionButton-DsNauwQt.js";import"./Checkbox-Yc4IFuTT.js";import"./useValueChanged-DOektkSI.js";import"./CollapsiblePanel-DDI1QtmT.js";import"./MultiColumnSortDialog-COhhLmwJ.js";import"./MenuTrigger-ZUe1vObH.js";import"./CompositeItem-Of_bmSJ2.js";import"./ToolbarRootContext-DsXUgMuU.js";import"./getDisabledMountTransitionStyles-Dc2XzWk7.js";import"./getPseudoElementBounds-CpWrqgEu.js";import"./chevron-down-teVJIekx.js";import"./index-aejPdgJq.js";import"./error-0lPH6zk9.js";import"./BaseCbacBanner-DWr_tjn4.js";import"./makeExternalStore-BJK_8FWf.js";import"./Tooltip-giWbl0Po.js";import"./PopoverPopup-DN6pjWYz.js";import"./debounce-CDd2V2U5.js";import"./useOsdkClient-Ds-rIrkC.js";import"./tick-B71QKXh9.js";import"./DropdownField-DfoJZ2WC.js";import"./isEqual-Bot5OO9s.js";import"./withOsdkMetrics-C9cTzLSh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
