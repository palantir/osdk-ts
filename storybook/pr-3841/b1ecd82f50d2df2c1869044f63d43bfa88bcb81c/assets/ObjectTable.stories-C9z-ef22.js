import{j as i}from"./iframe-CnB-nyYL.js";import{O as p}from"./object-table-Dqf0fKCa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8YyQT-M.js";import"./preload-helper-Q1kWDOMf.js";import"./Table-Cm0PJUII.js";import"./index-BxeA_yCq.js";import"./Dialog-8LNTHVBE.js";import"./cross-B8WrElap.js";import"./svgIconContainer-C7kPmSlO.js";import"./useBaseUiId-CHGGJD75.js";import"./InternalBackdrop-BZj78jFb.js";import"./composite-rNpDadLs.js";import"./index-B_mCg7VC.js";import"./index-CRK0fjNK.js";import"./index-CNnaAkES.js";import"./useEventCallback-CA4NJ-uN.js";import"./SkeletonBar-B-v-TkMy.js";import"./LoadingCell-BFPM0gvb.js";import"./ColumnConfigDialog-Bbiksv-b.js";import"./DraggableList-ZWdP1pX9.js";import"./search-B_Ak-sTr.js";import"./Input-BnfiihnE.js";import"./useControlled-Dq4TuQGF.js";import"./Button-BB8T2OOy.js";import"./small-cross-BaAEbGi-.js";import"./ActionButton-Bqin8RB2.js";import"./Checkbox-BmNOczDZ.js";import"./useValueChanged-BlEozEqt.js";import"./CollapsiblePanel-B6BY82OC.js";import"./MultiColumnSortDialog-x7xMLIk3.js";import"./MenuTrigger-C-u_6hMn.js";import"./CompositeItem-BvTU3-ui.js";import"./ToolbarRootContext-BGykyxF8.js";import"./getDisabledMountTransitionStyles-CX_nbaPq.js";import"./getPseudoElementBounds-CSUzuC87.js";import"./chevron-down-CnfHtb5Z.js";import"./index-DvWejoPn.js";import"./error-DNv14KIg.js";import"./BaseCbacBanner-CUUvKwvS.js";import"./makeExternalStore-BA4R21ZY.js";import"./Tooltip-BgGrBifp.js";import"./PopoverPopup-BkXRyCMb.js";import"./debounce-BTDM9WLA.js";import"./useOsdkClient-DJoDqONI.js";import"./tick-HZfaF6Nf.js";import"./DropdownField-BXVTK7oo.js";import"./isEqual-C2MIXUW9.js";import"./withOsdkMetrics-CruR8e4i.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
