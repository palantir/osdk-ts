import{j as i}from"./iframe-DetImBFL.js";import{O as p}from"./object-table-l9nJQEnV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cd0jd-Qx.js";import"./preload-helper-DN6cOUrg.js";import"./Table-CMwtMuro.js";import"./index-CjK2QqlI.js";import"./Dialog-DqgzoO1K.js";import"./cross-BTvDRRjf.js";import"./svgIconContainer-CuWFsLi_.js";import"./useBaseUiId-DyXUSeTY.js";import"./InternalBackdrop-DKm_sEMG.js";import"./composite-BM_kJ03V.js";import"./index-Dbo0Nida.js";import"./index-1NP1-UWN.js";import"./index-BqArXz2b.js";import"./useEventCallback-DGvbRIMO.js";import"./SkeletonBar-4ieJl6GY.js";import"./LoadingCell-CGeR1JKn.js";import"./ColumnConfigDialog-DlnX3h0V.js";import"./DraggableList-B7zhWw29.js";import"./search-e2lLNT_b.js";import"./Input-X6MfJgE7.js";import"./useControlled-BLemWNqF.js";import"./Button-CQ4Oxn8O.js";import"./small-cross-C-ziKcdd.js";import"./ActionButton-CgowrMZV.js";import"./Checkbox-CC4URrkY.js";import"./useValueChanged-CkoVxTgS.js";import"./CollapsiblePanel-D7JjcV__.js";import"./MultiColumnSortDialog-DZ9YJY6I.js";import"./MenuTrigger-L0DQBaQA.js";import"./CompositeItem-DSZEDG_X.js";import"./ToolbarRootContext-CemVikP4.js";import"./getDisabledMountTransitionStyles-JdcJj3gF.js";import"./getPseudoElementBounds-CL4lvn8M.js";import"./chevron-down-CGCRcDmq.js";import"./index-Dz3fekal.js";import"./error-CePwHWcz.js";import"./BaseCbacBanner-CVZyUjUG.js";import"./makeExternalStore-Dta9gR3b.js";import"./Tooltip-BKreMXEX.js";import"./PopoverPopup-DaARwFrv.js";import"./debounce-ZgZr2Rpo.js";import"./useOsdkClient-DV-Uh5dk.js";import"./tick-OHKO7Ym4.js";import"./DropdownField-GfiPe651.js";import"./isEqual-an0pKOrh.js";import"./withOsdkMetrics-tYPfHwL4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
