import{j as i}from"./iframe-BgXQ_2ZQ.js";import{O as p}from"./object-table-CC0ZxKyO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C7i8IVqh.js";import"./preload-helper-BidOVzf2.js";import"./Table-JOmGqnGr.js";import"./index-Du7DARA2.js";import"./Dialog-Cb5azjs7.js";import"./cross-DjR1Bdqm.js";import"./svgIconContainer-Dt6fkfKI.js";import"./useBaseUiId-BDBZknBQ.js";import"./InternalBackdrop-c9jJBd1p.js";import"./composite-DkGW9dlU.js";import"./index-BrroAixZ.js";import"./index-BNVSiMmU.js";import"./index-BSei0jMm.js";import"./useEventCallback-R0FrqxvI.js";import"./SkeletonBar-BBIq-vhs.js";import"./LoadingCell-CsZKXS-Q.js";import"./ColumnConfigDialog-ByzLyWUj.js";import"./DraggableList-Bwy-m9j0.js";import"./search-DUa1f9S-.js";import"./Input-snLmBrpI.js";import"./useControlled-BJTO4Tz0.js";import"./Button-DyzWkyRc.js";import"./small-cross-DZhFWeH9.js";import"./ActionButton-BXIrWwIY.js";import"./Checkbox-Dl0Ot1yr.js";import"./useValueChanged-pU_y0YNC.js";import"./CollapsiblePanel-Bdczxe9M.js";import"./MultiColumnSortDialog-CoCx59aY.js";import"./MenuTrigger-Dz9YkOj_.js";import"./CompositeItem-BoTWi4na.js";import"./ToolbarRootContext-DnYkqago.js";import"./getDisabledMountTransitionStyles-D_LWhqVm.js";import"./getPseudoElementBounds-Df9rfh-s.js";import"./chevron-down-xbEb9_oS.js";import"./index-BR5r7qBw.js";import"./error-DWfidi70.js";import"./BaseCbacBanner-DkSenGHc.js";import"./makeExternalStore-Bhk5996J.js";import"./Tooltip-KBTfxc0_.js";import"./PopoverPopup-BYQDCscd.js";import"./debounce-DWFh7d24.js";import"./useOsdkClient-CcbFY1-2.js";import"./tick-Cj44jG3P.js";import"./DropdownField-CsQwc8Ii.js";import"./isEqual-DBPj2USA.js";import"./withOsdkMetrics-DMzLVnra.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
