import{j as i}from"./iframe-BkXStBnn.js";import{O as p}from"./object-table-0OskJlcP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_0yPQ1v.js";import"./preload-helper-C6eJ-LAJ.js";import"./Table-BsaDm4T0.js";import"./index-CQxVyxO9.js";import"./Dialog-CEWZog5k.js";import"./cross-kW0EKRmx.js";import"./svgIconContainer-BOZhbAbH.js";import"./useBaseUiId-96F5yHVy.js";import"./InternalBackdrop-BdYFQb3t.js";import"./composite-DEOhu-ZQ.js";import"./index-CtVGck09.js";import"./index-CDh6F1Zg.js";import"./index-C4IkCmST.js";import"./useEventCallback-CH-hvduU.js";import"./SkeletonBar-Ctttl4g0.js";import"./LoadingCell-DC3q_kaJ.js";import"./ColumnConfigDialog-CDTeYQKc.js";import"./DraggableList-BYNJ4Xog.js";import"./search-BVUjqmoy.js";import"./Input-DxDpsYC6.js";import"./useControlled-Bs-hAIWu.js";import"./Button-tcqZupxX.js";import"./small-cross-Sg31I6zP.js";import"./ActionButton-Cf5BY1g0.js";import"./Checkbox-DqQ0vsU_.js";import"./useValueChanged-HslFxBcd.js";import"./CollapsiblePanel-ddkAZxfQ.js";import"./MultiColumnSortDialog-B08XNyF_.js";import"./MenuTrigger-Cv8msX7x.js";import"./CompositeItem-CqdHioqm.js";import"./ToolbarRootContext-CPU8X__7.js";import"./getDisabledMountTransitionStyles-583SAe4r.js";import"./getPseudoElementBounds-C11mWzsA.js";import"./chevron-down-BqO1VsFu.js";import"./index-mxwJCmPs.js";import"./error-BWtJwOh6.js";import"./BaseCbacBanner-DW10jlbi.js";import"./makeExternalStore-D61zLkvo.js";import"./Tooltip-COBqsjpT.js";import"./PopoverPopup-CSkaVaIl.js";import"./debounce-D3smnzmF.js";import"./useOsdkClient-B0RQ_x0Y.js";import"./tick-Bd8vtLY5.js";import"./DropdownField-CuSoYmnK.js";import"./isEqual-N3GxBSAA.js";import"./withOsdkMetrics-CndFlT5a.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
