import{j as i}from"./iframe-BJHh5Vyz.js";import{O as p}from"./object-table-BFTqu4WB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BNuI_agN.js";import"./preload-helper-BEOBDvBb.js";import"./Table-D77tsv7z.js";import"./index-C19RBoJu.js";import"./Dialog-LkqoZs6q.js";import"./cross-BcEML_Ki.js";import"./svgIconContainer-Oo_WGWgj.js";import"./useBaseUiId-eHvFwl9q.js";import"./InternalBackdrop-BqbazbcZ.js";import"./composite-CQHPO_Bw.js";import"./index-FPDQ-3J4.js";import"./index-DuAaKh8Z.js";import"./index-BcNome8U.js";import"./useEventCallback-SQylOg7X.js";import"./SkeletonBar-CpykcO5g.js";import"./LoadingCell-N8DCjfL3.js";import"./ColumnConfigDialog-B2i8eMF1.js";import"./DraggableList-BVbG2XdD.js";import"./search-CygATN7t.js";import"./Input-DhkgM9Ni.js";import"./useControlled-DRblTyuY.js";import"./Button-XY8oXyEd.js";import"./small-cross-BcJCT5oZ.js";import"./ActionButton-UaUebUqN.js";import"./Checkbox-D6YisCtG.js";import"./useValueChanged-CIPyPD3s.js";import"./CollapsiblePanel-CGqwtuWj.js";import"./MultiColumnSortDialog-C1LikW-A.js";import"./MenuTrigger-Bfj3uIwZ.js";import"./CompositeItem-6AqsuMkJ.js";import"./ToolbarRootContext-CNIddhOS.js";import"./getDisabledMountTransitionStyles-D3dYUIEg.js";import"./getPseudoElementBounds-CT0X_ePj.js";import"./chevron-down-g5IBPJxD.js";import"./index-DB7oCP_Q.js";import"./error-D2VhnADa.js";import"./BaseCbacBanner-D-J85zOv.js";import"./makeExternalStore-nf7wa3ij.js";import"./Tooltip-BJV71zjW.js";import"./PopoverPopup-fac766Lw.js";import"./debounce-Gc9yJQdi.js";import"./useOsdkClient-BZwIY2z4.js";import"./tick-CjnLz9Ic.js";import"./DropdownField-DEchhT8v.js";import"./isEqual-D_7g9xzJ.js";import"./withOsdkMetrics-DZ9Y5lOn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
