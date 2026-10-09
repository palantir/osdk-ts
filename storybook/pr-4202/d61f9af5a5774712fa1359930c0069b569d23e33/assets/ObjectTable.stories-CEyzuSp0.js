import{j as i}from"./iframe-Bz3hVWPH.js";import{O as p}from"./object-table-Coh6khSe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C5Z_qkBb.js";import"./preload-helper-B5WDuSuX.js";import"./Table-vO5Gnq6f.js";import"./index-DByWOMtj.js";import"./Dialog-D4obr35u.js";import"./cross-Fpn0tB3m.js";import"./svgIconContainer-_Jncan05.js";import"./useBaseUiId-dzLz4lPg.js";import"./InternalBackdrop-DSn-b-zD.js";import"./composite-CPnF2lA7.js";import"./index-vogC1DiU.js";import"./index-De0WyPkh.js";import"./index-BIjtRufh.js";import"./useEventCallback-CT17wzJW.js";import"./SkeletonBar-B6lmbx_o.js";import"./LoadingCell-BYZJaKgx.js";import"./ColumnConfigDialog-l5kk5jJ2.js";import"./DraggableList-jBvaIbKs.js";import"./search-Ctah0g8H.js";import"./Input-niPYTtX3.js";import"./useControlled-DOWqxCnV.js";import"./Button-CiU5aFV9.js";import"./small-cross-BzeHldsH.js";import"./ActionButton-OnzJnryN.js";import"./Checkbox-BEY2gbmr.js";import"./useValueChanged-BISvWiN-.js";import"./CollapsiblePanel-jHetj5wz.js";import"./MultiColumnSortDialog-BV0ux_2F.js";import"./MenuTrigger-DBuTjWXZ.js";import"./CompositeItem-dA2LCxOZ.js";import"./ToolbarRootContext-D-xyRBQY.js";import"./getDisabledMountTransitionStyles-BdHWZjt-.js";import"./getPseudoElementBounds-BC_aNtit.js";import"./chevron-down-Bi16AFVJ.js";import"./index-BwGnMyFh.js";import"./error-CQxjkOW_.js";import"./BaseCbacBanner-DsvHyF5N.js";import"./makeExternalStore-BkTXcz9h.js";import"./Tooltip-DfHl7Xwe.js";import"./PopoverPopup-CUtjr2xE.js";import"./debounce-u07EyXLU.js";import"./useOsdkClient-C-ZEaw1j.js";import"./tick-UZyx2gLc.js";import"./DropdownField-CQFrJZV4.js";import"./isEqual-Bw8rh7NU.js";import"./withOsdkMetrics-DIZcYriA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
