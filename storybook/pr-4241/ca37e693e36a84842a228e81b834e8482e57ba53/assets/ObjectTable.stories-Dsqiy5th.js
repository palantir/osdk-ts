import{j as i}from"./iframe-A4y6o7Ie.js";import{O as p}from"./object-table-BoO0elNM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BfX14x5L.js";import"./preload-helper-BzztgknT.js";import"./Table-BjqeXaVf.js";import"./index-u7v7sD8l.js";import"./Dialog-KCxjFTm-.js";import"./cross-BiOP9WPq.js";import"./svgIconContainer-hodslvqS.js";import"./useBaseUiId-DE1tY3Ft.js";import"./InternalBackdrop-CFKIYKn-.js";import"./composite-Cae9SV4u.js";import"./index-C8GSd3VQ.js";import"./index-Coz2by3h.js";import"./index-2Ob0EkkI.js";import"./useEventCallback-jK9BYgZA.js";import"./SkeletonBar-DGU8QXrV.js";import"./LoadingCell-B0YAlYY-.js";import"./ColumnConfigDialog-BBObW5dm.js";import"./DraggableList-Bg5EEBkU.js";import"./search-BJw96kDe.js";import"./Input-8Z1nJkFY.js";import"./useControlled-C-FlvKxX.js";import"./Button-CpcDAbH0.js";import"./small-cross-9cmVXTN9.js";import"./ActionButton-D8kAp191.js";import"./Checkbox-KGoh-z4o.js";import"./useValueChanged-GBBSiWne.js";import"./CollapsiblePanel-5jZaWXpI.js";import"./MultiColumnSortDialog-BtOW583w.js";import"./MenuTrigger-CVg7cQJz.js";import"./CompositeItem-1bj7m8dY.js";import"./ToolbarRootContext-BQWxRNLz.js";import"./getDisabledMountTransitionStyles-Yf-KGouk.js";import"./getPseudoElementBounds-WLqzanIA.js";import"./chevron-down-DaeYHOS7.js";import"./index-CVD25b_z.js";import"./error-D67R2Dnx.js";import"./BaseCbacBanner-BWE-0JdB.js";import"./makeExternalStore-i5MDKYGm.js";import"./Tooltip-BAM2O2Bl.js";import"./isObject-CFZ51c-t.js";import"./debounce-k7ATts_Q.js";import"./useOsdkClient-eRrz4tDs.js";import"./tick-BY6ZJkTy.js";import"./DropdownField-CmRhweZ6.js";import"./isEqual-CGvBDAE8.js";import"./_baseIsEqual-B3DtqFtF.js";import"./withOsdkMetrics-DS1Us_TM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
