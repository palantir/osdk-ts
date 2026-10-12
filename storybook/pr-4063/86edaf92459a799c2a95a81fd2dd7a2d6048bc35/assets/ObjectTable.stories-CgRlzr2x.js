import{j as i}from"./iframe-3pBmeYFT.js";import{O as p}from"./object-table-CHJks8jw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CgluAPM-.js";import"./preload-helper-vBjj0fkZ.js";import"./Table-vdKFS0Yg.js";import"./index-HXkjhg6z.js";import"./Dialog-bohs-JHl.js";import"./cross-Cw8SpRPo.js";import"./svgIconContainer-oYexr0c7.js";import"./useBaseUiId-BX_7JiSc.js";import"./InternalBackdrop-Bf5bS0-N.js";import"./composite-D407pmHd.js";import"./index-C4p6xkMh.js";import"./index-EVh21tlW.js";import"./index-CNtaAiKb.js";import"./useEventCallback-QikBKoT3.js";import"./SkeletonBar-DcraF9ed.js";import"./LoadingCell-CS2lLg3a.js";import"./ColumnConfigDialog-OA7WNg3J.js";import"./DraggableList-Dxq5-d78.js";import"./search-CQOti8kz.js";import"./Input-BQ6oicvc.js";import"./useControlled-MqJ_-6UI.js";import"./Button-DVJw32Da.js";import"./small-cross-4xzNgjst.js";import"./ActionButton-CSRC1G7d.js";import"./Checkbox-4IlBbgeN.js";import"./useValueChanged-Dv4NLcIJ.js";import"./CollapsiblePanel-DN3NPDIL.js";import"./MultiColumnSortDialog-BZTLQdea.js";import"./MenuTrigger-DEPOBuIh.js";import"./CompositeItem-BAzi-4_X.js";import"./ToolbarRootContext-BROspXHg.js";import"./getDisabledMountTransitionStyles-BzXEt7kT.js";import"./getPseudoElementBounds-VW5wliGx.js";import"./chevron-down-CPXZLq0t.js";import"./index-C-EOv5jG.js";import"./error-oFoemtYn.js";import"./BaseCbacBanner-BDE7gmhL.js";import"./makeExternalStore-B9tQcCLS.js";import"./Tooltip-DFKKdGeu.js";import"./PopoverPopup-DWqfD9XE.js";import"./debounce-BUj2tWGy.js";import"./useOsdkClient-DBkdWm96.js";import"./tick-BvsLxO6_.js";import"./DropdownField-vPiacE-M.js";import"./isEqual-DikiAgWF.js";import"./withOsdkMetrics-CZjqmY54.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
