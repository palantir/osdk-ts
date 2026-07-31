import{j as i}from"./iframe-BIlQe-_e.js";import{O as p}from"./object-table-Bebvc8ca.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Be4Z2EoD.js";import"./preload-helper-BFh2Wy6v.js";import"./Table-BWx_Tlsd.js";import"./index-DyQxAk9R.js";import"./Dialog-RpHf0uzn.js";import"./cross-CmtgrNNa.js";import"./svgIconContainer-CnLOcakL.js";import"./useBaseUiId-Lc4z0DNa.js";import"./InternalBackdrop-D0_cKxNn.js";import"./composite-CXGKVIWm.js";import"./index-KCNI5t5s.js";import"./index-DpNXYgWj.js";import"./index-HpxznOGw.js";import"./useEventCallback-BUux2rPj.js";import"./SkeletonBar-DdTqPQUn.js";import"./LoadingCell-DDRHLt1N.js";import"./ColumnConfigDialog-Jac7HBrJ.js";import"./DraggableList-Be3rI4xp.js";import"./search-CvXaJDz5.js";import"./Input-DUUbREQT.js";import"./useControlled-BXHG-GT_.js";import"./isEqual-CysZ8GPX.js";import"./isObject-KXgKHR5w.js";import"./Button-BIbJzGLK.js";import"./ActionButton-CyvzC9uY.js";import"./Checkbox-BCZr5C4i.js";import"./useValueChanged-u9UTocIj.js";import"./CollapsiblePanel-B0R9sRzS.js";import"./MultiColumnSortDialog-BvJABZRG.js";import"./MenuTrigger-BrM5S858.js";import"./CompositeItem-CMnAuhM-.js";import"./ToolbarRootContext-BiHeKQZa.js";import"./getDisabledMountTransitionStyles-BLsKgdzx.js";import"./getPseudoElementBounds-M2Ec4uwN.js";import"./chevron-down-CkrYyXCx.js";import"./index-D1LAJk1I.js";import"./error-BCCPbpND.js";import"./BaseCbacBanner-DGsBlBEg.js";import"./makeExternalStore-Dm1wHibL.js";import"./Tooltip-DLimuesN.js";import"./PopoverPopup-DhXjlyY4.js";import"./toNumber-DGKs9c9J.js";import"./useOsdkClient-Cv8dxDy4.js";import"./tick-BK1SF6OQ.js";import"./DropdownField-CmlfBBm0.js";import"./withOsdkMetrics-DGZYkXqG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
