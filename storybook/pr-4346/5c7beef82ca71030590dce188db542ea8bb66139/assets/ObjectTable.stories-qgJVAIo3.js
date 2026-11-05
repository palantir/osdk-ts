import{j as i}from"./iframe-NpRIbPdx.js";import{O as p}from"./object-table-BHfrYftR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BjKduKi0.js";import"./preload-helper-OSq5jQkX.js";import"./Table-CF5s51ja.js";import"./index-CY16uySw.js";import"./Dialog-BDhuSFkv.js";import"./cross-D_KA-OEe.js";import"./svgIconContainer-D56q5fZV.js";import"./useBaseUiId-B58WCAya.js";import"./InternalBackdrop-CyQ0qo1z.js";import"./composite-BuQ8bNLj.js";import"./index-BeW67UVI.js";import"./index-Bhk4lf9n.js";import"./index-Btpa_jjb.js";import"./useEventCallback-BQn_UK38.js";import"./SkeletonBar-fAm3YbtB.js";import"./LoadingCell-cH6j09za.js";import"./ColumnConfigDialog-B6YIquQg.js";import"./DraggableList-CzYvzisU.js";import"./search-BQKjluR2.js";import"./Input-geD0QmM7.js";import"./useControlled-C_x2TKVp.js";import"./Button-B7hLTnAe.js";import"./small-cross-DnJ4w8jW.js";import"./ActionButton-Dz0ucYQ4.js";import"./Checkbox-C7f6nBhb.js";import"./useValueChanged-Bju82j-V.js";import"./CollapsiblePanel-Uw9lqt-L.js";import"./MultiColumnSortDialog-uWtN7dz7.js";import"./MenuTrigger-Da_E-lAo.js";import"./CompositeItem-9iq6yCgJ.js";import"./ToolbarRootContext-zUNFbjuY.js";import"./getDisabledMountTransitionStyles-B_lO8q9e.js";import"./getPseudoElementBounds-Ix_nmD-p.js";import"./chevron-down-BnVBaJX5.js";import"./index-DdBpKYEV.js";import"./error-B8p2hdA4.js";import"./BaseCbacBanner-BmsZwYA9.js";import"./makeExternalStore-he_3GqFk.js";import"./Tooltip-DVLHEN3u.js";import"./PopoverPopup-pjnshs8Z.js";import"./debounce-BHEHv-OY.js";import"./useOsdkClient-yMbsmr2e.js";import"./tick-DOsn7mMx.js";import"./DropdownField-3vS_OVvb.js";import"./isEqual-D8HIEQ-D.js";import"./withOsdkMetrics-RYSsSWu2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
