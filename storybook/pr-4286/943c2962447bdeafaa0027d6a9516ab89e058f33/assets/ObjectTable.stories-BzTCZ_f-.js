import{j as i}from"./iframe-BryHz5Df.js";import{O as p}from"./object-table-DhddezCq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-p8OtwZJI.js";import"./preload-helper-ZuG0aKTk.js";import"./Table-vbVKhRUZ.js";import"./index-iPKk9s3t.js";import"./Dialog-BBiaGDsk.js";import"./cross-ailj0yO2.js";import"./svgIconContainer-Bz8FzOTG.js";import"./useBaseUiId-lqu4HseA.js";import"./InternalBackdrop-BTDJowUB.js";import"./composite-BowJ7EVh.js";import"./index-DLszwrmC.js";import"./index-B23Jlpe-.js";import"./index-kHo4L0CJ.js";import"./useEventCallback-DNvqpEEj.js";import"./SkeletonBar-DbgbyCHj.js";import"./LoadingCell-nGP3YWSE.js";import"./ColumnConfigDialog-BO7h_Et0.js";import"./DraggableList-BiU9-PR1.js";import"./search-BMoYocFy.js";import"./Input-BJM0PLwp.js";import"./useControlled-CylTdVLs.js";import"./Button-C6Ze9Rf1.js";import"./small-cross-D3D35N0o.js";import"./ActionButton-BjzGaC9X.js";import"./Checkbox-4gp7fYlY.js";import"./useValueChanged-D5dYuYpQ.js";import"./CollapsiblePanel-s1GFKw9E.js";import"./MultiColumnSortDialog-DQsMxgaG.js";import"./MenuTrigger-Ciw0TFjQ.js";import"./CompositeItem-CUgXhRoj.js";import"./ToolbarRootContext-BjHx285v.js";import"./getDisabledMountTransitionStyles-Jl9aUEz_.js";import"./getPseudoElementBounds-uG2bpqSg.js";import"./chevron-down-DjbeKg79.js";import"./index-BK-BH_Yo.js";import"./error-CL2fTgGo.js";import"./BaseCbacBanner-KtikxSJ6.js";import"./makeExternalStore-CxnQMREG.js";import"./Tooltip-DXaG_Vux.js";import"./isObject-V0EIbVdK.js";import"./debounce-CjDJ8-42.js";import"./useOsdkClient-BoBqYHPA.js";import"./tick-Bz5bWrj2.js";import"./DropdownField-DwnJVj62.js";import"./isEqual-CorpkB5K.js";import"./_baseIsEqual-DNo1_TAY.js";import"./withOsdkMetrics-Dmyjllfi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
