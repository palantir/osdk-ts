import{j as i}from"./iframe-C9aInfce.js";import{O as p}from"./object-table-DuDcc432.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dw1uLato.js";import"./preload-helper-PMI8cRcX.js";import"./Table-BlJwVm8P.js";import"./index-Cr0L3GZN.js";import"./Dialog-Dflssdnc.js";import"./cross-DetncErB.js";import"./svgIconContainer-BJqGJbKn.js";import"./useBaseUiId-bh5ywVzc.js";import"./InternalBackdrop-B3ucOVZd.js";import"./composite-CLAAs_xp.js";import"./index-6S-kg2yi.js";import"./index-ScvUSFZz.js";import"./index-YtZtBJ6H.js";import"./useEventCallback-1FeWEKRC.js";import"./SkeletonBar-DD0yFs0X.js";import"./LoadingCell-BlttZOTh.js";import"./ColumnConfigDialog-D85Sqzbo.js";import"./DraggableList-QIjFVjIY.js";import"./search-DFxfowIj.js";import"./Input-CG7QoG-N.js";import"./useControlled-BMW5V9nZ.js";import"./Button-DLimHkL6.js";import"./small-cross-BzhMeLn8.js";import"./ActionButton-8qmPdMKn.js";import"./Checkbox-Dc9VhTPS.js";import"./useValueChanged-DPxHLeei.js";import"./CollapsiblePanel-CEhqOGjS.js";import"./MultiColumnSortDialog-C2ZPbguB.js";import"./MenuTrigger-Dh3FVW8N.js";import"./CompositeItem-DcXO7kaY.js";import"./ToolbarRootContext-BuD4rpNO.js";import"./getDisabledMountTransitionStyles-DP-946Fx.js";import"./getPseudoElementBounds-Bl18tBQw.js";import"./chevron-down-CAB1YUBN.js";import"./index-hG-BfAMR.js";import"./error-CwJEBYlM.js";import"./BaseCbacBanner-BSWzWBzS.js";import"./makeExternalStore-CqZkZ6X0.js";import"./Tooltip-u4pIgaNq.js";import"./PopoverPopup-CmF8uWKK.js";import"./debounce-G0Gt7iOQ.js";import"./useOsdkClient-CoTph7YD.js";import"./tick-BzlYcUXY.js";import"./DropdownField-DSk9Pf-V.js";import"./isEqual-Co9CzCVL.js";import"./withOsdkMetrics-7XGlhu7o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
