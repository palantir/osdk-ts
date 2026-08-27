import{j as i}from"./iframe-DdqVegxu.js";import{O as p}from"./object-table-ByrsOXeP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dbvuz1ga.js";import"./preload-helper-D6PJo6GD.js";import"./Table-CgTbvs4M.js";import"./index-pXTincUQ.js";import"./Dialog-CyxbIt19.js";import"./cross-B_5ujI29.js";import"./svgIconContainer-WPgp7GKE.js";import"./useBaseUiId-nCd4gP0F.js";import"./InternalBackdrop-B-inBp_t.js";import"./composite-AP0Q5qKl.js";import"./index-BpvYjPJl.js";import"./index-C7-w2U00.js";import"./index-C36gOkf2.js";import"./useEventCallback-CrzheMxe.js";import"./SkeletonBar-Di7FNKag.js";import"./LoadingCell-L-0-8OAL.js";import"./ColumnConfigDialog-B9d4YciP.js";import"./DraggableList-Da4Zbqzs.js";import"./search-BpB8-h7O.js";import"./Input-D24cu4rP.js";import"./useControlled-CUMQFHQ2.js";import"./Button-DGqa4Bnz.js";import"./small-cross-D4sMWlZd.js";import"./ActionButton-SJRFLles.js";import"./Checkbox-5VwSnA_u.js";import"./useValueChanged-DW_NIpw4.js";import"./CollapsiblePanel-CQXX8d_1.js";import"./MultiColumnSortDialog-0Ur2pLlV.js";import"./MenuTrigger-DTMnqI0G.js";import"./CompositeItem-C9XS2Nyq.js";import"./ToolbarRootContext-EhBdlP5C.js";import"./getDisabledMountTransitionStyles-BTw2Gvj1.js";import"./getPseudoElementBounds-CVNxXAaM.js";import"./chevron-down-BaLH6Ox7.js";import"./index-BDDtSzfk.js";import"./error-N9h2ra1P.js";import"./BaseCbacBanner-DafmbqRO.js";import"./makeExternalStore-CP1AfhtS.js";import"./Tooltip-Bjqp_CkB.js";import"./PopoverPopup-Duy39WhW.js";import"./debounce-Q9FbtPmz.js";import"./useOsdkClient-D6cuZrW5.js";import"./tick-Bf7wDZUJ.js";import"./DropdownField-DW9h28gH.js";import"./isEqual-DgkvNOsS.js";import"./withOsdkMetrics-CPLPuXNu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
