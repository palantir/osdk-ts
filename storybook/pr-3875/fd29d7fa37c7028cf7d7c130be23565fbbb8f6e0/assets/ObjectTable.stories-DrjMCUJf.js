import{j as i}from"./iframe-Ctqv_q3b.js";import{O as p}from"./object-table-D1q_GFkq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CIlAchFm.js";import"./preload-helper-CQZuIYGg.js";import"./Table-DX8cooS5.js";import"./index-COouxyZO.js";import"./Dialog-CZBtpFpH.js";import"./cross-Cwp0jMM_.js";import"./svgIconContainer-CpTpThnP.js";import"./useBaseUiId-DZHr37Fe.js";import"./InternalBackdrop-DhznBDyD.js";import"./composite-CWKR683w.js";import"./index-YZLh4MO8.js";import"./index-KwZ8xn8U.js";import"./index-Hhv0iI_J.js";import"./useEventCallback-CmV8vQyW.js";import"./SkeletonBar-Cgbm4U0J.js";import"./LoadingCell-DstG4qeG.js";import"./ColumnConfigDialog-Cs6V6saO.js";import"./DraggableList-CF1TbWHs.js";import"./search-qo74ErBn.js";import"./Input-cHlxiCnh.js";import"./useControlled-rzg3Zo0J.js";import"./Button-BQ9Vn2Zh.js";import"./small-cross-DD8H8p1F.js";import"./ActionButton-jqwciMN5.js";import"./Checkbox-DM5hF1QA.js";import"./useValueChanged-C9Jd57kb.js";import"./CollapsiblePanel-C9F3DUe5.js";import"./MultiColumnSortDialog-BWtpvuXM.js";import"./MenuTrigger-D1TGRnu9.js";import"./CompositeItem-CT2tdkFE.js";import"./ToolbarRootContext-CGZ73ibv.js";import"./getDisabledMountTransitionStyles-du4TooiD.js";import"./getPseudoElementBounds-IKL9M1m3.js";import"./chevron-down-BZmTuAF0.js";import"./index-qzd4Xvj_.js";import"./error-TI6uq-Zv.js";import"./BaseCbacBanner-DnwjE2KC.js";import"./makeExternalStore-BVIKqe7o.js";import"./Tooltip-CUxuce_-.js";import"./PopoverPopup-Dq--FcNp.js";import"./debounce-BeN_6MIh.js";import"./useOsdkClient-B_wBAAwl.js";import"./tick-C4tZR6co.js";import"./DropdownField-Cj9q5oOl.js";import"./isEqual-CBw6myZ4.js";import"./withOsdkMetrics-CpCINEs8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
