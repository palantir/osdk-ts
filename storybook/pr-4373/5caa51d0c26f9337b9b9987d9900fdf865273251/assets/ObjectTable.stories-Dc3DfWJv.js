import{j as i}from"./iframe-DLzx97EJ.js";import{O as p}from"./object-table-Bls2cpf5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cpbjss9K.js";import"./preload-helper-CmYTg0Pf.js";import"./Table-BPSf2wSw.js";import"./index-BEQknSG7.js";import"./Dialog-CPtbtyx7.js";import"./cross-DRLacgjp.js";import"./svgIconContainer-C-g24xF0.js";import"./useBaseUiId-CAg2kwlj.js";import"./InternalBackdrop-mcEx2LQV.js";import"./composite-TVTsKD6c.js";import"./index-CgT906ZM.js";import"./index-Cte0d9nS.js";import"./index-AfoCt9lG.js";import"./useEventCallback-DbTNteze.js";import"./SkeletonBar-Dkadgbgq.js";import"./LoadingCell-B5BixPe9.js";import"./ColumnConfigDialog-BhUEQFpf.js";import"./DraggableList-DRkFdlpE.js";import"./search-C5FqELUQ.js";import"./Input-qCKZZo4z.js";import"./useControlled-BbqDqbUq.js";import"./Button-CdJ05kOF.js";import"./small-cross-CYyVIp2I.js";import"./ActionButton-BW3xtD-H.js";import"./Checkbox-Bzjtoy4g.js";import"./useValueChanged-C73KFNzj.js";import"./CollapsiblePanel-CBgwT-zE.js";import"./MultiColumnSortDialog-BSXuZQtD.js";import"./MenuTrigger-4LTYbf6O.js";import"./CompositeItem-zOuWTjc0.js";import"./ToolbarRootContext-N07wipSz.js";import"./getDisabledMountTransitionStyles-WIr647eh.js";import"./getPseudoElementBounds-D5V_JJVH.js";import"./chevron-down-C33gMPot.js";import"./index-D_0Hlfon.js";import"./error-DMQmvEXe.js";import"./BaseCbacBanner-CQ9lL0tM.js";import"./makeExternalStore-BTZjjXmJ.js";import"./Tooltip-CyfA5k5X.js";import"./isObject-CVaKVVla.js";import"./debounce-De8aR-i4.js";import"./useOsdkClient-CSee95DU.js";import"./tick-OXHUkGbE.js";import"./DropdownField-K5yYb8ch.js";import"./isEqual-WJJYsQBD.js";import"./_baseIsEqual-B87nTnwS.js";import"./withOsdkMetrics-iNTrmMm4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
